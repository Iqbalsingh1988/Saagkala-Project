(function ($) {

        // Toggle the mobile menu
        $('.nav_btn_m').on("click",function() {
            if ($('.menu').length) {
            $('.menu').slideToggle();
            }
        });

        $('.scroll-link').on('click', function(event) {
            // Prevent the default link behavior
            event.preventDefault();
            
            // Get the href attribute of the link
            var href = $(this).attr('href');
            
            // Get the height of the navigation bar
            var navHeight = $('.navbar').height();
            
            // Scroll to the element with the associated class, adjusting for the nav height
            $('html, body').animate({
                scrollTop: $(href).offset().top - navHeight
            }, 500);

            var screenWidth = $(window).width();
            if (screenWidth < 991) {
                $('.menu').css('display', 'none');
            }
            // Close the menu
            
        });

        // header img add in background
        if ($('.bg_img').length) {
            $('.bg_img').each(function(){
                const el = $(this),
                src = el.attr('src'),
                parent = el.parent();
                parent.css({
                    'background-image': `url(${src})`,
                    'background-size': 'cover',
                    'background-position': '50% 50%',
                    'background-repeat': 'no-repeat',
                });
                el.hide();
            });
        }

        // experience section slider
        if ($('.exp_slider').length) {
          $('.exp_slider').slick({
               dots: false,
               arrows: true,
               infinite: false,
               speed: 300,
               slidesToShow: 1,
               slidesToScroll: 1,
               autoplay: false,
               autoplaySpeed: 2000,
               pauseOnHover: true,
               pauseOnFocus: true,
               prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><path d="M22.5 17.5L15 25M15 25L22.5 32.5M15 25H35M47.5 25C47.5 37.4265 37.4265 47.5 25 47.5C12.5736 47.5 2.5 37.4265 2.5 25C2.5 12.5736 12.5736 2.5 25 2.5C37.4265 2.5 47.5 12.5736 47.5 25Z" stroke="#353535" stroke-width="3.18182" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
               nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none"><path d="M27.5 17.5L35 25M35 25L27.5 32.5M35 25H15M2.5 25C2.5 37.4265 12.5735 47.5 25 47.5C37.4264 47.5 47.5 37.4265 47.5 25C47.5 12.5736 37.4264 2.5 25 2.5C12.5735 2.5 2.5 12.5736 2.5 25Z" stroke="#353535" stroke-width="3.18182" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
               responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
               ]
          });
        }

        // testimonial section slider
        if ($('.testimonial_slider').length) {
          $('.testimonial_slider').slick({
               dots: false,
               arrows: true,
               infinite: false,
               speed: 300,
               slidesToShow: 3,
               slidesToScroll: 1,
               autoplay: false,
               autoplaySpeed: 2000,
               pauseOnHover: true,
               pauseOnFocus: true,
               prevArrow: $('.prev-arrow'),
               nextArrow: $('.next-arrow'),
               responsive: [
                    {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
               ]
          });
        }
        
        // leadership section slider
        if ($('.leadership_slider').length) {
          $('.leadership_slider').slick({
               dots: false,
               arrows: true,
               infinite: false,
               speed: 300,
               slidesToShow: 4,
               slidesToScroll: 1,
               autoplay: false,
               autoplaySpeed: 2000,
               pauseOnHover: true,
               pauseOnFocus: true,
               prevArrow: $('.prev-btn'),
               nextArrow: $('.next-btn'),
               responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
               ]
          });
        }
        // Trial section slider
        if ($(window).width() < "768") {
            if ($('.trial_card_slider').length) {
                $('.trial_card_slider .card_item').wrap('<div></div>');
            $('.trial_card_slider').slick({
                dots: true,
                arrows: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                pauseOnHover: true,
                pauseOnFocus: true,
                responsive: [
                        {
                            breakpoint: 5000,
                            settings: "unslick",
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                ]
            });
            }
        }
        // expertise section slider
        if ($(window).width() < "768") {
            if ($('.expertise_slider').length) {
                $('.expertise_slider .expertise_area').wrap('<div></div>');
            $('.expertise_slider').slick({
                dots: true,
                arrows: false,
                infinite: false,
                speed: 300,
                slidesToShow: 1,
                slidesToScroll: 1,
                autoplay: false,
                autoplaySpeed: 2000,
                pauseOnHover: true,
                pauseOnFocus: true,
                responsive: [
                        {
                            breakpoint: 5000,
                            settings: "unslick",
                        },
                        {
                            breakpoint: 767,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                ]
            });
            }
        }

        // faq accordion
        if ($('.faq_accordion').length) {
            $(".faq_accordion .accordion_title").on("click", function(){
                $(this).siblings(".accordion_content").slideToggle(300);
                $(this).parent().siblings().find(".accordion_content").slideUp(300);
                $(this).parent().siblings().find(".accordion_title").removeClass("active");
                $(this).parent().siblings().removeClass("active");
                $(this).parent().toggleClass("active");
                $(this).toggleClass("active");
            });
        }

})(jQuery);

$(".menu_item1").click(function() {
    var navHeight = $('.navbar').height();
    var screenWidth = $(window).width();
            if (screenWidth < 991) {
                $('.menu').css('display', 'none');
            }
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".lp__why_section").offset().top - navHeight
    }, 1000);
});
$(".menu_item2").click(function() {
    var navHeight = $('.navbar').height();
    var screenWidth = $(window).width();
            if (screenWidth < 991) {
                $('.menu').css('display', 'none');
            }
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".lp__trial_section").offset().top - navHeight
    }, 1000);
});
$(".menu_item3").click(function() {
    var navHeight = $('.navbar').height();
    var screenWidth = $(window).width();
            if (screenWidth < 991) {
                $('.menu').css('display', 'none');
            }
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".lp__consult_section").offset().top - navHeight
    }, 1000);
});
$(".menu_item4").click(function() {
    var navHeight = $('.navbar').height();
    var screenWidth = $(window).width();
            if (screenWidth < 991) {
                $('.menu').css('display', 'none');
            }
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".lp__expertise_section").offset().top - navHeight
    }, 1000);
});
$(".menu_item5").click(function() {
    var navHeight = $('.navbar').height();
    var screenWidth = $(window).width();
            if (screenWidth < 991) {
                $('.menu').css('display', 'none');
            }
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".lp__leadership_section").offset().top - navHeight
    }, 1000);
});
$(".menu_item6").click(function() {
    var navHeight = $('.navbar').height();
    var screenWidth = $(window).width();
            if (screenWidth < 991) {
                $('.menu').css('display', 'none');
            }
    $([document.documentElement, document.body]).animate({
        scrollTop: $(".lp__about_section").offset().top - navHeight
    }, 1000);
});

