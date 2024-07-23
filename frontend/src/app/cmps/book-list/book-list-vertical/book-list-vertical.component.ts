import { Component, Input } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { BookListProps } from '../../../models/props.model';
import { APIBooksByGenre, APIBooksBySearch } from '../../../models/api.model';
import { BookPreviewComponent } from '../../book-preview/book-preview.component';

@Component({
  selector: 'book-list-vertical',
  standalone: true,
  imports: [NgFor, NgIf, BookPreviewComponent],
  templateUrl: './book-list-vertical.component.html',
  styleUrl: './book-list-vertical.component.scss',
})
export class BookListVerticalComponent {
  @Input() props!: BookListProps<APIBooksByGenre | APIBooksBySearch>;

  getGenre(data: APIBooksByGenre | APIBooksBySearch): string {
    if ('genre' in data) {
      return data.genre;
    } else if ('queryTxt' in data) {
      return data.queryTxt;
    } else {
      return ''; // Handle APIBooksBySearch case accordingly
    }
  }
}
