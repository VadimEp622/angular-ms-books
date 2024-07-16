import { Subscription, tap } from 'rxjs';
import { NgFor, NgIf } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HomeHeroComponent } from './home-hero/home-hero.component';
import { BookListHorizontalCarouselComponent } from '../../cmps/book-list/book-list-horizontal-carousel/book-list-horizontal-carousel.component';
import { BookListGridComponent } from '../../cmps/book-list/book-list-grid/book-list-grid.component';
import { APIBooksByGenre } from '../../models/api.model';

@Component({
  selector: 'home',
  standalone: true,
  imports: [
    NgIf,
    NgFor,
    HomeHeroComponent,
    BookListHorizontalCarouselComponent,
    BookListGridComponent,
  ],
  host: {
    class: 'full home-page-layout',
  },
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute) {}

  sub!: Subscription;
  booksByGenres!: APIBooksByGenre[];

  // TODO: add show more button for the category itself

  // TODO: add error when data failed fetching (before this,
  //  connect to backend API, and in backend make each booksPerGenre external API call that fails, not cause entire booksPerGenres API to fail)

  // INFO: There should be a few types of book-lists:
  //  - horizontal carousel of ONLY book cover pictures
  //  - horizontal carousel of VERTICAL covers/title/authors/price/score
  //  - two rows of book covers/title/authors/price/score (need to consider responsiveness, and preventing jumping of content when changing screen size (?))

  ngOnInit() {
    this.sub = this.route.data
      .pipe(
        tap(({ booksByGenres }) => {
          this.booksByGenres = booksByGenres;
        })
      )
      .subscribe();
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
