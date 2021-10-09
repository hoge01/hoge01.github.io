$(function(){
  $("li").each(function(){
    $(this).html("List" + $(this).index());
  });
});
