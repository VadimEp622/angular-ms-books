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

        // const data2 = await connection.query(`SELECT @INSERT_ID`)
        // logger.debug('added user to mysql database -> data2[0][0]?.[@INSERT_ID]', data2[0][0]?.["@INSERT_ID"])
        // TODO:
        //      in mysql, possible to use variable @INSERT_ID to get the id of the inserted row 
        //      consider whether it's worth implementing, or just keep to finding user using getByUsername after inserting into mysql database

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