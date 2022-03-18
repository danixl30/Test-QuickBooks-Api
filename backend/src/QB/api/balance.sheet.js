import axios from "axios"
import { qbError } from "../../error/errors.js"
import { promisify } from "../../utils/promisify.js"

export const balanceSheet = async (quickBooksClient) => {
    try {
        const promBalanceSheet = promisify(quickBooksClient.reportBalanceSheet)
        const data = await promBalanceSheet({ department: '1,4,7' })
        return data
    }catch (e) {
        console.log(e)
        throw qbError()
    }
}

export const balanceSheetFetch = async (accessToken, realmId) => {
    try {
        const response = await axios.get('https://sandbox-quickbooks.api.intuit.com/v3/company/' + realmId + '/reports/BalanceSheet', {
            headers: {
                Authorization: 'Bearer ' + accessToken
            }
        })
        return response.data
    }catch (e) {
        console.log(e)
        throw qbError()
    }
}
