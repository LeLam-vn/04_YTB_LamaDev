const mongoose = require('mongoose')
const stream = require("stream");
const Schema = mongoose.Schema

const UserSchema = new Schema(
    {
        username: {type: String, require: true, unique: true},
        email: {type: String, require: true, unique: true},
        password: {type: String, require: true,},
        isAdmin: {
            type: Boolean,
            default: false
        },
        createdAt: Date.now()
    },
    {timestamps: true}
)

module.export = mongoose.model('User', UserSchema)