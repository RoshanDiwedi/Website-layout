$(document).ready(function () {
  // var valOne = $("#name").val();
  // $("#btn").on("click", function (e) {
  //   e.preventDefault();

    // var valTwo = $("#class").val();
    // var valThree = $("#country").val();

    // var final = valOne + " " + valTwo + " " + valThree;
    // $("h1").append(final);
  // });

  // $("#btn").on("click", function () {
  //   $("#box").append(valOne);
  // });


  //append
  
  // $("#btn-1").on("click", function(){
  //   var val = $("#inp").val();
  //   console.log(val);
  //   $("h2").prepend(val);
  // });

  $("#btn-1").on("click", function(){
    var val = $("#inp").val();
    console.log(val);
    $("#box").append(val);
  });
  
});
