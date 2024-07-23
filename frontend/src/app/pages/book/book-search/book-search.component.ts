import { JsonPipe } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, tap } from 'rxjs';
import { APIBooksBySearch } from '../../../models/api.model';
import { BookListProps } from '../../../models/props.model';
import { BookListComponent } from '../../../cmps/book-list/book-list.component';

@Component({
  selector: 'book-search',
  standalone: true,
  imports: [JsonPipe, BookListComponent],
  templateUrl: './book-search.component.html',
  styleUrl: './book-search.component.scss',
})
export class BookSearchComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  props!: BookListProps<APIBooksBySearch>;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.data
      .pipe(
        tap(({ booksBySearch }) => {
          this.props = {
            data: booksBySearch,
            dataType: 'search',
            listType: 'vertical',
            previewType: 'side-by-side',
          };
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
