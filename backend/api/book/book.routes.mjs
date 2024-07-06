import express from 'express'
import { getAuthor, getBook, getBooks, getBooksByGenres, getSearchedBooks } from './book.controller.mjs'
import { cache } from '../../middlewares/cache.middleware.mjs'


const router = express.Router()


router.get('/genre', cache, getBooksByGenres)
router.get('/genre/:id', cache, getBooks)
router.get('/works/:id', cache, getBook)

// WIP
router.get('/search', cache, getSearchedBooks)
router.get('/author/:id', cache, getAuthor)


export const bookRoutes = router