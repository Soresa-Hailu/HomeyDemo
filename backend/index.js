const express = require('express');
var path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const config = require('./config/config');
var app = express();
var http = require('http');
var server = http.createServer(app);
var socketio = require('socket.io'); 
const startupdebug = require('debug')('app:startup');

app.use(express.static(path.join(__dirname, 'uploads')));

// Routing
var indexR = require('./routes/indexR'); 
var users = require('./routes/users');
var auth = require('./routes/auth');
var common = require('./routes/common');
var house = require('./routes/house');
var agent = require('./routes/agent');
const multer = require('multer');

const fs = require('fs');
// Connect with DB

// --- local
mongoose.connect(config.dbUrl, {useNewUrlParser: true})
.then((conn) => // we're connected!
{
  startupdebug('Connected to Homey DataBase Successfully!');
})
.catch(err => console.error('Connection Error', err));

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// use morgan to log requests to the console

app.use(morgan('dev'));

//CORS

app.use(function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
  res.setHeader('Access-Control-Allow-Methods', 'PUT','POST','GET', 'OPTIONS', 'PATCH', 'DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization,Origin,X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();   
});

// Routes
app.use('/backend/user', users);
app.use('/backend/auth', auth);
app.use('/backend/common', common);
app.use('/backend/house', house);
app.use('/backend/agent', agent);

//create message function
function createServerMessage() {
 return {'user':'Admin','message':'Pong from socket server'}
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
 

 
var port =  process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Homey Backend Listening @', port);    
});
   
