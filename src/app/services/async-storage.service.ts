import { Book } from "../models/book.model"
import { User } from "../models/user.model"


export const storageService = {
    query,
    get,
    post,
    put,
    remove
}

// TODO: remake service as a class, for consistency and better testability

type Entity = Book | User

async function query(entityType: string, delay = 10): Promise<Entity[]> {
    const entities = JSON.parse(localStorage.getItem(entityType) || 'null') || []
    return new Promise((resolve) => setTimeout(resolve, delay, entities))
}

async function get(entityType: string, entityId: string): Promise<Entity> {
    const entities = await query(entityType)
    const entity = entities.find(entity => entity._id === entityId)
    if (!entity) throw new Error(`Cannot get, Item ${entityId} of type: ${entityType} does not exist`)
    return entity
}

async function post(entityType: string, newEntity: Entity): Promise<Entity> {
    const entities = await query(entityType)
    // TODO (?): check for duplicate, and throw new Error if it exists
    entities.push(newEntity)
    _save(entityType, entities)
    return newEntity
}

async function put(entityType: string, updatedEntity: Entity): Promise<Entity> {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === updatedEntity._id)
    if (idx === -1) throw new Error(`Cannot update, item ${updatedEntity._id} of type: ${entityType} does not exist`)
    entities[idx] = updatedEntity
    _save(entityType, entities)
    return updatedEntity
}

async function remove(entityType: string, entityId: string): Promise<string> {
    const entities = await query(entityType)
    const idx = entities.findIndex(entity => entity._id === entityId)
    if (idx === -1) throw new Error(`Cannot remove, item ${entityId} of type: ${entityType} does not exist`)
    entities.splice(idx, 1)
    _save(entityType, entities)
    return entityId
}

// -------------- Local Functions --------------
function _save(entityType: string, entities: Entity[]) {
    localStorage.setItem(entityType, JSON.stringify(entities))
}