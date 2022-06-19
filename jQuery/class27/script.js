$(document).ready(function () {
  // Animate Method
  $("#btn-1").on("click", animate);

  // fuction One
  // function animate(){
  //   $(".box").animate({
  //     left: "150px",
  //     // width: "hide",
  //     width: "toggle",
  //     // width: "+250px",
  //     fontSize: "30px"
  //   }, 1000);
    
  // }


  // function Two
  function animate(){
    $(".box").animate({left: "150px"}, 2000, function(){
      $(this).css("background", "red");
    });

    $(".box").animate({top: "150px"}, function(){
      $(this).css("background", "green");
    });

    $(".box").animate({fontSize: "30px"}, "slow");
  }

});
