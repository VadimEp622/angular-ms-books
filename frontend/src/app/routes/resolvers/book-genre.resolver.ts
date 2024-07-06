import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { BookService } from '../../services/book.service';

export const bookGenreResolver: ResolveFn<any> = (route, state) => {
  return inject(BookService).queryByGenre(route.paramMap.get('genre')!);
};
