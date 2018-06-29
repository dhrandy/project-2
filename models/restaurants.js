module.exports = function(sequelize, DataTypes) {

var Restaurant = sequelize.define("restaurant", {
  name: { 
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true,
  },
  
  location: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  
  status: { 
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },

});
return Restaurant;
}



// SORT BY COLUMN
//https://dev.mysql.com/doc/refman/8.0/en/sorting-rows.html