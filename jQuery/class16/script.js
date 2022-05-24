$(document).ready(function () {
  $("#btn").on("click", function(){
    $("#box-1 h1").clone().prependTo("#box-2");
    $("#box-1 p").clone().appendTo("#box-2");
  });

  $("ul li").on("click", function(){
    $(this).addClass("active").siblings().removeClass("active");
  });

// first valve option
  $("#inp-btn").on("click", function(){
    var valName = $("#first-name").val().charAt(0);
    var valLast = $("#last-name").val().charAt(0); 

    $("#col p:first").text(valName);
    $("#col p:last").text(valLast);
  });

  // twitter message bot
  $(function(){
    $("textarea").on("keyup", function(){
      var textareaVal = $(this).val().trim(),
          charsCount = textareaVal.length,
          wordCount = textareaVal.split(' ').length;
      
      $(".chars-count").text(charsCount);
      $(".word-count").text(wordCount);

      var limitedNumber = $(".remain-text").text(50 - charsCount);
      if(charsCount == 50){
        alert("you reached the limit")
      }

      
    });
    var textAreaInnerText = $("textarea").val().empty();
    $("#clean-btn").on("click", function(){
      textAreaInnerText();
      console.log("hello");
    });

  });

});
