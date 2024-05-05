import { Subscription, tap } from 'rxjs'
import { AsyncPipe, NgFor, NgIf } from '@angular/common'
import { Component, OnDestroy, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { BookListComponent } from '../../../cmps/book-list/book-list.component'
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
  // booksByGenre!: BooksByGenre



  ngOnInit() {
    this.sub = this.route.data.pipe(
      tap(({ booksByGenre }) => {
        // this.booksByGenre = booksByGenre
      })
    ).subscribe()
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }
}
