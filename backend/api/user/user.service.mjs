// import { dbService } from '../../services/db.service.mjs'
import { logger } from '../../services/logger.service.mjs'
// import mongodb from 'mongodb'
// const { ObjectId } = mongodb

import { dbService } from "../../services/db.service.mjs"


// TODO: research MySQLEvents (or something similiar), and see if that is what I need for the trigger


export const userService = {
    query,
    getById,
    createTable
    //     getById,
    //     getByUsername,
    //     add,
    //     addTrip,
    //     updateWishlist,
    //     query,
    //     remove,
    //     update,
}

// temporary table structure - to be improved
async function createTable() {
    const connection = await dbService.connect()

    const query = `
        CREATE TABLE user (
            id BINARY(16) NOT NULL,
            username VARCHAR(255) NOT NULL,
            password VARCHAR(255) NOT NULL,
            fullname VARCHAR(255) NOT NULL,
            PRIMARY KEY (id)
        );
    `

    const queryRes = await connection.query(query)
    console.log('queryRes', queryRes)

    const trigger = `
    CREATE TRIGGER before_insert_users
    BEFORE INSERT ON user
    FOR EACH ROW
    BEGIN
        SET NEW.id = UNHEX(REPLACE(UUID(), '-', ''));
    END;
    `

    const triggerRes = await connection.query(trigger)
    console.log('triggerRes', triggerRes)


    const [inserted] = await connection.query(
        `INSERT INTO user (username, password, fullname)
        VALUES ('johndoe', 'password123', 'John Doe');`
    )
    console.log('inserted', inserted)
}


// You may retrieve the UUID like this:

// SELECT HEX(id) AS uuid FROM user WHERE username = 'johndoe'; 


async function query() {
    try {
        const connection = await dbService.connect()
        const [results, fields] = await connection.query(`    
            SELECT 
                HEX(id) AS id,
                username,
                password,
                fullname
            FROM user
        `)
        console.log('results', results)
        console.log('fields', fields)
        return results
    } catch (err) {
        logger.error(`Failed fetching users`, err)
        throw err
    }
}


async function getById(userId = '3853383007CF11EF94347C10C9D06414') {
    try {
        const connection = await dbService.connect()
        const [results, fields] = await connection.query(
            `SELECT 
                HEX(id) AS id,
                username,
                password,
                fullname
            FROM user WHERE id = UNHEX('${userId}')`
        )

        console.log('results', results)
        console.log('fields', fields)
        return results
    } catch (err) {
        logger.error(`while finding user by id: ${userId}`, err)
        throw err
    }
}

// async function getById(userId) {
//     try {
//         const collection = await dbService.getCollection('user')
//         const user = await collection.findOne({ _id: ObjectId(userId) })
//         delete user.password
//         return user
//     } catch (err) {
//         logger.error(`while finding user by id: ${userId}`, err)
//         throw err
//     }
// }

// async function getByUsername(username) {
//     try {
//         const collection = await dbService.getCollection('user')
//         const user = await collection.findOne({ username })
//         logger.info('Searched user', `username: ${username}`)
//         return user
//     } catch (err) {
//         logger.error(`while finding user by username: ${username}`, err)
//         throw err
//     }
// }

// async function add(user) {
//     try {
//         const userToAdd = {
//             username: user.username,
//             password: user.password,
//             fullname: user.fullname,
//             imgUrl: user.imgUrl,
//             wishlist: [],
//             trip: [],
//         }
//         const collection = await dbService.getCollection('user')
//         await collection.insertOne(userToAdd)
//         logger.info('Creating user', `userId: ${userToAdd._id}`)
//         return userToAdd
//     } catch (err) {
//         logger.error('cannot add user', err)
//         throw err
//     }
// }

// async function addTrip(userId, orderId) {
//     try {
//         const collection = await dbService.getCollection('user')
//         const userPrms = await collection.findOneAndUpdate({ _id: ObjectId(userId) }, { $push: { trip: { orderId } } }, { returnOriginal: false })
//         const updatedUser = ({ ...userPrms.value })
//         delete updatedUser.password
//         delete updatedUser.username
//         return updatedUser
//     } catch (err) {
//         logger.error(`failed to add order ${orderId} to user ${userId}`, err)
//         throw err
//     }
// }

// async function updateWishlist(user, stay) {
//     try {
//         const isWishlist = user.wishlist.some(wishlist => wishlist._id === stay._id)
//         const collection = await dbService.getCollection('user')

//         if (isWishlist) {// removing from wishlist here
//             await collection.updateOne(
//                 { _id: ObjectId(user._id) },
//                 { $pull: { wishlist: { _id: stay._id } } }
//             )
//             return { stayId: stay._id, wishlistStatus: 'removed' }
//         } else {// adding to wishlist here
//             collection.updateOne(
//                 { _id: ObjectId(user._id) },
//                 {
//                     $push: {
//                         wishlist: {
//                             $each: [stay],
//                             $position: 0
//                         }
//                     }
//                 }
//             )
//             return { stayId: stay._id, wishlistStatus: 'added' }
//         }
//     } catch (err) {
//         logger.error(`cannot update user's ${user._id} wishlist, for stay ${stay._id}`, err)
//         throw err
//     }
// }

// async function query(filterBy = {}) {
//     const criteria = _buildCriteria(filterBy)
//     try {
//         const collection = await dbService.getCollection('user')
//         var users = await collection.find(criteria).toArray()
//         users = users.map(user => {
//             delete user.password
//             user.createdAt = ObjectId(user._id).getTimestamp()
//             return user
//         })
//         return users
//     } catch (err) {
//         logger.error('cannot find users', err)
//         throw err
//     }
// }

// async function update(userId, user) {
//     try {
//         const { fullname, imgUrl } = user
//         const userToSave = {}
//         if (fullname) userToSave.fullname = fullname
//         if (imgUrl) userToSave.imgUrl = imgUrl

//         const collection = await dbService.getCollection('user')
//         await collection.updateOne({ _id: ObjectId(userId) }, { $set: userToSave })
//         return userToSave
//     } catch (err) {
//         logger.error(`cannot update user ${userId}`, err)
//         throw err
//     }
// }

// async function remove(userId) {
//     try {
//         const collection = await dbService.getCollection('user')
//         await collection.deleteOne({ _id: ObjectId(userId) })
//     } catch (err) {
//         logger.error(`cannot remove user ${userId}`, err)
//         throw err
//     }
// }



// // private functions
// function _buildCriteria(filterBy) {
//     const criteria = {}
//     if (filterBy.txt) {
//         const txtCriteria = { $regex: filterBy.txt, $options: 'i' }
//         criteria.$or = [
//             {
//                 username: txtCriteria
//             },
//             {
//                 fullname: txtCriteria
//             }
//         ]
//     }
//     if (filterBy.minBalance) {
//         criteria.score = { $gte: filterBy.minBalance }
//     }
//     return criteria
// }