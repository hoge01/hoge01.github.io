$('.dot-nav a').on('click',function(){
  var scrollAnchor = $(this).attr('data-scroll'),
      scrollPoint = $('section[data-anchor="' + scrollAnchor + '"]').offset().top - 28;
  $('.main').animate({
      scrollTop: scrollPoint
  }, 500);
  return false;
})

$(window).scroll(function(){
  var windscroll = $(window).scrollTop();
  if (windscroll >= 100){
    $('.dot-nav').addClass('fixed');
    $('.main section').each(function(i){
      if ($(this).position().top <= windscroll){
          $('.dot-nav a.active').removeClass('active');
          $('.dot-nav a').eq(i).addClass('active');
          }
      });
  } else {
      $('dot-nav').removeClass('fixed');
      $('dot-nav a.active').removeClass('active');
      $('dot-nav a:first').addClass('active');
  }
}).scroll();