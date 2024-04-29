import { bookCache } from "../services/cache.service.mjs"
import { logger } from "../services/logger.service.mjs"



export function cacheBooksByGenres(req, res, next) {
    try {
        if (bookCache.has('booksByGenres')) {
            logger.info(`Cache hit - booksByGenres`)
            return res.send(bookCache.get('booksByGenres'))
        }
        logger.info('Cache miss - booksByGenres')
        return next()
    } catch (err) {
        console.log('err', err)
        throw err
    }
}