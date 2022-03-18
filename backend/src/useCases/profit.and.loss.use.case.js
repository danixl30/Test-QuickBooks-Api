import {profitAndLossFetch} from "../QB/api/profit.and.loss.js"

export const manageProfitAndLoss = async (oauthClient) => {
    const data = await profitAndLossFetch(
        oauthClient.token.access_token, 
        oauthClient.token.realmId
    )
    return data
}
