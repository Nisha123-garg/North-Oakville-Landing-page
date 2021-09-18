/*---------------------------------------------------------------------*/
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

; (function ($) {
    /*---------------------------------------------------------------------*/
    $(document).ready(function () {
        /*---------------------------------------------------------------------*/
        checkWindow();

        //Banner Slider
        if ($('#slider .item').length) {
            $('#slider').owlCarousel({
                //animateOut: 'fadeOut',
                autoplay: true,
                autoplayTimeout: 5000,
                loop: true,
                margin: 0,
                dots: false,
                nav: true,
                lazyLoad: true,
                thumbs: false,
                thumbImage: false,
                items: 1,
            })


        };
        if ($('.projectGallerySlider').length) {
            var owl = $('.projectGallerySlider');
            owl.owlCarousel({
                loop: true,
                items: 1,
                stagePadding: 250,
                margin: 10,
                nav: true,
                thumbs: true,
                thumbImage: true,
                thumbContainerClass: 'owl-thumbs',
                thumbItemClass: 'owl-thumb-item',
                responsive: {
                    0: {
                        stagePadding: 50,
                    },
                    480: {
                        stagePadding: 100,
                    },
                    768: {
                        stagePadding: 150,
                    },
                    1024: {
                        stagePadding: 250,
                    }
                }
            });
        }
        if ($('#slider').length) {
            $("#slider .item img").each(function () {

                var imgSrc = $(this).attr('src');
                $(this).parent('.item').css('background-image', 'url(' + imgSrc + ')');

            })
        }
        if ($('.bgImg').length) {
            $(".bgImg img").each(function () {
                var imgSrc = $(this).attr('src');
                $(this).parent('.bgImg').css('background-image', 'url(' + imgSrc + ')');

            })
        }
        $(function () {
            $('.menuWrap  a, .navbar-brand, .sliderbtn, .footerLinks a, .rum_sst_contents, .projectInfBtn, .commonBtn').bind('click', function (event) {
                var $anchor = $(this);

                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top - 90
                }, 1500, 'easeInOutExpo');

                event.preventDefault();
            });
        });
        if ($('.serviceSlider').length) {
            $('.serviceSlider').owlCarousel({
                //animateOut: 'fadeOut',
                autoplay: 7000,
                loop: true,
                dots: false,
                stagePadding: 0,
                merge: true,
                nav: true,
                margin: 0,
                items: 1

            })
        }
        $(window).scroll(function () {
            var sc = $(window).scrollTop()
            if (sc > 100) {
                $("#header").addClass("headerFixed")
            } else {
                $("#header").removeClass("headerFixed")
            }
        });
        if ($('.nav a').length) {
            $('.nav a').click(function () {

                $("#wrapper").removeClass("toggled");
                $(".overlay").hide();
                $(".hamburger").removeClass("is-open").addClass("is-closed");
            });
        }
        if ($('.hamburger').length) {
            var trigger = $('.hamburger'),
                overlay = $('.overlay'),
                isClosed = false;

            trigger.click(function () {
                hamburger_cross();
            });

            function hamburger_cross() {

                if (isClosed == true) {
                    overlay.hide();
                    trigger.removeClass('is-open');
                    trigger.addClass('is-closed');
                    isClosed = false;
                } else {
                    overlay.show();
                    trigger.removeClass('is-closed');
                    trigger.addClass('is-open');
                    isClosed = true;
                }
            }

            $('[data-toggle="offcanvas"]').click(function () {
                $('#wrapper').toggleClass('toggled');
            });
        }
        function BackToTop() {

            $('.scrolltotop').on('click', function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 800);
                return false;
            });

            $(document).scroll(function () {
                var y = $(this).scrollTop();
                if (y > 600) {
                    $('.scrolltotop').fadeIn();
                } else {
                    $('.scrolltotop').fadeOut();
                }
            });

        }
        BackToTop();

    });

    $(window).resize(function () {
        checkWindow();
    });

    //on scolling, show/animate timeline blocks when enter the viewport

})(jQuery);

function checkWindow() {
    if ($(window).width() > 767) {
        $("body").removeClass("mobile").addClass("desktop");

    }
    else {
        $("body").removeClass("desktop").addClass("mobile");

    }
    if ($(window).width() > 767 && $(window).width() < 1024) {
        $("body").addClass("ipad");
    }
    else {
        $("body").removeClass("ipad");
    }
}


/*--------popuo right box---------*/
$(function () {
    $('.clickable').on('click', function () {
        var effect = $(this).data('effect');
        $(this).closest('.panel')[effect]();
    })
});