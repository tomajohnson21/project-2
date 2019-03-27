var validateForm = function(){

    //Variables for all form fields
    var name = $("#event-name").val().trim();
    var location = $("#event-location").val().trim();
    var date = $("#event-date").val().trim();
    var genre = $("#event-genre").val().trim();
    var description = $("#event-description").val().trim();
    var openings = $("#event-openings").val().trim();

    //Variables for validation indicators
    var name_indicator = $("#name-invalid");
    var location_indicator = $("#location-invalid");
    var date_indicator = $("#date-invalid");
    var genre_indicator = $("#genre-invalid");
    var description_indicator = $("#about-invalid");
    var openings_indicator = $("#openings-invalid");

    //Boolean variables for determining if the form is valid
    var name_valid = false;
    var location_valid = false;
    var date_valid = false;
    var genre_valid = false;
    var description_valid = false;
    var openings_valid = false;

    if(!name){
        name_indicator.show();
    } else {
        name_indicator.hide();
        name_valid = true;
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

    if(name_valid && location_valid && date_valid && genre_valid && description_valid && openings_valid){
        console.log("All good!")
    } else {
        console.log("Somethings wrong:");
        console.log("Name: " + name_valid);
        console.log("Location: " + location_valid);
        console.log("Date: " + date_valid)
        console.log("Genre: " + genre_valid);
        console.log("Description: " + description_valid);
        console.log("Openings: " + openings_valid)
    }
}

$("#event-submit").on("click", function(){

    event.preventDefault();
    validateForm();
});

$("#name-invalid").hide();
$("#location-invalid").hide();
$("#date-invalid").hide();
$("#genre-invalid").hide();
$("#description-invalid").hide();
$("#openings-invalid").hide();