const mongoose = require("mongoose")

const RoomSchema = new mongoose.Schema(
    {
        floor : Number,
        description: String,
        price: Number,
        bed: Number,
        isAc : Boolean,
        isDeleted:{
            type : Boolean,
            default : false
        }
    }
)

const Room = mongoose.model("Room", RoomSchema)
module.exports = Room;