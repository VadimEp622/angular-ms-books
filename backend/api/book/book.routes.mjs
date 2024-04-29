import express from 'express'
import { getBooksByGenre, getBooksByGenres } from './book.controller.mjs'
import { getFromCacheBooksByGenres } from '../../middlewares/cache.middleware.mjs'


const router = express.Router()


router.get('/genre', getFromCacheBooksByGenres, getBooksByGenres)
router.get('/genre/:id', getBooksByGenre)


export const bookRoutes = router