$(document).ready(function(){

    $(".add").on("click", function(){
        var first = $("#first").val();
        $(".inp-text").text(first);
        console.log(first);
    });

    $("#dlt").on("click", function(){
        $(".inp-text").text("");
    });

    $("#edit").on("click", function(){
        $(".inp-text").text("");
    });

});     