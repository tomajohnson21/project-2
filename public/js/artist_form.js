//Handle form validation
var validateForm = function(){

    //Variables for all form fields
    var name = $("#artist-name").val().trim();
    var genre = $("#artist-genre").val().trim();
    var about = $("#artist-description").val().trim();
    // var soundcloud = $("#artist-soundcloud").val().trim();
    // var bandcamp = $("#artist-bandcamp").val().trim();
    // var youtube = $("#artist-youtube").val().trim();
    // var facebook =  $("#artist-facebook").val().trim();
    // var twitter = $("#artist-twitter").val().trim();
    // var instagram =  $("#artist-instagram").val().trim();

    //Variables for validation indicators
    var name_indicator = $("#name-invalid");
    var genre_indicator = $("#genre-invalid");
    var about_indicator = $("#about-invalid");

    //Boolean variables for determining if the form is valid
    var name_valid = false;
    var genre_valid = false;
    var about_valid = false;

    if(!name){
        name_indicator.show();
    } else {
        name_indicator.hide();
        name_valid = true;
    }

    if(!genre){
        genre_indicator.show();
    } else {
        genre_indicator.hide();
        genre_valid = true;
    }

    if(!about){
        about_indicator.show();
    } else {
        about_indicator.hide();
        about_valid = true;
    }

    if(name_valid && genre_valid && about_valid){
        console.log("All good!")
    } else {
        console.log("Somethings wrong:");
        console.log("Name: " + name_valid);
        console.log("Genre: " + genre_valid);
        console.log("About: " + about_valid);
    }


}

// var postArtist = function(new_artist) { }

$("#artist-submit").on("click", function(){

    event.preventDefault();
    validateForm();
});

$("#name-invalid").hide();
$("#genre-invalid").hide();
$("#about-invalid").hide();