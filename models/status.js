module.exports = function (sequelize, DataTypes) {

var Statuses = sequelize.define("Statuses", {

  name: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
})

Statuses.associate = function(models) {
  Statuses.belongsTo(models.Restaurant, {
    foreignKey: {
      allowNull: false
    }
  });
};
return Statuses;

}