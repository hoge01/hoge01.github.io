$(function(){
	const btn = $("button");
	btn.on('click', function () {
		$(this).html('click').css('background','#00f');
	});
});