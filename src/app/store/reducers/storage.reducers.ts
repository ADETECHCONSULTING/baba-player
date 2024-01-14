// google-drive.reducer.ts
import { createReducer, on } from '@ngrx/store';
import { StorageActions } from '../actions/storage.actions';

export interface StorageState {
  apiKey: string;
  files?: any[];
}

export const initialState: StorageState = {
  apiKey: '',
  files: [],
};

export const storageReducer = createReducer(
  initialState,
  on(StorageActions.saveApiKey, (state, { apiKey }) => ({
    ...state,
    apiKey,
  })),
  on(StorageActions.loadFilesSuccess, (state, { files }) => ({
    ...state,
    files,
  }))
);
