import mysql from 'mysql2/promise'
import { MongoClient } from 'mongodb'
import { config } from '../config/index.mjs'
import { logger } from './logger.service.mjs'


export const dbService = {
    connectMysql,
    getMongoCollection
}


let dbConn = null


async function connectMysql() {
    if (dbConn) return dbConn
    try {
        const db = mysql.createPool(config.configDB)
        dbConn = db
        return db
    } catch (err) {
        logger.error('Cannot Connect to DB', err)
        throw err
    }
}

async function connectMongo() {
    if (dbConn) return dbConn
    try {
        const client = new MongoClient(config.configDB.dbURL)
        await client.connect()
        const db = client.db(config.configDB.dbName)
        dbConn = db
        return db
    } catch (err) {
        logger.error('Cannot Connect to mongoDB', err)
        throw err
    }
}

async function getMongoCollection(collectionName) {
    try {
        logger.debug('collectionName', collectionName)
        const db = await connectMongo()
        const collection = db.collection(collectionName)
        return collection
    } catch (err) {
        logger.error('Failed to get Mongo collection', err)
        throw err
    }
}