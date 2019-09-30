const express = require('express');
var houseController = require('../controllers/house.controller');
var router = express.Router();
var multer = require('multer');
const helpers = require('../providers/helper');
const crypto = require('crypto');
var path = require('path');
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

// House type
router.get('/type', houseController.houseTypeList);
router.post('/type', houseController.addHouseType);

router.get('/getHouse', houseController.getHouse);
router.get('/getSold', houseController.getSold);
router.get('/getRented', houseController.getRented);
router.get('/getClaimed', houseController.getClaimed);
router.get('/getAvailable', houseController.getAvailable);
router.get('/getResumedHouse/:city', houseController.getResumedHouse);
router.get('/getHouseForSell/:city', houseController.getHouseForSell);
router.get('/getHouseRequests/:id', houseController.getHouseRequests);
router.get('/getHouseForClaim/:destiny', houseController.getHouseForClaim);
router.get('/getAcceptedHouse/:id', houseController.getAcceptedHouse);
router.get('/getPostedHouse/:city', houseController.getPostedHouse);
router.get('/getBreakedHouse/:city', houseController.getBreakedHouse);
router.get('/getRejectedHouse/:id', houseController.getRejectedHouse);
router.get('/getInMyArea/:city', houseController.getInMyArea);
router.get('/deleteClientHouse/:id', houseController.deleteClientHouse);
router.get('/getSoldHouse/:city', houseController.getSoldHouse);
router.get('/getRentedHouse/:city', houseController.getRentedHouse);
router.get('/getMineHouse/:id', houseController.getMineHouse);
router.get('/getPostedByMe/:id', houseController.getPostedByMe);
router.get('/getClientHouses/:id', houseController.getClientHouses);
router.get('/getClientRequestHouses/:id', houseController.getClientRequestHouses);
//House
router.post('/new', upload.array("propImages"), houseController.addNewHouse);
router.post('/newResume', upload.array("propImages"), houseController.addClientResume);
router.get('/list/:userId', houseController.getUserList);
router.get('/list/', houseController.getFullList);
router.get('/single/:houseId', houseController.getSingleHouse);
router.post('/markAsSold/:houseSlug/:destiny', houseController.markAsSold);
router.post('/markAsClaimed/:houseSlug/:destiny', houseController.markAsClaimed);
router.post('/markAsUnClaimed/:houseSlug', houseController.markAsUnClaimed);
router.post('/markAsBreak/:houseSlug/:destiny', houseController.markAsBreak);
router.post('/markAsRecover/:houseSlug/:destiny', houseController.markAsRecover);
router.post('/markAsAccepted/:id', houseController.markAsAccepted);
router.post('/markAsRejected/:id', houseController.markAsRejected);
router.put('/changePrice', houseController.changePrice);
router.put('/likedByUsers', houseController.likedByUsers);
router.put('/unlikedByUsers', houseController.unlikedByUsers);
router.post('/markAsExpired/:houseSlug', houseController.markAsExpired);
router.post('/markAsSeen/:house_id', houseController.markAsSeen);
router.post('/requestHouse/:house_id/:user_id/:agent_id', houseController.requestHouse);
router.get('/viewHouse/:id', houseController.viewHouse);
router.get('/getLikeByMe/:id', houseController.getLikeByMe);
router.get('/getRelatedHouse/:city', houseController.getRelatedHouse);
router.get('/viewResumedHouse/:id', houseController.viewResumedHouse);
router.get('/showGFSImage/:filename', houseController.showGFSImage); // Using Grid Fs multer storage To view image in front-end
router.get('/slugslug', (req, res) => {
    var slug  = helpers.slugGenerator('House 1', 'title', 'house');
    slug.then((result2) => {
        console.log({result2});
        res.send('sdfsf'+ result2);
    })
    console.log('------------');
});
//filter
router.get('/filter', houseController.filterHouses);

module.exports = router;
