import { LayoutService } from './../../services/layout.service';
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookListVerticalComponent } from './book-list-vertical/book-list-vertical.component';
import { BookListHorizontalCarouselComponent } from './book-list-horizontal-carousel/book-list-horizontal-carousel.component';
import { BookListGridComponent } from './book-list-grid/book-list-grid.component';
import { BookListProps } from '../../models/props.model';
import { APIBooksByGenre, APIBooksBySearch } from '../../models/api.model';

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [
    JsonPipe,
    NgFor,
    NgIf,
    BookListVerticalComponent,
    BookListHorizontalCarouselComponent,
    BookListGridComponent,
    NgClass,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  @Input() props!: BookListProps<APIBooksByGenre | APIBooksBySearch>;

  constructor(public layoutService: LayoutService) {}
}
