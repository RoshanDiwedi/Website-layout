$(document).ready(function () {
  
  // Before Method 
  $("#btn").on("click", function(){
    var val = $("#inp").val();
    $("#box").before(val);
    console.log(val);
  });

    // after Method 
    $("#btn").on("click", function(){
      var valOne = $("#inp-1").val();
      $("#box").after(valOne);
    });

});
