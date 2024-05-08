import http from 'http'
import path from 'path'
import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

// #################################### DOCKER ####################################
// TODO:
//   * research healthcheck, what it is, and how to use. (from what I gather, it's useful as a condition inside depents_on)
//   * research docker newtwork (for shared db maybe?)
//   * research cmd in dockerfile, best practices, what not to do, and what may break (maybe solution requires node graceful shutdown?)
// ################################################################################


// TODO: Research logging practices, what to log, what not to log.

// TODO: In Order ->
//   1) ✔ Add mysql Database for users
//   2) ✔ make user API
//   3) ✔ make auth API
//   4) activate ALS middleware

// TODO: in book api, create route getBookById

// TODO: research graceful shutdown - what, why, how.


dotenv.config()
const app = express()
const server = http.createServer(app)


// Express App Config
app.use(cookieParser())
app.use(express.json())


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.resolve('public')))
} else {
    const corsOptions = {
        origin: [
            'http://localhost:3030',
            'http://127.0.0.1:3030',
            'http://localhost:4200',
            'http://127.0.0.1:4200',
            'http://localhost:5173',
            'http://127.0.0.1:5173'
        ],
        credentials: true
    }
    app.use(cors(corsOptions))
}


// routes
import { setupAsyncLocalStorage } from './middlewares/setupAls.middleware.mjs'
import { authRoutes } from './api/auth/auth.routes.mjs'
// import { secretRoutes } from './api/secret/secret.routes.mjs'
import { userRoutes } from './api/user/user.routes.mjs'
import { bookRoutes } from './api/book/book.routes.mjs'
import { logger } from './services/logger.service.mjs'


app.all('*', setupAsyncLocalStorage)

app.use('/api/auth', authRoutes)
// app.use('/api/order', orderRoutes)
// app.use('/api/secret', secretRoutes)
app.use('/api/book', bookRoutes)
app.use('/api/user', userRoutes)



// Make every server-side-route to match the index.html
// so when requesting http://localhost:3030/index.html/stay/123 it will still respond with
// our SPA (single page app) (the index.html file) and allow vue/react-router/angular to take it from there
app.get('/**', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})



const port = process.env.PORT || 3030
server.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})