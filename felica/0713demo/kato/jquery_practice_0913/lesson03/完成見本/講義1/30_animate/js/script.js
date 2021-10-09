$(function(){
  $("button").click(function(){
    $("div").animate({"left" : "1000px"}, 500);

    // 相対指定によるアニメーション
    // $("div").animate({"left" : "+=500px"}, 500);
  });
});
