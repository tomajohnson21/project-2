var passport = require("passport");
var LocalStrategy = require("passport-local").Strategy;
var db = require("../models");


passport.serializeUser(function(user, done){
    done(null, user);
});

passport.deserializeUser(function(user, done){
    db.User.find({where: {id: user.id}}).success(function(user){
        done(null, user);
    }).error(function(err){
        done(err, null);
        var confirm_pass = user ? user.password: '';
        var match = db.User.validPassword(password, confirm_pass, done, user);
    })
})