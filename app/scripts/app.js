$(document).ready(function(){

var imgs = [
    "./img/IMG_20150711_202203.jpg", 
    "./img/IMG_20150711_202214.jpg", 
    "./img/IMG_20150711_202927.jpg",
    "./img/IMGP1845.jpg",
    "./img/IMGP2046.jpg",
    "./img/IMGP2383.jpg",
    "./img/IMGP2701.jpg"
],  
    len = imgs.length, 
    idx = -1;

setInterval(function(){
        idx = Math.floor(Math.random()*len); // for random order
        //idx = (idx+1)%len;   //for queue order 1 to ...n 
        $("body").css("background", "#000 url("+imgs[idx]+") no-repeat center center fixed");
    }, 10000);


})