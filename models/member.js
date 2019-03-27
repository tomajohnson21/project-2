module.exports = function(sequelize, DataTypes) {

    var Member = sequelize.define("Member", {

      member_name: {
          type: DataTypes.STRING,
          allowNull: false
        },
      role: DataTypes.STRING
    });

    Member.associate = function(models) {

        Member.belongsTo(models.Artist, {

            foreignKey: {
                allowNull: false
            }
        });
    };

    return Member;
  };