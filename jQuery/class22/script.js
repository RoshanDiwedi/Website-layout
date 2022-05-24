$(document).ready(function () {
  // text color on scrollTop
  $(window).scroll(function () {
    var scroll = $(window).scrollTop();
    console.log(scroll);
    if(scroll >= 150){
      $("p").css("color", "red");
    }
    if(scroll <= 150){
      $("p").css("color", "");
    }
});

// Get value of scrollTop and scrollLeft
$(window).scroll(function(){
  $(".color-box").html("");
  $(".color-box").append("Top: " + $(window).scrollTop());
  $(".color-box").append("<br>Left: " + $(window).scrollLeft());
});

// button click scrolltop and scrollLeft
$("#btn-1").on("click", function(){
  $(window).scrollTop(200);
});

$("#btn-2").on("click", function(){
  $(window).scrollLeft(151);
});

});
