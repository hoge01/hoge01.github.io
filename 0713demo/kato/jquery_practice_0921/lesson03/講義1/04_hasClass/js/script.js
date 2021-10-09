$(function(){
 const bt=$('.bt');
 const red=$('.textRed');
 bt.on('click',function(){
 console.log('ok');
if(red.hasClass('textRed')){
red.removeClass('textRed');
red.addClass('test');
}else{
red.removeClass('test');
red.addClass('textRed');
}


 });
});
