import { notFoundError } from "../error/errors.js"

export const notFountMiddelware = (_, _r, _n) => {
    throw notFoundError()
} 
