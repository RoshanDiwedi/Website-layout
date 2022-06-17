$(document).ready(function(){

    $("#btn-1").on("click", function(){
        $("#box").css("background-color", "red");
    });

    $("#btn-2").on("click", function(){
        $("#box").css("background-color", "");
    });

});