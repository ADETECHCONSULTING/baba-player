// google-drive.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { GoogleDriveActions } from '../actions/google-drive.actions';

export interface GoogleDriveState {
  apiKey: string;
  files?: any[];
}

export const initialState: GoogleDriveState = {
  apiKey: '',
  files: [],
};

export const googleDriveReducer = createReducer(
  initialState,
  on(GoogleDriveActions.saveApiKey, (state, { apiKey }) => ({
    ...state,
    apiKey,
  })),
  on(GoogleDriveActions.loadFilesSuccess, (state, { files }) => ({
    ...state,
    files,
  }))
);
