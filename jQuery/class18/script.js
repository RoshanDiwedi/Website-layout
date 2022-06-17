$(document).ready(function () {
  // wrap Method
  $("#btn-1").on("click", function(){
    $("#box-1 p").wrap("<h3></h3>")
  });

  // unWrap Method
  $("#btn-2").on("click", function(){
    $("#box-1 p").unwrap();
  });

});
