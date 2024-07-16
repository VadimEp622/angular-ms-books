import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookCarouselComponent } from '../book-carousel/book-carousel.component';
import {
  BookListDataType,
  ListType,
  PreviewType,
} from '../../models/types.model';
import { APIBooksByGenre, APIBooksBySearch } from '../../models/api.model';
import { BookListVerticalComponent } from './book-list-vertical/book-list-vertical.component';
import { BookListHorizontalCarouselComponent } from './book-list-horizontal-carousel/book-list-horizontal-carousel.component';
import { BookListGridComponent } from './book-list-grid/book-list-grid.component';

interface BookListProps {
  data: APIBooksByGenre | APIBooksBySearch;
  dataType: BookListDataType;
  listType: ListType;
  previewType: PreviewType;
}

// TODO: create an abstracted book-list cmp, which will render different book-list cmps based on "BookListProps"

// TODO: create an abstracted "book-preview" cmp, which will render different book-preview cmps based on "PreviewType"
//      basically - make a book-preview folder, create a book-preview cmp in it, and then put the different book-preview cmps in it as well.

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [
    JsonPipe,
    NgFor,
    NgIf,
    BookCarouselComponent,
    BookListVerticalComponent,
    BookListHorizontalCarouselComponent,
    BookListGridComponent,
  ],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss',
})
export class BookListComponent {
  // @Input() booksByGenre!: APIBooksByGenre;
  @Input() props!: BookListProps;

  // ========================================================================
  // INFO: there will be several preview types -
  //   - preview A -> cover to the left, info to the right
  //   - preview B -> just cover
  //   - preview C -> from top to buttom, cover/title/authors/price/score
  // ========================================================================

  // ========================================================================
  // INFO: there will only be SEVERAL POSSIBLE list types -
  //   - vertical list of preview A's
  //   - grid (responsive) of preview C's (each vertical text item will have text-overflow: ellipsis;)
  //   - horizontal carousel of preview B's (figure out how to render only good ligable images)
  //   - horizontal carousel of preview C's
  //   - experimental --> vertical list on left + 2 horizontal list on right
  // ========================================================================

  // TODO: decide on how to handle book-lists:
  //   1) different component for each list type.
  //   2) one list component, with dynamic list-type input.
}
