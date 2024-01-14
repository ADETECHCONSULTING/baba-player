import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable, of, take } from 'rxjs';
import { StorageSelectors } from '../store/selectors/storage.selectors';

@Component({
  selector: 'app-google-api-key-modal',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './google-api-key-modal.component.html',
  styleUrls: ['./google-api-key-modal.component.css'],
})
export class GoogleApiKeyModalComponent {
  apiKey$: Observable<string>;
  @Output() apiKeySubmit = new EventEmitter<string>();

  constructor(private store: Store) {
    this.apiKey$ = this.store.select(StorageSelectors.getApiKey);
  }

  closeModal() {
    this.store
      .select(StorageSelectors.getApiKey)
      .pipe(take(1))
      .subscribe((apiKey) => {
        this.apiKeySubmit.emit(apiKey);
      });
  }

  submitApiKey() {
    this.apiKey$.pipe(take(1)).subscribe((apiKey) => {
      this.apiKeySubmit.emit(apiKey);
    });
  }

  updateApiKey(value: string) {
    this.apiKey$ = of(value);
  }
}
