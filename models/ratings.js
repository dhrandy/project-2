module.exports = function(sequelize, DataTypes) {

  var Rating = sequelize.define("rating", {
    name: DataTypes.INTEGER,
    food: DataTypes.INTEGER,
    drinks: DataTypes.INTEGER,
    atmosphere: DataTypes.INTEGER,
    service: DataTypes.INTEGER
    
    });

  return Rating;
  
}

