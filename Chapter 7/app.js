const express = require('express');
const bosyParser  = require('body-parser');
const app = express(); 

app.use("/",(req,res,next)=>{
  console.log("in the first middleware " , req.url  , req.method)
  next();
})

app.use("/submit-detail", (req,res,next)=>{
  console.log("in the second midddleware" ,req.url, req.method)
  next();
})
app.use("/submit-detail", (req,res,next)=>{
  console.log("in the third midddleware" ,req.url, req.method)
  res.send("<h1>you are in the third middleware</h1>")
})

app.get("/",(req,res,next) => {
  console.log("handling / GET request")
  res.send(`
    <h1>Please give your detail please</h1>
    <form action="/contact-us" method ="POST"> 
    <input type="text" name="name" placeholder="Enter your name" /> 
    <input type="email" name="email" placeholder="Enter your email" /> 
    <input type="submit" /> 
    </form >  
    `)
})
app.post("/contact-us",(req,res,next)=>{
  console.log("handling /contact-us for post",req.body);
  next();
})

app.use(bosyParser.urlencoded());

app.post("/contact-us",(req,res,next)=>{
  console.log("handling /contact-us for post after ",req.body);
  res.send("thanks for your detail")
})

const port = 3001;
app.listen(port , ()=>{
  console.log(`server start at http://localhost:${port}`)
})