$(document).ready(function () {
  // replaceWith Method
  $("#btn").on("click", function(){
    $("h1").replaceWith("roshan")
  });

  // replaceAll Method
  $("#btn").on("click", function(){
    $("<h1>raman").replaceAll("p");
  });

});
