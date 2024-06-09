import { authService } from './auth.service.mjs'
import { logger } from '../../services/logger.service.mjs'


// INFO: from what I gather, regarding als, with my current setup,
//      if user has performed login/signup, but have not logged out, the store.loggedinUser will still remember the user object.


// TODO: research API error numbers, and proper backend error handling 


export async function login(req, res) {
    const { username, password } = req.body
    try {
        const user = await authService.login(username, password)
        const loginToken = authService.getLoginToken(user)
        logger.info('User login: ', user._id)
        res.cookie('loginToken', loginToken, { sameSite: 'None', secure: true })
        res.status(200).json(user)
    } catch (error) {
        logger.error('Failed to Login ', error)
        res.status(500).send({ error: 'Failed to Login' })
    }
}

export async function tokenLogin(req, res) {
    const { token } = req.body
    try {
        const user = await authService.loginByToken(token)
        res.status(200).json(user)
    } catch (error) {
        logger.error('Failed to Login ', error)
        res.status(500).send({ error: 'Failed to Login' })
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
        logger.info('User signup:', user._id)
        const loginToken = authService.getLoginToken(user)
        res.cookie('loginToken', loginToken, { sameSite: 'None', secure: true })
        res.status(201).json(user)
    } catch (error) {
        logger.error('Failed to signup ', error)
        res.status(500).send({ error: 'Failed to signup' })
    }
}

export async function logout(req, res) {
    try {
        // TODO: put logged out userId in logger.info
        logger.info('User logout')
        res.clearCookie('loginToken')
        res.status(200).json({ msg: 'Logged out successfully' })
    } catch (error) {
        logger.error('Failed to logout ', error)
        res.status(500).send({ error: 'Failed to logout' })
    }
}

