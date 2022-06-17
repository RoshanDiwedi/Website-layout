$(document).ready(function(){

    // navigation section
    $(".nav").on("click", function(){
        $(".slide-nav").fadeIn(1000)
    });

    $(".nav-close").on("click", function(){
        $(".slide-nav").fadeOut(1000)
    });

    // Slider section button
    $(".round-btn").on("click", function(){
        $(this).addClass("focus");
        $(this).siblings().removeClass("focus");
    });
    // effect 1
    $(".btn-1").on("click", function(){
        $(".slider-effect-1").fadeIn(1000);
        $(".slider-effect-1").siblings().hide();
    });

    $(".btn-2").on("click", function(){
        $(".slider-effect-2").fadeIn (1000);
        $(".slider-effect-2").siblings().hide();
    });

    $(".btn-3").on("click", function(){
        $(".slider-effect-3").fadeIn (1000);
        $(".slider-effect-3").siblings().hide();

    });

    $(".btn-4").on("click", function(){
        $(".slider-effect-4").fadeIn (1000);
        $(".slider-effect-4").siblings().hide();
    });

    // para hover effect
    $(".col-left").on("mouseenter", function(){
        $(".col-left").css({
            "margin-top" : "60px",
            "transition" : "all 0.5s ease 0s"
        });

        $(".col-black").css({
            "margin-top" : "-60px",
            "margin-left" : "60px",
            "transition" : "all 0.5s ease 0s"
        });

        $(".col-img").css({
            "margin-top" : "-60px",
            "margin-left" : "60px",
            "transition" : "all 0.5s ease 0s"
        });
    });
    // para image mouseleave function
    $(".col-left").on("mouseleave", function(){
        $(".col-left").css({
            "margin-top" : "",
            "transition" : "all 0.5s ease 0s"
        });

        $(".col-black").css({
            "margin-top" : "",
            "margin-left" : "",
            "transition" : "all 0.5s ease 0s"
        });

        $(".col-img").css({
            "margin-top" : "",
            "margin-left" : "",
            "transition" : "all 0.5s ease 0s"
        });
    });
});