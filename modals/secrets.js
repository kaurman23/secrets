const mongoose = require('mongoose');

const secretSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, 'Please add a secret'],
        trim: true
    },
    likes: {
        type: Number,
        default: 0
    },
    timestamp: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Secret',secretSchema);