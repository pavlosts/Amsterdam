$(document).ready(function(){
	var op = $('Menu').css('opacity');

	$(window).scroll(function(){
		if($(window).scrollTop()>1){
			/*$(".Menu").css( { "opacity": 1 - (($(this).scrollTop())/300) } );*/
			$(".Menu").animate({'opacity': '0.1'})
		}else{
			$('.Menu').animate({'opacity': '0.9'})
		}
	});
	$('.Menu').hover(function(){
		op = $('Menu').css('opacity')
		$('.Menu').animate({'opacity':'0.9'})
	},
	function(op){
		$('.Menu').animate({'opacity': '0.1'})
	})
});