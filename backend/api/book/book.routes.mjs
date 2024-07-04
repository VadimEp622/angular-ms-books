import express from 'express'
import { getBook, getBooks, getBooksByGenres, queryBooks } from './book.controller.mjs'
import { cache } from '../../middlewares/cache.middleware.mjs'


const router = express.Router()


router.get('/genre', cache, getBooksByGenres)
router.get('/genre/:id', cache, getBooks)
router.get('/works/:id', getBook)

// WIP
router.get('/search', queryBooks)


export const bookRoutes = router