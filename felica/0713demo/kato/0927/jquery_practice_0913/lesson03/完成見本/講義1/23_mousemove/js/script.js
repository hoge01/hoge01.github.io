$(function(){
  $(window).mousemove(function(e){
    $("p").html("X:" + e.pageX + "px Y:" + e.pageY + "px");
  });
});
