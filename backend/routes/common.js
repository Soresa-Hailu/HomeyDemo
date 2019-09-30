const express = require('express');
var app = express();
var commonController = require('../controllers/common.controller');
var multer = require('multer');
const helpers = require('../providers/helper');
var router = express.Router();
const crypto = require('crypto');
var path = require('path');
var nodemailer = require("nodemailer");
var GridFsStorage  = require('multer-gridfs-storage');
const config = require('../config/config');
const storage = new GridFsStorage({
  url: config.dbUrl,
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) return reject(err);
        const filename = buf.toString('hex') + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: 'imageMeta'
        };
        resolve(fileInfo);
      });
    });
  }
});

var upload = multer({ storage: storage });

router.use((req, res, next) => {
    console.log(req.originalUrl,' query param: ', req.query);
    next();
})


// States
router.route('/state')
.get(commonController.getStateList)
.post(commonController.addState)
router.post('/add/state', commonController.addState);
router.get('/getState', commonController.getState);
router.get('/getUser', commonController.getUser);
router.get('/deleteState/:id', commonController.deleteState);
// Scoops

router.post('/newScoop', upload.array("propImages"), commonController.addNewScoop);

router.get('/getScoops', commonController.getScoops);
//Cities
router.post('/add/city', commonController.addCity);
router.get('/cities', commonController.getAllCities)
router.get('/getCity', commonController.getCity);
router.get('/deleteCity/:id', commonController.deleteCity);

router.get('/cities/:state_id', commonController.getCityList)
.post('/cities', commonController.addCity)

router.delete('/city/:cityId', commonController.removeCity)
//HouseType
router.post('/add/houseType', commonController.addHouseType);
router.get('/getHouseType', commonController.getHouseType);
router.get('/deleteHouseType/:id', commonController.deleteHouseType);

//checkemail-availability
router.get('/checkagentemail-availability/email/:email', commonController.checkagentemailAvailability)
router.get('/checkemail-availability/email/:email', commonController.checkemailAvailability)
router.post('/sendemail', commonController.sendemail);

module.exports = router;
