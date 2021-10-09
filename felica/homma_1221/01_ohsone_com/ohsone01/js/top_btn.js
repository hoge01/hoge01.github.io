$(function(){

let topBtn = $('#page-top');

//最初にボタンを見えなくする
topBtn.hide();
//スクロールが100に達したらボタンを表示
$(window).scroll(function(){
if($(this).scrollTop() > 100){
topBtn.fadeIn();
}else{
topBtn.fadeOut();
}
});

//スクロールしてトップ
topBtn.on('click',function(){
$('html,body').animate({scrollTop:0}
                       ,500);
});

});