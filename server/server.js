/**
 * Created by robbynewman on 1/12/16.
 */
/**
 * Created by robbynewman on 1/14/16.
 */

var express = require('express');
var path = require('path');
var index = require('./routes/index');
var mongoose = require('mongoose');


var bodyParser = require('body-parser');


var app = express();
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, './public')));
app.use('/', index);



var mongoURI = "mongodb://localhost/twitter_handles"

var MongoDB = mongoose.connect(mongoURI).connection;


MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
    console.log('mongodb connection open!');
});



var server = app.listen(3000, function(){
    var port = server.address().port;
    console.log('Listening on port: ', port);
} );

//server/routes/public/views/index.html'