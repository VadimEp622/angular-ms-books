import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const ENTITY = 'book';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  private baseUrl = environment.api_url + ENTITY;

  constructor(private http: HttpClient) {}

  public queryByGenres() {
    return this.http.get<any>(`${this.baseUrl}/genre`);
  }

  public queryByGenre(genre: string) {
    return this.http.get<any>(`${this.baseUrl}/genre/${genre}`);
  }

  public getBookById(bookId: string) {
    return this.http.get<any>(`${this.baseUrl}/works/${bookId}`);
  }

  // TODO: create this function
  public queryBooksBySearch(queryTxt: string) {
    return this.http.get<any>(`${this.baseUrl}/search`, {
      params: { q: queryTxt },
    });
  }

  // ------------------ Private Functions ------------------
}
