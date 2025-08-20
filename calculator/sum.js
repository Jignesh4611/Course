const sumation = (req, res) => {
  console.log("in the sumation module");
  res.end();
  const body =[]; 
  req.on('data' , chunk =>body.push(chunk))
  req.on('end', ()=>{
  const bodystr = Buffer.concat(body).toString();
  const params=  new URLSearchParams(bodystr);
  const bodyObj= Object.fromEntries(params); 
  const result = Number(bodyObj.number1) + Number(bodyObj.number2);
  console.log(result); 
    });
  
};
module.exports = sumation; 
