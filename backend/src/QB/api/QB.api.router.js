import { Router } from "express"
import { authMiddleware } from "../../auth/auth.middleware.js"
import { 
    companyInfoController, 
    getAccountsController, 
    getBalanceSheetController, 
    getCustomersController, 
    getInvoicesController, 
    getProfitAndLossController 
} from "./QB.api.controller.js"

const ApiRouter = Router()

ApiRouter.use(authMiddleware)

ApiRouter.get('/companyinfo', companyInfoController)
ApiRouter.get('/balancesheet', getBalanceSheetController)
ApiRouter.get('/profitandloss', getProfitAndLossController)
ApiRouter.get('/accounts', getAccountsController)
ApiRouter.get('/invoices', getInvoicesController)
ApiRouter.get('/customers', getCustomersController)

export default ApiRouter
