$(document).ready(function(){

    // this function is for text(), HTML() and attr method
    $("#btn-click").on("click", function(){

        // Text method
        $('.box h2').text("Hello roshan");

         // HTML method
         $('.box p').html("this is a new <strong>text<strong>");

        //  attr method
        $(".box p").attr("id", "color");

    });

    // this method for val method
    $("#name").val("Enter Your name");
    $("#class").val("Enter Your class");



    
    // form submission my addissional code
    $("#form").on("submit", function(){
        if($("#name").val()=== ""){
            alert("please enter your name");} 
    });
});
