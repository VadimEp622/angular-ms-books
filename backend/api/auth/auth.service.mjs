import Cryptr from 'cryptr'
import bcrypt from 'bcrypt'

import { userService } from '../user/user.service.mjs'
import { logger } from '../../services/logger.service.mjs'

const cryptr = new Cryptr(process.env.SECRET1 || 'Secret-Puk-1234')

export const authService = {
    signup,
    login,
    getLoginToken,
    loginByToken,
    validateToken
}

async function login(username, password) {
    logger.debug(`auth.service - login with username: ${username}`)

    const user = await userService.getByUsername(username)
    if (!user) return Promise.reject('Invalid username or password')

    const match = await bcrypt.compare(password, user.password)
    if (!match) return Promise.reject('Invalid username or password')

    delete user.password
    user._id = user._id.toString()
    return user
}

async function loginByToken(token) {
    logger.debug(`auth.service - login with token: ${token}`)
    const tokenUserObj = validateToken(token)
    if (!tokenUserObj) throw new Error('invalid token')
    const user = await userService.getById(tokenUserObj._id)
    delete user.password
    return user
}

async function signup({ username, password, fullname }) {
    const saltRounds = 10

    logger.debug(`auth.service - signup with username: ${username}, fullname: ${fullname}`)
    if (!username || !password || !fullname) return Promise.reject('Missing required signup information')

    const userExist = await userService.getByUsername(username)
    if (userExist) return Promise.reject('Username already taken')

    const hash = await bcrypt.hash(password, saltRounds)
    await userService.add({ username, password: hash, fullname })

    const user = await userService.getByUsername(username)
    return user
}

function getLoginToken(user) {
    const userInfo = { _id: user._id, fullname: user.fullname, isAdmin: user?.isAdmin }
    return cryptr.encrypt(JSON.stringify(userInfo))
}

function validateToken(loginToken) {
    try {
        const json = cryptr.decrypt(loginToken)
        const loggedinUser = JSON.parse(json)
        return loggedinUser

    } catch (error) {
        logger.info('Invalid login token')
    }
    return null
}

// // ;(async ()=>{
// //     await signup('bubu', '123', 'Bubu Bi')
// //     await signup('mumu', '123', 'Mumu Maha')
// // })()