
$(document).ready(function() {

var clickCount = 0;

var Houses = {
    'gryffindor':0,
    'ravenclaw': 0,
    'hufflepuff': 0,
    'slytherin': 0,
}
var hideimages= function(){
    if(clickCount >= 5){
    $("form#image").hide();
    }
}



    $("img.g").click(function(){
        alert("gryffindor");
        Houses.gryffindor += 1;
        clickCount += 1;
        $(this).hide();
        console.log(Houses.gryffindor);
        hideimages();

    });
    $("img.s").click(function(){
        alert("slytherin ");
        Houses.slytherin += 1;
        clickCount += 1;
        $(this).hide();
        console.log(Houses.slytherin);
        hideimages();

    });

    $("img.h").click(function(){
        alert("hi hufflepuff");
        Houses.hufflepuff += 1;
        clickCount += 1;
        $(this).hide();
        console.log(Houses.hufflepuff);
        hideimages();
    });
    $("img.r").click(function(){
        alert("hi ravenclaw");
        Houses.ravenclaw += 1;
        clickCount += 1;
        $(this).hide();
        console.log(Houses.ravenclaw);
        hideimages();


    });
    console.log("clickcounter" + clickCount);




});
