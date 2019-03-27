// Get references to page elements
var $eventTitle = $("#event-title");
var $eventLocation = $("#event-location");
var $eventGenre = $("#event-genre");
var $eventDescription = $("#event-description");
var $submitBtn = $("#submit");
var $eventList = $("#event-list");

// The API object contains methods for each kind of request we'll make
var API = {
  saveEvent: function(event) {
    return $.ajax({
      headers: {
        "Content-Type": "application/json"
      },
      type: "POST",
      url: "api/events",
      data: JSON.stringify(event)
    });
  },
  getEvents: function() {
    return $.ajax({
      url: "api/events",
      type: "GET"
    });
  },
  deleteEvent: function(id) {
    return $.ajax({
      url: "api/events/" + id,
      type: "DELETE"
    });
  }
};

// refreshExamples gets new examples from the db and repopulates the list
var refreshEvents = function() {
  API.getEvents().then(function(data) {
    var $event = data.map(function(event) {
      var $a = $("<a>")
        .text(event.text)
        .attr("href", "/event/" + event.id);

      var $li = $("<li>")
        .attr({
          class: "list-group-item",
          "data-id": event.id
        })
        .append($a);

      var $button = $("<button>")
        .addClass("btn btn-danger float-right delete")
        .text("ｘ");

      $li.append($button);

      return $li;
    });

    $eventList.empty();
    $eventList.append($event);
  });
};

// handleFormSubmit is called whenever we submit a new example
// Save the new example to the db and refresh the list
var handleFormSubmit = function(event) {
  event.preventDefault();

  var musEvent = {
    title: $eventTitle.val().trim(),
    location: $eventLocation.val().trim(),
    genre: $eventGenre.val().trim(),
    description: $eventDescription.val().trim()
  };

  if (!(musEvent.title && musEvent.description && musEvent.location && musEvent.genre)) {
    alert("Please fill out all fields");
    return;
  }

  API.saveEvent(musEvent).then(function() {
    refreshEvents();
  });

  $eventTitle.val("");
  $eventLocation.val("");
  $eventGenre.val("");
  $eventDescription.val("");
};

// handleDeleteBtnClick is called when an example's delete button is clicked
// Remove the example from the db and refresh the list
var handleDeleteBtnClick = function() {
  var idToDelete = $(this)
    .parent()
    .attr("data-id");

  API.deleteEvent(idToDelete).then(function() {
    refreshEvents();
  });
};

// Add event listeners to the submit and delete buttons
$submitBtn.on("click", handleFormSubmit);
$eventList.on("click", ".delete", handleDeleteBtnClick);
