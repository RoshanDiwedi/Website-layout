$(document).ready(function(){
    // by *
    $("*").css("background-color",  "aqua");

    // by #id
    $("#main-1").css({
        "padding" : "25px", "border" : "5px dotted red"
    })

    // by .Class
    $(".btn").css({
        "padding" : "15px 25px", "border" : "none", "background-color" : "orange", "color" : "#fff"
    })

    // by .Class, .class
    // $(".btn, .para").css({
    //     "padding" : "15px 25px", "border" : "none", "background-color" : "orange", "color" : "#fff"
    // })

    // by h1, div, p
    $("h1, p, div").on("click", function(){
        $("h1, p").css("background-color",  "red");
    });

    // by first
    $("ul li:first").css("color", "red");

    // by last
    $("ul li:last").css("color", "blue");

    // by even
    $("ul li:even").css("border", "1px solid #000")

    // by odd
    $("ul li:odd").css("border", "1px solid red")
    
});