const path = require('path');

const express = require("express"); 
const hostRouter = express.Router(); 
const rootDir = require('../utils/pathUtil')

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views','addhome.html'))
});
const registeredHomes = [];
hostRouter.post("/add-home", (req, res, next) => {
  console.log('Home Registration successful for : ' ,req.body, req.body.houseName);
  registeredHomes.push({houseName : req.body.houseName}) ;
  console.log(req.body.houseName);
    res.sendFile(path.join(rootDir,'views', 'homeadded.html'))

});

exports.hostRouter= hostRouter ; 
exports.registeredHomes = registeredHomes ; 
