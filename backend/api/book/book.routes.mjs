import express from 'express'
import { getBook, getBooks, getBooksByGenres } from './book.controller.mjs'
import { cacheBook } from '../../middlewares/cache.middleware.mjs'


const router = express.Router()


router.get('/genre', cacheBook, getBooksByGenres)
router.get('/genre/:id', cacheBook, getBooks)

router.get('/works/:id', getBook)


export const bookRoutes = router