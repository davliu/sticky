$(document).on('ready', function(){
  $('#main-menu > ul > li').click(function(){
    $('#main-menu > ul > li').removeClass('active');
    $(this).addClass('active');
  });

  $('#mobile-menu .menu-icon a').click(function(e){
    $('#mobile-menu').toggleClass('expanded');
    e.preventDefault();
  });

  $('#mobile-menu .top-bar-section').click(function(e){
    $('#mobile-menu').toggleClass('expanded');
    //e.preventDefault();
  });

  $(window).resize(function() {
    $('.company-box').css('height', $('.company-box').width()+15+'px');
  });

  var reHeight = setInterval(function(){
    if($('.company-box').width() > 0){
        console.log("reheight");
        clearInterval(reHeight);
        $('.company-box').css('height', $('.company-box').width()+15+'px');
    }
  }, 1000);

});
