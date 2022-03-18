import { accountsFetch } from "../QB/api/accounts.js"

export const manageAccounts = async (oauthClient) => {
    const data = await accountsFetch(
        oauthClient.token.access_token, 
        oauthClient.token.realmId
    )
    return data
}
