var express = require("express")
var path = require("path")
var router = express.Router()
var orm = require("../config/orm.js")

// **** ADD A PLACE PAGE ****
router.post("/add-a-place", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/add-a-place.html"))
}) 

// **** FIND A PLACE PAGE ****
router.post("/find-a-place", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/find-a-place.html"))
}) 


// **** AUTHENTICATE USER ****
router.post("/authenticate", function (req, res) {
    res.send("AUTHENTICATE")
}) 

// **** USER PROFILE ****
router.get("/map", function (req, res) {
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
    res.redirect("/map/" + coords.lat + "/" + coords.lng)
});


// // **** GET USER DATA PAGE *****
router.get("/map/:lat/:lng", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/map.html"))
});

// **** DEFAULT ROUTE **** (Goes in server file)
// router.get("*", function (req, res) {
//     res.sendFile(path.join(__dirname, "../public/index.html"))
// }) 

module.exports = router