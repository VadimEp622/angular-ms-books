import { authService } from './auth.service.mjs'
import { logger } from '../../services/logger.service.mjs'


// TODO: consider if needed -> on successful login/signup, update store.loggedinUser, and on logout, update store.loggedinUser to guest or null/undefined

// INFO: from what I gather, regarding als, with my current setup,
//      if user has performed login/signup, but have not logged out, the store.loggedinUser will still remember the user object.

export async function login(req, res) {
    const { username, password } = req.body
    try {
        const user = await authService.login(username, password)
        const loginToken = authService.getLoginToken(user)
        logger.info('User login: ', user.id)
        res.cookie('loginToken', loginToken, { sameSite: 'None', secure: true })
        res.json(user)
    } catch (err) {
        logger.error('Failed to Login ' + err)
        res.status(401).send({ err: 'Failed to Login' })
    }
}

export async function tokenLogin(req, res) {
    const { token } = req.body
    console.log('token', token)
    try {
        const user = await authService.validateToken(token)
        console.log('user', user)
        if (!user) {
            res.clearCookie('loginToken')
            // TODO: make a better result object, for errors like - user not found, since it's not an error, but a faulty token
            throw new Error('invalid token')
        }

        // TODO: getUserById(), or "check if user exists" from database
        // TODO: remove password
        // TODO: send user to client side

        res.json(user)
    } catch (err) {
        logger.error('Failed to Login ' + err)
        res.status(401).send({ err: 'Failed to Login' })
    }
}

export async function signup(req, res) {
    try {
        const credentials = req.body
        // Never log passwords
        // logger.debug(credentials)
        const account = await authService.signup(credentials)
        logger.debug(`auth.route - new account created: ` + JSON.stringify(account))
        const user = await authService.login(credentials.username, credentials.password)
        logger.info('User signup:', user.id)
        const loginToken = authService.getLoginToken(user)
        res.cookie('loginToken', loginToken, { sameSite: 'None', secure: true })
        res.json(user)
    } catch (err) {
        logger.error('Failed to signup ' + err)
        res.status(400).send({ err: 'Failed to signup' })
    }
}

export async function logout(req, res) {
    try {
        logger.info('user logout')
        res.clearCookie('loginToken')
        res.send({ msg: 'Logged out successfully' })
    } catch (err) {
        res.status(400).send({ err: 'Failed to logout' })
    }
}

