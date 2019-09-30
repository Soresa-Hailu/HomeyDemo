var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const clientRequestSchema = mongoose.model('clientRequest', new mongoose.Schema({
       user_id: {
         type: Schema.Types.ObjectId,
         ref: 'users'
       },
       house_id: {
         type: Schema.Types.ObjectId,
         ref: 'house'
       },
       agent_id: {
         type: Schema.Types.ObjectId,
         ref: 'agent'
       },
       Seen: {
        type: String,
        default: 'unseen',
        enum: ['unseen', 'seen']
    },
     createdOn: {
        type: Date,
        default: Date.now()
    }
}));

module.exports = clientRequestSchema;     
       
       
