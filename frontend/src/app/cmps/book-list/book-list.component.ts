import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BookPreviewComponent } from './book-preview/book-preview.component';
import { BooksByGenre } from '../../models/books-by-genre.model';
import { BookCarouselComponent } from '../book-carousel/book-carousel.component';

@Component({
  selector: 'book-list',
  standalone: true,
  imports: [BookPreviewComponent, JsonPipe, NgFor, NgIf, BookCarouselComponent],
  templateUrl: './book-list.component.html',
  styleUrl: './book-list.component.scss'
})
export class BookListComponent {
  @Input() booksByGenre!: BooksByGenre

  // demoBooksByGenre: any = {
  //   genre: 'romance',
  //   books: [
  //     {
  //       _id: '1',
  //       title: 'Book 1demoBooksByGenre',
  //       authors: [{ name: '1demoBooksByGenre' }, { name: 'author 1demoBooksByGenre' }],
  //       openLibBookId: '1',
  //       openLibCoverId: 1
  //     },
  //     {
  //       _id: '2',
  //       title: 'Book 2demoBooksByGenre',
  //       authors: [{ name: 'author 1demoBooksByGenre' }, { name: 'author 1demoBooksByGenre' }],
  //       openLibBookId: '2',
  //       openLibCoverId: 2
  //     },
  //     {
  //       _id: '3',
  //       title: 'Book 3demoBooksByGenre',
  //       authors: [{ name: 'author 1demoBooksByGenre' }, { name: 'author 1demoBooksByGenre' }],
  //       openLibBookId: '3',
  //       openLibCoverId: 3
  //     },
  //     {
  //       _id: '4',
  //       title: 'Book 4demoBooksByGenre',
  //       authors: [{ name: 'author 1demoBooksByGenre' }, { name: 'author 1demoBooksByGenre' }],
  //       openLibBookId: '4',
  //       openLibCoverId: 4
  //     }
  //   ]
  // }


}
