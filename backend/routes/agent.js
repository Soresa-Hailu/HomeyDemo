const express = require('express');
var app = express();
var agentController = require('../controllers/agent.controller');
let Agent = require('../models/agent');

var router = express.Router();

router.get('/list', agentController.getAgent);
router.get('/topRealtor', agentController.getTopRealtors);
router.get('/realtorList/:city', agentController.getAgentRealtor);
router.get('/editAgent/:id', agentController.editAgent);
router.get('/delete/:id', agentController.deleteAgent);
router.get('/:homierId', agentController.getHomierDetails );
router.get('/:realtorId', agentController.getRealtorDetails );
router.put('/rateAgent', agentController.rateAgent);



module.exports = router;
