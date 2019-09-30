var mongoose = require('mongoose');
var Schema = mongoose.Schema;

userSchema = new Schema({
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
        unique: true,
        required: true
    },
    phoneNo: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    },
    confirmed: {
        type: String,
        default: 'unconfirmed',
        enum: ['confirmed', 'unconfirmed']
    },
    dealCount: {
        type: Number,
        default: 0
    },
    createdOn: {
        type: Date
    }
});

module.exports = mongoose.model('users', userSchema);
