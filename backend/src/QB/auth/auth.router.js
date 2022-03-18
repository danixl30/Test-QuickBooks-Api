import { Router } from "express"
import { callback, getLoginUrl } from "./auth.controller.js"

const qbAuthRouter = Router()

qbAuthRouter.get('/login', getLoginUrl)

qbAuthRouter.get('/callback', callback)

export default qbAuthRouter
