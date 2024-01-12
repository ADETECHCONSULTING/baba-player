import { createFeatureSelector, createSelector } from '@ngrx/store';
import { GoogleDriveState } from '../reducers/google-drive.reducers';

const getGoogleDriveState =
  createFeatureSelector<GoogleDriveState>('googleDrive');

const getApiKey = createSelector(
  getGoogleDriveState,
  (state: GoogleDriveState) => state.apiKey
);

const getFiles = createSelector(
  getGoogleDriveState,
  (state: GoogleDriveState) => state.files
);

export const GoogleDriveSelectors = {
  getApiKey,
  getFiles,
};
