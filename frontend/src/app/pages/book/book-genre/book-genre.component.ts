import { Subscription, tap } from 'rxjs';
import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookListVerticalComponent } from '../../../cmps/book-list/book-list-vertical/book-list-vertical.component';
import { APIBooksByGenre } from '../../../models/api.model';
import { BookListComponent } from '../../../cmps/book-list/book-list.component';
import { BookListProps } from '../../../models/props.model';

@Component({
  selector: 'book-genre',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    AsyncPipe,
    BookListVerticalComponent,
    BookListComponent,
  ],
  host: {
    class: 'full details-layout',
  },
  templateUrl: './book-genre.component.html',
  styleUrl: './book-genre.component.scss',
})
export class BookGenreComponent implements OnInit, OnDestroy {
  sub!: Subscription;
  // booksByGenre!: APIBooksByGenre;
  props!: BookListProps<APIBooksByGenre>;

  constructor(private route: ActivatedRoute) {}

  // TODO:
  // - decide on background color for page, for book-list, for book-preview, and for book-preview on hover
  // - add hover styling for book previews

  // TODO: consider added different category/genre sidebar to the left

  ngOnInit() {
    this.sub = this.route.data
      .pipe(
        tap(({ booksByGenre }) => {
          this.props = {
            data: booksByGenre,
            dataType: 'genre',
            listType: 'vertical',
            previewType: 'side-by-side',
          };
          // this.booksByGenre = booksByGenre;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
