jQuery(document).ready(function($) {

	// var myWidth = 0;
 //        myWidth = window.innerWidth;
 //        jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
 //        jQuery(window).resize(function(){
 //            var myWidth = 0;
 //            myWidth = window.innerWidth;
 //            jQuery('#size').remove();
 //            jQuery('body').prepend('<div id="size" style="background:#000;padding:5px;position:fixed;z-index:9999;color:#fff;">Width = '+myWidth+'</div>');
 //        });





    /* Responsive meni */

  jQuery(".navbar-toggle").click(function(event) {
      /* Act on the event */
      
          if (jQuery(".navbar-default").hasClass('js_response_meni')) {
           jQuery(".navbar-default").removeClass('js_response_meni');
           jQuery("body").removeClass('js_response_hide');
           jQuery(".navbar-collapse").removeClass('in');
          } 

          else {
            jQuery(".navbar-default").addClass('js_response_meni');
            jQuery("body").addClass('js_response_hide');
            jQuery(".navbar-collapse").addClass('in');
          }

    });


    // easy scroll

  jQuery('.main_meni  a').click(function(){

   
    /* Act on the event */

    if ( jQuery(".navbar-default").hasClass('js_response_meni') ) {

        jQuery(".navbar-toggle").addClass('collapsed');
        jQuery(".navbar-default").removeClass('js_response_meni');
        jQuery("body").removeClass('js_response_hide');
        jQuery(".navbar-collapse").removeClass('in');
    }

 
    var target = jQuery(this).attr('href');
    jQuery('html, body').animate({scrollTop: jQuery(target).offset().top}, 1000);
    return false;
  });


  if (jQuery(window).scrollTop()>="250") jQuery(".go-top").removeClass("arrow--hide")
 jQuery(window).scroll(function(){
  if (jQuery(window).scrollTop()<="250") jQuery(".go-top").addClass("arrow--hide")

  else jQuery(".go-top").removeClass("arrow--hide")

 });

jQuery(".go-top").click(function(){
  jQuery("html, body").animate({scrollTop:0},"3500")
 })


 //initialize swiper when document ready
    var mySwiper = new Swiper ('.swiper-container', {

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

      autoHeight:true,
      loop: true,
    })

    $("nav").sticky({topSpacing:0});
  
});