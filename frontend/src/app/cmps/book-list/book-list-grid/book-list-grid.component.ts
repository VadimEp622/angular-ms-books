import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { BookPreviewTopToBottomComponent } from '../book-preview-top-to-bottom/book-preview-top-to-bottom.component';
import { RouterLink } from '@angular/router';
import { APIBooksByGenre, APIBooksBySearch } from '../../../models/api.model';
import { BookListProps } from '../../../models/props.model';
import { BookPreviewComponent } from '../../book-preview/book-preview.component';

@Component({
  selector: 'book-list-grid',
  standalone: true,
  imports: [
    BookPreviewTopToBottomComponent,
    NgFor,
    RouterLink,
    NgIf,
    BookPreviewComponent,
  ],
  templateUrl: './book-list-grid.component.html',
  styleUrl: './book-list-grid.component.scss',
})
export class BookListGridComponent {
  // @Input() booksByGenre!: APIBooksByGenre;

  @Input() props!: BookListProps<APIBooksByGenre | APIBooksBySearch>;

  getGenre(data: APIBooksByGenre | APIBooksBySearch): string {
    if ('genre' in data) {
      return data.genre;
    } else {
      return ''; // Handle APIBooksBySearch case accordingly
    }
  }
}
