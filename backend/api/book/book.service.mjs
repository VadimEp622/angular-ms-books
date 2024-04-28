import { externalApiService } from '../../services/externalApi.service.mjs'
import { logger } from '../../services/logger.service.mjs'


// TODO 2: after making externalAPI service, reasearch Promise.allSettled(), and change Promise.all() to Promise.allSettled()
// TODO 3: improve error handling

// INFO: One thing to note is that Promise.all() will reject entirely even if one of the API calls fails. 
//   To avoid this, you can use the Promise.allSettled() method, which resolves even when all promises are rejected.
//   It includes the status(resolved or rejected) of promises in the result.


export async function queryBooksByGenres(genres) {
    try {
        console.log('book.service - queryBooksByGenres -> genres', genres)
        const booksByGenres = await Promise.all(
            genres.map(genre => queryBooksByGenre(genre))
        )
        return booksByGenres
    } catch (err) {
        logger.error('Failed fetching books by genres', err)
        throw err
    }
}

export async function queryBooksByGenre(genre) {
    try {
        console.log('book.service - queryBooksByGenre -> genre', genre)
        const booksByGenre = await externalApiService.fetchBooksByGenre(genre)
        return booksByGenre
    } catch (err) {
        logger.error('Failed fetching books by genre', err)
        throw err
    }
}




// ------------------------------------ Private Functions ------------------------------------

