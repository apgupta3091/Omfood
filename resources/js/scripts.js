
$(document).ready(function () {

    /* For the Sticky nav */
    $('.js--section-features').waypoint(function(direction) {
        
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    
    }, {
      offset: '60px;'
    });
    
    
    
    /* Scroll on buttons */
    
    
    $('.js--scroll-to-plans').click(function (e) {
    e.preventDefault();
    document.querySelector('.js--section-plans').scrollIntoView({ behavior: 'smooth' });
  });
    
    
    
    $('.js--scroll-to-start').click(function (e) {
    e.preventDefault();
    document.querySelector('.js--section-features').scrollIntoView({ behavior: 'smooth' });
  });
    
     $('.js--home').click(function (e) {
    e.preventDefault();
    document.querySelector('.js--home-pg').scrollIntoView({ behavior: 'smooth' });
  });
    
    $('.js--features').click(function (e) {
    e.preventDefault();
    document.querySelector('.js--section-features').scrollIntoView({ behavior: 'smooth' });
  });
    
    $('.js--works').click(function (e) {
    e.preventDefault();
    document.querySelector('.js--section').scrollIntoView({ behavior: 'smooth' });
  });
    
    
    $('.js--cities').click(function (e) {
    e.preventDefault();
    document.querySelector('.js--section-cities').scrollIntoView({ behavior: 'smooth' });
  });
    
    $('.js--plans').click(function (e) {
    e.preventDefault();
    document.querySelector('.js--section-plans').scrollIntoView({ behavior: 'smooth' });
  });
    
    
    /* Navigation scroll */
    /*
    $('a[href*="#"]')
  // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 500, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });
    
    */
    
    
     /* Animations on scroll */
    
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
        
    }, {
        offset: '70%'
    });
    
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeInUp');
        
    }, {
        offset: '70%'
    });
    
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
        
    }, {
        offset: '70%'
    });
    
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated pulse');
        
    }, {
        offset: '70%'
    });
    
    
    /* Mobile Nav */
    
    
    $('.js--nav-icon').click(function (){
        var nav = $('.js--main-nav');
        var icon= $('.js--nav-icon i');
        nav.slideToggle(200)
        if(icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu')
            
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close')
            
            
        }
        
        
        
        ion-md-menu
        
    });
    
    
    
    
    
    
    
    
    
    
    
    
    

});
