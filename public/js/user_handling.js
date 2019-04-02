var validateRegisterForm = function(){
    var email = $("#register-email").val().trim();
    var password = $("#register-password").val().trim();
    var confirm = $("#register-confirm").val().trim();

    var email_valid = false;
    var password_valid = false;
    var confirm_valid = false;

    var email_indicator = $("#reg-email-invalid");
    var password_indicator = $("#reg-pw-invalid");
    var confirm_indicator = $("#reg-confirm-invalid");
    
    if(!email){
        email_indicator.show();
    } else if (!email.includes("@")) {
        email_indicator.show();
    } else {
        email_indicator.hide();
        email_valid = true;
    }

    if(!password){
        password_indicator.show();
    } else {
        password_indicator.hide();
        password_valid = true;
    }

    if(confirm !== password){
        confirm_indicator.show();
    } else {
        confirm_indicator.hide();
        confirm_valid = true;
    }

    if(email_valid && password_valid && confirm_valid){

        user = {
            email: email,
            password: password
        }

        registerUser(user);
    }
}


var registerUser = function(new_user){
    $.ajax({
        method: "POST",
        url: "/users/register",
        data: new_user
    }).then(function(){
        $("#user-modal").modal("hide");
        console.log(window.sessionStorage);
    });
}

$("#register-button").on("click", function(){

    validateRegisterForm();
})

var validateLoginForm = function(){

    var email = $("#login-email").val().trim();
    var password = $("#login-password").val().trim();

    var email_valid = false;
    var password_valid = false;

    var email_indicator = $("#login-email-invalid");
    var password_indicator = $("#login-pw-invalid");
    
    if(!email){
        email_indicator.show();
    } else if (!email.includes("@")) {
        email_indicator.show();
    } else {
        email_indicator.hide();
        email_valid = true;
    }

    if(!password){
        password_indicator.show();
    } else {
        password_indicator.hide();
        password_valid = true;
    }

    if(email_valid && password_valid){

        user = {
            email: email,
            password: password
        }

        loginUser(user);
    }
}

var loginUser = function(user){
    $.ajax({
        method: "POST",
        url: "/users/login",
        data: user
    }).then(function(data){
        window.location.assign("/")
    })
}

$("#login-button").on("click", function(){

    validateLoginForm();
})

$("#logout-link").on("click", function(){
    $.ajax({
        method: "GET",
        url: "/users/logout"
    }).then(function(data){
        window.location.assign("/");
    })
})

$("#reg-email-invalid").hide();
$("#reg-pw-invalid").hide();
$("#reg-confirm-invalid").hide();