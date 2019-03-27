var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Event.findAll({}).then(function(results) {
      res.render("index", {
        msg: "Welcome!",
        data: results
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/event/:id", function(req, res) {
    db.Event.findOne({where: {id: req.params.id}}).then(function(results) {
      res.render("event", {
        data: results
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

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
