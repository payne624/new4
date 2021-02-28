$('document').ready(function(){
	$('.open-forgot-password .view-order').click(function(){
		$('.forgot-password').show();
	})
	$('.view-order, .open-forgot-password').click(function(){
		$('.order-detail-popup, .forgot-password').addClass('open-popup');
	})
	$('.close-modal').click(function(){
		$('.custom-modal').hide();
		$('.order-detail-popup, .forgot-password').removeClass('open-popup');
	})
	$('.menu').click(function(){
		$('.sidebar').show();
		
		setTimeout(function(){
			$( ".sidebar-box" ).addClass('open-slide-box');
		}, 50);
	})
	$(document).click(function (e) {
	    if (!$(e.target).hasClass("open-forgot-password") 
	        && $(e.target).parents(".modal-box").length === 0) 
	    {
	        $(".custom-modal").hide();
	    }
	});

	$(".sidebar").click(function (e) {
	    if (!$(e.target).hasClass("menu") 
	        && $(e.target).parents(".sidebar-box").length === 0) 
	    {
			$( ".sidebar-box" ).removeClass('open-slide-box');
		    setTimeout(function(){
				$('.sidebar').fadeOut();
			}, 350);
	    }
	});

	$('.login-tab').click(function(){
		$('.login-form').show();
		$('.signup-form').hide();
		$('.login-screen ul li a').removeClass('active');
		$(this).addClass('active');
	})
	$('.signup-tab').click(function(){
		$('.login-form').hide();
		$('.signup-form').show();
		$('.login-screen ul li a').removeClass('active');
		$(this).addClass('active');
	})

})

$("#login-form").on("submit",function(e) {
   e.preventDefault();
   $('.loader').show();

   setTimeout(function(){
	   $('.loader').hide();
	   //window.location.replace("home.html");
   }, 100);
});

$("#checkout-form").on("submit",function(e) {
   e.preventDefault();
   $('.loader').show();

   setTimeout(function(){
	   $('.loader').hide();
	   //window.location.replace("home.html");
   }, 100);
});

$("#myaccount-form").on("submit",function(e) {
   e.preventDefault();
   $('.loader').show();

   setTimeout(function(){
	   $('.loader').hide();
	   //window.location.replace("home.html");
   }, 100);
});

$("#search-form").on("submit",function(e) {
   e.preventDefault();
   $('.loader').show();

   setTimeout(function(){
	   $('.loader').hide();
	   //window.location.replace("home.html");
   }, 100);
});

/*
$('.main-banner-slider').owlCarousel({
    center: true,
    items:1,
    loop:true,
    stagePadding: 40,
    margin:10,
    responsiveClass:true
})


$('.category-slider').owlCarousel({
    items:2,
    loop: true,
    nav: false,
    dots:false,
    stagePadding: 30,
    margin:10,
    responsiveClass:true
})
*/