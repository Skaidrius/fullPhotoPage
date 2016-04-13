$(document).ready(function(){

var imgs = [], 
    likes = [], 
    authors = [],
    titles = [],
    places = [],
    albums = [],
    len, 
    idx= -1;

$.getJSON( "scripts/imglist.json", function(data){ 
    $(data.pictures).each(function() {
        //console.log("images loaded successfuly");
        imgs.push( this.src );
        likes.push( this.likes );
        authors.push( this.author );
        titles.push( this.title );
        places.push( this.place );
        albums.push( this.album );
        //console.log(likes) //for testing of arrays
    });
    len = imgs.length;
})
    .fail(function() {
    console.log( "error" );
    });

function getIndex(){
    idx = Math.floor(Math.random()*len); // for random order
        //idx = (idx+1)%len;   //for queue order 1 to ...n 
}

function fillPage(){
    getIndex();
    $("#bg").css("background", "#000 url("+imgs[idx]+") no-repeat center center fixed")
        .css("background-size", "cover")
        .css("min-height", "100%")
        .css("min-width", "100%");
    $('.likesNum').html(likes[idx]);
}

setTimeout(function(){
        fillPage();
    }, 100);

setInterval(function(){
        fillPage();
    }, 10000);


})