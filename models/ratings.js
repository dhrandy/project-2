module.exports = function(sequelize, DataTypes) {

  var Rating = sequelize.define("rating", {
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

  return Rating;
  
}

