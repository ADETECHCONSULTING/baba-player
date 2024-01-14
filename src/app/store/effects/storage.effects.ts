import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { StorageService } from 'src/app/shared/services/storage.service';
import { StorageActions } from '../actions/storage.actions';
import { StorageSelectors } from '../selectors/storage.selectors';

@Injectable()
export class StorageEffects {
  loadFiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(StorageActions.loadFiles),
      concatLatestFrom(() => this.store.select(StorageSelectors.getApiKey)),
      mergeMap(([, apiKey]) => {
        this.storageService.setApiKey(apiKey);
        return this.storageService.getFiles().pipe(
          map((files) => StorageActions.loadFilesSuccess({ files: files })),
          catchError((error) =>
            of(StorageActions.loadFilesFailure({ error: error }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private storageService: StorageService,
    private store: Store
  ) {}
}
