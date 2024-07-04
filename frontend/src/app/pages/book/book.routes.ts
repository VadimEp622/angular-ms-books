import { Routes } from '@angular/router';
import { BookIndexComponent } from './book-index/book-index.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { bookIndexResolver } from '../../routes/resolvers/book-index.resolver';
import { BookSearchComponent } from './book-search/book-search.component';
import { bookDetailsResolver } from '../../routes/resolvers/book-details.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'genre/love',
    pathMatch: 'full',
  },
  {
    path: 'genre/:genre',
    // TODO: index, is the route/page redirected to, when "ms-books-site.com/book" route is visited.
    component: BookIndexComponent,
    resolve: { booksByGenre: bookIndexResolver },
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
