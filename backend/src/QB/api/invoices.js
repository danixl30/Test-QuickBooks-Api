import axios from "axios"

export const invoicesFetch = async (accessToken, realmId) => {
    try {
        const response = await axios.get('https://sandbox-quickbooks.api.intuit.com/v3/company/' + realmId + '/query?query=SELECT * FROM Invoice', {
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
