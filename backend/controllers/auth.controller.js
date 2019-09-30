const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
var userM = require('../models/users');
var agentM = require('../models/agent');
const jwt = require('jsonwebtoken');

var secretKey = require('../config/config').secretKey;
var crypto = require('crypto');
var nodemailer = require('nodemailer');

module.exports = {
agentLogin: (req, res) => {
var loginType;
		if (req.body.email != '' && req.body.password != '') {
			if (isNaN(req.body.emailPhone))
				loginType = 'email';
			else
				loginType = 'phoneNo';
			agentM.findOne({agentType: 'admin'})
				.where(loginType, req.body.email)
				.exec((err, data) => {
					if (err)
						res.status(400).send(err)
					else if (data) {
						bcrypt.compare(req.body.password, data.password, function (err, passMatch) {
							if (err)
								res.status(400).send(err)
							else if (passMatch) {
								let jwtData = {
									_id: data['_id'],
									fname: data['fname'],
									lname: data['lname'],
									email: data['email'],
                                                                        agentType: data['agentType']
	
			};
								var token = jwt.sign({ agent: jwtData }, secretKey);
								res.status(200).json({ message: 'Login Successful', token: token });
							}
							else
								res.status(401).json({ message: 'Invalid Credentials1' })
						});
					}
					else
						res.status(401).json({ message: 'Invalid Credentials2' })
				});
		}
		else
			res.status(400).json({ message: 'Provide all Credentials' })

	},
agentLoginRealtor: (req, res) => {
var loginType;
		if (req.body.email != '' && req.body.password != '') {
			if (isNaN(req.body.emailPhone))
				loginType = 'email';
			else
				loginType = 'phoneNo';
			agentM.findOne({agentType: 'realtor'})
				.where(loginType, req.body.email)
				.exec((err, data) => {
					if (err)
						res.status(400).send(err)
					else if (data) {
						bcrypt.compare(req.body.password, data.password, function (err, passMatch) {
							if (err)
								res.status(400).send(err)
							else if (passMatch) {
								let jwtData = {
									_id: data['_id'],
									fname: data['fname'],
									lname: data['lname'],
									email: data['email'],
                                    city: data['city'],
                                    rating: data['rating'],
                                    agentType: data['agentType']
	
			};
								var token = jwt.sign({ agent: jwtData }, secretKey);
								res.status(200).json({ message: 'Login Successful', token: token });
							}
							else
								res.status(401).json({ message: 'Invalid Credentials1' })
						});
					}
					else
						res.status(401).json({ message: 'Invalid Credentials2' })
				});
		}
		else
			res.status(400).json({ message: 'Provide all Credentials' })

	},
agentLoginHomier: (req, res) => {
var loginType;
		if (req.body.email != '' && req.body.password != '') {
			if (isNaN(req.body.emailPhone))
				loginType = 'email';
			else
				loginType = 'phoneNo';
			agentM.findOne({agentType: 'homier'})
				.where(loginType, req.body.email)
				.exec((err, data) => {
					if (err)
						res.status(400).send(err)
					else if (data) {
						// res.send(data.);
						bcrypt.compare(req.body.password, data.password, function (err, passMatch) {
							if (err)
								res.status(400).send(err)
							else if (passMatch) {
								let jwtData = {
									_id: data['_id'],
                                    city: data['city'],
                                    state: data['state'],
									fname: data['fname'],
									lname: data['lname'],
									email: data['email'],
                                    agentType: data['agentType']
	
			};
								var token = jwt.sign({ agent: jwtData }, secretKey);
								res.status(200).json({ message: 'Login Successful', token: token });
							}
							else
								res.status(401).json({ message: 'Invalid Credentials1' })
						});
					}
					else
						res.status(401).json({ message: 'Invalid Credentials2' })
				});
		}
		else
			res.status(400).json({ message: 'Provide all Credentials' })

	},
	userLogin: (req, res) => {
		var loginType;
		if (req.body.emailPhone != '' && req.body.password != '') {
			if (isNaN(req.body.emailPhone))
				loginType = 'email';
			else
				loginType = 'phoneNo';
			userM.findOne()
				.where(loginType, req.body.emailPhone)
				.exec((err, data) => {
					if (err)
						res.status(400).send(err)
					else if (data) {
						// res.send(data.);
						bcrypt.compare(req.body.password, data.password, function (err, passMatch) {
							if (err)
								res.status(400).send(err)
							else if (passMatch) {
								let jwtData = {
									_id: data['_id'],
									fname: data['fname'],
									lname: data['lname'],
									email: data['email'],
									confirmed: data['confirmed'],
									dealCount: data['dealCount'],
									isAdmin: data['isAdmin']
								};
								var token = jwt.sign({ user: jwtData }, secretKey);
								res.status(200).json({ message: 'Login Successful', token: token });
							}
							else
								res.status(401).json({ message: 'Invalid Credentials1' })
						});
					}
					else
						res.status(401).json({ message: 'Invalid Credentials2' })
				});
		}
		else
			res.status(400).json({ message: 'Provide all Credentials' })

	},

	userRegistration: (req, res) => {
		// res.send(req.body);
		// res.status(400).send('err')
		users = new userM();

		users.fname = req.body.fname;
		users.lname = req.body.lName;
		users.email = req.body.email;
		users.phoneNo = req.body.phoneNo;
		users.createdOn = new Date();
       let transporter = nodemailer.createTransport({
           host: 'smtp.gmail.com',
           auth: {
              user: 'lastknight1996of@gmail.com',
              pass: 'Gingerbread1@gingerbread'         
           }});
       
        let mailOptions = {
         from: 'lastknight1996of@gmail.com',
         to: req.body.email,
         subject: 'confirmation code: ydsseyhmoodpa',
         text: 'confirmation code: ydsseyhmoodpa',
         html: '<b>Homey Email Sendin</b>',
       };
       transporter.sendMail(mailOptions, (error, info) => {
            if(error) {
               return console.log(error);
            }
            console.log('Message % sent: %s', info.messageId, info.response);
       });
      
		bcrypt.hash(req.body.password, 10, function (err, hash) {
			if (err)
				res.status(400).send(err)
			else {
				users.password = hash;

				users.save((err, data) => {
					if (err)
						res.status(400).send(err);
					else
						res.status(200).json({ message: 'User Added Successfully', id: data._id });
				});
			}
		});
	},
agentRegistration: (req, res) => {
		agents = new agentM();

		agents.fname = req.body.fname;
		agents.lname = req.body.lName;
		agents.email = req.body.email;
		agents.phoneNo = req.body.phoneNo;
		agents.state = req.body.state;
		agents.city = req.body.city;
        agents.agentType = req.body.agentType;  
        agents.rating = req.body.rating;          
		agents.createdOn = new Date();

		bcrypt.hash(req.body.password, 10, function (err, hash) {
			if (err)
				res.status(400).send(err)
			else {
				agents.password = hash;

				agents.save((err, data) => {
					if (err)
						res.status(400).send(err);
					else
						res.status(200).json({ message: 'Agent Added Successfully', id: data._id });
				});
			}
		});
	},
agentList: (req, res) => {
		agentM.find()
			.exec((err, data) => {
				if (err) res.status(400).json({ message: 'Something Went Wrong', data: err })
				else res.status(200).json({ message: 'Success', data })
			})
	},
	userList: (req, res) => {
		userM.find()
			.exec((err, data) => {
				if (err) res.status(400).json({ message: 'Something Went Wrong', data: err })
				else res.status(200).json({ message: 'Success', data })
			})
	},
    specificUser: (req, res) => {
        userM.findOne({_id: req.body.id})
             .exec((err, data) => {
                if(err) res.status(400).json({message: 'Something Went Wrong', data: err})
                 else res.status(200).json({message: 'Success', data})
})
},
	changePass: (req, res) => {
		userM.findOne({ _id: req.body._id })
			.exec((err, resp) => {
				if (err) res.status(400).json({ message: 'Something Went Wrong', data: err })
				else {
					bcrypt.hash(req.body.password, 10, (err, hash)=> {
						if (err) res.status(400).send(err)
						else {
							userM.updateOne({ _id: req.body._id }, { password: hash })
							.exec((err, resp) => {
								if (err) res.status(400).json({ message: 'Something Went Wrong', data: err })
								else res.status(200).json({ message: 'Password Changed Successfully', id: resp });
							})
						}
					})
				}
			})
	},
		ConfirmPassword: (req, res) => {
		 userM.findOne({ _id: req.body._id })
			.exec((err, resp) => {
				if (err) res.status(400).json({ message: 'Something Went Wrong', data: err })
				else {
							userM.updateOne({ _id: req.body._id }, { confirmed: 'confirmed' })
							.exec((err, resp) => {
								if (err) res.status(400).json({ message: 'Something Went Wrong', data: err })
								else res.status(200).json({ message: 'Confirm password successfully',  resp });
							}) 
						}
					})
	},
changePassword: (req, res) => {
		agentM.findOne({ _id: req.body._id })
			.exec((err, resp) => {
				if (err) res.status(400).json({ message: 'Something Went Wrong', data: err })
				else {
					bcrypt.hash(req.body.password, 10, (err, hash)=> {
						if (err) res.status(400).send(err)
						else {
							agentM.updateOne({ _id: req.body._id }, { password: hash })
							.exec((err, resp) => {
								if (err) res.status(400).json({ message: 'Another Something Went Wrong', data: err })
								else res.status(200).json({ message: 'Password Changed Successfully', id: resp });
							})
						}
					})
				}
			})
	}
	
}
