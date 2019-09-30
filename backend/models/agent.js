var mongoose = require('mongoose');
var Schema = mongoose.Schema;

agentSchema = new Schema({
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
    state: {
        type: Schema.Types.ObjectId,
        ref: 'States'
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    agentType: {
        type: String,
        required: true,
        default: 'realtor',
        enum: ['realtor', 'homier', 'admin']
    },
    rating: {
        type: Number,
        required: true,
        default: 5,
        enum: [1,2,3,4,5,6,7,8,9,10]
           },
    numberOfSell: {
        type: Number,
        required: true,
        default: 0
       },
    updatedOn: {
        type: Date,
        default: Date.now()
    },
    createdOn: {
        type: Date
    }
});

module.exports = mongoose.model('agent', agentSchema);
