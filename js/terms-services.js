
(function ($) {
    
$('.terms__services_left_row a').on('click', function (e) {
  e.preventDefault();

  var target = $(this).attr('href');
  if (!$(target).length) return;

  var ww = $(window).width();
  var offset = 0;

  // 👉 Screen-wise offsets
  if (ww >= 1366) {
    offset = 200;
  
  } else if (ww >= 991) {
    offset = 120;
  } 

  var offsetTop = $(target).offset().top - offset;

  $('html, body').animate({
    scrollTop: offsetTop
  }, 600);

  // Active class
  $('.terms_servics_left_col').removeClass('active');
  $(this).closest('.terms_servics_left_col').addClass('active');
});


function termsAccordion() {
  if ($(window).width() < 991) {

    // Initial state
    $('.terms__services_right_col p').hide();
    $('.terms__services_right_row').removeClass('open');

    // First open (optional)
    $('.terms__services_right_row:first')
      .addClass('open')
      .find('p').show();

    // Click event
    $('.terms__services_right_col h3').off('click').on('click', function () {
      var parent = $(this).closest('.terms__services_right_row');

      if (parent.hasClass('open')) {
        parent.removeClass('open').find('p').slideUp(300);
      } else {
        $('.terms__services_right_row').removeClass('open').find('p').slideUp(300);
        parent.addClass('open').find('p').slideDown(300);
      }
    });

  } else {
    // Desktop reset
    $('.terms__services_right_col p').show();
    $('.terms__services_right_row').removeClass('open');
    $('.terms__services_right_col h3').off('click');
  }
}

// Run on load & resize
$(document).ready(termsAccordion);
$(window).on('resize', termsAccordion);

  })(jQuery)