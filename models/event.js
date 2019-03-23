module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    date: DataTypes.DATE,
    location: DataTypes.STRING,
    description: DataTypes.TEXT
  });

  Event.associate =  function(models){

    Event.hasMany(models.Artist, {
      onDelete: "cascade"
    });
  };

  return Event;
};