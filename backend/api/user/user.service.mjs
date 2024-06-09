import { logger } from '../../services/logger.service.mjs'
import { database } from '../../database/index.mjs'


export const userService = {
    query,
    getById,
    add,
    getByUsername
}


// TODO: make an exportable query list that any function here can use


async function query() {
    try {
        const users = await database.user.query()
        return users
    } catch (error) {
        logger.error(`Failed fetching users`, error)
        throw error
    }
}


async function getById(userId = '3853383007CF11EF94347C10C9D06414') {
    try {
        const user = await database.user.getById(userId)
        return user
    } catch (error) {
        logger.error(`while finding user by id: ${userId}`, error)
        throw error
    }
}

async function add(user) {
    try {
        // TODO: make a way to return the newly created user
        await database.user.add(user)
    } catch (error) {
        logger.error('cannot add user', error)
        throw error
    }
}


async function getByUsername(username) {
    try {
        const user = await database.user.getByUsername(username)
        return user
    } catch (error) {
        logger.error(`while finding user by username: ${username}`, error)
        throw error
    }
}



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