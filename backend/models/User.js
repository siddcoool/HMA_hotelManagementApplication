const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema(
    {
        name : String,
        gender : String,
        email : String,
        password: String,
        isDeleted:{
            type : Boolean,
            default : false
        },
        isAdmin : {
            type: Boolean,
            default: false
        },
    }
)

const User = mongoose.model("User", UserSchema)
module.exports = User;