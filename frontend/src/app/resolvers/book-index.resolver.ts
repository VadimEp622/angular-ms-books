import { ResolveFn } from '@angular/router'
import { inject } from '@angular/core'
import { BookService } from './../services/book.service'
import { Genre } from '../models/genre.model'

export const bookIndexResolver: ResolveFn<any[]> = (route, state) => {
  const currentGenres: Genre[] = ['romance', 'fiction', 'love', 'adventure']
  return inject(BookService).queryByGenres(currentGenres)
}
