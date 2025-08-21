const path = require('path');

const express = require("express"); 
const hostRouter = express.Router(); 
const rootDir = require('../utils/pathUtil')
const  HomesCotroller= require("..//")

hostRouter.get("/add-home",HomesCotroller.getAddHome);
hostRouter.post("/add-home",HomesCotroller.postAddHomes);
exports.hostRouter= hostRouter ; 
