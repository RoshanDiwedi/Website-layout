// Window Scroll and Resize function
$("document").ready(function(){
    $(window).scroll(function(){
        console.log("You are scrolling")
    });

    $(window).resize(function(){
        console.log("You are resizing")
    });
});

