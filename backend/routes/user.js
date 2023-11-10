const express = require('express')
const User = require('../models/User.js')
const userRouter = express.Router()
const { body, validationResult } = require('express-validator')
const TokenManagement = require('../lib/Token.js')
const Authentication = require('../middlewares/Authentication.js')

userRouter.get('/', Authentication.Admin, async (req, res) => {
    // const cachedUsers = await redisConnection.client.get('users')
    // if (cachedUsers) {
    //     return res.send(cachedUsers)
    // }

    const users = await User.find({})
    res.send(users);
});

userRouter.post("/login", async (req, res) => {
    const body = req.body
    const user = await User.findOne({ email: body.email, password: body.password }, { password: 0 })
    if (!user) {
        res.status(404).json({ message: "user not found" })
    }
    else {
        res.json({
            message: "Login Success",
            token: TokenManagement.createToken(user.toJSON()),
            user: {
                id: user._id,
                name: user.name,
                email: user.email
            }
        })
    }
})

userRouter.post("/register",
    body('email').notEmpty().trim().isEmail().withMessage("your email is incorrect"),
    body('name').notEmpty().isAlpha().withMessage("your name is incorrect"),
    body('password').isStrongPassword().withMessage("your password is weak"),
    async (req, res) => {
        const body = req.body
        const result = validationResult(req)
        if (!result.isEmpty()) {
            return res.status(400).send({ errors: result.array() });
        }
        const existingUser = await User.findOne({ email: body.email })
        if (!existingUser) {
            const user = await User.create(req.body)
            res.status(200).json({
                message: "user saved successfully",
                token: TokenManagement.createToken(user.toJSON()),
                user: {
                    id: user._id,
                    name: user.name,
                    email: user.email
                }
            })
        }
        else {
            res.status(400).json({ message: "this account is already been registered" })
        }


    })

userRouter.get("/me", Authentication.Customer, async (req, res) => {
    res.json(req.context.user)
})

userRouter.get("/:id", Authentication.Customer, async (req, res) => {
    const id = req.params.id
    let user = await User.findById(id, { password: 0 })
    if (user.isDeleted) {
        return res.status(404).json({ message: "user not found" })
    }
    res.json(user)
})

userRouter.delete("/:id", async (req, res) => {
    const id = req.params.id
    const newEntry = {
        isDeleted: true
    }
    
    const user = await User.findByIdAndUpdate(id, newEntry)
    res.json(user)
})

userRouter.put("/:id", async (req, res) => {
    const id = req.params.id
    const { name, gender, isAdmin } = req.body
    const newEntry = {
        name, gender, isAdmin
    }

    const user = await User.findByIdAndUpdate(id, newEntry)
    res.json(user)
})

userRouter.put("/:id/reset", async (req, res) => {
    const id = req.params.id
    const { email, password } = req.body
    const newEntry = {
        email, password
    }
    const user = await User.findByIdAndUpdate(id, newEntry)
    res.json(user)
})

module.exports = userRouter