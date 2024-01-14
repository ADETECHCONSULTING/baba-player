import { createFeatureSelector, createSelector } from '@ngrx/store';
import { StorageState } from '../reducers/storage.reducers';

const getStorageState = createFeatureSelector<StorageState>('storage');

const getApiKey = createSelector(
  getStorageState,
  (state: StorageState) => state.apiKey
);

const getFiles = createSelector(
  getStorageState,
  (state: StorageState) => state.files
);

export const StorageSelectors = {
  getApiKey,
  getFiles,
};
