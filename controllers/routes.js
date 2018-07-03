var express = require("express")
var path = require("path")
var router = express.Router()
var orm = require("../config/orm.js")


// **** AUTHENTICATE USER****
router.post("/authenticate", function (req, res) {
    res.send("AUTHENTICATE")
}) 

// **** USER PROFILE ****
router.get("/app", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/app.html"))
    
}) 

// **** GET REVIEW PAGE ****
router.get("/review", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/review.html"));
});

// **** LISTEN FOR POST USER DATA PAGE *****
router.post("/user_coords", function(req, res) {
    // console.log(req.body)
    coords = req.body.coords
    console.log(coords)
    res.redirect(path.join(__dirname, "../public/app/" + coords.lat + "/" + coords.lng))
});


// // **** GET USER DATA PAGE *****
router.get("../public/app/lat:/lng:", function(req, res) {
    res.redirect("../public/app/lat:/lng:")
});

// **** DEFAULT ROUTE ****
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
}) 

module.exports = router