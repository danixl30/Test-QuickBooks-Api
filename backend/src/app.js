import express from "express"
import cors from "cors"
import qbAuthRouter from "./QB/auth/auth.router.js"
import { errorMiddleware } from "./error/error.middleware.js"
import ApiRouter from "./QB/api/QB.api.router.js"
import { notFountMiddelware } from "./otherMiddelwares/not.found.js"

const app = express()

app.use(cors())
app.use(express.json())

app.use('/QB/auth', qbAuthRouter)
app.use('/QB/api', ApiRouter)

app.use(notFountMiddelware)

app.use(errorMiddleware)

export default app
