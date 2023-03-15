const mongoose = require('mongoose')

const requestsSchema = new mongoose.Schema({
    Email: {
        type: String,
        required: true
    },
    transactionId: {
        type: String,
        required: true,
        unique: true
    },
    quantity: {
        type: Number,
        required: true
    },
    senderAddress: {
        type: String,
        required: true
    },
    receiverAddress: {
        type: String,
        required: true
    }

})

const REQUEST = mongoose.model('REQUEST', requestsSchema)

module.exports = REQUEST