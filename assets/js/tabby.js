$(document).ready(function(){
  var tabs = $('li.feature-tab > span > a');
  var panel = $('div#features > .features-panel');
  var t = $('li.feature-tab');

  t.click(function(e) {
    e = $(this);
    e.each(function() {
      if(e.not('.active')){ //If the tab is not currently labeled active, then add the class and remove it from the sibling elements

        e.addClass('active')
        .siblings('li')
        .removeClass('active');
      }
    });
  });

  tabs.click(function(e, a) {
    e.preventDefault();
    e = $(this);
    a = e.attr('href');

    panel.each(function(i, p) {
      i = $(this).attr('id')
      p = '#'+i;
      if (p === a) { //If the anchor tag is identical to the related div's id, SWITCH IT
        $(this).addClass('active-panel').removeClass('inactive-panel');

        $('#features p, #features ul')
        .removeClass('hide')
        .addClass('slide-left-to-right');

      }else if(p !== a){ //or idk don't show them if they're not.
        $(this).removeClass('active-panel').addClass('inactive-panel');
      }
    });
  });
});
