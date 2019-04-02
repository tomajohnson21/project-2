module.exports = function(sequelize, DataTypes) {
    
    var User = sequelize.define("User", {
      password: { 
        type: DataTypes.STRING,
        allowNull: false,
      },

      email: {
        type: DataTypes.STRING,
        allowNull: false
      },

      last_login: DataTypes.DATE,

      status: {
          type: DataTypes.ENUM('active', 'inactive'),
          defaultValue: 'active'
      }
    });

    return User;
};