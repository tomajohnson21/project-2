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
      type: DataTypes.DATE,
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
    city: {
      type: DataTypes.STRING,
      allowNull: false
    },
    street_address: {
      type: DataTypes.STRING,
      allowNull: false
    },
    state: {
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
