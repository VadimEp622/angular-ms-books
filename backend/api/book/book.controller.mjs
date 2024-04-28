import { bookDataService } from "../../services/bookData.service.mjs"
import { logger } from "../../services/logger.service.mjs"
import { queryBooksByGenre, queryBooksByGenres } from "./book.service.mjs"


// TODO: research correct status codes for different errors
// TODO: make middleware verifier that genre is valid

export async function getBooksByGenres(req, res) {
    try {
        const booksByGenres = await queryBooksByGenres(bookDataService.getGenres())
        res.send(booksByGenres)
    } catch {
        logger.error('Failed to get books by genres')
        res.status(400).send({ err: 'Failed to get books by genres' })
    }
}

export async function getBooksByGenre(req, res) {
    try {
        const genre = req.params.id
        const booksByGenre = await queryBooksByGenre(genre)
        res.send(booksByGenre)
    } catch (err) {
        logger.error('Failed to get books by genre')
        res.status(400).send({ err: 'Failed to get books by genre' })
    }
}






// ======================== Private Functions ========================