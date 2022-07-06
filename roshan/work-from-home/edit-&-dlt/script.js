$(document).ready(function(){

    $(".add").on("click", add);
    $("#first").on("keyup", add);

    
    $("#edit").on("click", function(){
        $(".inp-text").attr("contentEditable", "true");
        $(".inp-text").css("background", "#c7c7c7");

    });

    function add(){
        var first = $("#first").val();
        $(".inp-text").text(first);
        console.log(first);

        $("#dlt").on("click", function(){
            $(".inp-text").text("");

            $(".inp-text").attr("contentEditable", "false");
            $(".inp-text").css("background", "");
        });
        
    }

});     