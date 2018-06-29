var express = require("express")
var path = require("path")
var router = express.Router()


// **** AUTHENTICATE USER****
router.post("/authenticate", function (req, res) {
    res.send("AUTHENTICATE")
}) 

// **** USER PROFILE ****
router.get("/profile", function (req, res) {
    res.send("PROFILE")
    
}) 

// **** GET REVIEW PAGE ****
router.get("/review", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/review.html"));
});

// **** GET MAP PAGE *****
router.get("/app", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/app.html"));
});


module.exports = router