$(function() {

//Carousel//
    $(".carousel").carousel( { interval: 2000 } );
    
//Carousel Button//
    $("#carouselButton").on("click",
    function(){
        if ($("#carouselButton").children("i").hasClass("fa-pause")) {
            $(".carousel").carousel("pause");
            $("#carouselButton").children("i").removeClass("fa-pause");
            $("#carouselButton").children("i").addClass("fa-play");
        } else {
            $(".carousel").carousel("cycle");
            $("#carouselButton").children("i").removeClass("fa-play");
            $("#carouselButton").children("i").addClass("fa-pause"); 
        }
    });
    
    //Reserve Button//
    $("#reserveButton").on("click",function(){
        $("#reserveModal").modal();
    });
    
    $("#loginButton").on("click",function(){
        $("#loginModal").modal();
    });
    
    
    
    
    
    
    
    
    
});