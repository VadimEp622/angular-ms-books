import { Injectable } from '@angular/core';
import { UtilService } from './util.service';
import { BehaviorSubject, Observable, catchError, forkJoin, from, map, of, retry, tap, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

const ENTITY = 'book'

// ================================================================================================
// A) Local-storage will act as DB
// B) Local-storage will be divided into: booksBySubject, Users
// C) booksBySubject will be an array of objects: [{ genre: 'love', books: [...] }, ...]
// ================================================================================================


// TODO: right now, for each genre in genre array, we check if we have matching data in local-storage.
//      if we have even 1 missing genre, we fetch data from API, remove all book data from local-storage, and replace with fetched data.
//      Need to make it so, that we ONLY UPDATE local-storage (in book data) with missing data, and NEVER remove any.
//      ** if decide to do this, then it opens possibility of old untouched data in local-storage. maybe give each book genre object, a life of 24hrs?

// TODO: research Angular observables error handling practices, and common mistakes, before attempting to tackle it.


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) { }

  private _booksByGenres$ = new BehaviorSubject<any>([])
  public booksByGenres$ = this._booksByGenres$.asObservable()


  public queryByGenres(genres: string[] = []) {
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
  private _getBooksByGenres(genres: string[]) {
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

              const transformedBooks = data?.works.map((book: any) => this._createMiniBook(book))
              return this._createBooksByGenre(data?.name, transformedBooks)
            })
            this.utilService.saveToStorage(ENTITY, transformedBooksObjects)
            return transformedBooksObjects
          })
        )
    }
    console.log('getting data from Local-storage')
    return of(lsBooksByGenres as object[])
  }

  private _fetchBooksByGenres(genres: string[]) {
    return forkJoin(genres.map(genre => this._fetchBooksByGenre(genre)))
  }

  private _fetchBooksByGenre(genre: string) {
    return this.http.get(this._getUrlBooksByGenre(genre))
      .pipe(
        retry(1),
        catchError((error: HttpErrorResponse) => {
          console.error(`Error fetching books for genre ${genre}:`, error);
          return throwError(() => `Error fetching books for genre ${genre}`)
        })
      )
  }

  private _getUrlBooksByGenre(genre: string) {
    return `http://openlibrary.org/subjects/${genre}.json`
  }

  private _createBooksByGenre(genre: string, books: any[]) {
    return {
      genre,
      books
    }
  }

  private _createMiniBook(book: any) {
    const title = book?.title
    const authors = book?.authors
    const openLibBookId = book?.key.replace('/works/', '')
    const openLibCoverId = book?.cover_id
    return this._createMiniBookObject(title, authors, openLibBookId, openLibCoverId)
  }

  private _createMiniBookObject(title: string, authors: object[], openLibBookId: string, openLibCoverId: number) {
    return {
      _id: openLibBookId,
      title,
      authors,
      openLibBookId,
      openLibCoverId
    }
  }

  private _handleError(err: HttpErrorResponse) {
    console.log('err:', err)
    return throwError(() => err)
  }
}


