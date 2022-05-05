$(document).ready(function(){

    var a = 0;
    $("#inc").on("click", function(){
        a = a + 1;
        $("#para").text(a);
    });

    $("#dec").on("click", function(){
        a = a - 1;
        $("#para").text(a);
    });

    
    // on function
    // $("#btn-1").on("click", function(){
    //     $("#box").toggleClass("bg-change");
    // });


    // color change by multiple event in single line
    // $("#box").on("mouseenter mouseleave", function(){
    //     $(this).toggleClass("bg-change")
    // });



    // Color change by multiple event 
    // $("#box").on({
    //     "click" : function(){
    //         $(this).css("background", "blue");
    //     },

    //     "mouseenter" : function(){
    //         $(this).css("background", "green")
    //     },

    //     "mouseleave" : function(){
    //         $(this).css({"background":"White"})
    //     }

    // });

});