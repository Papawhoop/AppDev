$( document ).ready(function() {

    /*MobileMenu*/

    $( "#logoTrigger" ).click(function() {
        console.log("Handler is clicked");
        $( '#invLogoMobile' ).toggleClass( "visible fadeIn");
        $( '#invLogo' ).toggleClass( "visible-2 fadeIn");
    });

    /*Grid*/

    new AnimOnScroll( document.getElementById( 'grid' ), {
        minDuration : 0.4,
        maxDuration : 0.7,
        viewportFactor : 0.2
    } );

    /*LogoInversion*/

    $( "#socialBtn" ).click(function() {
        $( '#socialHeader' ).toggleClass("animated bounceInRight activateMe");
    });



    /*SmoothScroll*/

    $('a[href*=#]').on('click', function(event){
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
});
/**
 * Created by christophermally on 18.01.17.
 */
