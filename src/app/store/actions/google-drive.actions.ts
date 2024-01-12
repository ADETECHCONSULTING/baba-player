// google-drive.actions.ts
import { createAction, props } from '@ngrx/store';

const saveApiKey = createAction(
  '[Google Drive] Save API Key',
  props<{ apiKey: string }>()
);

const loadFiles = createAction('[Google Drive] Load Files');
const loadFilesSuccess = createAction(
  '[Google Drive] Load Files Success',
  props<{ files: any[] }>()
);

const loadFilesFailure = createAction(
  '[Google Drive] Load Files Failure',
  props<{ error: any }>()
);

export const GoogleDriveActions = {
  saveApiKey,
  loadFiles,
  loadFilesSuccess,
  loadFilesFailure,
};
