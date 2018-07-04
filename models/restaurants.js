module.exports = function (sequelize, DataTypes) {

  var Restaurant = sequelize.define("Restaurant", {
    street: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    city: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    state: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    zip: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

  });

  Restaurant.associate = function (models) {
    Restaurant.hasMany(models.Rating,  {
      onDelete: "cascade",
      //http://docs.sequelizejs.com/manual/tutorial/hooks.html#associations
      hooks: true

    });
    Restaurant.hasMany(models.Statuses,  {
      onDelete: "cascade",
      //http://docs.sequelizejs.com/manual/tutorial/hooks.html#associations
      hooks: true
    });

   
  
  }


  return Restaurant;
}