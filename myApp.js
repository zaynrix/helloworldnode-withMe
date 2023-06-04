require('dotenv').config();

let express = require("express");
let app = express();

absolutePath = __dirname + "/views/index.html";
absolutePath2 = __dirname + "/public";
publicPath = "/public";
console.log("response.message.toUpperCase()");


app.get("/", function (req, res) {
  res.sendFile(absolutePath);
});


app.use(function(req, res, next) {
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  next();
});



app.get('/now', function(req, res, next) {
  req.now = new Date().toString();  // Hypothetical synchronous operation
  console.log(`This is req.now ${req.now}`);
  next();
}, function(req, res) {
  res.json({ time: req.now })
  // console.log(`This is req.now ${res.json({ time: req.now })}`);
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
