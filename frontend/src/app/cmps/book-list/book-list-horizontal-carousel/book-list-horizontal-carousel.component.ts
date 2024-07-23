import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookCarouselComponent } from '../../book-carousel/book-carousel.component';
import { APIBooksByGenre, APIBooksBySearch } from '../../../models/api.model';
import { BookListProps } from '../../../models/props.model';
import { BookPreviewComponent } from '../../book-preview/book-preview.component';

@Component({
  selector: 'book-list-horizontal-carousel',
  standalone: true,
  imports: [JsonPipe, NgFor, NgIf, BookCarouselComponent, BookPreviewComponent],
  templateUrl: './book-list-horizontal-carousel.component.html',
  styleUrl: './book-list-horizontal-carousel.component.scss',
})
export class BookListHorizontalCarouselComponent {
  @Input() props!: BookListProps<APIBooksByGenre | APIBooksBySearch>;
}
