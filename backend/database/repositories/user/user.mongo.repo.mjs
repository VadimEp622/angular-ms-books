import { ObjectId } from "mongodb"
import { dbService } from "../../../services/db.service.mjs"
import { logger } from "../../../services/logger.service.mjs"

export default {
    query,
    getById,
    add,
    getByUsername
}


async function query() {
    try {
        const collection = await dbService.getMongoCollection('user')
        let users = await collection.find({}).toArray()
        users = users.map(user => {
            delete user.password
            user.createdAt = user._id.getTimestamp()
            return user
        })
        return users
    } catch (error) {
        logger.error(`Failed mongo user database query`, error)
        throw error
    }
}

async function getById(userId) {
    try {
        const collection = await dbService.getMongoCollection('user')
        let user = await collection.findOne({ _id: ObjectId.createFromHexString(userId) })
        delete user.password
        user.createdAt = user._id.getTimestamp()
        return user
    } catch (error) {
        logger.error(`Failed mongo user database getById: ${userId}`, error)
        throw error
    }
}

async function add(user) {
    try {
        const { username, password, fullname } = user
        const userToAdd = { username, password, fullname }
        const collection = await dbService.getMongoCollection('user')
        await collection.insertOne(userToAdd)
        logger.debug('added user to mongo database')
    } catch (error) {
        logger.error(`Failed mongo user database add`, error)
        throw error
    }
}

async function getByUsername(username) {
    try {
        const collection = await dbService.getMongoCollection('user')
        let user = await collection.findOne({ username: username })
        if (!user) return null
        user.createdAt = user._id.getTimestamp()
        return user
    } catch (error) {
        logger.error(`Failed mongo user database getByUsername: ${username}`, error)
        throw error
    }
}