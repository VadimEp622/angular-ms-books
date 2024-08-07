import { externalApiService } from '../../services/externalApi.service.mjs'
import { logger } from '../../services/logger.service.mjs'


// TODO: improve error handling

// INFO: One thing to note is that Promise.all() will reject entirely even if one of the API calls fails. 
//   To avoid this, you can use the Promise.allSettled() method, which resolves even when all promises are rejected.
//   It includes the status(resolved or rejected) of promises in the result.


export async function queryBooksByGenres(genres) {
    try {
        const results = await Promise.allSettled(
            genres.map(genre => externalApiService.fetchBooksByGenre(genre))
        )
        return results.map(result => result.status === 'fulfilled' ? result.value : result.reason)
    } catch (error) {
        logger.error('Failed fetching books by genres', error)
        throw error
    }
}

export async function queryBooksByGenre(genre) {
    try {
        const booksByGenre = await externalApiService.fetchBooksByGenre(genre)
        return booksByGenre
    } catch (error) {
        logger.error('Failed fetching books by genre', error)
        throw error
    }
}

export async function getBookById(bookId) {
    try {
        const book = await externalApiService.fetchBookById(bookId)
        return book
    } catch (error) {
        logger.error('Failed to get book by id', error)
        throw error
    }
}

export async function getAuthorById(authorId) {
    try {
        const booksByAuthor = await externalApiService.fetchAuthorById(authorId)
        return booksByAuthor
    } catch (error) {
        logger.error('Failed fetching books by authorId', error)
        throw error
    }
}

export async function getSearchedBooksByQuery(queryTxt) {
    try {
        const queryResults = await externalApiService.fetchSearchedBooksByQuery(queryTxt)
        return queryResults
    } catch (error) {
        logger.error('Failed fetching books by query', searchTxt)
        throw error
    }

}



// ------------------------------------ Private Functions ------------------------------------

