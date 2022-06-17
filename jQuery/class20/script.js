$(document).ready(function () {
  // width Method
  $("#btn-1").on("click", function(){
    console.clear();
    $("#box-1").width("200px");
    console.log("width " + $("#box-1").width());
    console.log("InnerWidth " + $("#box-1").innerWidth());
    console.log("OuterWidth " + $("#box-1").outerWidth());
    console.log("OuterWidth(true) " + $("#box-1").outerWidth(true));

  });

  // unWrap Method
  $("#btn-2").on("click", function(){
    console.clear();
    console.log("height " + $("#box-1").height());
    console.log("InnerHeight " + $("#box-1").innerHeight());
    console.log("OuterHeight " + $("#box-1").outerHeight());
    console.log("OuterHeight(true) " + $("#box-1").outerHeight(true));

  });

});
