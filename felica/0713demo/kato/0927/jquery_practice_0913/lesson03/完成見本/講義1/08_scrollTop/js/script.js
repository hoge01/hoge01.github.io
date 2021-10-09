$(function(){
  $(window).scroll(function(){
    $("p").html("Scroll:" + $(window).scrollTop() + "px");
  });
});
