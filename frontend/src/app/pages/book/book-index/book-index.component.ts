import { Observable, take } from 'rxjs'
import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { Component, OnInit } from '@angular/core'
import { BookService } from './../../../services/book.service'
import { BookListComponent } from '../../../cmps/book-list/book-list.component'
import { Genre } from '../../../models/genre.model'
import { BooksByGenre } from '../../../models/books-by-genre.model'



@Component({
  selector: 'book-index',
  standalone: true,
  imports: [BookListComponent, NgIf, NgFor, AsyncPipe],
  host: {
    class: 'full main-layout'
  },
  templateUrl: './book-index.component.html',
  styleUrl: './book-index.component.scss'
})
export class BookIndexComponent implements OnInit {

  constructor(private bookService: BookService) { }

  booksByGenres$!: Observable<BooksByGenre[]>
  currentGenres: Genre[] = ['love']

  // TODO: There should be a few types of book-lists:
  //  - horizontal carousel of ONLY book cover pictures
  //  - horizontal carousel of VERTICAL covers/title/authors/price/score
  //  - two rows of book covers/title/authors/price/score (need to consider responsiveness, and preventing jumping of content when changing screen size (?))


  // TODO: consider again, how the book-list (per genre) cmps should be structured in book-index, it's potential styling,
  //          and whether we make an api fetch for each indiviual genre, or all at once.
  //          also consider where we might use book-list in the WHOLE APP (maybe in user profile?, or in another route for a specific porpuse?).
  // TODO: make book list scroll cards horizontally


  ngOnInit() {
    this.booksByGenres$ = this.bookService.booksByGenres$

    this.bookService.queryByGenres(this.currentGenres)
      .pipe(take(1)) // observable takes 1, then completes. upon observable error OR completion, it AUTOMATICALLY unsubscribes.
      .subscribe({
        error: (err) => console.log('Err from book-index', err)
      })
  }
}
