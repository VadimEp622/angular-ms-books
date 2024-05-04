import { userService } from './user.service.mjs'
import { logger } from '../../services/logger.service.mjs'


export async function getUsers(req, res) {
    try {
        const users = await userService.query()
        logger.info('Get users')
        res.send(users)
    } catch (err) {
        logger.error('Failed to get users', err)
        res.status(400).send({ err: 'Failed to get users' })
    }
}

export async function getUser(req, res) {
    try {
        const userId = req.params.id
        const user = await userService.getById(userId)
        logger.info('Get user by userId:', userId)
        res.send(user)
    } catch (err) {
        logger.error('Failed to get user', err)
        res.status(400).send({ err: 'Failed to get user' })
    }
}

// temporary, before moving to auth route as registeration
export async function createUser(req, res) {
    try {
        const user = req.body
        await userService.add(user)
        logger.info('Created user')
        res.send({ msg: 'Created User Successfully' })
    } catch (err) {
        logger.error('Failed to create user', err)
        res.status(400).send({ err: 'Failed to create user' })
    }

}

// ********************** ignore everything below this line (this is reference help code) **********************
// // ====================== Confirmed Being Used ======================
// export async function getUser(req, res) {
//     try {
//         const userId = req.params.id
//         const user = await userService.getById(userId)
//         logger.info('Get user by userId:', userId)
//         res.send(user)
//     } catch (err) {
//         logger.error('Failed to get user', err)
//         res.status(400).send({ err: 'Failed to get user' })
//     }
// }

// export async function addUserTrip(req, res) {
//     const userId = req.params.id
//     const orderId = req.body.orderId
//     try {
//         const updatedUser = await userService.addTrip(userId, orderId)
//         res.send(updatedUser)
//     } catch (err) {
//         logger.error('Failed adding trip to user', err)
//         res.status(400).send({ err: 'Failed adding trip to user' })
//     }
// }

// export async function updateUserWishlist(req, res) {
//     const userId = req.params.id
//     const { _id, imgUrls, loc, type, bedrooms, price, availableDates, reviews } = req.body
//     const wishlistStay = { _id, imgUrls, loc, type, bedrooms, price, availableDates, reviews }
//     try {
//         const user = await userService.getById(userId)
//         const updateReport = await userService.updateWishlist(user, wishlistStay)
//         logger.info('Updated wishlist', updateReport.wishlistStatus, `stayId: ${updateReport.stayId}`)
//         res.send(updateReport)
//     } catch (err) {
//         logger.error('Failed to update user wishlist', err)
//         res.status(400).send({ err: 'Failed to update user wishlist' })
//     }
// }
// // ==================================================================
// // =================== Confirmed works but unused ===================
// export async function getUsers(req, res) {
//     try {
//         const filterBy = {
//             txt: req.query?.txt || '',
//             minBalance: +req.query?.minBalance || 0
//         }
//         const users = await userService.query(filterBy)
//         res.send(users)
//     } catch (err) {
//         logger.error('Failed to get users', err)
//         res.status(400).send({ err: 'Failed to get users' })
//     }
// }

// export async function updateUser(req, res) {
//     const userId = req.params.id
//     const user = req.body
//     try {
//         const savedUser = await userService.update(userId, user)
//         res.send(savedUser)
//     } catch (err) {
//         logger.error('Failed to update user', err)
//         res.status(400).send({ err: 'Failed to update user' })
//     }
// }

// export async function deleteUser(req, res) {
//     const userId = req.params.id
//     try {
//         await userService.remove(userId)
//         res.send({ msg: 'Deleted successfully' })
//     } catch (err) {
//         logger.error('Failed to delete user', err)
//         res.status(400).send({ err: 'Failed to delete user' })
//     }
// }
// // ==================================================================