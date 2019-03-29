var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Event.findAll({}).then(function(results) {
      res.render("index", {
        msg: "You can create an event here!",
        events: results,
      });
    });
  });

  // Load event page and pass in an event by id
  app.get("/event/:id", function(req, res) {

    db.Event.findOne({where: {id: req.params.id}}).then(function(results) {
      res.render("event", {
        event: results
      });
    });
  });

  app.get("/artist/:id", function(req, res) {
    db.Artist.findOne({where: {id: req.params.id}}).then(function(results){
      res.render("artist", {
       artist: results
      })
    })
  })

  app.get("/new_event", function(req, res) {
      res.render("event_form", {
        style: "create_event.css"
      });
  });

  app.get("/new_artist", function(req, res) {
    res.render("artist_form")
  });
 
  app.get("/login", function(req, res){
    res.render("login", {
      style: "styles.css"
    })
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
