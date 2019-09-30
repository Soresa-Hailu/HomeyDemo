var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const scoopSchema = mongoose.model('scoop', new mongoose.Schema({
    title: {
        type: String
    },
    description: {
        type: String
    },
    images: {
        type: [String]
    },
    imgPath: {
        type: String
    },
    sourceUrl: {
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

module.exports = scoopSchema;
