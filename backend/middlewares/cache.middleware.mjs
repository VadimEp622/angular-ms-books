import { cacheUrl } from "../services/cache.service.mjs"
import { logger } from "../services/logger.service.mjs"



export function cache(req, res, next) {
    try {
        if (req.method === 'GET' && cacheUrl.has(req.originalUrl)) {
            logger.info(`Cache hit - ${req.originalUrl}`)
            return res.send(cacheUrl.get(req.originalUrl))
        }
        logger.info(`Cache miss - ${req.originalUrl}`)
        return next()
    } catch (err) {
        logger.error('error in cache', err)
    }
}