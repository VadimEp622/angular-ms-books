import dotenv from 'dotenv'
dotenv.config()

export default {
    dbURL: process.env.MONGODB_URL,
    dbName: process.env.MONGODB_DATBASE
}