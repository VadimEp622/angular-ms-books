import { BookMini } from './book-mini.model';

export interface APIBooksByGenre {
  genre: string;
  books: BookMini[];
  error?: string;
}

export interface APIBooksBySearch {
  queryTxt: string;
  books: any[];
  error?: string; // TODO: in backend, return error key if external API request failed
}
