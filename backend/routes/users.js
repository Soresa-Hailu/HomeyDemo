const express = require('express');

var app = express();
var userController = require('../controllers/users.controller');

var router = express.Router();

router.get('/:userId', userController.getUserDetails );
router.get('/editUser/:id', userController.editUser);
router.get('/list', userController.getUser);
router.post('/updateProfile/:userId/:fname/:lname', userController.updateProfile);
// console.log(app);

module.exports = router;
