var db = require("../models");

module.exports = function(app) {
  
  // API calls for events 
  // Get all events
  app.get("/users", function(req, res) {
    db.User.findAll({}).then(function(results) {
      res.json(results);
    });
  });

  // Create a new event
  app.post("/users", function(req, res) {
    db.User.create(req.body).then(function(results) {
      res.json(results);
    });
  });
};