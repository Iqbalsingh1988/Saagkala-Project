(function ($) {

// we hiring item slider

    if ($('.we__hiring_slider').length) {
      $('.we__hiring_slider').slick({
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
           prevArrow: $('.prev-btn-hiring'),
           nextArrow: $('.next-btn-hiring'),
           responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                  breakpoint: 768,
                  settings: {
                      slidesToShow: 1,
                      slidesToScroll: 1
                  }
              }
           ]
      });
    }

      $('.file_input').on('change', function () {
        var fileName = $(this).val().split('\\').pop();
        var $wrapper = $(this).closest('.file_upload_field');

        $wrapper.find('.file_placeholder').text(
            fileName ? fileName : 'No file chosen'
        );
    });


})(jQuery)