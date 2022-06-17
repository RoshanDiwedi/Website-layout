$(document).ready(function(){

    $(".accord").on("click", function(){

        // icon change
        $(this).find(".fa-plus").toggleClass("fa-minus");
        $(this).parent(".accord-wrapper").siblings().find(".fa-plus").removeClass("fa-minus");

        // Description
        $(this).parent(".accord-wrapper").find(".descption").toggleClass("active");

        $(this).parent(".accord-wrapper").siblings().find(".descption").removeClass("active");
    });

});