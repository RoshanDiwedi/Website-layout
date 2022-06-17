$(document).ready(function () {
  // hide Method
  $("#btn-1").on("click", function(){
    $(".box").hide(1000);
  });

  // show method
  $("#btn-2").on("click", function(){
    $(".box").show(500);
  });

  // toggle method
  $("#btn-3").on("click", function(){
    $(".box").toggle();
  });

});
