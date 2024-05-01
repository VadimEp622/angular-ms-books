import { config } from '../config/index.mjs'
import mysql from 'mysql2/promise'


export const dbService = {
    connect
}



let dbConn = null


async function connect() {
    if (dbConn) return dbConn
    try {
        const db = mysql.createPool(config)
        dbConn = db
        return db
    } catch (err) {
        logger.error('Cannot Connect to DB', err)
        throw err
    }
}

// async function getCollection(collectionName) {
// }