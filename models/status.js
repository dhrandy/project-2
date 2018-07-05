module.exports = function (sequelize, DataTypes) {

var Statuses = sequelize.define("Statuses", {

  busyOrNot: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },
});


Statuses.associate = function(models) {
  Statuses.belongsTo(models.Restaurant, {
    foreignKey: {
      allowNull: false
    }
  });
};
return Statuses;

}