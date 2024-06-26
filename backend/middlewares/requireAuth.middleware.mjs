import { config } from '../config/index.mjs'
import { logger } from '../services/logger.service.mjs'
import { asyncLocalStorage } from '../services/als.service.mjs'


// consider adding requireSameUser

export function requireAuth(req, res, next) {
  const { loggedinUser } = asyncLocalStorage.getStore()
  req.loggedinUser = loggedinUser

  if (config.isGuestMode && !loggedinUser) {
    req.loggedinUser = { id: '', fullname: 'Guest' }
    return next()
  }
  if (!loggedinUser) return res.status(401).send('Not Authenticated')
  next()
}

export function requireAdmin(req, res, next) {
  const { loggedinUser } = asyncLocalStorage.getStore()
  if (!loggedinUser) return res.status(401).send('Not Authenticated')
  if (!loggedinUser.isAdmin) {
    logger.warn(loggedinUser.fullname + 'attempted to perform admin action')
    return res.status(403).send('Not Authorized')
  }
  next()
}
