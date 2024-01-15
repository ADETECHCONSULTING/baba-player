import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-music-list-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './music-list-item.component.html',
  styleUrls: ['./music-list-item.component.css'],
})
export class MusicListItemComponent {
  @Input() file: any;
}
