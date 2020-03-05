//var Rellax = require('rellax');

var app = {
  init: function() {
    console.log('init');


    // PARALLAX BANNER

    var rellax = new Rellax('.rellax');

    // HEADER BECOME TRANSPARENT

    $(document).ready(function(){
      $(window).scroll(function(){
        $('.banner__header').css("opacity", 1 - $(window).scrollTop() /375)
      })
    })

    $(document).ready(function(){
      $(window).scroll(function(){
        $('.tree_img').css("opacity", 1 - $(window).scrollTop() /475)
      })
    })
    // ANIME HEADER NAVBAR SCROLL

    $(window).on('scroll', function(){
      if($(window).scrollTop())
    {
      $('nav').addClass('black');
    }    
      else
    {
      $('nav').removeClass('black');
    }
  })

  

    // ANIME HEADER NAVABAR RESPONSIVE ONCLICK

  $(document).ready(function(){
	  $(".menu h4").click(function(){
		  $("nav ul").slideToggle(750);  
		});
		$(window).resize(function() {		
			if (  $(window).width() > 1500 ) {			
				$('nav ul').removeAttr('style');
			}
		});
  });

  // ACTIVE HEADER LINKS ON SCROLL

  $(function(){
	
	$(document).on('scroll', onScroll);  
	
	$("body").on('click', '[href*="#"]', function(e){  
	  $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top -150}, 100);
	  e.preventDefault();
	});    
	  
	
	});
	
		function onScroll(event){
			var scrollPosition = $(document).scrollTop();
			$('.nav__link').each(function () {
				var currentLink = $(this);
				var refElement = $(currentLink.attr("href"));
				if (refElement.position().top -200 <= scrollPosition && refElement.position().top -200 + refElement.height() > scrollPosition) {				
					currentLink.addClass("nav__link--active");
				}
				else{
					currentLink.removeClass("nav__link--active");
				}
			});
    }
    
  // BACK TO TOP BUTTON

  // back to top function

  $(window).scroll(function() {
    if ($(this).scrollTop() > 0 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$("#home").offset().top},"200");return false})})

	// CONTACT FORM Input Lock
$('textarea').blur(function () {
    $('#hire textarea').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('textarea + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('textarea + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:first-child input').blur(function () {
    $('#hire .field:first-child input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:first-child input + label + span').css({'opacity': 0});
        }
    });
});

$('#hire .field:nth-child(2) input').blur(function () {
    $('#hire .field:nth-child(2) input').each(function () {
        $this = $(this);
        if ( this.value != '' ) {
          $this.addClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 1});
        }
        else {
          $this.removeClass('focused');
          $('.field:nth-child(2) input + label + span').css({'opacity': 0});
        }
    });
});

//ANIMATE

var $animation_elements = $('.sec2_content');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('animated fadeInLeft duration-4s delay-0.5s');
    } else {
      $element.removeClass('animated fadeInLeft duration-4s delay-0.5s');
    }
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');


//






  }
};

$(app.init);