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
  });


}