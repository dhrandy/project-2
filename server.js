var express = require("express")
var bodyParser = require("body-parser")
var methodOverride = require("method-override")

var app = express()
app.use(express.static(__dirname + "/public"))

app.use(bodyParser.urlencoded({extended: false}))

app.use(methodOverride("_method"))

var routes = require("./controllers/routes.js");
app.use(routes);


var PORT = process.env.PORT || 3000

app.listen(PORT, function() {
    console.log("NOPE listening on PORT " + PORT)
})