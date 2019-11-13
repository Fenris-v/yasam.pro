$(document).ready(function () {

    /**
     * MAIN SLIDER
     */
    $("#mainSlider").owlCarousel(
        {
            dots: false,
            loop: true,
            margin: 10,
            navText: ["", ""],
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsiveClass: true,
            responsive: {
                600: {
                    items: 1,
                    nav: false,
                },
                1200: {
                    items: 1,
                    nav: true,
                }
            }
        }
    );

    /**
     * MODAL
     */
    $('[data-fancybox-modal]').fancybox({
        trapFocus : true,
        autoFocus : false,
        touch: false,
        beforeShow: function() {
            $('html').addClass('fancybox-scroll-disable');
        },
        afterClose: function() {
            $('html').removeClass('fancybox-scroll-disable');
        }
    });
});