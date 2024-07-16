import { Component, Input } from '@angular/core';
import { BookPreviewSideBySideComponent } from '../book-preview-side-by-side/book-preview-side-by-side.component';
import { NgFor } from '@angular/common';
import { APIBooksByGenre, APIBooksBySearch } from '../../../models/api.model';
import { BookListDataType, PreviewType } from '../../../models/types.model';

@Component({
  selector: 'book-list-vertical',
  standalone: true,
  imports: [NgFor, BookPreviewSideBySideComponent],
  templateUrl: './book-list-vertical.component.html',
  styleUrl: './book-list-vertical.component.scss',
})
export class BookListVerticalComponent {
  @Input() booksByGenre!: APIBooksByGenre;

  // @Input() data!: APIBooksByGenre | APIBooksBySearch;
  // @Input() dataType!: BookListDataType;
  // @Input() previewType!: PreviewType;
}
