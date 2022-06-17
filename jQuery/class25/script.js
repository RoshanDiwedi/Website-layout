$(document).ready(function () {
  // hide Method
  $("#btn-1").on("click", function(){
    $(".box").fadeIn(1000, function(){
      $("body").css("background", "");
      console.log("Box is fade In");
    });
  });

  // show method
  $("#btn-2").on("click", function(){
    $(".box").fadeOut(1000, function(){
      $("body").css("background", "red");
      console.log("Box is fade out");

    });
  });

  // toggle method
  $("#btn-3").on("click", function(){
    $(".box").fadeToggle();
    console.log("Box is Toggle");
  });

  // fadeTo method
  $("#btn-3").on("click", function(){
    $(".box").fadeTo(slow, 0.5);
    console.log("Box is Toggle");
  });

  // input range font size
  $('#range').on("change", function(){
    var range = $('#range').val() + "px";
    $(".slider h1").css("font-size", range);
  });

});
