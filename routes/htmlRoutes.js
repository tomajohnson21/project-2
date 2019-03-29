var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Event.findAll({}).then(function(results) {
      res.render("index", {
        msg: "You can create an event here!",
        events: results,
        style: "create_event.css"
      });
    });
  });

  // Load event page and pass in an event by id
  app.get("/event/:id", function(req, res) {

    db.Event.findOne({where: {id: req.params.id}}).then(function(event_results) {
      
      db.Artist.findAll({where: {foreign_key: req.parmas.id}}).then(function(artist_results){
        
        res.render("event", {data: {event_data: event_results, artist_data: artist_results}})
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
      res.render("event_form");
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
