//Handles progress bar
$(document).ready(function() {
    $('#aboutsection').waypoint(function() {
    $('.progress-bar').css({
    animation: "animate-positive 3s",
    opacity: "1"
    });
    }, { offset: '75%' })});
//Animates aboutme section
$(document).ready(function(){
    animatesection('#aboutsection','animate__fadeInLeft');
    animatesection('#portfoliosection','animate__fadeInRight');
    animatesection('#pricesection','animate__fadeInLeft');
    animatesection('#contactsection', 'animate__fadeIn  Up');
    animatesection('.divider','animate__flipInX');
  });

function animatesection(section, animation){
  if(section != "#aboutsection"){
    $(section).css('opacity', 0);
    $(section).waypoint(function() {
      console.log(section)
        $(section).addClass(animation + ' animate__slow');
        $(section).css({
            opacity: "1"
            });
    }, { offset: '50%' });
  }
  else {
    $(section).css('opacity', 0);
    $(section).waypoint(function() {
      console.log(section)
        $(section).addClass(animation + ' animate__slow');
        $(section).css({
            opacity: "1"
            });
    }, { offset: '50%' });
  }
  }