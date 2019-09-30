const express = require('express');

var app = express();

var authC  =require('../controllers/auth.controller');

var router = express.Router();

router.post('/user/login', authC.userLogin);
router.post('/agent/login', authC.agentLogin);
router.post('/agent/loginRealtor', authC.agentLoginRealtor);
router.post('/agent/loginHomier', authC.agentLoginHomier);
//registration
router.post('/user/register', authC.userRegistration);
router.post('/user/edit', authC.userRegistration);
router.post('/agent/register', authC.agentRegistration);
//profile preferences
router.get('/admin/userList', authC.userList)
router.get('/user/userDetail/:id', authC.specificUser)
router.put('/user/changePass', authC.changePass)
router.put('/agent/changePassword', authC.changePassword)
router.put('/user/ConfirmPassword', authC.ConfirmPassword)

// console.log(app);

module.exports = router;
