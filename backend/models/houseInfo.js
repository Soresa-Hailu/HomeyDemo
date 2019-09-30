var mongoose = require('mongoose');
var Schema = mongoose.Schema;

houseInfoSchema = new Schema({
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
    address: {
        type: String
    },
    rating: {
        type: Number,
        required: true,
        default: 10,
        enum: [1,2,3,4,5,6,7,8,9,10]
    },
    owner: {
         type: String,
         required: true,
       },
    ownerAddress: {
         type: String,
       },
    length: {
        type: Number
       },
    breadth: {
        type: Number
       },
    bedRooms: {
         type: Number,
         required: true
            },
    bathRooms: {
          type: Number,
          required: true
           },
    numberOfSchools: {
           type: Number,
           required: true 
          },
    numberOfShop: {
           type: Number,
           required: true
             },
    price: {
            type: String,
            required: true   
         },
    status: {
        type: String,
        default: 'available', 
        enum: [ 'available', 'sold', 'rented', 'expired' ]
    },
    isActive: {
        type: Boolean,
        default: true
    },
    updatedOn: {
        type: Date,
        default: Date.now()
    },
    createdOn: {
        type: Date
    }
});

module.exports = mongoose.model('houseInfo', houseSchema);
