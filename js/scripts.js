$(document).ready(function () {
    // Select all links with hashes
    $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function (event) {
            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually going to happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top - $('.navigation').outerHeight() + 1
                    }, 1000);
                }
            }
        });

    /* Animations on scroll */
    $('#section-about').waypoint(function (direction) {
        $('#section-about').addClass('animated fadeIn');
    }, {
        offset: '30%'
    });

    $('#service-box-animation').waypoint(function (direction) {
        $('#service-box-animation').addClass('animated fadeInRight');
    }, {
        offset: '40%'
    });

    $('.projects').waypoint(function (direction) {
        $('.projects').addClass('animated zoomIn');
    }, {
        offset: '40%'
    });


    $('.team').waypoint(function (direction) {
        $('.team').addClass('animated bounceIn');
    }, {
        offset: '30%'
    });

    $('.logo-box').waypoint(function (direction) {
        $('.logo-box').addClass('animated pulse');
    }, {
        offset: '50%'
    });

    $('.price-card').waypoint(function (direction) {
        $('.price-card').addClass('animated bounceIn');
    }, {
        offset: '30%'
    });
    // Fun facts animation
    $('.facts__number').counterUp({
        delay: 30,
        time: 2000
    });
});
