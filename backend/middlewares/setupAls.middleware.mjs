import { authService } from '../api/auth/auth.service.mjs'
import { asyncLocalStorage } from '../services/als.service.mjs'


// INFO: when user performs logout, the store.loggedinUser is set to undefined.
//     that is because logout clears the front-end's cookie.
//     if the front-end's cookie is not cleared, the store's loggedinUser will persist. (or is it that each server call, will cause the function to run again?)
//     research to make absolutely sure.
export async function setupAsyncLocalStorage(req, res, next) {
  const storage = {}
  asyncLocalStorage.run(storage, () => {
    if (!req.cookies || Object.keys(req.cookies).length === 0) return next()
    const loggedinUser = authService.validateToken(req.cookies.loginToken)

    if (loggedinUser) {
      const alsStore = asyncLocalStorage.getStore()
      alsStore.loggedinUser = loggedinUser
    }
    next()
  })
}

