import { qbError } from "../../error/errors.js"
import axios from "axios"

export const accountsFetch = async (accessToken, realmId) => {
    try {
        const response = await axios.get('https://sandbox-quickbooks.api.intuit.com/v3/company/' + realmId + '/query?query=SELECT * FROM Account', {
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

export const accountFetch = async (accessToken, realmId, accountId) => {
    try {
        const response = await axios.get('https://sandbox-quickbooks.api.intuit.com/v3/company/' + realmId + '/account/' + accountId, {
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
