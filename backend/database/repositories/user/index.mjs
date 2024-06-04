import userMongo from "./user.mongo.repo.mjs"
import userMysql from "./user.mysql.repo.mjs"

export default process.env.NODE_ENV === 'production' ? userMongo : userMysql