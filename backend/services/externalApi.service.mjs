import { logger } from "./logger.service.mjs"

export const externalApiService = {
    fetchBooksByGenre
}

// TODO: refactor to fetch books from _getUrlBooksByGenreImproved!!!

async function fetchBooksByGenre(genre) {
    try {
        const data = await fetch(_getUrlBooksByGenre(genre)).then(res => res.json())
        return _transformBooksByGenre(genre, data)
    } catch (err) {
        logger.error('Failed fetching books by genre', err)
        throw _createErrorBooksByGenre('Failed fetching books by genre', genre)
    }

}




// ------------------------------------ Private Functions ------------------------------------
// returns 12 books for each genre
function _getUrlBooksByGenre(genre) {
    return `https://openlibrary.org/subjects/${genre}.json`
}

function _getUrlBooksByGenreImproved(genre) {
    return `https://openlibrary.org/search.json?q=subject_key:${genre}+first_publish_year:[2020+TO+2024]+language:eng&fields=key,title,author_name,author_key,cover_i&limit=20&offset=0`
}

function _getUrlBookById(bookId = 'OL45804W') {
    return `https://openlibrary.org/works/${bookId}.json`
}

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

function _createErrorBooksByGenre(error, genre) {
    return {
        genre,
        books: [],
        error
    }
}