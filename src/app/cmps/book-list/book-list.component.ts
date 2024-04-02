import { JsonPipe, NgFor } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookPreviewComponent } from './book-preview/book-preview.component';

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [BookPreviewComponent, JsonPipe, NgFor],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  @Input() booksByGenre!: any

}
