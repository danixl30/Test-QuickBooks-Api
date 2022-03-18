const records = {}

export const getData = (userId) => records[userId]

export const setData = (userId, oauthClient) => records[userId] = oauthClient
