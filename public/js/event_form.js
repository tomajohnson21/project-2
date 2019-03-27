var validateForm = function(){

    //Variables for all form fields
    var title = $("#event-title").val().trim();
    var location = $("#event-location").val().trim();
    var date = $("#event-date").val().trim();
    var genre = $("#event-genre").val().trim();
    var description = $("#event-description").val().trim();
    var openings = $("#event-openings").val().trim();

    //Variables for validation indicators
    var title_indicator = $("#title-invalid");
    var location_indicator = $("#location-invalid");
    var date_indicator = $("#date-invalid");
    var genre_indicator = $("#genre-invalid");
    var description_indicator = $("#description-invalid");
    var openings_indicator = $("#openings-invalid");

    //Boolean variables for determining if the form is valid
    var title_valid = false;
    var location_valid = false;
    var date_valid = false;
    var genre_valid = false;
    var description_valid = false;
    var openings_valid = false;

    if(!title){
        title_indicator.show();
    } else {
        title_indicator.hide();
        title_valid = true;
    }

    if(!location){
        location_indicator.show();
    } else {
        location_indicator.hide();
        location_valid = true;
    }

    if(!date){
        date_indicator.show();
    } else {
        date_indicator.hide();
        date_valid = true;
    }

    if(!genre){
        genre_indicator.show();
    } else {
        genre_indicator.hide();
        genre_valid = true;
    }

    if(!description){
        description_indicator.show();
    } else {
        description_indicator.hide();
        description_valid = true;
    }

    if(!openings){
        openings_indicator.show();
    } else {
        openings_indicator.hide();
        openings_valid = true;
    }

    if(title_valid && location_valid && date_valid && genre_valid && description_valid && openings_valid){
        console.log("All good!")

        var event_data = {
            title: title,
            location: location,
            date: date,
            genre: genre,
            description: description,
            total_slots: openings
        }

        postEvent(event_data)
    } else {
        console.log("Somethings wrong:");
        console.log("Title: " + title_valid);
        console.log("Location: " + location_valid);
        console.log("Date: " + date_valid)
        console.log("Genre: " + genre_valid);
        console.log("Description: " + description_valid);
        console.log("Openings: " + openings_valid)
    }
}

var postEvent = function(new_event) { 
    $.ajax({
        method: "POST",
        url: "/api/events",
        data: new_event
    }).then(function(response){
        console.log(response)    
    })
}

$("#event-submit").on("click", function(){

    event.preventDefault();
    validateForm();
});

$("#title-invalid").hide();
$("#location-invalid").hide();
$("#date-invalid").hide();
$("#genre-invalid").hide();
$("#description-invalid").hide();
$("#openings-invalid").hide();