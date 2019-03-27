var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {

    db.musEvent.findAll({}).then(function(dbmusEvents) {
      res.render("index", {
        msg: "You can create an event here!",
        musEvents: dbmusEvents
      });
    });
  });

  // Load event page and pass in an event by id
  app.get("/event/:id", function(req, res) {

    db.musEvent.findOne({ where: { id: req.params.id } }).then(function(dbmusEvent) {
      res.render("event", {
        musEvent: dbmusEvent
      });
    });
  });

  app.get("/artist/:id", function(req, res) {
    db.Artist.findOne({where: {id: req.params.id}}).then(function(results){
      res.render("artist", {
       data: results
      })
    })
  })

  app.get("/new_event", function(req, res) {
      res.render("event_form");
  });

  app.get("/new_artist", function(req, res) {
    res.render("artist_form")
  });
  
  app.get("/login", function(req, res){
    res.render("login")
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
