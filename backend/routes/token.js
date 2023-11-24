const express = require('express')
const Authentication = require('../middlewares/Authentication.js')
const TokenManagement = require('../lib/Token.js')
const tokenRouter = express.Router()

tokenRouter.get('/', async (req, res) => {
    const token = req.headers.access_token
    try {
        const user = await TokenManagement.verify(token)
        // Remove overriding fields
        delete user.iat
        delete user.exp
        const newToken = TokenManagement.createToken(user)
        res.send(newToken)
    } catch (error) {
        res.status(401).send()
    }
})


module.exports = tokenRouter


