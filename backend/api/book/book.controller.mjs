import { bookDataService } from "../../services/bookData.service.mjs"
import { bookCache } from "../../services/cache.service.mjs"
import { logger } from "../../services/logger.service.mjs"
import { queryBooksByGenre, queryBooksByGenres } from "./book.service.mjs"


// TODO: research correct status codes for different errors
// TODO: make middleware verifier that genre is valid

export async function getBooksByGenres(req, res) {
    try {
        const booksByGenres = await queryBooksByGenres(bookDataService.getGenres())
        bookCache.set(req.route.path, booksByGenres)
        logger.info(`Cache set - book route - ${req.route.path}`)
        res.send(booksByGenres)
    } catch {
        logger.error('Failed to get books by genres')
        res.status(400).send({ err: 'Failed to get books by genres' })
    }
}

export async function getBooks(req, res) {
    try {
        const genre = req.params.id
        const booksByGenre = await queryBooksByGenre(genre)
        bookCache.set(req.route.path, booksByGenre)
        logger.info(`Cache set - book route - ${req.route.path}`)
        res.send(booksByGenre)
    } catch (err) {
        logger.error('Failed to get books by genre')
        res.status(400).send({ err: 'Failed to get books by genre' })
    }
}

export async function getBook(req, res) {
    try {
        const bookId = req.params.id
        // const book = await getBookById(bookId)
        // res.send(book)
    } catch (err) {
        logger.error('Failed to get book by id')
        res.status(400).send({ err: 'Failed to get book by id' })
    }
}






// ======================== Private Functions ========================