import { ResolveFn } from '@angular/router'
import { inject } from '@angular/core'
import { BookService } from './../services/book.service'

export const bookIndexResolver: ResolveFn<any[]> = (route, state) => {
  return inject(BookService).queryByGenres()
}
