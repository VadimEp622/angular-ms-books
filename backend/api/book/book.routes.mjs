import express from 'express'
import { getAuthor, getBook, getBooks, getBooksByGenres, queryBooks } from './book.controller.mjs'
import { cache } from '../../middlewares/cache.middleware.mjs'


const router = express.Router()


router.get('/genre', cache, getBooksByGenres)
router.get('/genre/:id', cache, getBooks)
router.get('/works/:id', cache, getBook)

// WIP
router.get('/search', queryBooks)
router.get('/author/:id', cache, getAuthor)


export const bookRoutes = router