$(document).ready(function() {
  var image = $('#iphone-app');

  $(window).scroll(function(w) {
    w = $(this);
    console.log(w.scrollTop());
    if(w.scrollTop() > 420){
      image.removeClass('hide').addClass('slide-left-to-right');
    }
    /* Act on the event */
  });
});
