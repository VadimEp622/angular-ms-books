import mysql from './mysql.config.mjs'
import mongodb from './mongodb.config.mjs'
import dotenv from 'dotenv'

dotenv.config()

export let config = {}

// config.configDB = mysql

config.configDB = process.env.NODE_ENV === 'production'? mongodb: mysql

config.isGuestMode = false