var express = require("express")
var router = express.Router()
var passport = require("passport")
var jwt = require("jsonwebtoken")

var user = require("../../models/user")

function User(name, email, username, password) {
    this.name = name
    this.email = email
    this.username = username
    this.password = password
}
// **** REGISTER ****
router.post("/register", function (req, res, next) {
    newUser = new User(req.body.name, req.body.email, req.body.username, req.body.password)
    user.addUser(newUser, function(err, user) {
        if(err) {
            res.json({success: false, msg: "Failed to register user"})
        }
        else {
            res.json({success: true, msg: "USER REGISTERED"})
        }
    })
}) 

// **** AUTHENTICATE ****
router.post("/authenticate", function (req, res, next) {
    res.send("AUTHENTICATE")
}) 

// **** PROFILE ****
router.get("/profile", function (req, res, next) {
    res.send("PROFILE")
}) 


// module.exports = router