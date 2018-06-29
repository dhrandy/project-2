module.exports = function(sequelize, DataTypes) {

var Restaurant = sequelize.define("restaurant", {
  name: DataTypes.STRING,
  location: DataTypes.STRING,
  status: DataTypes.BOOLEAN

});
return Restaurant;
}



// SORT BY COLUMN
//https://dev.mysql.com/doc/refman/8.0/en/sorting-rows.html