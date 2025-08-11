const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("content-type", "text/html");
  res.write("<html>");
  res.write("<head>");
  res.write("<title>Complete cource</title>");
  res.write("<body>");
  res.write("<h1>welcome to the myntra</h1>");
  res.write('<a herf="#">Home </a>');
  res.write('<a herf="#">Men </a>');
  res.write('<a herf="#">women </a>');
  res.write('<a herf="#">kids </a>');
  res.write('<a herf="#">cart </a>');
  res.write("</body>");
  res.write("</head>");
  res.write("</html>");
  res.end();
});

server.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});

