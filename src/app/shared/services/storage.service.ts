import { Injectable } from '@angular/core';
import { Dropbox } from 'dropbox';
import { catchError, from, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private dbx?: Dropbox;

  setApiKey(apiKey: string): void {
    this.dbx = new Dropbox({ accessToken: apiKey });
  }

  listMp3Files(path: string) {
    return from(this.dbx!.filesListFolder({ path: path })).pipe(
      map((response) =>
        response.result.entries.filter((file) => file.name.endsWith('.mp3'))
      ),
      catchError((error) => {
        console.error(error);
        return [];
      })
    );
  }
}
