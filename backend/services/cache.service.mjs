import NodeCache from 'node-cache'

export const booksByGenreCache = new NodeCache({ stdTTL: 3600 })