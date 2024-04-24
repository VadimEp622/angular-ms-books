import { logger } from "../../services/logger.service.mjs"
import { queryBooksByGenres } from "./book.service.mjs"


// backend decides which genres of books to return
export async function getBooksByGenres(req, res) {
    try {
        console.log('book.controller - getBooksByGenres')
        const genres = _getGenres()
        const booksByGenres = await queryBooksByGenres(genres)
        res.send(booksByGenres)
    } catch {
        logger.error('Failed to get books by genre')
        res.status(400).send({ err: 'Failed to get books by genre' })
    }
}

// returns a single category of books
export async function getBooksByGenre(req, res) {
    console.log('hi from getBooksByGenre')
    console.log('req.params', req.params)
}







// ======================== Private Functions ========================
function _getGenres() {
    return ['adventure', 'love']
}