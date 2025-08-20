const sumation  = require("./sum")
const sumRequestHandler = (req, res) => {
  console.log(req.url, req.method);
  console.log("request received");
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write(
      `
      <html>
      <head>
      <title>Prectice set</title> 
      </head> 
      <body>
      <h1>welcome to the calculator</h1>
      <a href="/calculator">calculator</a>
      </body>
      </html>  
      `
    );
    return res.end();
  } else if (req.url === "/calculator") {
    res.setHeader("Content-type", "text/html");
    res.write(`
      <html>
      <head>
      <title >Practice set</title>
      <body>
      <form action="/calculate-result" method="POST">
      <input type="text" name="number1" placeholder="1st number"> 
      <input type="text" name="number2" placeholder="2nd number"> 
      <button>Sum</botton>
      </form>
      </body>
      </head> 
      </html> 
      `);
    return res.end();
  }
  else if (req.url.toLowerCase() === "/calculate-result" && req.method==="POST")
  {
    return sumation(req,res);
  }
  res.setHeader("Content-Type", "text/html");
  res.write(
    `
      <html>
      <head>
      <title>Prectice set</title> 
      </head> 
      <body>
      <h1>page does not exits</h1>
      <a href="/">Go to home</a>
      </body>
      </html>  
      `
  );
  res.end();
};
module.exports = sumRequestHandler;
