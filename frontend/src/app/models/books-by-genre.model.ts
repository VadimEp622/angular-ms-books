import { BookMini } from "./book-mini.model"

export interface BooksByGenre {
    genre: string
    books: BookMini[]
    error?: string
}
