const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const bodyParser  = require("body-parser");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('dist'));

var path = require('path');

// const express = require('express')
const mockAPIResponse = require('./mockAPI.js');

var aylien = require('aylien_textapi');

 
console.log(__dirname);

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});


let textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
 });

//  Post Route
app.post("/articleURL", (req, res) => {
    textapi.sentiment({
        url: req.body.text,
        mode: 'document'
      }, function(error, response) {
        if (error === null) {
          console.log(response);
        }
      })
});


// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
});
