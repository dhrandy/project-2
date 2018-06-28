var bcrypt = require("bcryptjs")
var connection = require("../config/database")



var user = {
    getUserById: function(id, cb) {
        connection.query("SELECT * FROM test WHERE " + id + ";", function(err, result) {
        if(err) throw err
        cb(result)
        })
    },
    
    getUserByUserName: function (username, cb) {
        connection.query("SELECT * FROM test WHERE " + username + ";", function(err, result) {
            if(err) throw err
            cb(result)
        })
    },
    addUser: function (newUser, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(newUser.password, salt, function(err, hash) {
                if(err) throw err
                newUser.password = hash
                return newUser.password
            })
        })
        .then(function(newUser) {
            connection.query("INSERT INTO test SET ?", 
            [{
                name: newUser.name,
                email: newUser.email,
                username: newUser.username,
                password: newUser.password
            }])
        })
    }
        
}

module.exports = user