var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const houseClientSchema = mongoose.model('houseClient', new mongoose.Schema({
    houseFor: {
        type: String,
        required: true,
        default: 'sell',
        enum: ['sell', 'rent']
    },
    description: {
        type: String
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'houseTypes'
    },
    status: {
        type: String,
        default: 'rejected', 
        enum: [ 'accepted', 'rejected' ]
    },
    wantAgent: {
        type: String,
        required: true,
        default: 'yes',
        enum: [ 'yes', 'no']
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'States'
    },
    owner: {
         type: String,
         default: 'Anonymous'
    },
    ownerAddress: {
         type: String,
         default: 'Anonymous'
    },
    city: {
        type: Schema.Types.ObjectId,
        ref: 'City'
    },
    length: {
        type: Number,
        required: true
    },
    breadth: {
        type: Number,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    bedRooms: {
         type: Number,
         default: 0,
         required: true
    },
    bathRooms: {
          type: Number,
          default: 0,
          required: true
    },
    email: {
        type: String,
        required: true
    },
    price: {
        type: Number
    },
    phoneNo: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        required: true
    },
    slug : {
        type: String,
        required: true
    },
    images: {
        type: [String]
    },
    imgPath: {
        type: String
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    },
    createdOn: {
        type: Date,
        default: Date.now()
    }
}) );

module.exports = houseClientSchema;
