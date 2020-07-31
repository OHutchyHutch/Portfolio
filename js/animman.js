//Handles progress bar
$(document).ready(function() {
    $('.progress-bar').waypoint(function() {
    $('.progress-bar').css({
    animation: "animate-positive 3s",
    opacity: "1"
    });
    }, { offset: '75%' })});
//Animates aboutme section
$(document).ready(function(){
    animatesection('#aboutsection','animate__fadeInLeft');
    animatesection('#portfoliosection','animate__fadeInRight');
    animatesection('#pricesection','animate__fadeInUp');
    animatesection('.divider','animate__flipInX');
  });

function animatesection(section, animation){
    $(section).css('opacity', 0);
    $(section).waypoint(function() {
        $(section).addClass(animation + ' animate__slow');
        $(section).css({
            opacity: "1"
            });
    }, { offset: '50%' });
  }