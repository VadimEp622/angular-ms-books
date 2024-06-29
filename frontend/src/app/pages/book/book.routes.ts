import { Routes } from '@angular/router';
import { BookIndexComponent } from './book-index/book-index.component';
import { BookDetailsComponent } from './book-details/book-details.component';
import { bookIndexResolver } from '../../routes/resolvers/book-index.resolver';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'genre/love',
    pathMatch: 'full',
  },
  {
    path: 'genre/:genre',
    component: BookIndexComponent,
    resolve: { booksByGenre: bookIndexResolver },
  },
  {
    path: 'works/:id',
    component: BookDetailsComponent,
    // resolve: { book: bookDetailsResolver }
  },
];
