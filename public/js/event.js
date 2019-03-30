$(".artist-link").on("click", function(){

    var artist_id = $(this).data("artist-id");
    console.log("Artist ID: " + artist_id);
    activateModal(artist_id);
});

var activateModal = function(target_id){

    console.log("Target ID: " + target_id);

    $.ajax({
        method: "GET",
        url: "/api/artists/" + target_id
    }).then(function(data){
        console.log(data)
        $("#artist-name").text(data.artist_name);
        $("#artist-genre").text(data.genre);
        $("#artist-about").text(data.about);
        
        if(!data.soundcloud_link){
            $("#artist-soundcloud").hide();
        } else {
            $("#artist-soundcloud").text(data.soundcloud_link);
            $("#artist-soundcloud").show();
        }

        if(!data.bandcamp_link){
            $("#artist-bandcamp").hide();
        }   else {
            $("#artist-bandcamp").text(data.bandcamp_link);
            $("#artist-bandcamp").show();
        }

        if(!data.yt_link){
            $("#artist-yt").hide();
        } else {
            $("#artist-yt").text(data.soundcloud_link);
            $("#artist-yt").show();
        }

        if(!data.fb_link){
            $("#artist-fb").hide();
        } else {
            $("#artist-fb").text(data.soundcloud_link);
            $("#artist-fb").show();
        }
        
        if(!data.insta_link){
            $("#artist-insta").hide();
        } else {
            $("#artist-insta").text(data.soundcloud_link);
            $("#artist-insta").show();
        }
        
        if(!data.twitter_link){
            $("#artist-twitter").hide();
        }else {
            $("#artist-twitter").text(data.soundcloud_link);
            $("#artist-twitter").show();
        }

        $("#artist-modal").modal("toggle");
    })
}

