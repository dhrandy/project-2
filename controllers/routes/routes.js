var express = require("express")
var router = express.Router()


function User(name, email, username, password) {
    this.name = name
    this.email = email
    this.username = username
    this.password = password
}


// **** AUTHENTICATE USER****
router.post("/authenticate", function (req, res, next) {
    res.send("AUTHENTICATE")
}) 

// **** USER PROFILE ****
router.get("/profile", function (req, res, next) {
    res.send("PROFILE")
}) 

// **** GET REVIEW PAGE ****
router.get("/review", function (req, res, next) {
    res.send("REVIEW")
})

// **** GET MAP PAGE *****
router.get("/map", function (req, res, next) {
    res.send("maps.html")
})


module.exports = router