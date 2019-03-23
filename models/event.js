module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    date: DataTypes.DATE,
    total_slots: DataTypes.INTEGER,
    open_slots: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    location: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  return Event;
};