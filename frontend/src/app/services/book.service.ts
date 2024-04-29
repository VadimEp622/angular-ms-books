import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Genre } from '../models/genre.model'
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


  public queryByGenres(genres: Genre[] = []) {
    return this.http.get<any>(`${this.baseUrl}/genre`)
  }



  // ------------------ Private Functions ------------------

}