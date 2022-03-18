import OAuthClient from "intuit-oauth"
import { qbError, unathorizedError } from "../../error/errors.js"
import { getData, setData } from "../../storage/auth.client.storage.js"
import { generateId } from "../../utils/unic.id.js"

const clientId = process.env.CLIENT_ID
const clientSecret = process.env.CLIENT_SECRET
const environment = process.env.ENVIRONMENT
const redirectUri = process.env.CALLBACK_URI

const createClient = () => 
    new OAuthClient({
        clientId,
        clientSecret,
        environment,
        redirectUri
    })

const getAuthUrl = (oauthClient, userId) => 
    oauthClient
        .authorizeUri( { 
            scope: [ 
                OAuthClient.scopes.Payment, 
                OAuthClient.scopes.Accounting, 
                OAuthClient.scopes.OpenId, 
                OAuthClient.scopes.Profile 
            ], 
            state: userId 
        } 
    )

export const manageLogin = () => {
    const userId = generateId()
    const oauthClient = createClient()
    setData(userId, oauthClient)
    return { 
        url: getAuthUrl(oauthClient, userId),
        userId
    }
}

export const manageCallback = async (userId, url) => {
    const oauthClient = getData(userId)
    if (!oauthClient) 
        throw unathorizedError() 
    try {
        await oauthClient.createToken(url)
    }catch (e) {
        console.log(e)
        throw qbError()
    }
}

export const refreshToken = async (oauthClient) => {
    try {
        await oauthClient.refresh()
    }catch (e) {
        console.log(e)
        throw qbError()
    }
}
