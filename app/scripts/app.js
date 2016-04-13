$(document).ready(function(){

var imgs = [], len, idx= -1;

$.getJSON( "scripts/imglist.json", function(data){ 
    $(data.pictures).each(function() {
        console.log("images loaded successfuly");
            imgs.push( this.src );
    });
    len = imgs.length;
})
    .fail(function() {
    console.log( "error" );
    });


setInterval(function(){
        idx = Math.floor(Math.random()*len); // for random order
        //idx = (idx+1)%len;   //for queue order 1 to ...n 
        $("#bg").css("background", "#000 url("+imgs[idx]+") no-repeat center center fixed")
        .css("background-size", "cover")
        .css("min-height", "100%")
        .css("min-width", "100%");
    }, 10000);


})