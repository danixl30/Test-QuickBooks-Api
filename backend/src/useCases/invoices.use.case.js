import { invoicesFetch } from "../QB/api/invoices.js"

export const manageInvoices = async (oauthClient) => {
    const data = await invoicesFetch(
        oauthClient.token.access_token, 
        oauthClient.token.realmId
    )
    return data
}
