
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
