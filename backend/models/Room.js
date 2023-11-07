const mongoose = require("mongoose")

const RoomSchema = new mongoose.Schema(
    {
        floor : Number,
        Description: String,
        Price: Number,
        bed: Number,
        isAc : Boolean
    }
)

const Room = mongoose.model("Room", RoomSchema)
module.exports = Room;