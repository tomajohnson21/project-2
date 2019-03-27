var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {


    db.Event.findAll({}).then(function(dbEvents) {
      res.render("index", {
        msg: "You can create an event here!",
        Events: dbEvents
      });
    });
  });

  // Load event page and pass in an eveny by id
  app.get("/event/:id", function(req, res) {
    db.Event.findOne({ where: { id: req.params.id } }).then(function(dbEvent) {
      res.render("event", {
        Event: dbEvent
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


  app.get("/login", function(req, res){
    res.render("login")
  })

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
