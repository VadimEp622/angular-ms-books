import { logger } from '../../services/logger.service.mjs'


// TODO 1: make externalApi service for this
// TODO 2: improve error handling


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
        const data = await fetch(_getUrlBooksByGenre(genre)).then(res => res.json())
        return _transformBooksByGenre(genre, data)
    } catch (err) {
        logger.error('Failed fetching books by genre', err)
        throw err
    }
}









// ------------------------------------ Private Functions ------------------------------------
function _transformBooksByGenre(genre, data) {
    const transformedBooks = data?.works.map((book) => _createMiniBook(book))
    return _createBooksByGenre(genre, transformedBooks)
}

function _createBooksByGenre(genre, books) {
    return {
        genre,
        books
    }
}

function _createMiniBook(apiBook) {
    const title = apiBook?.title
    const authors = apiBook?.authors
    const openLibBookId = apiBook?.key.replace('/works/', '')
    const openLibCoverId = apiBook?.cover_id
    return _createMiniBookObject(title, authors, openLibBookId, openLibCoverId)
}

function _createMiniBookObject(title, authors, openLibBookId, openLibCoverId) {
    return {
        _id: openLibBookId,
        title,
        authors,
        openLibBookId,
        openLibCoverId
    }
}

function _getUrlBooksByGenre(genre) {
    return `https://openlibrary.org/subjects/${genre}.json`
}
