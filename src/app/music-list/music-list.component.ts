import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GoogleDriveSelectors } from '../store/selectors/google-drive.selectors';

@Component({
  selector: 'app-music-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-list.component.html',
  styleUrls: ['./music-list.component.css'],
})
export class MusicListComponent implements OnInit {
  files$: Observable<any>;
  constructor(private store: Store) {
    this.files$ = this.store.select(GoogleDriveSelectors.getFiles);
  }

  ngOnInit(): void {
    this.files$.subscribe((files) => {
      console.log(files);
    });
  }
}
