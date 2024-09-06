import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BookService } from '../../services/book.service';

export const bookSearchResolver: ResolveFn<any> = (route, state) => {
  const queryTxt = route.queryParams['q'];
  const offset = route.queryParams['offset'] || 0;
  const limit = route.queryParams['limit'] || 10;
  return inject(BookService).queryBooksBySearch({ queryTxt, offset, limit });
};
