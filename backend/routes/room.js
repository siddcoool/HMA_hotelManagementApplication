const express = require('express')
const Room = require('../models/Room')
const roomRouter = express.Router()
const { body, validationResult } = require('express-validator')

roomRouter.get('/', async (req, res) => {
    const rooms = await Room.find({})
    res.send(rooms)
})

roomRouter.post("/",
    body('floor').notEmpty().trim().withMessage("enter floor"),
    body('price').notEmpty().isNumeric().trim().withMessage("enter price"),
    body('bed').isNumeric().notEmpty().trim().withMessage("enter bed"),
    body('isAc').notEmpty().isBoolean().withMessage("enter boolean values",
        async (req, res) => {
            const { floor, description, price, bed, isAc } = req.body

            const newRoom = {
                floor, description, price, bed, isAc
            }
            const room = await Room.create(newRoom)
            res.status(200).json({
                message : "room created successfully",
           })
        }
    )
)

roomRouter.delete("/:RoomId", async (req, res)=>{
    const id = req.params.id
    const newEntry = {
        is
    }
})

module.exports = roomRouter