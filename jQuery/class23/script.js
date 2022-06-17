$(document).ready(function () {
  $("#btn-1").on("click", function(){
    var hasclass= $("#box-1").hasClass("mybo");
    console.log(hasclass);

    if(hasclass == true){
      $("#box-1").css("background-color", "red");
    }else{
      $("#box-1").css("background-color", "tan");
    }
  });
});
