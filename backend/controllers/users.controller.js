const mongoose = require('mongoose');
var users = require('../models/users');
var states = require('../models/state');

module.exports = {
     getUser: (req, res) => {
        users.find()
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    res.status(200).send(result);
                }
            });
    },    
getUserDetails: (req, res) => {
        users.findOne({ _id: req.params.userId })
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    // result[0].state = states.name;
                    res.status(200).send(result);
                }
            });
    },
   updateProfile: (req, res) => {
         users.update({_id: req.body.userID}, {$set: {fname: req.body.fname, lname: req.body.lname}})
              .exec((err, result) => {
                 if(err)
                   res.status(400).send(err);
                 else{
                   res.status(200).send(result);
                   }
});
},
  editUser: (req, res) => {
        users.findById({_id: req.params.id })
                  .exec((err, result) => {
            res.json(result);
        });
    }
}
