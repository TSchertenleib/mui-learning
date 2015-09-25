$(document).ready(function ()   {
	$(".list li").click(function(){
	    $(this).toggleClass('haken');
	    $(this).toggleClass('animate');
	});

});