const path = require("path");

let mainFile = require.main.filename 

module.exports = path.dirname(mainFile);
