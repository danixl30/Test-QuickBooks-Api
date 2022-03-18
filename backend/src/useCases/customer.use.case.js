import { customersFetch } from "../QB/api/customers.js"

export const manageCustomers = async (oauthClient) => {
    const data = await customersFetch(
        oauthClient.token.access_token, 
        oauthClient.token.realmId
    )
    return data
}
