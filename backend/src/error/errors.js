
export const unathorizedError = () => {
    const error = new Error('Not authorized')
    error.status = 401
    return error
}

export const qbError = () => {
    const error = new Error('Error on QB service')
    error.status = 503 
    return error
}

export const qbTimeOut = () => {
    const error = new Error('QB time out')
    error.status = 408
    return error
}

export const notFoundError = () => {
    const error = new Error('Not found')
    error.status = 404
    return error
}
