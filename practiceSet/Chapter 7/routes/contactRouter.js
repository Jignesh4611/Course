const path = require('path'); 
const express = require('express'); 
const rootDir  = require('../utils/pathUtil')
const contactRouter = express.Router() ; 

contactRouter.get("/contact-us" , (req,res,next)=>{
  res.sendFile(path.join(rootDir,'views' ,'contactUs.html'));
})
contactRouter.post("/contact-us" , (req,res,next)=>{
  console.log(req.body);
  res.sendFile(path.join(rootDir,'views' ,'contactSuccess.html'));

})


module.exports = contactRouter;