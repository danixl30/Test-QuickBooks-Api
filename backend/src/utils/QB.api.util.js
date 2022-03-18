import QuickBooks from "node-quickbooks"

export const createQBClient = (oauthClient) => 
    new QuickBooks(
        oauthClient.clientId,
        oauthClient.clientSecret,
        oauthClient.token.access_token,
        false,
        oauthClient.token.realmId,
        true,
        true,
        null,
        '2.0',
        oauthClient.token.refresh_token
    )

