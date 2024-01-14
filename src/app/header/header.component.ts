import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GoogleApiKeyModalComponent } from '../google-api-key-modal/google-api-key-modal.component';
import { StorageActions } from '../store/actions/storage.actions';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, GoogleApiKeyModalComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  isModalOpen: boolean = false;

  constructor(private store: Store) {}

  openModal() {
    this.isModalOpen = true;
  }

  onApiKeySubmit(apiKey: string) {
    this.store.dispatch(StorageActions.saveApiKey({ apiKey }));
    this.isModalOpen = false;
    this.loadFiles();
  }

  loadFiles() {
    this.store.dispatch(StorageActions.loadFiles());
  }
}
