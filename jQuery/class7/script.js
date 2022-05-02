// // Get methods 
$("document").ready(function(){

    // HTML Method
    var a =  $(".box").html();
    console.log(a);

    // TEXT Mothod
    var b = $(".box").text();
    console.log(b);

    // Attribut Mothod ( attr() )
    var c = $(".box").attr("class");
    console.log(c);
});



// Val method
$("document").ready(function(){
    $("#form").submit(function(){
        var name = $("#name").val();
        var cla = $("#class").val();
        var country = $("#country").val();
        alert("Hello "+ name +" " + cla +" "+ country);   
    });
});