// mouse click function
// $(document).ready(function(){
//     $(".box").click(function(){
//         $(".box").css("background-color", "red");
//     });
// });



// // mouse click html print in console
// $(document).ready(function(){
//     $(".box").click(function(){
//        var a = $(".box").html();
//        console.log(a);
//     });
// })



// mouse Double click function
// $(document).ready(function(){
//     $(".box").click(function(){
//         $(".box").css("background-color", "yellow");
//         $(".box").css("color", "#000");
//     });

//     $(".box").dblclick(function(){
//         $(".box").css("background-color", "Orange");
//         $(".box").css("color", "#ffffff");
//     });
// });



// mouse CONTEXTMENU(Right click) click function
$(document).ready(function(){
    $(".box").click(function(){
        $(".box").css("background-color", "yellow");
    });

    $(".box").contextmenu(function(){
        $(".box").css("background-color", "blue");
    });
});



// Mouse Enter and Mouse Leave Fuction
$('document').ready(function(){
    $(".box").mouseenter(function(){
        $(".box").css("background-color", "tan");
    });

    $(".box").mouseleave(function(){
        $(".box").css("background-color", "purple");
    });
});
