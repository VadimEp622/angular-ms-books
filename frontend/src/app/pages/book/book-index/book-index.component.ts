import { Subscription, tap } from 'rxjs'
import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BooksByGenre } from '../../../models/books-by-genre.model'
import { BookListVerticalComponent } from '../../../cmps/book-list/book-list-vertical/book-list-vertical.component'



@Component({
  selector: 'book-index',
  standalone: true,
  imports: [NgIf, NgFor, AsyncPipe, BookListVerticalComponent],
  host: {
    class: 'full main-layout'
  },
  templateUrl: './book-index.component.html',
  styleUrl: './book-index.component.scss'
})
export class BookIndexComponent implements OnInit, OnDestroy {

  sub!: Subscription
  booksByGenre!: BooksByGenre

  constructor(
    private route: ActivatedRoute
  ) { }

  // TODO:
  // - decide on background color for page, for book-list, for book-preview, and for book-preview on hover 
  // - add hover styling for book previews

  // TODO: consider added different category/genre sidebar to the left



  ngOnInit() {
    this.sub = this.route.data.pipe(
      tap(({ booksByGenre }) => {
        this.booksByGenre = booksByGenre
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
