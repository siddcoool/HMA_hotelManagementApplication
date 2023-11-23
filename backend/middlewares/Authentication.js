const TokenManagement = require("../lib/Token")
const User = require("../models/User")

class Authentication {
    constructor() { }

    static async Admin(req, res, next) {
        try {
            const token = req.headers.access_token
            if (!token) {
                throw new Error('Token not present')
            }
            const user = await TokenManagement.verify(token)
            if (!user.isAdmin) {
                throw new Error('Access Denied')
            }
            req.context = {
                user: await User.findById(user._id)
            }
            next()
        } catch (error) {
            res.status(401).send({
                message: error.message
            })
        }
    }

    static async Customer(req, res, next) {
        try {
            const token = req.headers.access_token
            if (!token) {
                throw new Error('Token not present')
            }
            const user = await TokenManagement.verify(token)
            req.context = {
                user: await User.findById(user._id)
            }
            if(req.context.user.isBlocked){
                res.status(401).json({message:"user is blocked"})
            }
            
            next()
        } catch (error) {
            res.status(401).send({
                message: error.message
            })
        }
    }
}
/**
 app.use(isAuthenticated)
 isAuthenticated = (req, res, next) => {...}
 */

module.exports = Authentication