export const errorMiddleware = (err, _, res, _n) => {
    const code = err.status || 500
    res.status(code).json({ message: err.message })
}
