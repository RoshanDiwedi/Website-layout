$(document).ready(function () {
  // traversing Method 


  //1. Ancestor Method
  // parent()
  // $('.container').parent().css("background-color", "red");

  // parents()
  // $('.container').parents().css("background-color", "red");

  // parentsUntil()
  // $(".box-d").parentsUntil(".main-outer").css("background-color", "red");

  // offsetParent()
  // $(".box-d").offsetParent().css("background-color", "red");

    // closest()
    $(".box-d").closest('ul').css("background-color", "red");



});
