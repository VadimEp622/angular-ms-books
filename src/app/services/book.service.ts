import { Injectable } from '@angular/core';
import { UtilService } from './util.service';
import { BehaviorSubject, Observable, forkJoin, from, map, of, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const ENTITY = 'book'

// ================================================================================================
// A) Local-storage will act as DB
// B) Local-storage will be divided into: booksBySubject, Users
// C) booksBySubject will be an array of objects: [{ genre: 'love', books: [...] }, ...]
// ================================================================================================


// TODO: render books by genre to book-list.component


@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    private http: HttpClient,
    private utilService: UtilService
  ) { }

  private _tempBookObj$ = new BehaviorSubject<any>({})
  public tempBookObj$ = this._tempBookObj$.asObservable()


  public queryBySubjects(subjects: string[] = ['love', 'fiction']) {
    return this._getBooksBySubjects(subjects)
      .pipe(
        tap(data => {
          const booksBySubject = data
          this._tempBookObj$.next(booksBySubject)
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
  private _getBooksBySubjects(subjects: string[]) {
    const lsBooksBySubject = this.utilService.loadFromStorage(ENTITY)
    if (!lsBooksBySubject || lsBooksBySubject.length < 1) {
      return this._fetchBooksBySubjects(subjects)
        .pipe(
          map((dataArr: any[]) => {
            console.log('fetchnig data from API')
            const transformedBooksObjects = dataArr.map((data: any) => {
              const transformedBooks = data?.works.map((book: any) => this._createMiniBook(book))
              return this._createBooksBySubject(data?.name, transformedBooks)
            })
            this.utilService.saveToStorage(ENTITY, transformedBooksObjects)
            return transformedBooksObjects
          })
        )
    }
    console.log('getting data from Local-storage')
    return of(lsBooksBySubject)
  }

  private _fetchBooksBySubjects(subjects: string[]) {
    return forkJoin(subjects.map(subject => this._fetchBooksBySubjectAPI(subject)))
  }

  private _fetchBooksBySubjectAPI(subject: string) {
    return this.http.get(`http://openlibrary.org/subjects/${subject}.json`)
  }

  private _createBooksBySubject(genre: string, books: any[]) {
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

  private _createMiniBookObject(title: string, authors: string[], openLibBookId: string, openLibCoverId: number) {
    return {
      _id: openLibBookId,
      title,
      authors,
      openLibBookId,
      openLibCoverId
    }
  }
}
