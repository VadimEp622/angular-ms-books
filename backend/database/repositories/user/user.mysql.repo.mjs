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

async function query() {
    try {
        const connection = await dbService.connectMysql()
        const query = `
        SELECT 
            HEX(_id) AS _id,
            username,
            password,
            fullname
        FROM user
        `
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
        const query = `
        SELECT 
            HEX(_id) AS _id,
            username,
            password,
            fullname
        FROM user 
        WHERE _id = UNHEX('${userId}')
        `
        const [results] = await connection.query(query)
        return results[0]
    } catch (error) {
        logger.error(`Failed mysql user database getById: ${userId}`, error)
        throw error
    }
}

async function add(user) {
    try {
        const { username, password, fullname } = user
        const query = `
        INSERT INTO user (username, password, fullname) 
        VALUES ('${username}', '${password}', '${fullname}')
        `
        const connection = await dbService.connectMysql()
        const [results] = await connection.query(query)
        logger.debug('added user to mysql database', results)
    } catch (error) {
        logger.error(`Failed mysql user database add`, error)
        throw error
    }
}

async function getByUsername(username) {
    try {
        const connection = await dbService.connectMysql()
        const query = `
        SELECT 
            HEX(_id) AS _id,
            username,
            password,
            fullname 
        FROM user 
        WHERE username = '${username}'
        `
        const [results] = await connection.query(query)
        return results[0]
    } catch (error) {
        logger.error(`Failed mysql user database getByUsername: ${username}`, error)
        throw error
    }
}