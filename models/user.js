var bcrypt = require("bcrypt-nodejs");
var Sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
    
    var User = sequelize.define("User", {
      
      password: { 
        type: DataTypes.STRING,
        validate: {notNull: true, notEmpty: true}
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false
      },
      
      last_login: {
        type: Sequelize.DATE
      },

      status: {
        type: Sequelize.ENUM('active', 'inactive'),
        defaultValue: 'active'
      }

    },
    {
        classMethods: {
            validPassword: function(password, confirm_pass, done, user){
                bcrypt.compare(password, confirm_pass, function(err, match){
                    if (err) throw err;
                    if(match){
                        return done(null, user);
                    } else {
                        return done(null, false);
                    }
                })
            }
        }
    });

    User.hook('beforeCreate', function(user, fn){
        var salt = bcrypt.genSalt(12, function(err, salt){
            return salt;
        });

        bcrypt.hash(user.password, salt, null, function(err, hash){
            if (err) throw err;
            user.password = hash;
            return fn(null, user);
        })
    })

    return User;
};