import configDB from './db.config.mjs'
import dotenv from 'dotenv'

dotenv.config()

export let config

config = configDB

// config.isGuestMode = false