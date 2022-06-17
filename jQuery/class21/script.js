$(document).ready(function () {
  // position Method
  $("#btn-1").on("click", function(){
    // var x = $("#box-1 h1").position();
    // console.log("Top space " + x.top + "px Left space " + x.left +"px");

  // h1 manupulte through position
  console.log($(".box h1").position({top:0, left:0}));
    
  });

  


  // offset Method
  $("#btn-2").on("click", function(){
    var y = $("#box-1 p").offset();
    console.log("Top space " + y.top + "px Left space " + y.left +"px");

    // h1 manupulte through offset
    $("#box-1 h1").offset({top:150, left:150});
  });

});
