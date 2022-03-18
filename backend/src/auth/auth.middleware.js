import expressAsyncHandler from "express-async-handler"
import { unathorizedError } from "../error/errors.js"
import { refreshToken } from "../QB/auth/auth.service.js"
import { getData } from "../storage/auth.client.storage.js"

export const authMiddleware = expressAsyncHandler(async (req, _, next) => {
    const oauthClient = getData(req.headers.userid)

    if (!oauthClient) 
        throw unathorizedError()

    if (!oauthClient.isAccessTokenValid())
        await refreshToken(oauthClient)

    req.oauthClient = oauthClient
    
    next()
})
