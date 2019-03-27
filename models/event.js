module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define("Event", {
    title: DataTypes.STRING,
    genre: DataTypes.STRING,
    date: DataTypes.STRING,
    total_slots: DataTypes.INTEGER,
    filled_slots: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    location: DataTypes.STRING,
    description: DataTypes.TEXT
  });



  // Event.associate =  function(models){

  //   Event.hasMany(models.Artist, {
  //     onDelete: "cascade"
  //   });
  // };

  return Event;

};
