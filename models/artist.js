module.exports = function(sequelize, DataTypes) {
    
    var Artist = sequelize.define("Artist", {
      artist_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
      genre: { 
        type: DataTypes.STRING,
        allowNull: false
      },
      soundcloud_link: DataTypes.STRING,
      bandcamp_link: DataTypes.STRING,
      yt_link: DataTypes.STRING,
      twitter_link: DataTypes.STRING,
      fb_link: DataTypes.STRING,
      insta_link: DataTypes.STRING
    });

    Artist.associate = function(models) {

        Artist.hasMany(models.Member, {
            onDelete: "cascade"
        });
    };
    
    return Artist;
};