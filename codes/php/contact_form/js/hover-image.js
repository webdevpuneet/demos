$(function(){
	// lightbox image
	$(".lightbox-image, .lightbox-image1").append("<span></span>");
	
	$(".lightbox-image, .lightbox-image1").hover(function(){
		$(this).find("img").stop().animate({opacity:0.5}, "normal")
	}, function(){
		$(this).find("img").stop().animate({opacity:1}, "normal")
	});
});