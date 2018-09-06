// JavaScript Document
$(document).ready(function() {
	//build a variable to target the #menu div
	var menu = $('#menu')
	
	$('#menu-trigger').click(function(event){
		event.preventDefault();
		//if this menu visible slide it up 
		if(menu.is(":visible")) {
			menu.slideUp(400);
			$(this).removeClass("open");
		}
		
		else{
			menu.slideDown(400);
			$(this).addClass("open");
		}
		
	});
	
}); 

 <!-- Script to Activate the Carousel -->

    $('.carousel').carousel({
        interval: 5000 //changes the speed
    });
	
	<!-- Animations -->
	
	$('#animatedElement1').hover(function() {
		$(this).addClass("floating");
	});
	
	$('#animatedElement2').hover(function() {
		$(this).addClass("floating");
	});
	
	$('#animatedElement3').hover(function() {
		$(this).addClass("floating");
	});
	
	$('#animatedElement4').hover(function() {
		$(this).addClass("floating");
	});