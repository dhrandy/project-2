module.exports = function(sequelize, DataTypes) {

  var Rating = sequelize.define("Rating", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      
    },
    name: {type: DataTypes.INTEGER,
      allowNull: false,
      between: [1,5]
        },
    food: {type: DataTypes.INTEGER,
      allowNull:false,
      between: [1,5]
    },
    drinks: {type: DataTypes.INTEGER,
      allowNull: false,
      between: [1,5]
    },
    atmosphere: {type: DataTypes.INTEGER,
      allowNull: false,
      between: [1,5]
    },
    service: {type: DataTypes.INTEGER,
      allowNull: false,
      between: [1,5]
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

