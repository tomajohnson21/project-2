var db = require("../models");
var moment = require("moment")

module.exports = function(app, passport) {
  // Load index page
  app.get("/", function(req, res) {
    db.Event.findAll({where: {date: {$gte: moment().format("YYYY-MM-DD")}}}).then(function(results) {
      res.render("index", {
        events: results,
        style: "event.css"
      });
    });
  })

  // Load event page and pass in an event by id
  app.get("/events/:id", function(req, res) {


    db.Event.findOne({where: {id: req.params.id}}).then(function(event_results) {
      
      db.Artist.findAll({where: {EventId: req.params.id}}).then(function(artist_results){
        
        res.render("event", {
          data: {
            event_data: event_results, 
            artist_data: artist_results
          },
          style: "event.css"
        })
      });
    });
  });

  app.get("/artists/:id", function(req, res) {
    db.Artist.findOne({where: {id: req.params.id}}).then(function(results){
      res.render("artist", {
       artist: results,
       style: "artist.css"
      })
    })
  })

  app.get("/new_event", isLoggedIn, function(req, res) {
      res.render("event_form", {
        style: "create_event.css"
      });
  });


  app.get("/events/:id/new_artist", isLoggedIn, function(req, res) {
    res.render("artist_form", {
      event_id: req.params.id,
      style: "event.css"      
    })
  });
 
  
  app.get("/users", function(req, res) {
    db.User.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Register new user
  app.post("/users/register", passport.authenticate("local-signup", {successRedirect: "/", failureRedirect:"/"}));

  // Logout User
  app.get('/users/logout', function(req, res) {
    req.session.destroy(function(err){

      res.redirect("/");
    })
  });

  app.post('/users/login', passport.authenticate('local-signin', {successRedirect: "/", failureRedirect: "/"}));

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });

  function isLoggedIn(req, res, next) {
 
    if (req.isAuthenticated())
     
        return next();
         
    res.redirect('/');
 
  }
  
};
