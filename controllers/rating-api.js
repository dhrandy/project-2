var db = require("../models");

module.exports = function(app) {

  //Get route for retrieving the ratings
  app.get("/api/ratings", function(req, res) {
    var query = {};
    if (req.query.restaurant_id) {
      query.RestaurantId=req.query.restaurant_id;
    }
    db.Rating.findAll({
      where: query,
      include: [db.Restaurant]
    }).then(function(dbRating){
      res.json(dbRating);
    });
  });


  //Post route for saving a new rating
  app.post("/api/ratings", function(req, res){
    db.Rating.create(req.body).then(function(dbRating){
      res.json(dbRating);

    })
  })

}