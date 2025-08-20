const path= require('path'); 
const express = require("express");
const app = express();

app.set('view engine', 'ejs');
app.set('views','views')
app.use(express.static(path.join(__dirname, 'public')));

const userRouter = require("./routes/userRouter")
const bodyParser= require("body-parser");
const {hostRouter} = require("./routes/hostRouter");
const rootDir = require('./utils/pathUtil')
app.use(express.urlencoded())
app.use("/", (req, res, next) => {
  console.log(req.url, req.method);
  next();
});
app.use(userRouter);
app.use("/host",hostRouter);


app.use((req,res,next)=>{
  res.sendFile(path.join(rootDir , 'views','404.html'))
})
const port = 3002;
app.listen(port, () => {
  console.log("server started on the on http://localhost:3002");
}); 