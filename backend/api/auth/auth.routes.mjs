import express from 'express'
import { login, signup, logout, tokenLogin } from './auth.controller.mjs'

const router = express.Router()

router.post('/login', login)
router.post('/token-login', tokenLogin)
router.post('/signup', signup)
router.post('/logout', logout)

export const authRoutes = router