import { ObjectId } from 'mongodb'
import { logger } from '../../services/logger.service.mjs'
import { dbService } from "../../services/db.service.mjs"


export const userService = {
    query,
    getById,
    add,
    getByUsername,
    //     addTrip,
    //     updateWishlist,
    //     query,
    //     remove,
    //     update,
}


// TODO: make an exportable query list that any function here can use
// TODO: abstract database to make just dbservice.user.query(), to handle database difference there, to make code here simpler 


async function query() {
    try {
        if(process.env.NODE_ENV === 'production') {

            // const criteria = _buildCriteria()
            const collection = await dbService.getMongoCollection('user')
            let users = await collection.find({}).toArray()
            users = users.map(user => {
                delete user.password
                user.createdAt = user._id.getTimestamp()
                return user
            })
            return users

        }else{
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
        }
    } catch (err) {
        logger.error(`Failed fetching users`, err)
        throw err
    }
}


async function getById(userId = '3853383007CF11EF94347C10C9D06414') {
    try {
        if(process.env.NODE_ENV === 'production') {
            // const criteria = _buildCriteria()
            const collection = await dbService.getMongoCollection('user')
            let user = await collection.findOne({_id: ObjectId.createFromHexString(userId)})
            delete user.password
            user.createdAt = user._id.getTimestamp()
            return user

        }else{
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
        }
    } catch (err) {
        logger.error(`while finding user by id: ${userId}`, err)
        throw err
    }
}

async function add(user) {
    try {
        const { username, password, fullname } = user

        if(process.env.NODE_ENV === 'production') {
            // TODO: make a way to create new user properly in mongoDB
            const userToAdd={username, password, fullname}
            const collection = await dbService.getMongoCollection('user')
            await collection.insertOne(userToAdd)
        }else{

            // TODO: make a way to return the newly created user
            const query = `
            INSERT INTO user (username, password, fullname) 
            VALUES ('${username}', '${password}', '${fullname}')
            `
            const connection = await dbService.connectMysql()
            const [results] = await connection.query(query)
            logger.debug('added user to db', results)
        }
    } catch (err) {
        logger.error('cannot add user', err)
        throw err
    }
}


async function getByUsername(username) {
    try {
        if(process.env.NODE_ENV === 'production') {
            // TODO: make a way to return the newly created user for mongodb
            const collection = await dbService.getMongoCollection('user')
            let user = await collection.findOne({username: username})
            if(!user) return null
            user.createdAt = user._id.getTimestamp()
            return user
        }else{

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
        }
    } catch (err) {
        logger.error(`while finding user by username: ${username}`, err)
        throw err
    }
}


// private functions
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


// ************ IGNORE BELOW - PURELY FOR REFERENCE ************

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