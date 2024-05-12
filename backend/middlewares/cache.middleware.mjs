import { bookCache } from "../services/cache.service.mjs"
import { logger } from "../services/logger.service.mjs"

// TODO: consider doing caching by url, so /api/genre will be the cache key. consider type of request as well (GET, POST, etc). (no reason currently to use others beside GET)
//   This will allow having only one cache function, which we can reuse for diferent routes.

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