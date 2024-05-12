import { bookCache } from "../services/cache.service.mjs"
import { logger } from "../services/logger.service.mjs"



export function cacheBook(req, res, next) {
    try{
        if(req.route.methods.get && bookCache.has(req.route.path)){
            logger.info(`Cache hit - book route - ${req.route.path}`)
            return res.send(bookCache.get(req.route.path))
        }
        logger.info(`Cache miss - book route - ${req.route.path}`)
        return next()
    }catch(err){
        logger.error('error in cache', err)
    }
}