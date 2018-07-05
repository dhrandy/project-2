module.exports = function(sequelize, DataTypes) {

  var Rating = sequelize.define("Rating", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    food: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    drinks: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    atmosphere: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    staff: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    cleanliness: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

    Rating.associate = function(models) {
      Rating.belongsTo(models.Restaurant, {
        foreignKey: {
          allowNull: false
        }
      });
    };

  return Rating;
  
  
}

