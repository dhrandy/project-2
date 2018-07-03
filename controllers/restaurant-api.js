var db = require("../models");

module.exports = function(app) {
  app.get("/api/restaurants", function(req, res) {
    db.Restaurant.findAll({
      include: [db.Rating]
    })
    .then(function(dbRestaurant) {
      console.log(dbRestaurant);
      return res.json(dbRestaurant);
      
    });

  app.get("/api/restaurants/:id", function(req, res) {
    db.Author.findeOne({
      where: {
        id: req.params.id
      },
      include: [db.Rating]
    }).then(function(dbRestaurant) {
      res.json(dbRestaurant);
    });
  });
  
  // Post route for saving a new restaurant
  app.post("/api/restaurants", function(req, res) {
    console.log(req.body);
    db.Restaurant.create(
      req.body
    ).then(function(dbRestaurant){
      res.json(dbRestaurant);
    });
  });

  
  });


}