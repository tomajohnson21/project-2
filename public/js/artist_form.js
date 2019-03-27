//Handle form validation
var validateForm = function(){

    //Variables for all form fields
    var name = $("#artist-name").val().trim();
    var genre = $("#artist-genre").val().trim();
    var about = $("#artist-description").val().trim();
    var soundcloud = $("#artist-soundcloud").val().trim();;
    var bandcamp = $("#artist-bandcamp").val().trim();;
    var youtube = $("#artist-youtube").val().trim();;
    var facebook =  $("#artist-facebook").val().trim();;
    var twitter = $("#artist-twitter").val().trim();;
    var instagram =  $("#artist-instagram").val().trim();;

    //Variables for validation indicators
    var name_invalid = $("#name_invalid");
    var name_valid = $("#name_valid");
    var genre_invalid = $("#genre_invalid");
    var genre_valid = $("#genre_valid");
    var about_invalid = $("#about_invalid");
    var about_valid = $("#about_valid");
} 