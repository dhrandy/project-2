module.exports = function (sequelize, DataTypes) {

  var Restaurant = sequelize.define("Restaurant", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
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

  Restaurant.associate = function (models) {
    Restaurant.hasMany(models.Rating, {
      onDelete: "cascade",
      //http://docs.sequelizejs.com/manual/tutorial/hooks.html#associations
      hooks: true
    });
  
  }


  return Restaurant;
}