$(function(){

    $(window).bind("resize",function(){
        if($(this).width() < 1400){
            $("#section").removeClass('col-xl-3').addClass('col-lg-12');
            $("#section2").removeClass('col-xl-4').addClass('col-lg-12');
            $("#section3").removeClass('col-xl-5').addClass('col-lg-12');
        } else {
            $("#section").addClass('col-xl-3').removeClass('col-lg-12');
            $("#section2").addClass('col-xl-4').removeClass('col-lg-12');
            $("#section3").addClass('col-xl-5').removeClass('col-lg-12');
        }
    })
})