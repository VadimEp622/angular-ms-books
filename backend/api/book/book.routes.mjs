import express from 'express'
import { getBooksByGenre, getBooksByGenres } from './book.controller.mjs'


const router = express.Router()


router.get('/genre', getBooksByGenres)
router.get('/genre/:id', getBooksByGenre)


export const bookRoutes = router