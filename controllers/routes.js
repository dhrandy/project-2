var express = require("express")
var path = require("path")
var router = express.Router()


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
    user_coords = req.body.coords
    console.log(user_coords)
    if(user_coords != null) {
        coords = user_coords
    }
    else {
        return res.json({sucess: false, msg: "PLEASE ENTER A VALID ADDRESS"})
    }
    console.log( "This is returned  " + res.coords)
});


// // **** GET USER DATA PAGE *****
router.get("/user_coords", function(req, res) {
    user_coords = res.body.user_coords
    console.log(user_coords)
});

// **** DEFAULT ROUTE ****
router.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/index.html"))
}) 

module.exports = router