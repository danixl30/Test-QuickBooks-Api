import axios from "axios"

export const profitAndLossFetch = async (accessToken, realmId) => {
    try {
        const response = await axios.get(
            'https://sandbox-quickbooks.api.intuit.com/v3/company/' 
            + realmId 
            + '/reports/ProfitAndLoss'
            , {
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
