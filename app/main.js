$(document).ready(function ()   {
	$(".list li").click(function(){
		$(this).toggleClass('haken');
		$(this).toggleClass('groesse');
		$(this).toggleClass('aktiv');
	});


	$(".button").click(function(e){
		$(this).addClass("animation-scale");
		$(this).one("animationend webkitAnimationEnd oAnimationEnd MSAnimationEnd",
			function(event) {

				location.href = $(this).data('href');
			});
	});
});



