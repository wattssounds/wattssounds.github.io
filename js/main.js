$(document).ready(function(){
	$('.button-right').on('click', function(){
		var curentimg=$('.top');
		var nextimg=curentimg.next();

		if(nextimg.length){
			curentimg.removeClass('top').css('z-index', -10);
			nextimg.addClass('top').css('z-index', 10);

		}

	});

	$('.button-left').on('click', function(){
		var curentimg=$('.top');
		var previmg=curentimg.prev();

		if(previmg.length){
			curentimg.removeClass('top').css('z-index', -10);
			previmg.addClass('top').css('z-index', 10);

		}

	});












});