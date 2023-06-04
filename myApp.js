require('dotenv').config();

let express = require("express");
let app = express();

absolutePath = __dirname + "/views/index.html";
absolutePath2 = __dirname + "/public";
publicPath = "/public";

app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});

app.use(publicPath, express.static(__dirname + publicPath));



app.get("/json", function (req, res) {
    var response = { message: "Hello json" };
    console.log(response.message.toUpperCase());

    if (process.env.MESSAGE_STYLE === "uppercase") {
      response.message = response.message.toUpperCase();
      console.log(response.message.toUpperCase());
    }
  
    res.json(response);
    console.log(response.message.toUpperCase());

  });
  

module.exports = app;
