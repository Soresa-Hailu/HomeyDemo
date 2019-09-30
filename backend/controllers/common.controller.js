const mongoose = require('mongoose');
var state_model = require('../models/state');
var city_model = require('../models/city');
var users = require('../models/users');
var agent = require('../models/agent');
var house_type = require('../models/houseTypes');
var scoopModel = require('../models/scoop');

var mysort = { name: 1 };
var anothersort = { title: 1 };
var dangeroussort = { createdOn: -1};
const fs = require('fs');
var Grid  = require('gridfs-stream');
var nodemailer = require('nodemailer');
var gfs;
var conn = mongoose.connection;
conn.on('connected', () => { 
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('imageMeta');
 });
module.exports = {
  addNewScoop: async (req, res) => {
        let imgs = [];        
        try{
            if(req.files.length)
            req.files.forEach(ele => imgs.push(ele.filename) )
            req.body.images = imgs;      
            req.body.imgPath = 'scoops';

            var scoop = new scoopModel(req.body);
            const result = await scoop.save();

            if(result && result._id)
                res.status(200).json({result, message: "The Scoop has been successfully uploaded"});                
            else throw new Error('Something Went Wrong');
        }
        catch(err){
            console.log({err});
            res.status(400).json({message: err.message});
        }
    },

    // STATES
    getStateList: (req, res) => {
        // console.log('GET statelist');
        
        state_model.find({ is_active: true })
        .exec((err, data) => {
            if(err){
                res.status(400).send(err);}
            res.status(200).send(data);
        });
    },
     getUser: (req, res) => {
        // console.log('GET statelist');
        
        users.find()
        .exec((err, data) => {
            if(err){
                res.status(400).send(err);}
            res.status(200).send(data);
        });
    },
    getState: (req, res) => {
        state_model.find().sort(mysort)
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    // result[0].state = states.name;
                    res.status(200).send(result);
                }
            });
    },
 getScoops: (req, res) => {
        scoopModel.find()
            .sort(dangeroussort)
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    // result[0].state = states.name;
                    res.status(200).send(result);
                }
            });
    },
     getCity: (req, res) => {
        city_model.find().sort(mysort)
            .populate('state_id', 'name')
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    // result[0].state = states.name;
                    res.status(200).send(result);
                }
            });
    },
    getHouseType: (req, res) => {
        house_type.find().sort(anothersort)
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    // result[0].state = states.name;
                    res.status(200).send(result);
                }
            });
    },
    addState: (req, res) => {
        var state = new state_model();
        state.name = req.body.name;
        state.created_On = new Date();
        
        state.save((err) => {
            if(err)
                res.send(err);
            res.json({ message: 'State added successfully' });
        })
    },
    deleteState: (req, res) => {
        state_model.remove({_id: req.params.id }, (err, result) => {
            if(err)
                res.status(400).send(err);
            res.status(200).json({ message: 'State removed successfully', data: result });
        })
    },
    deleteCity: (req, res) => {
        city_model.remove({_id: req.params.id }, (err, result) => {
            if(err)
                res.status(400).send(err);
            res.status(200).json({ message: 'City removed successfully', data: result });
        })
    },
     deleteHouseType: (req, res) => {
        house_type.remove({_id: req.params.id }, (err, result) => {
            if(err)
                res.status(400).send(err);
            res.status(200).json({ message: 'House type removed successfully', data: result });
        })
    },
    //CITIES
    getAllCities: (req, res) => {
        city_model.find({ is_active: true })
            .populate('state_id', 'name')
            .exec((err, data) => {
            if(err)
                res.status(400).send(err);
            res.status(200).json(data);
        });
    },
    getCityList: (req, res) => {
        city_model.find({ state_id: req.params.state_id })
            .populate('state_id', 'name')
            .exec((err, data) => {
            if(err)
                res.status(400).send(err);
            res.status(200).json(data);
        });
    },
    addCity: (req, res) => {
        var city = new city_model();
        city.name = req.body.name;
        city.state_id = req.body.state;         
        
        city.save((err) => {
            if(err)
                res.send(err);
            res.status(200).json({ message: 'City added successfully' });
        })
    },
    removeCity: (req, res) => {
        city_model.remove({_id: req.params.cityId }, (err, result) => {
            if(err)
                res.status(400).send(err);
            res.status(200).json({ message: 'City removed successfully', data: result });
        })
    },
//House Types
   addHouseType: (req, res) => {
        var house = new house_type();
        house.title = req.body.title;
        house.type = req.body.type;        
        house.created_on = new Date();

        house.save((err) => {
            if(err)
                res.send(err);
            res.status(200).json({ message: 'House Type added successfully' });
        })
    },
     checkagentemailAvailability: (req, res) => {
         // res.send(req.params.email);
        var email = req.params.email;

        agent.find({email: email}, (err, result) => {
            if(err)
                res.status(400).send(err);
            else if(result.length > 0)
                res.status(200).json({  response: true});
            else
                res.status(200).json({  response: false});
        });

    },
   
     sendemail: (req, res) => {
       let transporter = nodemailer.createTransport({
           host: 'smtp.gmail.com',
           auth: {
              user: 'lastknight1996of@gmail.com',
              pass: 'Gingerbread1@gingerbread'         
           }});
       
        let mailOptions = {
         from: 'lastknight1996of@gmail.com',
         to: req.body.anotherdata,
         subject: req.body.data,
         text: req.body.data,
         html: '<b>Homey Email Sendin</b>',
       };
       transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
               return console.log(error);
            }
            console.log('Message % sent: %s', info.messageId, info.response);
       });
       },
      
   
    //checkemailAvailability
    checkemailAvailability: (req, res) => {
        // res.send(req.params.email);
        var email = req.params.email;

        users.find({email: email}, (err, result) => {
            if(err)
                res.status(400).send(err);
            else if(result.length > 0)
                res.status(200).json({  response: true});
            else
                res.status(200).json({  response: false});
        });

    }

} 
