import expressAsyncHandler from "express-async-handler"
import { manageAccounts } from "../../useCases/accounts.use.case.js"
import { manageBalanceSheet } from "../../useCases/balance.sheet.use.case.js"
import { manageCompanyInfo } from "../../useCases/company.info.use.case.js"
import { manageCustomers } from "../../useCases/customer.use.case.js"
import { manageInvoices } from "../../useCases/invoices.use.case.js"
import { manageProfitAndLoss } from "../../useCases/profit.and.loss.use.case.js"

export const companyInfoController = expressAsyncHandler(async (req, res) => {
    const data = await manageCompanyInfo(req.oauthClient)
    res.json(data)
})

export const getBalanceSheetController = expressAsyncHandler(async (req, res) => {
    const data = await manageBalanceSheet(req.oauthClient)
    res.json(data)
})

export const getProfitAndLossController = expressAsyncHandler(async (req, res) => {
    const data = await manageProfitAndLoss(req.oauthClient)
    res.json(data)
})

export const getAccountsController = expressAsyncHandler(async (req, res) => {
    const data = await manageAccounts(req.oauthClient)
    res.json(data)
})

export const getInvoicesController = expressAsyncHandler(async (req, res) => {
    const data = await manageInvoices(req.oauthClient)
    res.json(data)
})

export const getCustomersController = expressAsyncHandler(async (req, res) => {
    const data = manageCustomers(req.oauthClient)
    res.json(data)
})
