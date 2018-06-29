var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var app = express();
app.use(express.static(__dirname + "/public"));

var db = require("./models/index");


app.use(bodyParser.urlencoded({extended: true}));

app.use(methodOverride("_method"));

var routes = require("./controllers/routes.js");
// app.use(routes);


var PORT = process.env.PORT || 3000

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("NOPE listening on PORT " + PORT)
    });
});