const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const userModel = new mongoose.Schema({
    _id: {
        type: String,
        default: uuidv4
    },
    firstName: String,
    lastName: String,
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
}, { timestamps: true})

const User = mongoose.model('User', userModel)
module.exports = User