const mongoose = require("mongoose")

const BookingSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    room : { type: mongoose.Schema.Types.ObjectId, ref: 'Room'},
    startDate: Date,
    endDate: Date,
    status: String,
    paymentMode : String
})

const Booking = mongoose.model("Booking", BookingSchema)
module.exports = Booking;