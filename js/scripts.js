$(document).ready(function() {


    $('body').css('display', 'none');

    $('body').fadeIn(2000);

    var clickCount = 0;

    var Houses = {
        'gryffindor': 0,
        'ravenclaw': 0,
        'hufflepuff': 0,
        'slytherin': 0,
    }
    var hideimages = function() {
        if ((clickCount >= 5) && ((Houses.gryffindor > 2) || (Houses.ravenclaw > 2) || (Houses.hufflepuff > 2) || (Houses.hufflepuff > 2) || (Houses.slytherin > 2))) {
            $("form#image").hide();
            $("h1").hide();
            $("h3").hide();



            if((Houses.gryffindor > Houses.ravenclaw)&&(Houses.gryffindor > Houses.hufflepuff) && (Houses.gryffindor > Houses.slytherin)) {
                $(".result_personality").append("hello gryffindor");
            } else if ((Houses.ravenclaw > Houses.gryffindor) && (Houses.ravenclaw > Houses.hufflepuff) && (Houses.ravenclaw > Houses.slytherin))  {
                $(".result_personality").append("hello ravenclaw");
            } else if ((Houses.hufflepuff> Houses.gryffindor) && (Houses.hufflepuff > Houses.ravenclaw) && (Houses.hufflepuff > Houses.slytherin))  {
                $(".result_personality").append("hello hufflepuff");
            } else if ((Houses.slytherin > Houses.gryffindor) && (Houses.slytherin > Houses.ravenclaw) && (Houses.slytherin > Houses.hufflepuff))  {
                $(".result_personality").append("hello slytherin");


            }else {
                $(".result_personality").append("hello else");
                }



            $("#result").show();





        }
    }

    var addHouse = function(house) {
        Houses[house] += 1
        clickCount += 1

    }

    $("img.g").click(function() {
        $(this).hide();
        addHouse('gryffindor');
        hideimages();
    });
    $("img.s").click(function() {
        $(this).hide();
        addHouse('slytherin');
        hideimages();

    });

    $("img.h").click(function() {
        $(this).hide();
        addHouse('hufflepuff');
        hideimages();
    });
    $("img.r").click(function() {
        addHouse('ravenclaw');
        $(this).hide();
        hideimages();


    });




});
