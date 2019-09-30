const mongoose = require('mongoose');
const moment = require('moment');
const helpers = require('../providers/helper');
var agent_model = require('../models/agent');
var houseType = require('../models/houseTypes');
var House = require('../models/house');
var RequestHouse = require('../models/clientRequest');
var houseClientModel = require('../models/houseClient');
var usersModel = require('../models/users');
const fs = require('fs');
var Grid  = require('gridfs-stream');
var dangeroussort = { createdOn: -1};
var oursort = { rating: -1};
var gfs;
var conn = mongoose.connection;
conn.on('connected', () => { 
    gfs = Grid(conn.db, mongoose.mongo);
    gfs.collection('imageMeta');
 });


module.exports = {
    houseTypeList: (req, res) => {
        houseType.find({ is_active: true }, (err, result) => {
            if(err)
                res.status(400).send(err);
            else    
                res.status(200).json(result);
        });
    },
    getHouse: (req, res) => {
        House.find({status: 'available', claim: 'unclaimed', deal: 'approved'})
            .sort(dangeroussort)
            .populate('type', 'title')
            .populate('state', 'name')
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    res.status(200).send(result);
                }
            });
    },
   getRelatedHouse: (req, res) => {
       House.find({status: 'available', deal: 'approved', claim: 'unclaimed', city: req.params.city}) 
            .populate('type', 'title')
            .populate('state', 'name')
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    res.status(200).send(result);
                }
            });

},
   getResumedHouse: (req, res) => {
        houseClientModel.find({city: req.params.city, status:'rejected'})
            .populate('type', 'title')
            .populate('userId', 'phoneNo')
            .populate('city', 'name')
            .populate('state', 'name')
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    res.status(200).send(result);
                }
            });
    },
    getMineHouse: (req, res) => {
        House.find({user_id: req.params.id})
            .populate('type', 'title')
            .populate('user_id', 'phoneNo')
            .populate('city', 'name')
            .populate('state', 'name')
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    res.status(200).send(result);
                }
            });
    },
    getClientHouses: (req, res) => {
        houseClientModel.findById({_id: req.params.id})
                        .exec((err, result) => {
                            if(err)
                              res.status(400).send(err);
                            else{
                              res.status(200).send(result);       
                            }
             });
    },
     getPostedHouse: (req, res) => {
        houseClientModel.find({city: req.params.city, status:'accepted'})
            .populate('type', 'title')
            .populate('userId', 'phoneNo')
            .populate('city', 'name')
            .populate('state', 'name')
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    res.status(200).send(result);
                }
            });
    },
    getBreakedHouse: (req, res) => {
         House.find({city: req.params.city, status: 'available', deal: 'break'})
                .populate('type', 'title')
                .populate('user_id', 'phoneNo')
                .populate('city', 'name')
                .populate('state', 'name')
                .exec((err, result) => {
                    if(err)
                         res.status(400).send(err);
                    else{
                         res.status(200).send(result);
                    }
    
    });
    },
   getHouseForSell: (req, res) => {
        House.find({city: req.params.city, status: 'available', claim: 'unclaimed', deal: 'approved'})
            .populate('type', 'title')
            .populate('city', 'name')
            .populate('state', 'name')
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    res.status(200).send(result);
                }
            });
    },
    getHouseRequests: (req, res) => {
        RequestHouse.find({agent_id: req.params.id, Seen: 'unseen'})
            .populate('user_id')
            .populate('house_id')
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    res.status(200).send(result);
                }
            });
    },
    
    getClientRequestHouses: (req, res) => {
        RequestHouse.find({_id: req.params.id})
               .populate('agent_id')
               .populate('user_id')
               .exec((err, result) => {
                  if(err)
                     res.status(400).send(err);
                  else{
                     res.status(200).send(result);
                  }
               });
    },
  getHouseForClaim: (req, res) => {
        House.find({ claimId: req.params.destiny, status: 'available', claim: 'claimed'})
            .populate('type', 'title')
            .populate('city', 'name')
            .populate('state', 'name')
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    // result[0].state = states.name;
                    res.status(200).send(result);
                }
            });
    },
   getSoldHouse: (req, res) => {
        House.find({city: req.params.city, status: 'sold'})
            .populate('type', 'title')
            .populate('city', 'name')
            .populate('state', 'name')
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    // result[0].state = states.name;
                    res.status(200).send(result);
                }
            });
    },
  getInMyArea: (req, res) => {
      House.find({city: req.params.city, status: 'available', deal: 'approved'})
           .populate('type', 'title')
           .populate('city', 'name')
           .populate('state', 'name')
           .exec((err, result) => {
               if(err)
                   res.status(400).send(err);
               else{
                   res.status(200).send(result);
}
  });   

},
 getSold: (req, res) => {
        House.find({status: 'sold', deal: 'approved'})
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                
                    res.status(200).send(result);
                }
            });
    },
getClaimed: (req, res) => {
        House.find({claim: 'claimed'})
        .populate('city', 'name')
        .populate('claimId', 'email')
        .populate('state', 'name')
        .populate('type', 'title')
            .exec((err, result) => {
                  if(err)
                     res.status(400).send(err);
                  else{
                     res.status(200).send(result);
}
});
},
 getRented: (req, res) => {
        House.find({status: 'acquired', deal: 'approved'})
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    // result[0].state = states.name;
                    res.status(200).send(result);
                }
            });
    },
 getAvailable: (req, res) => {
        House.find({status: 'available', deal: 'approved'})
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    res.status(200).send(result);
                }
            });
    },
  getAcceptedHouse: (req, res) => {
     houseClientModel.find({userId: req.params.id, status: 'accepted'})
                     .exec((err, result) => {
                        if(err) 
                             res.status(400).send(err);
                        else{
                            res.status(200).send(result);
                   }
});
},
deleteClientHouse: (req, res) => {
        houseClientModel.remove({_id: req.params.id }, (err, result) => {
            if(err)
                res.status(400).send(err);
            res.status(200).json({ message: 'Your House removed successfully', data: result });
        })
    },
   getRejectedHouse: (req, res) => {
     houseClientModel.find({userId: req.params.id, status: 'rejected'})
                     .exec((err, result) => {
                        if(err) 
                             res.status(400).send(err);
                        else{
                            res.status(200).send(result);
                   }
});
},
   getRentedHouse: (req, res) => {
        House.find({city: req.params.city, status: 'acquired', deal: 'approved'})
            .populate('type', 'title')
            .populate('city', 'name')
            .populate('state', 'name')
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    res.status(200).send(result);
                }
            });
    },
    getPostedByMe: (req, res) => {
      House.find({agentId: req.params.id, deal: 'approved'})
           .populate('type', 'title')
           .populate('city', 'name')
           .populate('state', 'name')
           .exec((err, result) => {
             if(err)
                 res.status(400).send(err);
             else{
                 res.status(200).send(result);
                 }
              });
    },
    addHouseType: (req, res) => {
        var houtyp = new houseType();

        houtyp.title = req.body.title;
        houtyp.type = req.body.type;
        houtyp.createdOn = Date.now();

        houtyp.save((err, result) => {
            if(err)
                res.status(400).send(err);
            else    
                res.status(200).json({ message: 'House type added successfully', id: result._id });
        });
    },
addNewHouse: async (req, res) => {
        let imgs = [];        
        try{
            if(req.files.length)
            req.files.forEach(ele => imgs.push(ele.filename) )
            //Creating slug for the listing 
            var slug  = await helpers.slugGenerator(req.body.title, 'title', 'house');
            req.body.slug = slug;
            req.body.type = req.body.Proptype;
            req.body.images = imgs;      
            req.body.imgPath = 'houses';
            if(req.body.owner == 'other')
             {
               req.body.owner = req.body.owners;
             }
            var hou = new House(req.body);
            const result = await hou.save();

            if(result && result._id && result.slug)
                res.status(200).json({result, message: "The house has been successfully posted"});                
            else throw new Error('Something Went Wrong');
        }
        catch(err){
            console.log({err});
            res.status(400).json({message: err.message});
        }
    },
    showGFSImage: (req, res) => {
        gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
          // Check if ii is a file or not file
          if (!file || file.length === 0) {
            return res.status(404).json({
              err: 'No Such file exists'
            });
          }
      
          // Check if it is an image or not
          if (file.contentType === 'image/jpeg' || file.contentType === 'image/png' ) {
            // Read output to browser window of the client
            const readstream = gfs.createReadStream(file.filename);
            readstream.pipe(res);
          } else {
            res.status(404).json({
              err: 'It is Not an image'
            });
          }
        }) 
    },
addClientResume: async (req, res) => {
        let imgs = [];        
        try{
            if(req.files.length)
                req.files.forEach(ele => imgs.push(ele.filename) )
            //Creating slug for the listing 
            var slug  = await helpers.slugGenerator(req.body.title, 'title', 'house');
            req.body.slug = slug;
            req.body.type = req.body.Proptype;
            req.body.images = imgs;      
            req.body.imgPath = 'houses';
            if(req.body.owner == 'other')
             {
               req.body.owner = req.body.owners;
             }
            var resume = new houseClientModel(req.body);
            const result = await resume.save();

            if(result && result._id && result.slug)
                res.status(200).json({result, message: "The house has been successfully uploaded"});                
            else throw new Error('Something Went Wrong');
        }
        catch(err){
            console.log({err});
            res.status(400).json({message: err.message});
        }
    },
    getUserList: (req, res) => {
        House.find({ isActive: true, userId: req.params.userId })
        .populate('city', 'name')
        .populate('state', 'name')
        .populate('type', 'title')
        .exec((err, result) => {
            if (err)
                res.status(400).send(err);
            else
                res.status(200).json(result);
        });
    },
    getSingleHouse: (req, res) => {
        House.findOne({ _id: req.params.houseId })
        .populate('city', 'name')
        .populate('state', 'name')
        .populate('type', 'title')
        .exec((err, result) => {
            if (err)
                res.status(400).send(err);
            else
                res.status(200).json(result);
        });
    },
	changePrice: (req, res) => {
		 House.findOne({ _id: req.body._id })
			.exec((err, resp) => {
				if (err) res.status(400).json({ message: 'Something Went Wrong', data: err })
				else {
							House.updateOne({ _id: req.body._id }, { price: req.body.price })
							.exec((err, resp) => {
								if (err) res.status(400).json({ message: 'Something Went Wrong', data: err })
								else res.status(200).json({ message: 'Updated Price Successfully', id: resp });
							}) 
						}
					})
	},
	getLikeByMe: (req, res) => {
	   House.find({likesByUsers: {$all: [req.params.id]}, isActive: true, claim: 'unclaimed', status: 'available'})
	       .populate('state', 'name')
	       .populate('type', 'title')
	       .exec((err, result) => {
	       if (err)
	           res.status(400).send(err);
	       else
	           res.status(200).json(result);
	       });
	},
    getFullList: (req, res) => {
        House.find({ isActive: true })
            .populate('city', 'name')
            .populate('state', 'name')
            .populate('type', 'title')
            .exec((err, result) => {
            if (err)
                res.status(400).send(err);
            else
                res.status(200).json(result);
        });
    },

   markAsSold: async (req, res) => {
        try{
            const resultAgent = await agent_model.update({ _id: req.params.destiny }, { $inc: {numberOfSell: 1}});
            const result = await House.update({ slug: req.params.houseSlug }, { status: req.body.status });
            console.log({result});
            if(result && resultAgent && resultAgent.nModified == 1 && result.nModified == 1) res.status(200).json({ result, message: "House has been updated Successfully" });
            else throw new Error('Error in updating house');
        }
        catch(err){
            res.status(400).json({message: err.message});
        }
    },
   markAsClaimed: async (req, res) => {
        try{
            const result = await House.update({ slug: req.params.houseSlug }, {claim: req.body.claim  , claimId: req.params.destiny } );
            console.log({result});
            if(result && result.nModified == 1) res.status(200).json({ result, message: "House has been updated Successfully" });
            else throw new Error('Error in updating house');
        }
        catch(err){
            res.status(400).json({message: err.message});
        }
    },
      markAsSeen: async (req, res) => {
        try{
            const result = await RequestHouse.update({ _id: req.params.house_id }, { Seen: req.body.destiny } );
            console.log({result});
            if(result && result.nModified == 1) res.status(200).json({ result, message: "House has been updated Successfully" });
            else throw new Error('Error in updating house');
        }
        catch(err){
            res.status(400).json({message: err.message});
        }
    },
   markAsAccepted: async (req, res) => {
        try{
            const result = await houseClientModel.update({_id: req.params.id}, {status: req.body.status});
            console.log({result});
            if(result && result.nModified == 1) res.status(200).json({ result, message: "House of the client has been posted Successfully" });
            else throw new Error('Error in mark as Posted house of the client');
           }
        catch(err){
            res.status(400).json({message: err.message});
           }
    },
   markAsBreak: async (req, res) => {
        try{
           const resultUser = await usersModel.update({ _id: req.params.destiny }, { $inc: {dealCount: 1}});
            const result = await House.update({_id: req.params.houseSlug}, {deal: req.body.deal});
            console.log({result});
            if(result && resultUser && resultUser.nModified == 1 && result.nModified == 1) res.status(200).json({result, message: "You Deal Updated Successfully" });
            else throw new Error('Error in deal update');
            }
        catch(err){
            res.status(400).json({message: err.message});
        }
   },
     markAsRecover: async (req, res) => {
        try{
              const resultUser = await usersModel.update({ _id: req.params.destiny }, { $inc: {dealCount: -1}});
            const result = await House.update({_id: req.params.houseSlug}, {deal: req.body.deal});
            console.log({result});
            if(result && resultUser && resultUser.nModified == 1 && result.nModified == 1) res.status(200).json({result, message: "You Deal Updated Successfully" });
            else throw new Error('Error in deal update');
            }
        catch(err){
            res.status(400).json({message: err.message});
        }
   },
   markAsRejected: async (req, res) => {
        try{
            const result = await houseClientModel.update({_id: req.params.id}, {status: req.body.status});
            console.log({result});
            if(result && result.nModified == 1) res.status(200).json({ result, message: "House of the client has been Rejected Successfully" });
            else throw new Error('Error in mark as Rejected house of the client');
           }
        catch(err){
            res.status(400).json({message: err.message});
           }
    },
       markAsExpired: async (req, res) => {
        try{
            const result = await House.update({_id: req.params.houseSlug}, {status: req.body.status});
            console.log({result});
            if(result && result.nModified == 1) res.status(200).json({ result, message: "House updated Successfully" });
            else throw new Error('Error in update the client');
           }
        catch(err){
            res.status(400).json({message: err.message});
           }
    },
   markAsUnClaimed: async (req, res) => {
        try{
            const result = await House.update({ slug: req.params.houseSlug } , { claim: req.body.claim, claimId: null });
            console.log({result});
            if(result && result.nModified == 1) res.status(200).json({ result, message: "House has been updated Successfully" });
            else throw new Error('Error in updating house');
        }
        catch(err){
            res.status(400).json({message: err.message});
        }
    },
    viewHouse: (req, res) => {
        House.findById({_id: req.params.id })
                   .populate('state', 'name')
                   .populate('city', 'name')
                   .populate('type', 'title')
                   .exec((err, result) => {
            res.json(result);
        });
    },
    viewResumedHouse: (req, res) => {
      houseClientModel.findById({_id: req.params.id})
                      .populate('state', 'name')
                      .populate('city', 'name')
                      .populate('type', 'title')
                      .exec((err, result) => {
                 res.json(result);
             });
   },
   likedByUsers: (req, res) => {
      House.updateOne({_id: req.body._id}, {$addToSet: {likesByUsers: req.body.id}})
          .exec((err, result) => {
              if(err)
                 res.status(400).send(err);
              else{
                 res.status(200).send(result);
              }
           });
   },
   unlikedByUsers: (req, res) => {
     House.updateOne({_id: req.body._id}, {$pull: {likesByUsers: req.body.id}})
         .exec((err, result) => {
             if(err)
                 res.status(400).send(err);
             else{
                 res.status(200).send(result);
             }
          });
   },
     requestHouse: (req, res) => {
        var reqss = new RequestHouse();
        reqss.user_id = req.params.user_id;
        reqss.agent_id = req.params.agent_id;         
        reqss.house_id = req.params.house_id;
        reqss.save((err) => {
            if(err)
                res.send(err);
            res.status(200).json({ message: 'Your Request added successfully' });
        })
    },
   filterHouses: (req, res) => {        
        var query = {};

        if (req.query.houseFor)
            query['houseFor'] = { $in: req.query.houseFor.split(",") }
        if (req.query.type)
            query['type'] = { $in: req.query.type.split(",") }
        if (req.query.city)
            query['city'] = { $in: req.query.city.split(",") }
        if (req.query.claim)
            query['claim'] = { $in: req.query.claim.split(",") }
        if (req.query.owner)
            query['owner'] = { $in: req.query.owner.split(",") }
        console.log({ query });
       House.find(query)
            .sort(oursort)
            .populate('state', 'name')
            .populate('type', 'title')
            .exec((err, result) => {
                if (err)
                    res.status(400).send(err);
                else
                    res.status(200).json(result);
            });
    }
}
