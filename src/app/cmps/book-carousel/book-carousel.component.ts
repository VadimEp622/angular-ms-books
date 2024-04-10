import { Component, Input } from '@angular/core'
import { CarouselModule } from 'primeng/carousel'
import { BooksByGenre } from '../../models/books-by-genre.model'
import { BookPreviewComponent } from '../book-list/book-preview/book-preview.component'

@Component({
  selector: 'book-carousel',
  standalone: true,
  imports: [CarouselModule, BookPreviewComponent],
  templateUrl: './book-carousel.component.html',
  styleUrl: './book-carousel.component.scss'
})
export class BookCarouselComponent {
  @Input() booksByGenre!: BooksByGenre

  responsiveOptions: any[] = this.getResponsiveOptions()

  // TODO: add preview text break/overflow with ellipsis

  constructor() { }

  getResponsiveOptions() {
    return [
      {
        breakpoint: '2000px',
        numVisible: 6,
        numScroll: 3
      },
      {
        breakpoint: '1700px',
        numVisible: 5,
        numScroll: 3
      },
      {
        breakpoint: '1400px',
        numVisible: 4,
        numScroll: 3
      },
      {
        breakpoint: '1100px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '800px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '500px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }
}
