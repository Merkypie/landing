$(document).ready(function() {
  //Scrolly Effect Stuff
  $(window).scroll(function(w) {
    var image = $('#iphone-app');
    var nav = $('header');
    w = $(this);
    if(w.scrollTop() > 420){ //if da scroll topz is greater than 420px
      image.removeClass('hide').addClass('slide-left-to-right'); //slide it
    }
    if(w.scrollTop() > 80){ //if da scroll topz is greater than 80px
      nav.addClass('sticky-header'); //stick dat header
    }else if(w.scrollTop() == 0){ //or like idk
      nav.removeClass('sticky-header'); //remove it
    }
  });

  //JSON
  function getJSONData(u){
    u = 'http://jsonplaceholder.typicode.com/photos';
    $.ajax({
      url: u,
      type: 'GET',
      cache: false,
      dataType: 'json',
      data: {
        albumId: '1'
      },
      success: function(results){
        $.each(results, function(i, img) { //loop through dat array
          img = $(this);
          if(i < 10){ //If the index is less than 10
            $('#json > ul#traveler-voice').append(
              '<li class="top-left"><img src="'+ img[0].url + '" /><span class="traveler-voices">'+img[0].title+'</div></li>'); //Like append dat shit to this list thing and throw in some lorem as well as those fake comments
          }else{
            return false; //or return nothing yo
          }
        });

        //Testimonial Slider
        function slideThrough(c, tr, lft, rgt){
          tr = $('ul#traveler-voice > li');
          lft = $('.nav-prev');
          rgt = $('.nav-next');
          c = 0; //Current Slide Count
          tr.hide(); //hide ALL THE THINGS
          tr.first().addClass('active-slide').show(); //But not the first one cause yeah

          function slideFwd(){
            tr.removeClass('active-slide slide-left-to-right') //Remove the class
            .hide() //Then hide that bad boy
            .eq(++c%10) //Find the next element in the list
            .stop() //Stop the queue
            .addClass('active-slide slide-left-to-right') //Add dat class
            .show(); //show ittttt
            console.log('eeeeey');
          }

          function slideBck(){
            tr.removeClass('active-slide slide-right-to-left') //Remove the class
            .hide() //Then hide that bad boy
            .eq(--c%10) //Find the next element in the list
            .stop() //Stop the queue
            .addClass('active-slide slide-right-to-left') //Add dat class
            .show(); //show ittttt
            console.log('eeeeey');
          }

          lft.click(function(e) {
            e.preventDefault();
            slideFwd();
            tr.siblings('li').removeClass('slide-right-to-left');
          });

          rgt.click(function(e) {
            e.preventDefault();
            slideBck();
            tr.siblings('li').removeClass('slide-left-to-right');
          });
        }
        slideThrough();
      },
      error: function(r, thrownError){
        console.log(thrownError);
      }
    });
  }
  getJSONData(); //Call it like u mean it!!
});
