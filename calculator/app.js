const http= require('http'); 
const requestHandler = require('./handler');
const server  = http.createServer(requestHandler);
const port  = 3002; 
server.listen(port, ()=>{
  console.log(`connected with http://localhost:${port}`)
})