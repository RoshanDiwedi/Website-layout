$(document).ready(function () {
  // Animate Method
  $("#btn-2").on("click", stop);

  $("#btn-1").on("click", animate);


  function animate(){
    $(".box").animate({
      left: "250px",
      fontSize: "25px"
    }, 3000)

    $(".box").animate({
      top: "250px"
    }, 3000)
  }

  function stop(){
    $(".box").stop(false, true);
  }

});
