import { balanceSheetFetch } from "../QB/api/balance.sheet.js"

export const manageBalanceSheet = async (oauthClient) => {
    const data = await balanceSheetFetch(
        oauthClient.token.access_token, 
        oauthClient.token.realmId
    ) 
    return data
}
