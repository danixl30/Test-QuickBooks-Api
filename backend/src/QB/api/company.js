import axios from "axios"
import { qbError } from "../../error/errors.js"

const baseUrl = 'https://sandbox-quickbooks.api.intuit.com/v3/company/'

export const getCompanyInfo = async (accessToken, realmId) => {
    try {
        const response = await axios.get(baseUrl + realmId + '/query?query=SELECT * FROM CompanyInfo', {
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
