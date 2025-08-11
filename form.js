const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>Complete Coding</title></head>");
  
  if (req.url === "/") {
    res.write("<body><h1>Welcome to Home page</h1>");
  } else if (req.url === "/form") {
    res.write("<body><h1>Welcome to the Form page</h1>");
  } else {
    res.write("<body><h1>Page not found</h1>");
  }

  res.write(`
    <form action="/submit-detail" method="POST">
      <input type="text" id="name" name="name" placeholder="Enter your name"><br>
      <label for="gender">Gender:</label>
      <input type="radio" id="male" name="gender" value="male">
      <label for="male">Male</label>
      <input type="radio" id="female" name="gender" value="female">
      <label for="female">Female</label><br><br>
      <button type="submit">Submit</button>
    </form>
  `);
 
  res.write("</body></html>");
  console.log(req.methods,req.url)
  res.end();

});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
