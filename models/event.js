module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: false
      },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    total_slots: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    filled_slots: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  return Event;
};
