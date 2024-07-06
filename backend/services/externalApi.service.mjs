import { logger } from "./logger.service.mjs"

export const externalApiService = {
    fetchBooksByGenre,
    fetchBookById,
    fetchAuthorById
}

// TODO: think about how to handle books with missing images - do we cull them in back-end? front-end? or simply add a placeholder image?

// TODO: add fetchBooksByQuery -> search books by text string

// TODO: in fetchBookById, add option to fetch "https://openlibrary.org/works/OL36434192W/editions.json" in addition to regular ".../works/OL36434192W.json",
//    because it may contain missing descriptions/images that we can supplement to the returning object

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

        // INFO: author names do not come with the book object. they need to be fetched separately.
        const authorRequests = data.authors.map(author => {
            const authorId = author.author.key.replace('/authors/', '')
            const request = fetch(_getUrlAuthorById(authorId)).then(res => res.json())
            return request
        })

        // TODO: currently entire fetchBookById fails if even one of the author requests fails.
        //        I can probably improve the error handling of this, if AT LEAST 1 author request succeeds.
        //        However, if there is not even 1 author request to succeed, what should I send back in the author key?
        const authors = await Promise.all(authorRequests)
            .then(
                (authorDatas) => authorDatas.map((authorData) => {
                    if (authorData?.error || !authorData?.name) throw new Error('failed fetching author')
                    return {
                        authorId: authorData.key.replace('/authors/', ''),
                        authorName: authorData?.name
                    }
                })
            ).catch((error) => {
                throw error;
            })

        return _transformBookById(bookId, data, authors)
    } catch (error) {
        logger.error('Failed fetching books by id', error)
        throw _createErrorBookById('Failed fetching books by id', bookId)
    }
}

async function fetchAuthorById(authorId) {
    try {
        const data = await fetch(_getUrlAuthorById(authorId)).then(res => res.json())
        if(data?.error) throw new Error('failed fetching author')
        return _transformAuthorById(authorId, data)
    } catch (error) {
        logger.error('Failed fetching author by id', error)
        throw _createErrorAuthorById('Failed fetching author by id', authorId)
    }
}




// ====================================== Private Functions ======================================
// ------------------------------------ URL'S ------------------------------------
function _getUrlBooksByGenre(genre) {
    return `https://openlibrary.org/search.json?q=subject_key:${genre}+first_publish_year:[2020+TO+2024]+language:eng&fields=*,key,title,author_name,author_key,cover_i&limit=20&offset=0`
}

function _getUrlBookById(bookId = 'OL45804W') {
    return `https://openlibrary.org/works/${bookId}.json`
}

function _getUrlAuthorById(authorId = 'OL23919A') {
    return `https://openlibrary.org/authors/${authorId}.json`
}

// ------------------------------------ Regular Author ------------------------------------
function _transformAuthorById(authorId, data) {
    const author = _createAuthor(data)
    return _createAuthorById(authorId, author)
}

function _createAuthor(apiAuthor) {
    const openLibAuthorId = apiAuthor?.key.replace('/authors/', '')
    const name = apiAuthor?.name
    const bio = apiAuthor?.bio
    const photos = apiAuthor?.photos
    const birthDate = apiAuthor?.birth_date
    const links = apiAuthor?.links
    const wikipedia = apiAuthor?.wikipedia
    const alternateNames = apiAuthor?.alternate_names
    return _createAuthorObject({ openLibAuthorId, name, bio, photos, birthDate, links, wikipedia, alternateNames })
}

function _createAuthorById(authorId, author) {
    return {
        authorId,
        author
    }
}

function _createAuthorObject({ openLibAuthorId, name, bio, photos, birthDate, links, wikipedia, alternateNames }) {
    return {
        _id: openLibAuthorId,
        openLibAuthorId,
        name,
        bio,
        photos: (photos?.length > 0) ? photos : [-1],
        birthDate,
        links,
        wikipedia,
        alternateNames
    }
}

function _createErrorAuthorById(error, authorId) {
    return {
        authorId,
        error
    }
}


// ------------------------------------ Regular Book ------------------------------------
function _transformBookById(bookId, data, authors) {
    const book = _createBook(data, authors)
    return _createBookById(bookId, book)
}

function _createBookById(bookId, book) {
    return {
        bookId,
        book
    }
}

function _createBook(apiBook, authors) {
    const openLibBookId = apiBook?.key.replace('/works/', '')
    const title = apiBook?.title
    // const authors = apiBook?.authors
    const description = apiBook?.description
    const openLibCoverIds = apiBook?.covers
    return _createBookObject(openLibBookId, title, authors, description, openLibCoverIds)
}

function _createBookObject(openLibBookId, title, authors, description, openLibCoverIds) {
    // INFO: from openLib's API, sometimes, description is a string, other times an object...
    // INFO: sometimes coverId's are missing entirely
    return {
        _id: openLibBookId,
        title,
        authors,
        description: description?.value ?? description ?? 'description is currently missing.',
        openLibBookId: openLibBookId ?? -1,
        openLibCoverIds: (openLibCoverIds?.length > 0) ? openLibCoverIds : [-1]
    }
}

function _createErrorBookById(error, bookId) {
    return {
        bookId,
        book: undefined,
        error
    }
}

// ------------------------------------ Mini Book ------------------------------------
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
// ------------------------------------------------------------------------------------------