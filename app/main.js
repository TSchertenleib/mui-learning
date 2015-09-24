$(document).ready(function ()   {
	console.log("hello");
$(".list li").click(function(){
    $(this).toggleClass('haken');
});
});