import { Routes } from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { bookDetailsResolver } from '../../routes/resolvers/book-details.resolver';
import { BookGenreComponent } from './book-genre/book-genre.component';
import { bookGenreResolver } from '../../routes/resolvers/book-genre.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'genre/love',
    pathMatch: 'full',
  },
  {
    path: 'genre/:genre',
    // TODO: index, is the route/page redirected to, when "ms-books-site.com/book" route is visited.
    component: BookGenreComponent,
    resolve: { booksByGenre: bookGenreResolver },
  },
  {
    path: 'search',
    component: BookSearchComponent,
    // TODO: add search page resolver
    // resolve: { booksByGenre: bookIndexResolver },
  },
  {
    path: 'works/:id',
    component: BookDetailsComponent,
    resolve: { book: bookDetailsResolver },
  },
];
