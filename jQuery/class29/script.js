$(document).ready(function () {
  // Animate Method

  $("#btn-1").on("click", animate);

  function animate(){
    $(".box").css("background-color", "pink").slideUp(1000).slideDown(1000);
  }

});
