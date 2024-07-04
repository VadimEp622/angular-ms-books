import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { BookService } from '../../services/book.service';

export const bookDetailsResolver: ResolveFn<any> = (route, state) => {
  return inject(BookService).getBookById(route.paramMap.get('id')!);
};
