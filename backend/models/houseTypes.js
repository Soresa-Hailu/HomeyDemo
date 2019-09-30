var mongoose = require('mongoose');
var Schema = mongoose.Schema;

houseTypesSchema = new Schema({

    title: {
        type: String
    },
    type: {
        type: String,
        required: true,
        enum: ['residential', 'commericial', 'land', 'other']
    },
    is_active: {
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
module.exports = mongoose.model('houseTypes', houseTypesSchema);
