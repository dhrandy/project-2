module.exports = function (sequelize, DataTypes) {

  var Restaurant = sequelize.define("Restaurant", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    restname: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
    }
  });

  Restaurant.associate = function (models) {
    Restaurant.hasMany(models.Rating,  {
      //http://docs.sequelizejs.com/manual/tutorial/hooks.html#associations
      onDelete: "cascade",    
      foreignKey: {
        name: "id"
    },

  //   });
    // Restaurant.hasMany(models.Statuses,  {
    //   onDelete: "cascade",
    //   hooks: true
    // });
  }


  return Restaurant;
}