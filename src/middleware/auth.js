const jwt = require('jsonwebtoken')
const User = require('../models/user')

const auth = async (req, res, next) => {
    try {
        const token = req.header('Authorization').replace('Bearer ', '')
        const decoded = await jwt.verify(token, process.env.JSON_STRING)
        const user = await User.findOne({ _id: decoded._id, 'tokens.token': token })
        if (!user) {
            throw new Error("User Not Logged in!")
        }
        if (!user.verified) {
            throw new Error("Please Verify Your Account!")
        }
        req.token = token
        req.user = user
        next()
    }
    catch (e) {
        res.status(401).send({ status: "error", message: e.message })
    }

}

module.exports = auth