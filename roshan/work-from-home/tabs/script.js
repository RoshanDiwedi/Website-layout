$(document).ready(function(){

    $(".tab").on("click", function(){
        
        $(this).toggleClass("active");
        $(this).siblings().removeClass("active");
    });

});     