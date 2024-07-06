import { bookDataService } from "../../services/bookData.service.mjs"
import { cacheUrl } from "../../services/cache.service.mjs"
import { logger } from "../../services/logger.service.mjs"
import { getAuthorById, getBookById, queryBooksByGenre, queryBooksByGenres, getSearchedBooksByQuery } from "./book.service.mjs"


// TODO: research correct status codes for different errors
// TODO: make middleware verifier that genre is valid

export async function getBooksByGenres(req, res) {
    try {
        const booksByGenres = await queryBooksByGenres(bookDataService.getGenres())
        cacheUrl.set(req.originalUrl, booksByGenres)
        logger.info(`Cache set - ${req.originalUrl}`)
        res.status(200).json(booksByGenres)
    } catch (error) {
        logger.error('Failed to get books by genres', error)
        res.status(500).send({ error: 'Failed to get books by genres' })
    }
}

export async function getBooks(req, res) {
    try {
        const genre = req.params.id
        const booksByGenre = await queryBooksByGenre(genre)
        cacheUrl.set(req.originalUrl, booksByGenre)
        logger.info(`Cache set - ${req.originalUrl}`)
        res.status(200).json(booksByGenre)
    } catch (eerrorrr) {
        logger.error('Failed to get books by genre', error)
        res.status(500).send({ error: 'Failed to get books by genre' })
    }
}

export async function getSearchedBooks(req, res) {
    try {
        const queryTxt = req.query?.q
        const queryResults = await getSearchedBooksByQuery(queryTxt)
        cacheUrl.set(req.originalUrl, queryResults)
        logger.info(`Cache set - ${req.originalUrl}`)
        res.status(200).json(queryResults)
    } catch (error) {
        logger.error('Failed to query books', error)
        res.status(500).send(error)
    }
}

export async function getBook(req, res) {
    try {
        const bookId = req.params.id
        const book = await getBookById(bookId)
        cacheUrl.set(req.originalUrl, book)
        logger.info(`Cache set - ${req.originalUrl}`)
        res.status(200).json(book)
    } catch (error) {
        logger.error('Failed to get book by id', error)
        res.status(500).send(error)
    }
}

export async function getAuthor(req, res) {
    try {
        const authorId = req.params.id
        const author = await getAuthorById(authorId)
        cacheUrl.set(req.originalUrl, author)
        logger.info(`Cache set - ${req.originalUrl}`)
        res.status(200).json(author)
    } catch (error) {
        logger.error('Failed to get author by id', error)
        res.status(500).send(error)
    }
}






// ======================== Private Functions ========================