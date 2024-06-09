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

// INFO:
//   * package.json: (npm run dev) => With Docker for Windows watching a mapped folder, you need to use nodemon --legacy-watch   
// ################################################################################

// TODO: add database schema [Mysql - ?, MongoDB - mongoose(?)]

// TODO: consider adding error handling middleware + custom error class (for example, throw new AppError(...))

// TODO: Research logging practices, what to log, what not to log.

// TODO: in book api, create route getBookById


// DONE: ✔ fix render.com logging DEBUG, even though it's in production...
// DONE: ✔ research graceful shutdown - what, why, how.




// ***************** Express App Config *****************
dotenv.config()
const app = express()
const server = http.createServer(app)


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


// ***************** Routes *****************
import { setupAsyncLocalStorage } from './middlewares/setupAls.middleware.mjs'
import { authRoutes } from './api/auth/auth.routes.mjs'
// import { secretRoutes } from './api/secret/secret.routes.mjs'
import { userRoutes } from './api/user/user.routes.mjs'
import { bookRoutes } from './api/book/book.routes.mjs'
import { logger } from './services/logger.service.mjs'


app.all('*', setupAsyncLocalStorage)

app.use('/api/auth', authRoutes)
// app.use('/api/secret', secretRoutes)
app.use('/api/book', bookRoutes)
app.use('/api/user', userRoutes)


// ***************** Graceful shutdown *****************
process.on('SIGTERM', () => {
    logger.warn('SIGTERM received, shutting down server...')
    server.close(() => {
        logger.warn('SIGTERM received, server closed')
        process.exit(0)
    })
})

process.on('SIGINT', () => {
    logger.warn('SIGINT received, shutting down server...')
    server.close(() => {
        logger.warn('SIGINT received, server closed')
        process.exit(0)
    })
})


// ***************** Get static angular app *****************
app.get('/**', (req, res) => {
    res.sendFile(path.resolve('public/index.html'))
})


// ***************** Run Server *****************
const port = process.env.PORT || 3030
server.listen(port, () => {
    logger.info('Server is running on port: ' + port)
})
