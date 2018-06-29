var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();
var db = require("./models/index");
var path = require("path")
var routes = require("./controllers/routes")

app.use(methodOverride("_method"));

// ****PORT****
var PORT = process.env.PORT || 3000

// **** DATABASE CONNECTION ****

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("NOPE listening on PORT " + PORT)
    });
});

// **** SET STATIC FOLDER ****
app.use(express.static(path.join(__dirname, "public")))

// **** BODYPARSER*****
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}));

// ****ROUTES****
app.use(routes)

// **** INDEX ROUTE ****
app.get("/", function (req, res) {
    res.send("Invalid end point")
}) 


// **** START SERVER****
app.listen(PORT, function() {
    console.log("NOPE listening on PORT " + PORT)
})