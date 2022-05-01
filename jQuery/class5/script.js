// Form FOCUS and BLUR function
$(document).ready(function(){
    
    // Focus function
    $("#name, #class, #country").focus(function(){
        $(this).css("background-color", "tan");
    });
    
    // Blur function
    $("#name, #class, #country").blur(function(){
        $(this).css("background-color", "");
    });

    // Change Function
    $("#country").change(function(){
        $(this).css("background-color", "red");
    });

    // with change function print the value in random div
    $("#country, #name, #class").change(function(){
        var a = $(this).val();
        $("#test").html(a);
    });

    // Select function its not work with input select
    $("#name, #class").select(function(){
        $(this).css("background-color", "yellow");
    });

    // Submit function
    $("#form").submit(function(){
        alert("thank you for submission");
    });

    
});


