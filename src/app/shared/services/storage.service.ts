import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  private readonly apiUrl = 'https://www.googleapis.com/drive/v3';
  private apiKey: string = '';

  constructor(private http: HttpClient) {}

  setApiKey(apiKey: string) {
    this.apiKey = apiKey;
  }

  getFiles(): Observable<any[]> {
    const url = `${this.apiUrl}/files?key=${this.apiKey}`;
    return this.http.get<any[]>(url);
  }
}
