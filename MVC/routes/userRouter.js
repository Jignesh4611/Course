const path= require('path');
const express = require("express"); 
const userRouter = express.Router();
const rootDir = require('../utils/pathUtil')
const {registeredHomes} = require('./hostRouter')
const homesController= require("../controllers/homes")


userRouter.get("/", homesController.getHomes);

module.exports= userRouter;

