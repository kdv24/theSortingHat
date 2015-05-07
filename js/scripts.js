$(document).ready(function() {

var clickCount = 0;

var Houses = {
    gryffindor: 0,
    ravenclaw: 0,
    hufflepuff: 0,
    slytherin: 0,
}


//click makes the following happen-

    $("img.g").click(function(){
        alert("gryffindor");
        Houses.gryffindor += 1;
        clickCount += 1;
        $(this).hide();
        console.log(Houses.gryffindor);
    });
    $("img.s").click(function(){
        alert("slytherin ");
        Houses.slytherin += 1;
        clickCount += 1;
        $(this).hide();
        console.log(Houses.slytherin);
    });
    $("img.h").click(function(){
        alert("hi hufflepuff");
        Houses.hufflepuff += 1;
        clickCount += 1;
        $(this).hide();
        console.log(Houses.hufflepuff);
    });
    $("img.r").click(function(){
        alert("hi ravenclaw");
        Houses.ravenclaw += 1;
        clickCount += 1;
        $(this).hide();
        console.log(Houses.ravenclaw);
    });

    return Houses;

});
