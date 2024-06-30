import express from 'express'
import { getBook, getBooks, getBooksByGenres, queryBooks } from './book.controller.mjs'
import { cache } from '../../middlewares/cache.middleware.mjs'


const router = express.Router()


router.get('/genre', cache, getBooksByGenres)
router.get('/genre/:id', cache, getBooks)

// WIP
router.get('/search', queryBooks)
router.get('/works/:id', getBook)


export const bookRoutes = router