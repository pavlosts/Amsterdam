$(document).ready(function(){
	$('.Menu').hover(function(){
		$('.Menu').animate({'opacity':'0.9'})
	},
	function(){
		$('.Menu').animate({'opacity':'0.1'})
	});
});