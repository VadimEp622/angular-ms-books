import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BookService } from '../../services/book.service';

export const bookSearchResolver: ResolveFn<any> = (route, state) => {
  const searchText = route.queryParams['q'];
  return inject(BookService).queryBooksBySearch(searchText);
};
