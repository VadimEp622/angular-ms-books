import { Component, ElementRef, Input, ViewChild } from '@angular/core'
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


  constructor() { }

  getResponsiveOptions() {
    return [
      {
        breakpoint: '1500px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '1100px',
        numVisible: 1,
        numScroll: 1
      },
      {
        breakpoint: '0px',
        numVisible: 1,
        numScroll: 1
      }
    ]
  }
}
