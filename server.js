require("dotenv").config()
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var app = express();
var db = require("./models/index");
var path = require("path")
var routes = require("./controllers/routes")

app.use(methodOverride("_method"));

// ****PORT****
var PORT = process.env.PORT || 3306

// **** SET STATIC FOLDER ****
app.use(express.static(path.join(__dirname, "public")))

// **** BODYPARSER MIDDLEWARE*****

//parse application/json
app.use(bodyParser.json())

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));


// ****ROUTES****
app.use(routes);
require("./controllers/restaurant-api.js")(app);
require("./controllers/rating-api.js")(app);
// require("./controllers/status.js")(app);
router = require("./controllers/routes.js")


// **** DATABASE CONNECTION ****
db.sequelize.sync({force: true}).then(function() {
    app.listen(PORT, function() {
        console.log("NOPE listening on PORT " + PORT)
    });
});
