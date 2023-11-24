const mongoose = require("mongoose")
const bcrypt = require("bcrypt");
const SALT_WORK_FACTOR = 10;

const UserSchema = new mongoose.Schema(
    {
        name: String,
        gender: String,
        email: String,
        password: String,
        isDeleted: {
            type: Boolean,
            default: false
        },
        isBlocked: {
            type: Boolean,
            default: false
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
    }
)

UserSchema.pre("save", function (next) {
    let user = this;

    if (!user.isModified("password")) return next()
    bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
        if (err) return next(err)

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) return next(err)
            user.password = hash
            next()
        })
    })
})

UserSchema.methods.comparePassword = function(candidatePassword){
    const currentPassword = this.password
    return new Promise((resolve, reject)=>{
        bcrypt.compare(candidatePassword, currentPassword, function (err, isMatch){
            if(err) return reject(err)
            resolve(isMatch)
        })
    })
}
const User = mongoose.model("User", UserSchema)
module.exports = User;