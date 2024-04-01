import { Injectable } from '@angular/core';
import { UtilService } from './util.service';

const ENTITY = 'book'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private utilService: UtilService) { }


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

  private _getBooks(entity: any) {
    const lsBooks = this.utilService.loadFromStorage(ENTITY)
    if (!lsBooks || lsBooks.length < 1) {

      // TODO: get from API + save to local storage + return fetched data

    }
    return lsBooks
  }


}
