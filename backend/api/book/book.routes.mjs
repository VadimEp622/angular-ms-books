import express from 'express'
import { getBook, getBooks, getBooksByGenres } from './book.controller.mjs'
import { cache } from '../../middlewares/cache.middleware.mjs'


const router = express.Router()


router.get('/genre', cache, getBooksByGenres)
router.get('/genre/:id', cache, getBooks)

router.get('/works/:id', getBook)


export const bookRoutes = router