const mongoose = require('mongoose');
var agent_model = require('../models/agent');
var states = require('../models/state');
var city = require('../models/city');
var mysort = {fname: 1};
var anothersort = {rating: -1};
var topsort = {numberOfSell: -1};

module.exports = {
     getAgent: (req, res) => {
        agent_model.find().sort(mysort)
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
    getTopRealtors: (req, res) => {
         agent_model.find({agentType: 'realtor'}).sort(topsort)
                    .limit(3)
                    .exec((err, result) => {
                        if(err)
                           res.status(400).send(err);
                        else{
                           res.status(200).send(result);
                           }
});
},
    getAgentRealtor: (req, res) => {
        agent_model.find({city: req.params.city ,agentType: 'realtor'}).sort(anothersort)
            .limit(3)
            .exec((err, result) => {
                if(err)
                    res.status(400).send(err);
                else{
                    res.status(200).send(result);
                }
            });
    },
  deleteAgent: (req, res) => {
        agent_model.remove({_id: req.params.id }, (err, result) => {
            if(err)
                res.status(400).send(err);
            res.status(200).json({ message: 'Agent removed successfully', data: result });
        })
    },
  editAgent: (req, res) => {
        agent_model.findById({_id: req.params.id })
                   .populate('state', 'name')
                   .populate('city', 'name')
                   .exec((err, result) => {
            res.json(result);
        });
    },
 getHomierDetails: (req, res) => {
        agent_model.findOne({ _id: req.params.homierId })
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

  rateAgent: (req, res) => {
		 agent_model.findOne({ _id: req.body.dangerous })
			.exec((err, resp) => {
				if (err) res.status(400).json({ message: 'Something Went Wrong', data: err })
				else {
							agent_model.updateOne({ _id: req.body.dangerous }, { rating: req.body.rating })
							.exec((err, resp) => {
								if (err) res.status(400).json({ message: 'Another something Went Wrong', data: err })
								else res.status(200).json({ message: 'Updated rating Successfully', id: resp });
							}) 
						}
					})
	},
   getRealtorDetails: (req, res) => {
        agent_model.findOne({ _id: req.params.realtorId })
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
    }

}
