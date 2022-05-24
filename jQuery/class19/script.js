$(document).ready(function () {
  // wrapall Method
  $("#btn-1").on("click", function(){
    $("#box-1 p").wrapAll("<div class='test'></div>")
    $(".test").css("background-color", "red")

  });

  // unWrap Method
  $("#btn-2").on("click", function(){
    $("#box-1 h1").wrapInner("<span class='inner-wrap'></span>");
    $(".inner-wrap").css("color", "red")
  });

});
