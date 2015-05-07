$(document).ready(function() {

var clickCount = 0;

var Houses = {
    gryffindor: 4,
    ravenclaw: 0,
    hufflepuff: 0,
    slytherin: 0,
}


//click makes the following happen-

    $("img.g").click(function(){
        alert("hi");
        Houses.gryffindor += 1;
        clickCount += 1;
        $(this).hide();
        console.log(Houses.gryffindor);
    });
    $("img.s").click(function(){
        alert("hi");
        Houses.slytherin += 1;
        clickCount += 1;
        console.log(Houses.slytherin);
    });

    return Houses;

});
