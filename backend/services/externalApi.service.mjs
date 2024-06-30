import { logger } from "./logger.service.mjs"

export const externalApiService = {
    fetchBooksByGenre
}

// TODO: think about how to handle books with missing images - do we cull them in back-end? front-end? or simply add a placeholder image?

// TODO: add fetchBookById -> get the actual openlibrary book data
// TODO: add fetchBooksByQuery -> search books by text string

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
function _getUrlBooksByGenre(genre) {
    return `https://openlibrary.org/search.json?q=subject_key:${genre}+first_publish_year:[2020+TO+2024]+language:eng&fields=*,key,title,author_name,author_key,cover_i&limit=20&offset=0`
}

function _getUrlBookById(bookId = 'OL45804W') {
    return `https://openlibrary.org/works/${bookId}.json`
}

function _transformBooksByGenre(genre, data) {
    const transformedBooks = data?.docs.map((book) => _createMiniBook(book))
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
    const author_key = apiBook?.author_key
    const author_name = apiBook?.author_name
    const openLibBookId = apiBook?.key.replace('/works/', '')
    const openLibCoverId = apiBook?.cover_i ? apiBook.cover_i : -1
    return _createMiniBookObject(title, author_key, author_name, openLibBookId, openLibCoverId)
}

function _createMiniBookObject(title, author_key, author_name, openLibBookId, openLibCoverId) {
    return {
        _id: openLibBookId,
        title,
        author_key,
        author_name,
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