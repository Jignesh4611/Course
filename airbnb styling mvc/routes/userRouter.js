const path= require('path');
const express = require("express"); 
const userRouter = express.Router();
const rootDir = require('../utils/pathUtil')
const {registeredHomes} = require('./hostRouter')

userRouter.get("/", (req, res, next) => {
    res.render('home',{registeredHomes : registeredHomes , pageTitle : 'airbnb homes'})
});

module.exports= userRouter;

