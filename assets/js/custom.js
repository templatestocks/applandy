/**	
	* Template Name: App Landy
	* Version: 1.1	
	* Template Scripts
	* Author : WpFreeware
	* Author URI: https://www.wpfreeware.com/

	Custom JS
	
	1. MENU SLIDE
	2. MENU SMOOTH SCROLLING
	3. SCREEN SLIDER (SLICK SLIDER)
	4. LIGHTBOX ( FOR PORTFOLIO POPUP VIEW ) 
	5. TESTIMONIAL SLIDE (SLICK SLIDER)
	6. PRELOADER
**/

(function($) {

	/* ----------------------------------------------------------- */
	/*  1. MENU SLIDE
	/* ----------------------------------------------------------- */ 

		var menuRight = document.getElementById( 'main-menu' ),
			showRight = document.getElementById( 'menu-btn' ),
			close = document.getElementById( 'close' ),								
			body = document.body;

		window.onload = function() {
			showRight.onclick = function(e) {
				e.preventDefault();
				classie.toggle( this, 'active' );
				classie.toggle( menuRight, 'menu-open' );			
			};

			close.onclick = function() {
				menuRight.hide();						
			};

			menuRight.onclick = function() {
				classie.toggle( this, 'active' );
				classie.toggle( menuRight, 'menu-open' );				
			};
		};
			
	/* ----------------------------------------------------------- */
	/*  2. MENU VERTICAL SMOOTH SCROLLING
	/* ----------------------------------------------------------- */ 
	
	$('#main-menu a[href*=\\#]').on('click', function(event){ 
		    
	    event.preventDefault();
	    
	    $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
	    
	});
	
	/* ----------------------------------------------------------- */
	/*  3. SCREEN SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */

	$('.screenshots-slide').slick({
	  dots: true,
	  infinite: true,
	  arrows:true, 
	 centerMode: true,
  	centerPadding: '60px',  
	  slidesToShow: 3,
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 2,
	        slidesToScroll: 2,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});

	/* ----------------------------------------------------------- */
	/*  4. LIGHTBOX ( FOR PORTFOLIO POPUP VIEW ) 
	/* ----------------------------------------------------------- */ 
	
	$('body').append("<div id='portfolio-popup'><div class='portfolio-popup-area'><div class='portfolio-popup-inner'></div></div></div>");
	
	// WHEN CLICK VIEW BUTTON 
	
	jQuery('.lightbox-view').on('click', function(event) {
	  event.preventDefault();
	  $('#portfolio-popup').addClass("portfolio-popup-show");
	  $('#portfolio-popup').animate({
	      "opacity": 1
	  },500);   
	  var portfolio_detailscontent = $(this).parent("li").find(".portfolio-detail").html();
	  $(".portfolio-popup-inner").html(portfolio_detailscontent);     
	
	});  
	       
	// WHEN CLICK CLOSE BUTTON
	
	$(document).on('click','.modal-close-btn', function(event) {     
	    event.preventDefault();
		$('#portfolio-popup').removeClass("portfolio-popup-show");
		$('#portfolio-popup').animate({
		      "opacity": 0
	    },500);  
	
	});
	
	// WHEN CLICK OVERLAY BACKGROUND
    $(document).on('click','#portfolio-popup', function(event) {
      $(this).removeClass("portfolio-popup-show");
    });

	/* ----------------------------------------------------------- */
	/*  5. TESTIMONIAL SLIDE(SLICK SLIDER)
	/* ----------------------------------------------------------- */

	jQuery('.testimonial-slider').slick({
		dots: true,
		infinite: true,
		speed: 500,
		fade: true,
		arrows:false, 
		autoplay: true,     
      	slidesToShow: 1,
		slide: 'div',		
		cssEase: 'linear'
	});
	

	/* ----------------------------------------------------------- */
	/*  6. PRELOADER 
	/* ----------------------------------------------------------- */ 
	
	jQuery(window).load(function() { // makes sure the whole site is loaded
      $('#status').fadeOut(); // will first fade out the loading animation
      $('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
      $('body').delay(100).css({'overflow':'visible'});
    })
	
})( jQuery );