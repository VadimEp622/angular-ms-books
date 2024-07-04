import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'book-details',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  book!: any;

  constructor(private route: ActivatedRoute) {}

  // TODO: Make a book-details page using the book object

  ngOnInit() {
    this.sub = this.route.data
      .pipe(
        tap(({ book }) => {
          this.book = book;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
