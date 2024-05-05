import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'


const ENTITY = 'book'


@Injectable({
  providedIn: 'root'
})
export class BookService {

  private baseUrl = environment.api_url + ENTITY

  constructor(
    private http: HttpClient
  ) { }


  public queryByGenres() {
    return this.http.get<any>(`${this.baseUrl}/genre`)
  }

  // TODO: add queryByGenre (for book-index resolver - basically book list for single genre)


  // ------------------ Private Functions ------------------

}