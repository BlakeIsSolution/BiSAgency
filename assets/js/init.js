/** *************Init JS*********************
	
    TABLE OF CONTENTS
	---------------------------
	1.Ready Function
		a)Functions Initialization
		b)Preloader Animate
		c)Parallax Section
		d)Testimonial Slider
		e)Client Slider
		f)Map Initialization
	2.Load Function
		a)Preloader Animate Callout
		b)SVG animation
	3.Placehoder ie9 
	4.Full height Function
	5.Resize Function
		a)SmoothScroll
	6.BiS Function
	7.ClassicSlider Function	
	8.Masonry Portfolio Function
	9.Heroparallax Function
	10.Project Video Function
	11.Loadmore Function
	12.Popup Gallery 
	13.Radial Counters
	14.Progressbar
	15.Header Background
	16.Overlay Menu Animation
	17.Placehoder ie9
	18.SVG animation
 ** ***************************************/

"use strict";
/*****Ready Function Start*****/
$(document).ready(function() {

    /* Functions Initialization */
    Sym();
    classicslider();
    progressbar();
    heroparallax();
    masonryportfolio();
    hederbg();

    /* Preloader Animate */
    $('.la-anim-1').addClass('la-animate');

    /* Parallax Section */
    $('.parallax').each(function() {
        $(this).parallax("30%", 0.1);
    });

    /* Testimonial Slider */
    if ($("#testimonial-slider").length > 0) {
        $("#testimonial-slider").owlCarousel({
            autoplay: false,
            touchDrag: true,
            mouseDrag: true,
            loop: true,
            margin: 10,
            nav: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                }
            }
        });
    }

    /* Client Slider */
    if ($("#client-wrap").length > 0) {
        $("#client-wrap").owlCarousel({
            autoplay: false,
            touchDrag: true,
            mouseDrag: true,
            loop: true,
            margin: 10,
            nav: false,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                640: {
                    items: 3
                },
                1000: {
                    items: 4
                }
            }
        });
    }

    /* Map Initialization */
    if ($('#map_canvas').length > 0) {
        var settings = {
            zoom: 16,
            center: new google.maps.LatLng(43.270441, 6.640888),
            mapTypeControl: false,
            scrollwheel: false,
            draggable: true,
            panControl: false,
            scaleControl: false,
            zoomControl: false,
            streetViewControl: false,
            navigationControl: false,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            styles: [{ "featureType": "all", "elementType": "labels.text.fill", "stylers": [{ "saturation": 36 }, { "color": "#2e2e2e" }, { "lightness": 40 }] }, { "featureType": "all", "elementType": "labels.text.stroke", "stylers": [{ "visibility": "on" }, { "color": "#2e2e2e" }, { "lightness": 16 }] }, { "featureType": "all", "elementType": "labels.icon", "stylers": [{ "visibility": "off" }] }, { "featureType": "administrative", "elementType": "geometry.fill", "stylers": [{ "color": "#2e2e2e" }, { "lightness": 20 }] }, { "featureType": "administrative", "elementType": "geometry.stroke", "stylers": [{ "color": "#2e2e2e" }, { "lightness": 17 }, { "weight": 1.2 }] }, { "featureType": "landscape", "elementType": "geometry", "stylers": [{ "color": "#2e2e2e" }, { "lightness": 20 }] }, { "featureType": "poi", "elementType": "geometry", "stylers": [{ "color": "#2e2e2e" }, { "lightness": 21 }] }, { "featureType": "road.highway", "elementType": "geometry.fill", "stylers": [{ "color": "#2e2e2e" }, { "lightness": 17 }] }, { "featureType": "road.highway", "elementType": "geometry.stroke", "stylers": [{ "color": "#2e2e2e" }, { "lightness": 29 }, { "weight": 0.2 }] }, { "featureType": "road.arterial", "elementType": "geometry", "stylers": [{ "color": "#2e2e2e" }, { "lightness": 18 }] }, { "featureType": "road.local", "elementType": "geometry", "stylers": [{ "color": "#2e2e2e" }, { "lightness": 16 }] }, { "featureType": "transit", "elementType": "geometry", "stylers": [{ "color": "#2e2e2e" }, { "lightness": 19 }] }, { "featureType": "water", "elementType": "geometry", "stylers": [{ "color": "#2e2e2e" }, { "lightness": 17 }] }]
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"), settings);
        google.maps.event.addDomListener(window, "resize", function() {
            var center = map.getCenter();
            google.maps.event.trigger(map, "resize");
            map.setCenter(center);
        });
        var contentString = '<div id="content-map-marker" style="text-align:left; padding-top:10px; padding-left:10px">' +
            '<div id="siteNotice">' +
            '</div>' +
            '<h4 id="firstHeading" class="firstHeading" style="color:#000; margin-bottom:0px;"><strong>Hello Friend!</strong></h4>' +
            '<div id="bodyContent">' +
            '<p style="font-family:Verdana; color:#999; font-size:12px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>' +
            '</div>' +
            '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: contentString
        });
        var companyImage = new google.maps.MarkerImage('assets/img/marker.png',
            new google.maps.Size(58, 63), <!-- Width and height of the marker -->
            new google.maps.Point(0, 0),
            new google.maps.Point(35, 20) <!-- Position of the marker -->
        );
        var companyPos = new google.maps.LatLng(43.270441, 6.640888);
        var companyMarker = new google.maps.Marker({
            position: companyPos,
            map: map,
            icon: companyImage,
            title: "Our Office",
            zIndex: 3
        });
        google.maps.event.addListener(companyMarker, 'click', function() {
            infowindow.open(map, companyMarker);
        });
    }
    $(document).on('click', '.header .nav li a', function() {
        $('.navbar-collapse.collapse').toggleClass('in');
    });
});
/*****Ready Function End*****/

/*****Load Function Start*****/
$(window).load(function() {
    /* Preloader Animate callout*/
    setTimeout(function() {
        $(".preloader-it").fadeOut("slow");
        $("body").css('overflow-y', 'visible');
    }, 800);
    if (window.location.href.indexOf("index.html#") > -1)
        $("html, body").animate({ scrollTop: $(window.location.hash).offset().top - 100 }, 800);

    /***** SVG animation start*****/
    $(".about-sec .row").appear(function(e) {
        var studio1 = new SvgAnimation({ "elem": "#studio_1", "increaseBy": 3, "timeout": 0 });
        var studio2 = new SvgAnimation({ "elem": "#studio_2", "increaseBy": 3, "timeout": 0 });
        var studio3 = new SvgAnimation({ "elem": "#studio_3", "increaseBy": 3, "timeout": 0 });
        var studio4 = new SvgAnimation({ "elem": "#studio_4", "increaseBy": 3, "timeout": 0 });
        studio1.animate();
        studio2.animate();
        studio3.animate();
        studio4.animate();
    });
    $(".expertises-sec").appear(function(e) {
        var expertise1 = new SvgAnimation({ "elem": "#expertise_1", "increaseBy": 3, "timeout": 0 });
        var expertise2 = new SvgAnimation({ "elem": "#expertise_2", "increaseBy": 3, "timeout": 0 });
        var expertise3 = new SvgAnimation({ "elem": "#expertise_3", "increaseBy": 3, "timeout": 0 });
        var expertise4 = new SvgAnimation({ "elem": "#expertise_4", "increaseBy": 3, "timeout": 0 });
        var expertise5 = new SvgAnimation({ "elem": "#expertise_5", "increaseBy": 3, "timeout": 0 });
        var expertise6 = new SvgAnimation({ "elem": "#expertise_6", "increaseBy": 3, "timeout": 0 });
        expertise1.animate();
        expertise2.animate();
        expertise3.animate();
        expertise4.animate();
        expertise5.animate();
        expertise6.animate();
    });
    $("#process").appear(function(e) {
        var process1 = new SvgAnimation({ "elem": "#process_1", "increaseBy": 3, "timeout": 0 });
        var process2 = new SvgAnimation({ "elem": "#process_2", "increaseBy": 3, "timeout": 0 });
        var process3 = new SvgAnimation({ "elem": "#process_3", "increaseBy": 3, "timeout": 0 });
        var process4 = new SvgAnimation({ "elem": "#process_4", "increaseBy": 3, "timeout": 0 });
        process1.animate();
        process2.animate();
        process3.animate();
        process4.animate();
    });
    /***** SVG animation stop*****/
});
/*****Load function End*****/

/***** Full height Function Start *****/
var setHeight = function() {
    var height = $(window).height();
    $('.full-height').css('min-height', (height));
    $('.slider-height').css('min-height', (height - 50));
    var footer_height = $('.footer-sec').height();
    $('.main-content').css('margin-bottom', (footer_height));
};
/***** Full height Function End *****/

/***** Resize Function Start *****/
$(window).on("resize", function() {
    setHeight();

    /* SmoothScroll*/
    var winWidth = $(window).width();
    var offsetHeader
    if (winWidth > 1265)
        offsetHeader = 100;
    else if (winWidth <= 1265 && winWidth > 1024)
        offsetHeader = 75;
    else if (winWidth <= 1024)
        offsetHeader = 50;
    smoothScroll.init({
        speed: 800,
        easing: 'easeInOutCubic',
        offset: offsetHeader,
        updateURL: false,
        callbackBefore: function(toggle, anchor) {},
        callbackAfter: function(toggle, anchor) { offset: 345435 },
    });
}).resize();
/***** Resize Function End *****/

/***** Sym Function Start *****/
function Sym() {
    var $slider = $(".slider"),
        $slideBGs = $(".slide__bg"),
        diff = 0,
        curSlide = 0,
        numOfSlides = $(".slide").length - 1,
        animating = false,
        animTime = 500,
        autoSlideTimeout,
        autoSlideDelay = 6000,
        $pagination = $(".slider-pagi");

    function createBullets() {
        for (var i = 0; i < numOfSlides + 1; i++) {
            var $li = $("<li class='slider-pagi__elem'></li>");
            $li.addClass("slider-pagi__elem-" + i).data("page", i);
            if (!i) $li.addClass("active");
            $pagination.append($li);
        }
    };

    createBullets();

    function manageControls() {
        $(".slider-control").removeClass("inactive");
        if (!curSlide) $(".slider-control.left").addClass("inactive");
        if (curSlide === numOfSlides) $(".slider-control.right").addClass("inactive");
    };

    function autoSlide() {
        autoSlideTimeout = setTimeout(function() {
            curSlide++;
            if (curSlide > numOfSlides) curSlide = 0;
            changeSlides();
        }, autoSlideDelay);
    };

    autoSlide();

    function changeSlides(instant) {
        if (!instant) {
            animating = true;
            manageControls();
            $slider.addClass("animating");
            $slider.css("top");
            $(".slide").removeClass("active");
            $(".slide-" + curSlide).addClass("active");
            setTimeout(function() {
                $slider.removeClass("animating");
                animating = false;
            }, animTime);
        }
        window.clearTimeout(autoSlideTimeout);
        $(".slider-pagi__elem").removeClass("active");
        $(".slider-pagi__elem-" + curSlide).addClass("active");
        $slider.css("transform", "translateX(" + -curSlide * 100 + "%)");
        $slideBGs.css("transform", "translateX(" + curSlide * 50 + "%)");
        diff = 0;
        autoSlide();
    }

    function navigateLeft() {
        if (animating) return;
        if (curSlide > 0) curSlide--;
        changeSlides();
    }

    function navigateRight() {
        if (animating) return;
        if (curSlide < numOfSlides) curSlide++;
        changeSlides();
    }

    $(document).on("mousedown touchstart", ".slider", function(e) {
        if (animating) return;
        window.clearTimeout(autoSlideTimeout);
        var startX = e.pageX || e.originalEvent.touches[0].pageX,
            winW = $(window).width();
        diff = 0;

        $(document).on("mousemove touchmove", function(e) {
            var x = e.pageX || e.originalEvent.touches[0].pageX;
            diff = (startX - x) / winW * 70;
            if ((!curSlide && diff < 0) || (curSlide === numOfSlides && diff > 0)) diff /= 2;
            $slider.css("transform", "translateX(" + (-curSlide * 100 - diff) + "%)");
            $slideBGs.css("transform", "translateX(" + (curSlide * 50 + diff / 2) + "%)");
        });
    });

    $(document).on("mouseup touchend", function(e) {
        $(document).off("mousemove touchmove");
        if (animating) return;
        if (!diff) {
            changeSlides(true);
            return;
        }
        if (diff > -8 && diff < 8) {
            changeSlides();
            return;
        }
        if (diff <= -8) {
            navigateLeft();
        }
        if (diff >= 8) {
            navigateRight();
        }
    });

    $(document).on("click", ".slider-control", function() {
        if ($(this).hasClass("left")) {
            navigateLeft();
        } else {
            navigateRight();
        }
    });

    $(document).on("click", ".slider-pagi__elem", function() {
        curSlide = $(this).data("page");
        changeSlides();
    });

}
/***** Sym Function End *****/

/***** ClassicSlider Function Start *****/
function classicslider() {
    if ($('.classic-slider').length > 0) {
        $('.classic-slider').flexslider({
            animation: "slide",
            directionNav: false,
            direction: "horizontal",
            animationSpeed: 1000,
            animationLoop: true,
            controlNav: true,
            slideshow: false,
        });
    }
}
/***** ClassicSlider Function End *****/

/***** Masonry Portfolio Function Start *****/
function masonryportfolio() {

    if ($('#portfolio-wrap').length > 0) {

        var $container = $('#portfolio');

        $container.isotope({
            itemSelector: '#portfolio .item',
            gutter: 0,
            transitionDuration: "0.8s"
        });

        $(document).on("click", "#filters a", function(e) {
            $('#filters a').removeClass('active');
            $(this).addClass('active');
            var selector = $(this).attr('data-filter');
            $container.isotope({ filter: selector });
            return false;
        });

        $(document).scroll(function() {
            if ($('.auto-construct').length > 0) {
                var y = $(this).scrollTop();
                var t = $('#portfolio').offset().top + $('#portfolio').height() - window.innerHeight;
                if (y > t) {
                    $('#portfolio').removeClass('auto-construct')
                }
            }
        });

        $(window).on('resize', function() {

            var winWidth = window.innerWidth;
            columnNumb = 1;
            var attr_col = $('#portfolio').attr('data-col');

            if (winWidth >= 1466) {

                $('#portfolio-wrap').css({ width: 1280 + 'px' });
                $('#portfolio-wrap.no-gutter').css({ width: 1280 + 'px' });
                var portfolioWidth = $('#portfolio-wrap').width();

                if (typeof attr_col !== typeof undefined && attr_col !== false) {
                    columnNumb = $('#portfolio').attr('data-col');
                } else columnNumb = 3;

                var postWidth = Math.floor(portfolioWidth / columnNumb)
                $container.find('.item').each(function() {
                    $('.item').css({
                        width: postWidth - 80 + 'px',
                        height: postWidth * 0.75 - 80 + 'px',
                        margin: 40 + 'px'
                    });
                    $('.no-gutter .item').css({
                        width: postWidth + 'px',
                        height: postWidth * 0.75 + 'px',
                        margin: 0 + 'px'
                    });
                    $('.item.wide').css({
                        width: postWidth * 2 - 80 + 'px'
                    });
                    $('.no-gutter .item.wide').css({
                        width: postWidth * 2 + 'px'
                    });
                    $('.item.tall').css({
                        height: postWidth * 1.5 - 80 + 'px'
                    });
                    $('.no-gutter .item.tall').css({
                        height: postWidth * 1.5 + 'px'
                    });
                    $('.item.wide-tall').css({
                        width: postWidth * 2 - 80 + 'px',
                        height: postWidth * 1.5 - 80 + 'px'
                    });
                    $('.no-gutter .item.wide-tall').css({
                        width: postWidth * 2 + 'px',
                        height: postWidth * 1.5 + 'px'
                    });
                });


            } else if (winWidth > 1024) {

                $('#portfolio-wrap').css({ width: 1000 + 'px' });
                $('#portfolio-wrap.no-gutter').css({ width: 940 + 'px' });
                var portfolioWidth = $('#portfolio-wrap').width();

                if (typeof attr_col !== typeof undefined && attr_col !== false) {
                    columnNumb = $('#portfolio').attr('data-col');
                } else columnNumb = 3;

                postWidth = Math.floor(portfolioWidth / columnNumb)
                $container.find('.item').each(function() {
                    $('.item').css({
                        width: postWidth - 60 + 'px',
                        height: postWidth * 0.75 - 60 + 'px',
                        margin: 30 + 'px'
                    });
                    $('.no-gutter .item').css({
                        width: postWidth + 'px',
                        height: postWidth * 0.75 + 'px',
                        margin: 0 + 'px'
                    });
                    $('.item.wide').css({
                        width: postWidth * 2 - 60 + 'px'
                    });
                    $('.no-gutter .item.wide').css({
                        width: postWidth * 2 + 'px'
                    });
                    $('.item.tall').css({
                        height: postWidth * 1.5 - 60 + 'px'
                    });
                    $('.no-gutter .item.tall').css({
                        height: postWidth * 1.5 + 'px'
                    });
                    $('.item.wide-tall').css({
                        width: postWidth * 2 - 60 + 'px',
                        height: postWidth * 1.5 - 60 + 'px'
                    });
                    $('.no-gutter .item.wide-tall').css({
                        width: postWidth * 2 + 'px',
                        height: postWidth * 1.5 + 'px'
                    });
                });


            } else if (winWidth > 767) {

                $('#portfolio-wrap').css({ width: 640 + 'px' });
                $('#portfolio-wrap.no-gutter').css({ width: 600 + 'px' });

                var portfolioWidth = $('#portfolio-wrap').width(),

                    columnNumb = 2;
                postWidth = Math.floor(portfolioWidth / columnNumb)
                $container.find('.item').each(function() {
                    $('.item').css({
                        width: postWidth - 40 + 'px',
                        height: postWidth * 0.75 - 40 + 'px',
                        margin: 20 + 'px'
                    });
                    $('.no-gutter .item').css({
                        width: postWidth + 'px',
                        height: postWidth * 0.75 + 'px',
                        margin: 0 + 'px'
                    });
                    $('.item.wide').css({
                        width: postWidth * 2 - 40 + 'px'
                    });
                    $('.no-gutter .item.wide').css({
                        width: postWidth * 2 + 'px'
                    });
                    $('.item.tall').css({
                        height: postWidth * 1.5 - 40 + 'px'
                    });
                    $('.no-gutter .item.tall').css({
                        height: postWidth * 1.5 + 'px'
                    });
                    $('.item.wide-tall').css({
                        width: postWidth * 2 - 40 + 'px',
                        height: postWidth * 1.5 - 40 + 'px'
                    });
                    $('.no-gutter .item.wide-tall').css({
                        width: postWidth * 2 + 'px',
                        height: postWidth * 1.5 + 'px'
                    });
                });


            } else if (winWidth > 479) {

                $('#portfolio-wrap').css({ width: 440 + 'px' });
                $('#portfolio-wrap.no-gutter').css({ width: 400 + 'px' });

                var portfolioWidth = $('#portfolio-wrap').width(),

                    columnNumb = 1;
                postWidth = Math.floor(portfolioWidth / columnNumb)
                $container.find('.item').each(function() {
                    $('.item').css({
                        width: postWidth - 40 + 'px',
                        height: postWidth * 0.75 - 40 + 'px',
                        margin: 20 + 'px'
                    });
                    $('.no-gutter .item').css({
                        width: postWidth + 'px',
                        height: postWidth * 0.75 + 'px',
                        margin: 0 + 'px'
                    });
                    $('.item.wide').css({
                        width: postWidth - 40 + 'px'
                    });
                    $('.no-gutter .item.wide').css({
                        width: postWidth + 'px'
                    });
                    $('.item.tall').css({
                        height: postWidth * 1.5 - 40 + 'px'
                    });
                    $('.no-gutter .item.tall').css({
                        height: postWidth * 1.5 + 'px'
                    });
                    $('.item.wide-tall').css({
                        width: postWidth - 40 + 'px',
                        height: postWidth * 0.75 - 40 + 'px'
                    });
                    $('.no-gutter .item.wide-tall').css({
                        width: postWidth + 'px',
                        height: postWidth * 0.75 + 'px'
                    });
                });


            } else if (winWidth <= 479) {

                $('#portfolio-wrap').css({ width: 280 + 'px' });
                $('#portfolio-wrap.no-gutter').css({ width: 240 + 'px' });

                var portfolioWidth = $('#portfolio-wrap').width(),

                    columnNumb = 1;
                postWidth = Math.floor(portfolioWidth / columnNumb)
                $container.find('.item').each(function() {
                    $('.item').css({
                        width: postWidth - 40 + 'px',
                        height: postWidth * 0.75 - 40 + 'px',
                        margin: 20 + 'px'
                    });
                    $('.no-gutter .item').css({
                        width: postWidth + 'px',
                        height: postWidth * 0.75 + 'px',
                        margin: 0 + 'px'
                    });
                    $('.item.wide').css({
                        width: postWidth - 40 + 'px'
                    });
                    $('.no-gutter .item.wide').css({
                        width: postWidth + 'px'
                    });
                    $('.item.tall').css({
                        height: postWidth * 1.5 - 40 + 'px'
                    });
                    $('.no-gutter .item.tall').css({
                        height: postWidth * 1.5 + 'px'
                    });
                    $('.item.wide-tall').css({
                        width: postWidth - 40 + 'px',
                        height: postWidth * 0.75 - 40 + 'px'
                    });
                    $('.no-gutter .item.wide-tall').css({
                        width: postWidth + 'px',
                        height: postWidth * 0.75 + 'px'
                    });
                });


            }
            return columnNumb;


        }).resize();

        $("#all").click();

    }
}
/***** Masonry Portfolio Function End *****/

/***** Heroparallax Function Start *****/
function heroparallax() {
    var page_title = $('body');
    var block_intro = page_title.find('.hero');
    if (block_intro.length > 0) var block_intro_top = block_intro.offset().top;
    $(window).scroll(function() {
        var current_top = $(document).scrollTop();
        var hero_height = $('.hero').height();
        if ($('.hero').hasClass('parallax-hero')) {
            block_intro.css('top', (current_top * 0.5));
        }
        if ($('.hero').hasClass('static-hero')) {
            block_intro.css('top', (current_top * 1));
        }
        if ($('.hero').hasClass('opacity-hero')) {
            block_intro.css('opacity', (1 - current_top / hero_height * 1));
        }
    });

} //End HeroParallax
/***** Heroparallax Function End *****/

/***** Project Video Function Start *****/
$(document).on("click", ".vimeo a,.youtube a", function(e) {
    e.preventDefault();
    var videoLink = $(this).attr('href');
    var classeV = $(this).parent();
    var PlaceV = $(this).parent();
    if ($(this).parent().hasClass('youtube')) {
        $(this).parent().wrapAll('<div class="cntVid">');
        $(PlaceV).html('<iframe frameborder="0" height="333" src="' + videoLink + '?autoplay=1&showinfo=0" title="YouTube video player" width="547"></iframe>');
    } else {
        $(this).parent().wrapAll('<div class="cntVid">');
        $(PlaceV).html('<iframe src="' + videoLink + '?title=0&amp;byline=0&amp;portrait=0&amp;autoplay=1&amp;color=ffffff" width="500" height="281" frameborder="0"></iframe>');
    }
});
/***** Project Video Function End *****/

/***** Loadmore Function Start *****/
$(document).on("click", "#load_more", function() {
    $('.item').removeClass('hidden');
    masonryportfolio();
    $(this).hide();
});
/***** Loadmore Function Start *****/

/*****Popup Gallery  Start *****/
$('a.gallery').colorbox({ rel: 'gal', maxWidth: "95%", maxHeight: "95%" });
/*****Popup Gallery  End *****/

/*****Radial Counters  Start *****/
if ($('.radial-counter').length > 0) {
    $(".knob").knob({
        width: 133,
        height: 133,
        fgColor: '#ffdf2b',
        bgColor: 'rgba(0,0,0,0)',
        inputColor: '#fff',
        dynamicDraw: true,
        thickness: 0.1,
        tickColorizeValues: true,
        skin: 'tron',
        readOnly: true,
    });
    $(".knob").appear(function(e) {
        var $this = $(this);
        var myVal = $this.attr("data-gal");
        $({ value: 0 }).animate({ value: myVal }, {
            duration: 2000,
            easing: 'swing',
            step: function() {
                $this.val(Math.ceil(this.value)).trigger('change');
            }
        })
    });
}
/*****Radial Counters  End *****/

/*****Progressbar  Start *****/
function progressbar() {
    //Progress bar animations	
    $('.progress-bar-graph div').each(function(i) {
        $(this).appear(function() {
            var percent = $(this).find('span').attr('data-width');
            var $endNum = parseInt($(this).find('span strong i').text(), 10);
            var $that = $(this);
            $(this).find('span').animate({
                'width': percent + '%'
            }, 1600, function() {});
            $(this).find('span strong').animate({
                'opacity': 1
            }, 1400);
            $(this).find('span strong i').countTo({
                from: 0,
                to: $endNum,
                speed: 1200,
                refreshInterval: 30,
                onComplete: function() {}
            });
            if (percent == '100') {
                $that.find('span strong').addClass('full');
            }
        });
    });
}
/*****Progressbar  End *****/

/*****Header Background CSS Start *****/
function hederbg() {
    var y_scroll_pos = window.pageYOffset;
    var height;
    if ($(".project-page").length || $(".blog-page").length || $(".blogdetail-page").length)
        height = 575 - 125;
    else if ($(".home").length)
        height = $(window).height() - 125; // set to whatever you want it to be
    if (y_scroll_pos >= height) {
        $('.header').addClass('header-opac');
    } else
        $('.header').removeClass('header-opac');
}
$(window).on('scroll', function() {
    hederbg();
});
/*****Header Background CSS End *****/

/*****Overlay Menu Animation Start *****/
var a = function(t, e, n) {

    var i = function(e, i) {
        var r = this,
            o = (t(e), {
                menu: t(".nav-full-screen"),
                delay: 1e3
            }),
            s = t.extend({}, o, i),
            a = {
                hamburger: t(".target-hamburger, .menu-item"),
                body: t("body"),
                sticky: t(".nav-sticky")
            },
            l = !1,
            c = !0;
        r._construct = function() {}, r.init = function() {
            return u(), r
        }, r.toggle = function() {
            l || (l = !0, f(), s.menu.hasClass("hidden") ? (a.body.addClass("nav-active nav-in"), s.menu.removeClass("hidden"), g(function() {
                a.body.removeClass("nav-in")
            })) : (a.body.addClass("nav-out"), g(function() {
                a.body.removeClass("nav-active nav-out"), s.menu.addClass("hidden"), m()
            })))
        }, r.show = function() {
            c && (a.body.addClass("nav-scroll"), c = !1)
        }, r.hide = function() {
            c || (a.body.removeClass("nav-scroll"), c = !0)
        };
        var u = function() {
                h(), p()
            },
            h = function() {
                a.hamburger.on("click", function() {
                    r.toggle()
                })
            },
            p = function() {
                navigator.userAgent.match(/(iPad|iPhone|iPod touch);.*CPU.*OS 7_\d/i) && a.hamburger.addClass("no-transition")
            },
            d = function(t) {
                t > 0 ? r.show() : r.hide()
            },
            f = function() {
                document.ontouchmove = function(t) {
                    t.preventDefault()
                }
            },
            m = function() {
                document.ontouchmove = function() {
                    return !0
                }
            },
            g = function(e) {
                a.body.delay(s.delay).queue(function() {
                    e && "function" == typeof e && e(), l = !1, t(this).dequeue()
                })
            }
    };
    t.fn.nav = function(e) {
        return this.each(function() {
            var n = t(this);
            if (!n.data("nav")) {
                var r = new i(this, e);
                r.init(), n.data("nav", r)
            }
        })
    }
}($, document, window);
var s = function(t) {

    var n = {
        init: function() {
            t(".nav-trig").nav()
        }
    };
    n.init()
}($);
/*****Overlay Menu Animation End *****/

/***** Placehoder ie9 start*****/
$('input[type=text], textarea').placeholder();
/***** Placehoder ie9 end*****/