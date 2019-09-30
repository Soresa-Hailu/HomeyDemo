var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const houseSchema = mongoose.model('house', new mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: true
    },
    houseFor: {
        type: String,
        required: true,
        default: 'sell',
        enum: ['sell', 'rent']
    },
    user_id: {
        type: Schema.Types.ObjectId,
        ref: 'users',
        default: null
    },
    description: {
        type: String
    },
    type: {
        type: Schema.Types.ObjectId,
        ref: 'houseTypes'
    },
    state: {
        type: Schema.Types.ObjectId,
        ref: 'States'
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
    rating: {
        type: Number,
        default: 10,
        enum: [1,2,3,4,5,6,7,8,9,10]
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
    owner: {
         type: String,
         default: 'Anonymous'
    },
    ownerAddress: {
         type: String,
         default: 'Anonymous'
    },
    latitude: {
         type: Number,
         required: true
    },
    longitude: {
         type: Number,
         required: true
    },
    numberOfSchools: {
           type: Number,
           default: 0,
           required: true 
    },
    numberOfHospitals:{
           type: Number,
           default: 0,
           required: true
    },
    numberOfShop: {
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
    agentId: {
        type: Schema.Types.ObjectId,
        ref: 'agent',
        required: true
    },
    status: {
        type: String,
        default: 'available', 
        enum: [ 'available', 'sold', 'rented', 'expired']
    },
    deal: {
         type: String,
         default: 'approved',
         enum: [ 'break', 'approved' ]
    },
    wantAgent: {
         type: String,
         required: true,
         default: 'yes',
         enum: [ 'yes', 'no']
    },
    claim: {
        type: String,
        default: 'unclaimed',
        enum: ['claimed', 'unclaimed']
    },
    claimId: {
        type: Schema.Types.ObjectId,
        ref: 'agent',
        default: null
    },
    isActive: {
        type: Boolean,
        default: true
    },
    slug : {
        type: String,
        required: true
    },
    images: {
        type: [String]
    },
    likesByUsers: {
        type: [Schema.Types.ObjectId],
        ref: 'users'
    },
    videos: {
        type: [String]
    },
    imgPath: {
        type: String
    },
    safe: {
        type: String,
        required: true,
        enum: ['safe', 'unsafe']
    },
    policeStations: {
        type: Number,
        default: 0,
        required: true
    },
    age: {
        type: Number,
        default: 0,
        required: true
    },
    currentSituation: {
        type: String,
        required: true,
        enum: ['New','Fair','Need Maintenance','Severe']
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

module.exports = houseSchema;
