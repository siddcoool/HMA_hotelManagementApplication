const express = require('express')
const Booking = require('../models/Booking')
const bookingRouter = express.Router()


bookingRouter.get('/', async (req, res) => {
    const bookings = await Booking.find({})
        .populate(['user', 'room'])
    res.send(bookings)
})
bookingRouter.get('/me', async (req, res) => {
    const user = req.context.user
    const bookings = await Booking.find({ user }).populate("room")
    res.send(bookings)
})

bookingRouter.post("/:roomId", async (req, res) => {
    const { startDate, endDate, status, paymentMode } = req.body
    const { roomId } = req.params
    const { user } = req.context;

    const newBooking = {
        startDate, endDate, status, paymentMode, user, room: roomId
    }

    const booking = await Booking.create(newBooking)
    res.status(200).json({
        message: "booking is created"
    })
})

bookingRouter.put('/:bookingId', async (req, res) => {
    const id = req.params.bookingId
    const { startDate, endDate, status, paymentMode } = req.body

    const newBooking = {
        startDate, endDate, status, paymentMode
    }

    const booking = await Booking.findByIdAndUpdate(id, newBooking)
})

bookingRouter.delete('/:bookingId', async (req, res) => {
    const id = req.params.bookingId
    const newEntry = {
        isDeleted: true
    }
    const booking = await Booking.findByIdAndDelete(id, newEntry)
    res.json(booking)
})


module.exports = bookingRouter