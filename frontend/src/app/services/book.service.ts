import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Genre } from '../models/genre.model'
import { environment } from '../../environments/environment'


const ENTITY = 'book'


// ================================================================================================
// A) Local-storage will act as DB
// B) Local-storage will be divided into: booksByGenre, Users
// C) booksByGenres will be an array of objects: [{ genre: 'love', books: [...] }, ...]
// D) booksByGenres array length is decided by backend and thus is unknown, therefore there cannot be observable declaration for each bookByGenre object.
//      Thus, observable booksByGenres will have ONLY: loading OR error OR array.
// E) booksByGenre object for each genre will be fetched from open-library API in the backend.
//      Thus, each booksByGenre object will either have:
//          * genre+empty books array+error key
//          * OR genre+filled books array
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

  private baseUrl = environment.api_url + ENTITY

  constructor(
    private http: HttpClient
  ) { }


  public queryByGenres(genres: Genre[] = []) {
    return this.http.get<any>(`${this.baseUrl}/genre`)
    // return this._getBooksByGenres(genres)
  }



  // ------------------ Private Functions ------------------
  // private _getBooksByGenres(genres: Genre[]) {
  //   const lsBooksByGenres = this.utilService.loadFromStorage(ENTITY)
  //   if (
  //     !lsBooksByGenres
  //     || !Array.isArray(lsBooksByGenres)
  //     || lsBooksByGenres.length < 1
  //     || !genres.every(genre => lsBooksByGenres.some((booksByGenre: any) => booksByGenre.genre === genre))
  //   ) {
  //     return this._fetchBooksByGenres(genres)
  //       .pipe(
  //         map((dataArr: any[]) => {
  //           console.log('fetchnig data from API')
  //           const transformedBooksObjects = dataArr.map((data: any) => {
  //             if (data.error) return data
  //             const transformedBooks = data?.works.map((book: Book) => this._createMiniBook(book))
  //             return this._createBooksByGenre(data?.name, transformedBooks)
  //           })
  //           this.utilService.saveToStorage(ENTITY, transformedBooksObjects)
  //           return transformedBooksObjects
  //         })
  //       )
  //   }
  //   console.log('getting data from Local-storage')
  //   return of(lsBooksByGenres as BooksByGenre[])
  // }

  // private _fetchBooksByGenres(genres: Genre[]) {
  //   return forkJoin(genres.map(genre => this._fetchBooksByGenre(genre)))
  // }

  // private _fetchBooksByGenre(genre: Genre) {
  //   return this.http.get(this._getUrlBooksByGenre(genre))
  //     .pipe(
  //       retry(1),
  //       catchError((error) => this._handleError(error, genre))
  //     )
  // }

  // private _getUrlBooksByGenre(genre: Genre) {
  //   return `https://openlibrary.org/subjects/${genre}.json`
  // }

  // private _createBooksByGenre(genre: Genre, books: BookMini[]): BooksByGenre {
  //   return {
  //     genre,
  //     books
  //   }
  // }

  // private _createMiniBook(apiBook: any): BookMini {
  //   const title = apiBook?.title
  //   const authors = apiBook?.authors
  //   const openLibBookId = apiBook?.key.replace('/works/', '')
  //   const openLibCoverId = apiBook?.cover_id
  //   return this._createMiniBookObject(title, authors, openLibBookId, openLibCoverId)
  // }

  // private _createMiniBookObject(title: string, authors: object[], openLibBookId: string, openLibCoverId: number): BookMini {
  //   return {
  //     _id: openLibBookId,
  //     title,
  //     authors,
  //     openLibBookId,
  //     openLibCoverId
  //   }
  // }

  // private _handleError(error: HttpErrorResponse, genre: Genre) {
  //   console.error(`Failed fetching books for genre ${genre}:`, error)
  //   return of({
  //     genre: genre,
  //     books: [],
  //     error: `Failed fetching books for genre ${genre}`
  //   })
  // }
}


