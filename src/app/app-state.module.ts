// src/app/store/app-state.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { googleDriveReducer } from './store/reducers/google-drive.reducers';

@NgModule({
  imports: [
    StoreModule.forRoot({ googleDrive: googleDriveReducer }),
  ],
})
export class AppStateModule {}
