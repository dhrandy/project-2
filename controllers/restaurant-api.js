var db = require("../models");

module.exports = function(app) {

  // GET route for getting all restaurants
  app.get("/api/restaurants", function(req, res) {
    db.Restaurant.findAll({
       include: [db.Rating],
       include: [db.Statuses]
    })
    .then(function(dbRestaurant) {
       console.log(dbRestaurant);
      res.json(dbRestaurant);
    });
  })

  app.get("/api/restaurants/:id", function(req, res) {
    db.Restaurant.findeOne({
      where: {
        id: req.params.id
      },
      include: [db.Rating],
      include: [db.Statuses]
    }).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });

  // Post route for saving a new restaurant
  app.post("/api/restaurants", function(req, res) {
    
    console.log(req.body);
    
    db.Restaurant.create({
      street: req.body.street,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip 
    })  
    .then(function(dbRestaurant){
      res.json(dbRestaurant);
    })
         .catch(function(err) {
         res.json(err);
         })
  });  

};