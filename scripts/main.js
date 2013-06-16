$(document).on('ready', function(){
  $('#main-menu > ul > li').click(function(){
    $('#main-menu > ul > li').removeClass('active');
    $(this).addClass('active');
  })

  $('#mobile-menu .menu-icon a').click(function(e){
    $('#mobile-menu').toggleClass('expanded');
    e.preventDefault();
  })

  $('#mobile-menu .top-bar-section').click(function(e){
    $('#mobile-menu').toggleClass('expanded');
    //e.preventDefault();
  })

});
