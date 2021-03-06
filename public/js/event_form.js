var validateForm = function(){

    //Variables for all form fields
    var title = $("#event-title").val().trim();
    var address = $("#event-address").val().trim();
    var city = $("#event-city").val().trim();
    var state = $("#event-state").val().trim();
    var date = $("#event-date").val().trim();
    var genre = $("#event-genre").val().trim();
    var description = $("#event-description").val().trim();
    var openings = $("#event-openings").val().trim();
    var city = $("#event-city").val().trim()
    var state = $("#event-state").val().trim()
    

    //Variables for validation indicators
    var title_indicator = $("#title-invalid");
    var address_indicator = $("#address-invalid");
    var city_indicator = $("#city-invalid");
    var state_indicator = $("#state-invalid")
    var date_indicator = $("#date-invalid");
    var genre_indicator = $("#genre-invalid");
    var description_indicator = $("#description-invalid");
    var openings_indicator = $("#openings-invalid");
    var city_indicator = $("#city-invalid");
    var state_indicator = $("#state-invalid")

    //Boolean variables for determining if the form is valid
    var title_valid = false;
    var address_valid = false;
    var city_valid = false;
    var state_valid = false;
    var date_valid = false;
    var genre_valid = false;
    var description_valid = false;
    var openings_valid = false;
    var city_valid = false;
    var state_valid = false;

    if(!title){
        title_indicator.show();
    } else {
        title_indicator.hide();
        title_valid = true;
    }

    if(!address){
        address_indicator.show();
    } else {
        address_indicator.hide();
        address_valid = true;
    }

    if(!city){
        city_indicator.show();
    } else {
        city_indicator.hide();
        city_valid = true;
    }

    if(!state){
        state_indicator.show();
    } else if(!validateState(state)){
        state_indicator.show();
    } else {
        state_indicator.hide();
        state_valid = true;
    }

    if(!date){
        date_indicator.show();
    } else if(!validateDate(date)){
        date_indicator.show()
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

    if(title_valid && address_valid && date_valid && genre_valid && description_valid && openings_valid && state_valid && city_valid){

        var event_data = {
            title: title,
            street_address: address,
            state: state,
            city: city,
            date: date,
            genre: genre,
            description: description,
            total_slots: openings,
            state: state,
            city: city
        }

        postEvent(event_data);
    } 
}

var validateState = function(state){
    var stateArr = ['AL', 'AK', 'AZ', 'AR', 'CO', 'CT', 'DC', 'DE', 'FL', 
                    'GA', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 
                    'ME', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 
                    'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 
                    'OR', 'PA', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 
                    'VA', 'WA', 'WV', 'WI', 'WY']

    if(stateArr.includes(state)){
        return true;
    }

    return false;
}

var validateDate = function(new_date) {

    date_format = "YYYY-MM-DD";
    
    if(!moment(new_date, date_format, true).isValid()){
        return false;
    }

    curr_date = new Date();

    var year = new_date.substring(0, 4);

    var curr_year = curr_date.getFullYear();

    if(year < curr_year){
        return false;
    }

    var month = new_date.substring(5, 7);

    var curr_month = curr_date.getMonth();


    if(month < curr_month){
        return false;
    }


    var day = new_date.substring(8)

    var curr_day = curr_date.getDate();

    if(month === curr_month && day < curr_day){
        return false
    }

    return true;

}

var postEvent = function(new_event) { 
    $.ajax({
        method: "POST",
        url: "/api/events",
        data: new_event
    }).then(function(response){
        console.log(response)  
        goBackHome();  
    })
}

function goBackHome(){
    window.location.assign("/");
    
}

function clearForm() {
    $("#event-title").val("");
    $("#event-location").val("")
    $("#event-date").val("");
    $("#event-genre").val("");
    $("#event-description").val("");
} 

$("#event-submit").on("click", function(){

    event.preventDefault();
    validateForm();
});

$("#title-invalid").hide();
$("#address-invalid").hide();
$("#city-invalid").hide();
$("#state-invalid").hide();
$("#date-invalid").hide();
$("#genre-invalid").hide();
$("#description-invalid").hide();
$("#openings-invalid").hide();
$("#city-invalid").hide();
$("#state-invalid").hide();
