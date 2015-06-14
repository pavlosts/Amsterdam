$(document).ready(function(){
	$('.Name p').fadeIn(2000);
	$('.Description p').fadeIn(2000);
	$(".Menu ul").fadeIn(1800);
	$(".Menu").animate({'top': '0px'}, 1000);
	/*$(window).scroll(function(){
		if($(window).scrollTop()>10){
			$(".Menu").fadeTo(800, 0.1)
		}
		if($(window).scrollTop() == 0){
			$('.Menu').fadeTo(500, 0.9)
		}
	},function(){
		if($(window).scrollTop()>)
	});*/
	$('.Menu').hover(function(){
		$('.Menu').fadeTo(500, 0.9)
	},
	function(){
		$(".Menu").fadeTo(800, 0.1)
	});
});