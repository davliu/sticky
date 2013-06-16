$(document).on('ready', function(){
  $('#main-menu > ul > li').click(function(){
    $('#main-menu > ul > li').removeClass('active');
    $(this).addClass('active');
  })
});
