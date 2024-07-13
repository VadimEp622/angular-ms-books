import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, tap } from 'rxjs';

interface BooksBySearch {
  queryTxt: string;
  books: any[];
}

@Component({
  selector: 'book-search',
  standalone: true,
  imports: [JsonPipe],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss',
})
export class BookSearchComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  booksBySearch!: BooksBySearch;

  // TODO: make book-list-vertical cmp accept queryTxt prop
  //    maybe make a central book-list, which according to props, decides which type of list to render?

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.data
      .pipe(
        tap(({ booksBySearch }) => {
          this.booksBySearch = booksBySearch;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
