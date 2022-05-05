$(document).ready(function(){

    // Add class method
    $("#add-class").on("click", function(){
        $(".box").addClass("background-change")
    });


    // remove class method
    $("#remove-class").on("click", function(){
        $(".box").removeClass("background-change")
    });

    
    // toggle class method
    $("#toggle-class").click(function(){
        $(".box").toggleClass("background-change")
    });
});