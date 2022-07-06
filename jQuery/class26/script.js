$(document).ready(function () {
  // slideUp Method
  $("#btn-1").on("click", function(){
    $(".box").slideUp(1000, function(){
      $("body").css("background", "");
      console.log("Box is fade In");
    });
  });

  // slideDown method
  $("#btn-2").on("click", function(){
    $(".box").slideDown(1000, function(){
      console.log("Box is fade out");

    });
  });

  // slideToggle method
  $("#btn-3").on("click", function(){
    $(".box").slideToggle(1000);
    console.log("Box is Toggle");
  });


});
