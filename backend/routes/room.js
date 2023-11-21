const express = require('express')
const Room = require('../models/Room')
const roomRouter = express.Router()
const { body, validationResult } = require('express-validator')
const Booking = require('../models/Booking')

roomRouter.get('/', async (req, res) => {
    const { startDate: start, endDate: end } = req.query
    let roomIds, query = {}
    if (start && end) {
        const bookings = await Booking.find({
            $or: [
                {
                    startDate: {
                        $gte: new Date(start),
                        $lte: new Date(end)
                    }
                },
                {
                    endDate: {
                        $gte: new Date(start),
                        $lte: new Date(end)
                    }
                },
                {
                    startDate: {
                        $lte: new Date(start),
                    },
                    endDate: {
                        $gte: new Date(end),
                    },
                }
            ],
        });

        roomIds = bookings.map(booking => booking.room)
    }
    if (roomIds) {
        query._id = {
            $nin: roomIds
        }
    }
    const rooms = await Room.find(query)

    res.send(rooms)
})

roomRouter.post('/',
    body('floor').notEmpty().trim().withMessage("enter floor"),
    body('price').notEmpty().isNumeric().trim().withMessage("enter price"),
    body('bed').isNumeric().notEmpty().trim().withMessage("enter bed"),
    body('isAc').isBoolean().withMessage("enter boolean values"),
    async (req, res) => {
        const { floor, description, price, bed, isAc, name } = req.body

        const newRoom = {
            floor, description, price, bed, isAc,name
        }
        const room = await Room.create(newRoom)
        res.status(200).json({
            message: "room created successfully",
        })
    }
)

roomRouter.delete("/:roomId", async (req, res) => {
    const id = req.params.roomId
    const newEntry = {
        isDeleted: true
    }
    const room = await User.findByIdAndUpdate(id, newEntry)
    res.json(room)
})

roomRouter.put("/:roomId", async (req, res) => {
    const id = req.params.roomId
    const { floor, Description, Price, bed, isAc } = req.body
    const newEntry = {
        floor, Description, Price, bed, isAc
    }
    const room = await Room.findByIdAndUpdate(roomId, newEntry)
})

module.exports = roomRouter