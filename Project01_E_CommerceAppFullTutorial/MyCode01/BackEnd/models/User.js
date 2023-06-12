const mongoose = require('mongoose');
const Schema = mongoose.Schema


const UserSchema = new Schema(
    {
        username: {type: String, require: true, unique: true},
        email: {type: String, require: true, unique: true},
        password: {type: String, require: true,},
        isAdmin: {
            type: Boolean,
            default: false,
        },
        // createdAt: Date.now()- used timestamp
    },
    {timestamps: true}
);

module.exports = mongoose.model('User', UserSchema);