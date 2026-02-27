(function ($) {

    /* =====================
       TAB CLICK FUNCTION
    ====================== */
    $(document).on('click', '.product_tabs .tab__item', function () {

        var tabId = $(this).data('tab');

        // Tabs active
        $('.product_tabs li').removeClass('active');
        $('.product_tabs .tab__item').removeClass('active');
        $(this).addClass('active').closest('li').addClass('active');

        // Content switching
        $('.blog_listing_wrap').removeClass('tab-active');
        $('.blog_listing_wrap[data-tab="' + tabId + '"]').addClass('tab-active');

    });


    /* =====================
       INIT SLIDER IF LI > 6
    ====================== */
    function initTabSlider() {

        var tabCount = $('.product_tabs li').length;

        if (tabCount > 6) {

            if (!$('.blog_listing_tabs_slider').hasClass('slick-initialized')) {

                $('.blog_listing_tabs_slider').slick({
                    arrows: false,
                    dots: false,
                    infinite: false,
                    speed: 400,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    variableWidth: true,
                    swipeToSlide: true,
                    draggable: true,
                    focusOnSelect: true,
                    mobileFirst: true,
                    responsive: [
                        {
                            breakpoint: 768,
                            settings: "unslick"
                        }
                    ]
                });

            }

        }

    }

    initTabSlider();

})(jQuery);
