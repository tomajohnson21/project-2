var db = require("../models");

module.exports = function(app) {
  
  // API calls for events 
  // Get all events
  app.get("/api/events", function(req, res) {
    db.musEvent.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new event
  app.post("/api/events", function(req, res) {
    db.musEvent.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  // Delete an event by id
  app.delete("/api/events/:id", function(req, res) {
    db.musEvent.destroy({ where: { id: req.params.id } }).then(function(results) {
      res.json(results);
    });
  });

  // API calls for artists
  // Get all artists
  app.get("/api/artists", function(req, res) {
    db.Artist.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new artist
  app.post("/api/artists", function(req, res) {
    db.Artist.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  app.delete("/api/artists/:id", function(req, res){
    db.Artist.destory({where: {id: req.params.id}}).then(function(results) {
      res.json(results);
    })
  })
};
