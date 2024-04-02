import { Observable, Subscription } from 'rxjs';
import { BookService } from './../../../services/book.service';
import { Component, OnDestroy, OnInit } from '@angular/core'


@Component({
  selector: 'book-index',
  standalone: true,
  imports: [],
  templateUrl: './book-index.component.html',
  styleUrl: './book-index.component.scss'
})
export class BookIndexComponent implements OnInit, OnDestroy {

  constructor(private bookService: BookService) { }

  booksByGenres$!: Observable<any>

  subscription1!: Subscription
  subscription2!: Subscription

  ngOnInit() {
    this.booksByGenres$ = this.bookService.booksByGenres$

    this.subscription1 = this.bookService.queryByGenres().subscribe()
    this.subscription2 = this.booksByGenres$.subscribe(data => console.log(data))
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe()
    this.subscription2.unsubscribe()
  }
}
