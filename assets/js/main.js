$(document).ready(function() {
  var image = $('#iphone-app');
  var nav = $('header');

  $(window).scroll(function(w) {
    w = $(this);
    if(w.scrollTop() > 420){
      image.removeClass('hide').addClass('slide-left-to-right');
    }
    if(w.scrollTop() > 80){
      nav.addClass('sticky-header');
    }else if(w.scrollTop() == 0){
      nav.removeClass('sticky-header');
    }
  });
});
