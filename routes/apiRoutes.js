var db = require("../models");

module.exports = function(app) {
  
  // API calls for events 
  // Get all events
  app.get("/api/events", function(req, res) {
    db.Event.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new event
  app.post("/api/events", function(req, res) {
    db.Event.create(req.body).then(function(results) {
      res.json(results);
    });
  });

  //Update an event when an artist is added
  app.put("/api/events", function(req, res){

    db.Event.update(req.body, {where: {id: req.body.id}}).then(function(results){

      res.json(results)
    });
  })  

  // Get a single event by id
  app.get("/api/events/:id", function(req, res){
    db.Event.findOne({where: {id: req.params.id}}).then(function(event_results) {
      
      db.Artist.findAll({where: {eventid: req.params.id}}).then(function(artist_results){
        
        data = {event_data: event_results, artist_data: artist_results}
        
        res.json(data)
      });
    });
  })

  // Delete an event by id
  app.delete("/api/events/:id", function(req, res) {
    
    db.Event.destroy({ where: { id: req.params.id } }).then(function(results) {
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

  app.get("/api/artists/:id", function(req, res){
    db.Artist.findOne({where: {id: req.params.id}}).then(function(results) {
      res.json(results);
    })
  })

  // Delete an event by id
  app.delete("/api/artists/:id", function(req, res) {
    db.Artist.destroy({where: {id: req.params.id}}).then(function(results) {
      res.json(results);
    });
  });
};