import http from 'http'
import path from 'path'
import cors from 'cors'
import express from 'express'
import cookieParser from 'cookie-parser'
import dotenv from 'dotenv'

// TODO: Research logging services, and how necessary are they for a small private project


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
            'http://localhost:3000',
            'http://127.0.0.1:3000',
            'http://localhost:3030',
            'http://127.0.0.1:3030',
            'http://localhost:5173',
            'http://127.0.0.1:5173'
        ],
        credentials: true
    }
    app.use(cors(corsOptions))
}


// routes
// import { authRoutes } from './api/auth/auth.routes.mjs'
// import { secretRoutes } from './api/secret/secret.routes.mjs'
// import { userRoutes } from './api/user/user.routes.mjs'

import { logger } from './services/logger.service.mjs'
// import { setupAsyncLocalStorage } from './middlewares/setupAls.middleware.mjs'

// app.all('*', setupAsyncLocalStorage)





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