import expressAsyncHandler from "express-async-handler"
import { manageCallback, manageLogin } from "./auth.service.js"

export const getLoginUrl = expressAsyncHandler((_, res) => {
    const data = manageLogin()
    res.json(data)
})

export const callback = expressAsyncHandler(async (req, res) => {
    await manageCallback(req.query.state, req.url) 
    res.send('ok')
})
