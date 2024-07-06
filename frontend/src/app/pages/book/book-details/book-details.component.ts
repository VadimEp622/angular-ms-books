import { JsonPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'book-details',
  standalone: true,
  imports: [JsonPipe, NgFor, NgIf],
  host: {
    class: 'full details-layout',
  },
  templateUrl: './book-details.component.html',
  styleUrl: './book-details.component.scss',
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  book!: any;

  constructor(private route: ActivatedRoute) {}

  // TODO:
  //    1) add template score icons

  ngOnInit() {
    this.sub = this.route.data
      .pipe(
        tap(({ book }) => {
          this.book = book.book;
        })
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
