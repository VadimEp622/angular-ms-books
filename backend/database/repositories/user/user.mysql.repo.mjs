import { dbService } from "../../../services/db.service.mjs"
import { logger } from "../../../services/logger.service.mjs"

export default {
    query,
    getById,
    add,
    getByUsername
}

// TODO: find a way to get timestamp from uuid, such that you don't have created_at column in the database itself,
//      but so that the result that returns, already includes the create_at key
// TODO: before doing the above, consider the database models for the different databases

// TODO: consider changing to ts, for better type safety



async function query() {
    try {
        const connection = await dbService.connectMysql()
        const query = `SELECT HEX(_id) AS _id, username, password, fullname FROM user`
        const [results] = await connection.query(query)
        return results
    } catch (error) {
        logger.error(`Failed mysql user database query`, error)
        throw error
    }
}

async function getById(userId) {
    try {
        const connection = await dbService.connectMysql()
        const query = `SELECT HEX(_id) AS _id, username, password, fullname FROM user WHERE _id = UNHEX(?)`
        const [results] = await connection.query(query, [userId])
        return results[0]
    } catch (error) {
        logger.error(`Failed mysql user database getById: ${userId}`, error)
        throw error
    }
}

async function add(user) {
    try {
        const { username, password, fullname } = user
        const query = `INSERT INTO user (username, password, fullname) VALUES (?,?,?)`
        const connection = await dbService.connectMysql()

        await connection.query(query, [username, password, fullname])

        // TODO: do a getByUsername, if the user exists, then it has been added, then return it. otherwise return null 

    } catch (error) {
        logger.error(`Failed mysql user database add`, error)
        throw error
    }
}

async function getByUsername(username) {
    try {
        const connection = await dbService.connectMysql()
        const query = `SELECT HEX(_id) AS _id, username, password, fullname FROM user WHERE username = ?`
        const [results] = await connection.query(query, [username])
        return results[0]
    } catch (error) {
        logger.error(`Failed mysql user database getByUsername: ${username}`, error)
        throw error
    }
}