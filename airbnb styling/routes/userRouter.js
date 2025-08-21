const path= require('path');
const express = require("express"); 
const userRouter = express.Router();
const rootDir = require('../utils/pathUtil')
const {registeredHomes} = require('./hostRouter')
const HomesCotroller =require('../')

userRouter.get("/",);

module.exports= userRouter;

