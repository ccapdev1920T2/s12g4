var mongoose = require('mongoose');

var AccountSchema = new mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    hash: {
        type: String,
        required: true
    },
    salt: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true,
        min: 13,
        max: 110
    },
    address: {
        type: String,
        required: true
    },
    birthday: {
        type: Date,
        required: true
    },
    occupation: {
        type: String,
        required: true
    },
    passport_id: {
        type: String
    }
});

module.exports = mongoose.model('Account', AccountSchema);
