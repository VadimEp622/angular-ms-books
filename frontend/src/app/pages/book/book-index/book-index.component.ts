import { Subscription, tap } from 'rxjs'
import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BookListComponent } from '../../../cmps/book-list/book-list.component'
import { BooksByGenre } from '../../../models/books-by-genre.model'
import { BookListHorizontalCarouselComponent } from '../../../cmps/book-list/book-list-horizontal-carousel/book-list-horizontal-carousel.component'
import { BookListGridComponent } from './../../../cmps/book-list/book-list-grid/book-list-grid.component'



@Component({
  selector: 'book-index',
  standalone: true,
  imports: [BookListComponent, NgIf, NgFor, AsyncPipe, BookListHorizontalCarouselComponent, BookListGridComponent],
  host: {
    class: 'full main-layout'
  },
  templateUrl: './book-index.component.html',
  styleUrl: './book-index.component.scss'
})
export class BookIndexComponent implements OnInit, OnDestroy {

  constructor(
    private route: ActivatedRoute
  ) { }

  sub!: Subscription
  booksByGenres!: BooksByGenre[]

  // TODO: add "loading..." when data is loading, same for error


  // INFO: There should be a few types of book-lists:
  //  - horizontal carousel of ONLY book cover pictures
  //  - horizontal carousel of VERTICAL covers/title/authors/price/score
  //  - two rows of book covers/title/authors/price/score (need to consider responsiveness, and preventing jumping of content when changing screen size (?))


  ngOnInit() {
    this.sub = this.route.data.pipe(
      tap(({ booksByGenres }) => {
        this.booksByGenres = booksByGenres
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
