import NodeCache from 'node-cache'

export const bookCache = new NodeCache({ stdTTL: 3600 })