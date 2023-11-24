const jwt = require('jsonwebtoken');

const secret = process.env.SECRET

class Token {
    constructor() { }

    createToken(payload) { // e.g user, room, booking
        return jwt.sign(payload, secret, { expiresIn: 1200 });
    }

    verify(token) {
        return new Promise((resolve, reject) => {
            jwt.verify(token, secret, (err, payload) => {
                if (err) reject(err)
                else resolve(payload)
            });
        })
    }
}

const TokenManagement = new Token()   

module.exports = TokenManagement