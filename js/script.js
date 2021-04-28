$(function () {


    AOS.init();

    $(".owl-carousel").owlCarousel({
        loop:true,
        items: 4,
        margin: 50,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                margin: 10,
            },
            600:{
                items:4,
            },
        }
    });
    
    $(window).on('scroll', function() {
        let scrollY = $(this).scrollTop();
        
        if (scrollY >= 100) {
            $('.navbar-fustore').addClass('navbar-fustore-active');
        }else{
            $('.navbar-fustore').removeClass('navbar-fustore-active');
        };
    });
});

