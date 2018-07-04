var db = require("../models");

module.exports = function(app) {

app.post("/api/statuses", function(req, res)  {
  db.Statuses.create(
    req.body
  ).then(function(dbStatuses){
    res.json(dbStatuses);
  });
});


}