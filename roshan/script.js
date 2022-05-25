$(document).ready(function(){
    $(".nav").on("click", function(){
        $(".slide-nav").fadeIn(1000)
    });

    $(".nav-close").on("click", function(){
        $(".slide-nav").fadeOut(1000)
    });


});