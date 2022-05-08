$(document).ready(function(){
    $(".form input").focus(function(){
        $(".form input").css("outline", "0");
    });

    $(".fa-solid").on("click", function(){
        $(".mobile-nav").toggleClass("mobile-nav-block")
        
    });
    
});