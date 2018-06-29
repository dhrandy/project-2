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
var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")
var path = require("path")
var cors = require("cors")
var connection = require("./config/database")

// ****CONNECTION****
connection.connect(function(err) {
    if (err) throw err
    console.log("connected as id " + connection.threadId);
});

var app = express()

var routes = require("./controllers/routes/routes.js")

// var routes = require("./controllers/routes.js");



// ****PORT****
var PORT = process.env.PORT || 3000

db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("NOPE listening on PORT " + PORT)
    });
});
// ****CORS MIDDLEWARE****
app.use(cors())

// **** SET STATIC FOLDER
app.use(express.static(path.join(__dirname, "public")))

// **** BODYPARSER*****
app.use(bodyParser.json())

// ****USERS****
app.use("/routes", routes)

// **** INDEX ROUTE ****
app.get("/", function (req, res) {
    res.send("Invalid end point")
}) 


// **** START SERVER****
app.listen(PORT, function() {
    console.log("NOPE listening on PORT " + PORT)
})
