const path = require("path");
const fs = require("fs");
const code = require("./code.js");

if(!fs.existsSync(path.join(__dirname))) {
    fs.mkdirSync(path.join(__dirname));
}

code.insertText();
