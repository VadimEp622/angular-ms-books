import { Component, Input } from '@angular/core';
import { APIBooksByGenre, APIBooksBySearch } from '../../models/api.model';
import { BookListDataType, PreviewType } from '../../models/types.model';
import { BookPreviewCoverOnlyComponent } from './book-preview-cover-only/book-preview-cover-only.component';
import { BookPreviewSideBySideComponent } from './book-preview-side-by-side/book-preview-side-by-side.component';
import { BookPreviewTopToBottomComponent } from './book-preview-top-to-bottom/book-preview-top-to-bottom.component';
import { NgFor, NgIf } from '@angular/common';
import { BookListProps } from '../../models/props.model';
import { BookCarouselComponent } from '../book-carousel/book-carousel.component';

// interface BookPreviewProps {
//   data: APIBooksByGenre | APIBooksBySearch;
//   dataType: BookListDataType;
//   previewType: PreviewType;
// }

@Component({
  selector: 'book-preview',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    BookPreviewCoverOnlyComponent,
    BookPreviewSideBySideComponent,
    BookPreviewTopToBottomComponent,
    BookCarouselComponent,
  ],
  templateUrl: './book-preview.component.html',
  styleUrl: './book-preview.component.scss',
})
export class BookPreviewComponent {
  @Input() props!: BookListProps<APIBooksByGenre | APIBooksBySearch>;
}
