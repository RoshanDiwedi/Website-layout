$(document).ready(function(){

    $(".btn").on("click", function(){
        var name = $("#first").val();
        $(".output").css("background-color", name);
    });
});  