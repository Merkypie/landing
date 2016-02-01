$(document).ready(function(){
  var tabs = $('li.feature-tab > span > a');
  var panel = $('div#features > .features-panel');
  var t = $('li.feature-tab');

  t.click(function(e) {
    e = $(this);
    e.each(function() {
      if(e.not('.active')){
        e.addClass('active').siblings('li').removeClass('active');
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
      if (p === a) {
        $(this).addClass('active-panel').removeClass('inactive-panel');
        $('p, ul').removeClass('hide').addClass('slide-left-to-right');
      }else if(p !== a){
        $(this).removeClass('active-panel').addClass('inactive-panel');
      }
    });
  });
});
