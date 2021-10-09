$(function(){
  $("dt").hover(function(){
    $("dd").stop().slideToggle();
  });
});
