import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { GoogleDriveService } from 'src/app/shared/services/google-drive.service';
import { GoogleDriveActions } from '../actions/google-drive.actions';

@Injectable()
export class GoogleDriveEffects {
  loadFiles$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GoogleDriveActions.loadFiles),
      mergeMap(() => {
        debugger;
        return this.googleDriveService.getFiles().pipe(
          map((files) => GoogleDriveActions.loadFilesSuccess({ files: files })),
          catchError((error) =>
            of(GoogleDriveActions.loadFilesFailure({ error: error }))
          )
        );
      })
    )
  );

  constructor(
    private actions$: Actions,
    private googleDriveService: GoogleDriveService
  ) {}
}
