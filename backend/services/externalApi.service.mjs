import { logger } from "./logger.service.mjs"

export const externalApiService = {
    fetchBooksByGenre,
    fetchBookById
}

// TODO: think about how to handle books with missing images - do we cull them in back-end? front-end? or simply add a placeholder image?

// TODO: add fetchAuthorById -> fetchBooksById returns only author key, without any other info, not even name. need to add this, and include in fetchBookById process.
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

async function fetchBookById(bookId) {
    try {
        const data = await fetch(_getUrlBookById(bookId)).then(res => res.json())
        // console.log('data - fetchBookById', data)
        return _transformBookById(bookId, data)
    } catch (error) {
        logger.error('Failed fetching books by id', error)
        throw _createErrorBookById('Failed fetching books by id', error)
    }
}




// ------------------------------------ Private Functions ------------------------------------
function _getUrlBooksByGenre(genre) {
    return `https://openlibrary.org/search.json?q=subject_key:${genre}+first_publish_year:[2020+TO+2024]+language:eng&fields=*,key,title,author_name,author_key,cover_i&limit=20&offset=0`
}

function _getUrlBookById(bookId = 'OL45804W') {
    return `https://openlibrary.org/works/${bookId}.json`
}

// Regular Book
function _transformBookById(bookId, data) {
    const book = _createBook(data)
    return _createBookById(bookId, book)
}

function _createBookById(bookId, book) {
    return {
        bookId,
        book
    }
}

function _createBook(apiBook) {
    const openLibBookId = apiBook?.key.replace('/works/', '')
    const title = apiBook?.title
    const authors = apiBook?.authors
    const description = apiBook?.description
    const openLibCoverId = apiBook?.covers[0]
    return _createBookObject(openLibBookId, title, authors, description, openLibCoverId)
}

function _createBookObject(openLibBookId, title, authors, description, openLibCoverId) {
    // from openLib's API, sometimes, description is a string, other times an object...
    return {
        _id: openLibBookId,
        title,
        authors,
        description: description?.value ?? description,
        openLibBookId,
        openLibCoverId
    }
}

function _createErrorBookById(error, bookId) {
    return {
        bookId,
        book: undefined,
        error
    }
}

// Mini Book
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