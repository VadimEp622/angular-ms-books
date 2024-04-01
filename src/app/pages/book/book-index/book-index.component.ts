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

  booksBySubject$!: Observable<any>

  subscription1!: Subscription
  subscription2!: Subscription

  ngOnInit() {
    this.booksBySubject$ = this.bookService.tempBookObj$

    this.subscription1 = this.bookService.queryBySubjects().subscribe()
    this.subscription2 = this.booksBySubject$.subscribe(data => console.log(data))
  }

  ngOnDestroy() {
    this.subscription1.unsubscribe()
    this.subscription2.unsubscribe()
  }
}
