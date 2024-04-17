import { Injectable } from '@angular/core'
import { UtilService } from './util.service'
import { BehaviorSubject, catchError, delay, forkJoin, map, of, retry, tap } from 'rxjs'
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { BooksByGenre } from '../models/books-by-genre.model'
import { Book } from '../models/book.model'
import { BookMini } from '../models/book-mini.model'
import { Genre } from '../models/genre.model'

const ENTITY = 'book'

// ================================================================================================
// A) Local-storage will act as DB
// B) Local-storage will be divided into: booksBySubject, Users
// C) booksBySubject will be an array of objects: [{ genre: 'love', books: [...] }, ...]
// ================================================================================================

// INFO: RIGHT NOW, using "queryByGenres()" we fetch all books by genres from the API,
//          so that each API call per genre: 1. if one fails, all other calls will continue.
//                                           2. only when all calls are done, _booksByGenres$ observable will recieve all the data


// TODO: RIGHT NOW, for each genre in genre array, we check if we have matching data in local-storage.
//      if we have even 1 missing genre, we fetch data from API, remove all book data from local-storage, and replace with fetched data.
//      Need to make it so, that we ONLY UPDATE local-storage (in book data) with missing data, and NEVER remove any.
//      ** if decide to do this, then it opens possibility of old untouched data in local-storage. maybe give each book genre object, a life of 24hrs?

// TODO: research advanced angular error handling (specifically, error$ observable).

// TODO: improve typescript for fetched data, and enforce expected data structure. 

// TODO: don't store BookMini objects with 'error' key, in local-storage.



@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) { }

  private _booksByGenres$ = new BehaviorSubject<BooksByGenre[]>([])
  public booksByGenres$ = this._booksByGenres$.asObservable()


  public queryByGenres(genres: Genre[] = []) {
    return this._getBooksByGenres(genres)
      .pipe(
        tap(data => {
          this._booksByGenres$.next(data)
        })
      )
  }





  // TODO: Decide if we get real book data or not.
  // * if we do get real book data, how should we combine it with user created book data?
  //    assumption is that we have an observable for async fetching of book objects.
  //    so we subscribe to it in book-list.component, and render coming and going book objects array.
  //    then we have user create books. we store those in local-storage.
  //    when fetching data in book-list.component, we have to somehow COMBINE real book data, with local-storage book data.
  //    before that, we need to decide the main book listing layout - 
  //      ** do we have mutilple lists of different categories? if we fetch real book data, this seems logical.
  //      ** do we make a new list for new user created books? -> list title: "Check out out our new exclusives".


  // ------------------ Private Functions ------------------
  private _getBooksByGenres(genres: Genre[]) {
    const lsBooksByGenres = this.utilService.loadFromStorage(ENTITY)
    if (
      !lsBooksByGenres
      || !Array.isArray(lsBooksByGenres)
      || lsBooksByGenres.length < 1
      || !genres.every(genre => lsBooksByGenres.some((booksByGenre: any) => booksByGenre.genre === genre))
    ) {
      return this._fetchBooksByGenres(genres)
        .pipe(
          map((dataArr: any[]) => {
            console.log('fetchnig data from API')
            const transformedBooksObjects = dataArr.map((data: any) => {
              if (data.error) return data
              const transformedBooks = data?.works.map((book: Book) => this._createMiniBook(book))
              return this._createBooksByGenre(data?.name, transformedBooks)
            })
            this.utilService.saveToStorage(ENTITY, transformedBooksObjects)
            return transformedBooksObjects
          })
        )
    }
    console.log('getting data from Local-storage')
    return of(lsBooksByGenres as BooksByGenre[])
  }

  private _fetchBooksByGenres(genres: Genre[]) {
    return forkJoin(genres.map(genre => this._fetchBooksByGenre(genre)))
  }

  private _fetchBooksByGenre(genre: Genre) {
    return this.http.get(this._getUrlBooksByGenre(genre))
      .pipe(
        // TODO: check if fetched data is valid/correct format. if not, handle it.
        // delay(1000),
        retry(1),
        catchError((error) => this._handleError(error, genre))
      )
  }

  private _getUrlBooksByGenre(genre: Genre) {
    return `https://openlibrary.org/subjects/${genre}.json`
  }

  private _createBooksByGenre(genre: Genre, books: BookMini[]): BooksByGenre {
    return {
      genre,
      books
    }
  }

  private _createMiniBook(apiBook: any): BookMini {
    const title = apiBook?.title
    const authors = apiBook?.authors
    const openLibBookId = apiBook?.key.replace('/works/', '')
    const openLibCoverId = apiBook?.cover_id
    return this._createMiniBookObject(title, authors, openLibBookId, openLibCoverId)
  }

  private _createMiniBookObject(title: string, authors: object[], openLibBookId: string, openLibCoverId: number): BookMini {
    return {
      _id: openLibBookId,
      title,
      authors,
      openLibBookId,
      openLibCoverId
    }
  }

  private _handleError(error: HttpErrorResponse, genre: Genre) {
    console.error(`Failed fetching books for genre ${genre}:`, error)
    return of({
      genre: genre,
      books: [],
      error: `Failed fetching books for genre ${genre}`
    })
  }
}

