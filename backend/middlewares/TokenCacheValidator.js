const TokenManagement = require("../lib/Token")
const { TokenCache } = require("../lib/allCache")
const { ipConvertor } = require("../lib/operation")

const tokenCache = async (req, res, next) => {
    try {
        const token = req.headers.access_token
        if (!token) {
            next()
            return
        }
        const device = TokenCache.get(token)
        if (!device) {
            // throw new Error('Unauthorized!')
            next()
            return
        }

        if (device !== ipConvertor(req)) {
            throw new Error('Unauthorized!')
        }
        try {
            await TokenManagement.verify(token)
        } catch (error) {
            TokenCache.delete(token)
            throw new Error(error)
        }
        next()
    } catch (error) {
        res.status(401).json({ message: 'Unauthorized!' })
    }
}

module.exports = tokenCache