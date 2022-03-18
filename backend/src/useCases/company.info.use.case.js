import {getCompanyInfo} from "../QB/api/company.js"

export const manageCompanyInfo = async (oauthClient) => {
    const data = await getCompanyInfo(
        oauthClient.token.access_token, 
        oauthClient.token.realmId
    )
    return data
}
