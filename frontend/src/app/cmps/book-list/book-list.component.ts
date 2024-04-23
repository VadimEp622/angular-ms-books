import { JsonPipe, NgFor, NgIf } from '@angular/common'
import { Component, Input } from '@angular/core'
import { BookPreviewComponent } from './book-preview/book-preview.component'
import { BooksByGenre } from '../../models/books-by-genre.model'
import { BookCarouselComponent } from '../book-carousel/book-carousel.component'

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [BookPreviewComponent, JsonPipe, NgFor, NgIf, BookCarouselComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  @Input() booksByGenre!: BooksByGenre

  // TODO: there will be several preview types -
  //   - preview A -> cover to the left, info to the right
  //   - preview B -> just cover
  //   - preview C -> from top to buttom, cover/title/authors/price/score


  // TODO: there will only be SEVERAL POSSIBLE list types -
  //   - vertical list of preview A's
  //   - grid (responsive) of preview C's (each vertical text item will have text-overflow: ellipsis;)
  //   - horizontal carousel of preview B's
  //   - horizontal carousel of preview C's
  //   - experimental --> vertical list on left + 2 horizontal list on right

}
