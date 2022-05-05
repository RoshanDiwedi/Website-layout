// $(document).ready(function(){
//     alert('Hello world');
// });

$(document).ready(function(){
    console.log('hello');
});

$(document).ready(function(){
    var a = $('.box-1').html();
        console.log(a);

    var b = $(".box-2").html();
        console.log(b);
});


$(document).ready(function(){
    $(window).on("mouseenter", function(){
        $(".box-1").css("background-color", "red")
    });

    $(window).on("mouseleave", function(){
        $(".box-1").css("background-color", "")
    });
    
});

