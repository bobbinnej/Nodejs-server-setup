const express = require('express');
const app = express();
const config = require('./config/db');
const mongoose = require('mongoose');

//db connection
mongoose.Promise=global.Promise;
mongoose.connect(config.uri, function(err,response){
    if(err)console.log("Error in trying to connect to mongodb");
           console.log("Connection to mongodb was successful");
});
//set default route
app.get('/', (req,res)=>{
    res.send("Hello world");
});

// set default port
app.set('port', process.env.port || 4003);

// listen to our port
app.listen(app.get('port'), function(err,response){
    console.log("Nodejs server is up and running on port ", app.get('port'));
});