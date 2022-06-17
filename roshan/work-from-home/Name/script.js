$(document).ready(function(){

    $(".btn").on("click", function(){
        
        var name = $("#first").val();
        var last = $("#last").val();
        $(".output").text(name +" "+ last);
    });
});