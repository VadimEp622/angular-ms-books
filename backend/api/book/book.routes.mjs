import express from 'express'
import { getBook, getBooks, getBooksByGenres } from './book.controller.mjs'
import { cacheBooksByGenres } from '../../middlewares/cache.middleware.mjs'


const router = express.Router()


router.get('/genre', cacheBooksByGenres, getBooksByGenres)
router.get('/genre/:id', getBooks)

router.get('/works/:id', getBook)


export const bookRoutes = router