const ApiError = require("../common/errorClass.js")

module.exports = (err, req, res, next) => {
    if(err instanceof ApiError) return res.status(err.status).json({message: err.message})
    return res.status(500).json({message: err.message})
}
