import { booksByGenreCache } from "../services/cache.service.mjs"


export async function getFromCache(req, res, next) {
    const key = req.originalUrl
    const cachedResponse = await booksByGenreCache.get(key)
    if (cachedResponse) {
        logger.info('Cache hit')
        res.send(cachedResponse)
    } else {
        logger.info('Cache miss')
        next()
    }
}