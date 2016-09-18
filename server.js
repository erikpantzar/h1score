// server.js
const express = require('express');        // call express
const app = express();                 // define our app using express
const bodyParser = require('body-parser');
const hiscoreRoute = require('./api/routes/hiscore');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', express.static(__dirname + '/client'));

var port = process.env.PORT || 8080;        // set our port
// ROUTES FOR OUR API
// =============================================================================

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// 
app.use('/api', hiscoreRoute);
// 
// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);

// BASE SETUP
// =============================================================================

var mongoose = require('mongoose');
mongoose.connect('mongodb://s1mon:n0nsc3nc3@ds033996.mlab.com:33996/h1score'); // connect to our database
