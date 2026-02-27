(function ($) {


        // nav toggle menu
        if ($(window).width() < "1024") {
          $(".nav_toggle").on('click', function() {
            if ($('.menu').hasClass('active')) {
              $('.menu').slideUp().removeClass('active');
            } else {
              $('.menu').slideDown().addClass('active');
            }
          });

          $('.menu .has-dropdown > a').after('<span class="arrow-btn"><svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 10L12 15L17 10" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span>');

           // Handle mega menu visibility
            $('.menu .has-dropdown > .arrow-btn').on("click",function (e) {
                e.preventDefault();
                const $megaMenuWrapper = $(this).siblings('.dropdown');
                if ($megaMenuWrapper.length) {
                $(this).toggleClass('active');
                $megaMenuWrapper.slideToggle(300, function() {
                    if ($megaMenuWrapper.is(':visible')) {
                        $megaMenuWrapper.addClass('show');
                    } else {
                        $megaMenuWrapper.removeClass('show');
                    }
                });
                $(this).parent().siblings().find('.dropdown').slideUp(300).removeClass('show');
                $(this).parent().siblings().find('.arrow-btn').removeClass('active');
                }
            });
          
          $(document).on('click', function(e) {
            var container = $('.menu, .nav_toggle');
            if (!container.is(e.target) && container.has(e.target).length === 0) {
              $('.menu').slideUp().removeClass('active');
              $('.has-dropdown > .arrow-btn').removeClass('active');
              $('.nav_wrapper .dropdown').slideUp(300).removeClass('show');
            }
          });
        }
        // mega menu hover
        if ($(window).width() > "992") {
            $(".menu .has-dropdown").on("mouseenter", function (e) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
                $(".mega_menu > li:first-child").addClass("active");
            });
            $(".mega_menu > li").mouseenter(function (e) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
                $(this).siblings().removeClass("active");
                $(this).addClass("active");
            });
            $(".mega_menu > li").mouseleave(function (e) {
                e.stopImmediatePropagation();
                e.stopPropagation();
                e.preventDefault();
                $(this).removeClass("active");
                $(".mega_menu > li:first-child").addClass("active");
            });
        }
       

        // img add in background
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
        if ($('.home__slider').length) {
            const $status = $('.slide_counter');
            const $slickElement = $('.home__slider');
            $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
                var i = (currentSlide ? currentSlide : 0) + 1;
                $status.html( '<span class="current_slide">'  + i + '</span> / <span class="total_slides"> '  + slick.slideCount + '</span>');
            });
          $('.home__slider').slick({
               dots: false,
               arrows: true,
               infinite: false,
               speed: 1000,
               slidesToShow: 1,
               slidesToScroll: 1,
               autoplay: false,
               autoplaySpeed: 2000,
               pauseOnHover: true,
               pauseOnFocus: true,
               prevArrow: '.prev_btn',
               nextArrow: '.next_btn',
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

       // Play video on click
  $('.banner_play_btn').on('click', function() {
    var video = $(this).closest('.home_video__wrapper').find('video');
    video.get(0).play();
    $(this).hide();

    // Pause all other videos
    $('.home_video__wrapper').not($(this).closest('.home_video__wrapper')).find('video').each(function() {
      this.pause();
    });
});


// category slider
if ($('.products__slider').length) {
  $('.products__slider').slick({
       dots: false,
       arrows: true,
       infinite: false,
       speed: 1000,
       slidesToShow: 2,
       slidesToScroll: 1,
       autoplay: false,
       autoplaySpeed: 2000,
       pauseOnHover: true,
       pauseOnFocus: true,
       prevArrow: $('.prev-btn-products'),
       nextArrow: $('.next-btn-products'),
       responsive: [
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


    // category slider
    if ($('.category__slider').length) {
      $('.category__slider').slick({
           dots: false,
           arrows: true,
           infinite: false,
           speed: 1000,
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 2000,
           pauseOnHover: true,
           pauseOnFocus: true,
           prevArrow: $('.prev-btn-category'),
           nextArrow: $('.next-btn-category'),
           responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                  breakpoint: 992,
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


     // explore product tabs
     if ($('.product_tabs').length) {
      $(' .tab__item').on("click",function(){  
          $(".exp__product_wrap").removeClass('tab-active');
          $(".exp__product_wrap[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
          $(".tab__item").removeClass('active');
          $(this).parent().find(".tab__item").addClass('active');
          // var activeTab = $('.exp__product_tabs ul li a.active');
          // var tabOffset = activeTab.offset().left + '20px';
          // $('.exp__product_tabs ul').animate({ scrollLeft: tabOffset }, 500);
          $('.exp__product_slider').slick('refresh');
          $('.exp__product_slider').slick('setPosition');
      });
      if ($('.product_tabs_slider').length) {
        $("ul.product_tabs li").on("click", function(){

          $("ul.product_tabs li").removeClass("active");
          $(this).addClass("active")
      
        });
        var slideWidth = $('.product_tabs').outerWidth()
        $('.product_tabs_slider').slick({
             dots: false,
             arrows: false,
             infinite: false,
             speed: 1000,
             mobileFirst: true,
             slidesToShow: 2,
             slidesToScroll: 1,
             autoplay: false,
             variableWidth: true,
             focusOnSelect: true,
             centerMode: true,
             centerPadding: slideWidth,
             draggable: true,
             swipeToSlide: true,
             prevArrow: '<a class="prev_btn" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none"><path d="M41.5996 28.9999L16.3996 28.9999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M24.7998 37.3999L16.3998 28.9999L24.7998 20.5999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M57 29C57 44.464 44.464 57 29 57C13.536 57 1 44.464 1 29C1 13.536 13.536 1 29 1C44.464 1 57 13.536 57 29Z" stroke="currentColor" stroke-width="2"/></svg></a>',
             nextArrow: '<a class="next_btn" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none"><path d="M16.4004 28.9999L41.6004 28.9999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M33.1992 37.3999L41.5992 28.9999L33.1992 20.5999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 29C1 44.464 13.536 57 29 57C44.464 57 57 44.464 57 29C57 13.536 44.464 1 29 1C13.536 1 1 13.536 1 29Z" stroke="currentColor" stroke-width="2"/></svg></a>',
             responsive: [
                  {
                      breakpoint: 767,
                      settings: "unslick",
                  },
             ]
        });
      }

      $(".product_tabs .slick-track").addClass("removeTransform");
        $(".product_tabs .slick-slide").click(function(){
            var getid = $(this).data('slick-index');
            if( getid > 0 ) {
                $(".product_tabs .slick-track").removeClass("removeTransform");
            }
            else {
                $(".product_tabs .slick-track").addClass("removeTransform");
            }
        });
    }
    
    


    // shop the look slider
    if ($('.exp__product_slider').length) {
      $('.exp__product_slider').slick({
           dots: false,
           arrows: true,
           infinite: false,
           speed: 1000,
           slidesToShow: 4,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 2000,
           pauseOnHover: true,
           pauseOnFocus: true,
           prevArrow: '<a class="prev_btn" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none"><path d="M41.5996 28.9999L16.3996 28.9999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M24.7998 37.3999L16.3998 28.9999L24.7998 20.5999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M57 29C57 44.464 44.464 57 29 57C13.536 57 1 44.464 1 29C1 13.536 13.536 1 29 1C44.464 1 57 13.536 57 29Z" stroke="currentColor" stroke-width="2"/></svg></a>',
           nextArrow: '<a class="next_btn" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none"><path d="M16.4004 28.9999L41.6004 28.9999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M33.1992 37.3999L41.5992 28.9999L33.1992 20.5999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 29C1 44.464 13.536 57 29 57C44.464 57 57 44.464 57 29C57 13.536 44.464 1 29 1C13.536 1 1 13.536 1 29Z" stroke="currentColor" stroke-width="2"/></svg></a>',
           responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                },
                {
                  breakpoint: 992,
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

    // explore item hover video
    $('.explore__item .single__product_card').on('mouseover', function() {
      $(this).find('.explore__item .product_video video')[0].play();
    });
    
    $('.explore__item .single__product_card').on('mouseout', function() {
      $(this).find('.explore__item .product_video video')[0].pause();
    });



// product hotspot tabs
    $('.spot').on("click",function(){
      var parent = $(this).closest('.shop__item');
      parent.find(".single__product_card").removeClass('active');
      parent.find(".single__product_card[data-id='"+$(this).attr('data-id')+"']").addClass("active");
      parent.find(".spot").removeClass('active');
      $(this).addClass('active');
  });


    // shop the look slider
    if ($('.shop__slider').length) {
      $('.shop__slider').slick({
           dots: false,
           arrows: true,
           infinite: false,
           speed: 1000,
           slidesToShow: 1,
           slidesToScroll: 1,
           autoplay: false,
           autoplaySpeed: 2000,
           pauseOnHover: true,
           pauseOnFocus: true,
           prevArrow: $('.prev-btn-shop'),
           nextArrow: $('.next-btn-shop'),
           responsive: [
                
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


    // featured item slider

    if ($('.featured__slider').length) {
      $('.featured__slider').slick({
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
           prevArrow: $('.prev-btn-featured'),
           nextArrow: $('.next-btn-featured'),
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
               prevArrow: $('.prev-btn'),
               nextArrow: $('.next-btn'),
               responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 1.5,
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

        // testimonial video 
        if ($(".testimonial_video").length) {
          $(".testimonial_video .video_play").on("click", function () {
            $(".testimonial_video").siblings(".card_testimonial").hide();
            let vidSrc = $(this).siblings("iframe");
            let cover = $(this).siblings(".cover__thumbnail");
            vidSrc.trigger("play");
            cover.hide();
            $(this).hide();
          });
        }

        // video section
        if ($(".video__bg").length) {
          $(".video__bg .video_play").on("click", function () {
            let vidSrc = $(this).parent().siblings("iframe");
            let cover = $(this).parent().siblings(".cover__thumbnail");
            vidSrc.trigger("play");
            cover.hide();
            $(this).hide();
            $(this).parent().hide();
          });
        }

        
    /*===========================================
	  =   Instagram story video   =
    =============================================*/
    
    if ($(".story__img").length) {
       
      }

      // instagram story slider
      if ($('.story__slider').length) {
          $('.story__slider').slick({
              dots: false,
              arrows: false,
              infinite: false,
              speed: 300,
              slidesToShow: 5,
              slidesToScroll: 1,
              adaptiveHeight: true,
              autoplay: false,
              autoplaySpeed: 2000,
              pauseOnHover: true,
              pauseOnFocus: true,
              responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 1
                        }
                    },
                    {
                      breakpoint: 768,
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
      
        // Play/Pause Video on Click
        $('.video_play_btn').on('click', function() {
          var video = $(this).siblings('.reel__video');
          var pauseButton = $(this).siblings('.video_pause_btn');
          var playButton = $(this);
          var imageContainer = $(this).parent().find('.cover__thumbnail');
          
          imageContainer.hide();
          video.show().get(0).play();
          playButton.hide();
          pauseButton.show();
        });

        $('.video_pause_btn').on('click', function() {
          var video = $(this).siblings('.reel__video');
          var playButton = $(this).siblings('.video_play_btn');
          var imageContainer = $(this).parent().find('.cover__thumbnail');
          
          video.get(0).pause();
          $(this).hide();
          playButton.show();
          imageContainer.show();
          video.hide();
        });

        // About us page value slider in mobile
        function handleValueSlider() {
        if ($(window).width() < "768") {
          $('.our__value_item').wrap('<div class="our__value_item_wrap"></div>');
        }
        else {
          $('.our__value_item').unwrap('.our__value_item_wrap');
        }
        if ($('.our__value_slider').length) {
            if ($(window).width() < 768 && !$('.our__value_slider').hasClass('slick-initialized')) {
                $('.our__value_slider').slick({
                  dots: false,
                  arrows: true,
                  infinite: false,
                  speed: 1000,
                  mobileFirst: true,
                  slidesToShow: 1,
                  slidesToScroll: 1,
                  autoplay: false,
                  draggable: true,
                  swipeToSlide: true,
                  prevArrow: $('.prev-btn-value'),
                  nextArrow: $('.next-btn-value'),
                  responsive: [
                      {
                          breakpoint: 767,
                          settings: "unslick",
                      },
                  ]
            });
          } else if ($(window).width() >= 768 && $('.our__value_slider').hasClass('slick-initialized')) {
            $('.our__value_slider').slick('unslick');
          }
        }
      }

      handleValueSlider();

      $(window).on('resize', function() {
        handleValueSlider();
      });
    /*===========================================
	  =   Text color change on scroll animation   =
    =============================================*/

    document.addEventListener("DOMContentLoaded", () => {
      gsap.registerPlugin(ScrollTrigger);
  
        const textElements = document.querySelectorAll(".scroll-color-change");
  
        textElements.forEach(textElement => {
          const text = textElement.textContent;
          textElement.innerHTML = text.split("").map(char => `<span>${char}</span>`).join("");
  
          const chars = textElement.querySelectorAll("span");
  
          gsap.from(chars, {
            scrollTrigger: {
              trigger: textElement,
              start: "top 85%",
              end: "bottom 20%",
              scrub: true,
            },
            color: "rgba(0, 0, 0, 0.25)",
            stagger: 1,
            duration: 1,
          });
        });
      })


    // faq page

    // faq accordion
    if ($('.category__result .faq_item_wrap').length) {
          $(".faq_item_wrap .faq_title").on("click", function(){
              $(this).siblings(".faq_content").slideToggle(300);
              $(this).parent().siblings().find(".faq_content").slideUp(300);
              $(this).parent().siblings().find(".faq_title").removeClass("active");
              $(this).parent().siblings().removeClass("active");
              $(this).parent().toggleClass("active");
              // $(this).toggleClass("active");
          });
      }


      if ($('.category__accordion').length) {
        $('.cat__m_accordion:nth-child(1)').addClass('active');
        $('.cat__m_accordion').on('click', function(e) {
            e.preventDefault();
            $('.faq_item_wrap').slideUp();
            $('.cat__m_accordion').removeClass('active');
            $(this).addClass('active');
            $(this).next('.faq_item_wrap').slideDown();
            const target = $(this).attr('data-id');
            setTimeout(function() {
                const $targetElement = $('#' + target);
                if ($targetElement.length) {
              $('html, body').animate({
                scrollTop: $($('#'+target)).offset().top - 200
              }, 0);
            } else {
                console.error("Element with ID '" + target + "' not found.");
                }
            }, 1000)
          });


        //   var categoryList = $('.category__list_item');
        //   var rightColumn = $('.category__result_wrap');
        //   var tabletWidth = 1200;
        //   $(window).on('resize', function() {
        //     if ($(window).width() <= tabletWidth) {
        //       categoryList.each(function() {
        //         var category = $(this);
        //         var categoryName = category.html();
        //         var categoryID = category.attr('data-id');
        //         var relatedFAQs = $('.faq_item_wrap[data-id="' + categoryID + '"]');
        //         console.log(categoryName);

        //         // var categoryContainer = $('<div class="category-container"></div>');
        //         // categoryContainer.append('<h2>' + categoryName + '</h2>');

        //         // relatedFAQs.each(function() {
        //         //   var faq = $(this);
        //         //   categoryContainer.append(faq);
        //         // });

        //         // rightColumn.append(categoryContainer);
        //       });
        //     }
        // });
        }


      // category filter tabs
      if ($('.category__list').length) {
        $(' .category__list_item').on("click",function(){  
            $(".faq_item_wrap").removeClass('tab-active');
            $(".faq_item_wrap[data-id='"+$(this).attr('data-id')+"']").addClass("tab-active");
            $(".category__list_item").removeClass('active');
            $(this).parent().find(".category__list_item").addClass('active');
        });
      }


    // csr page blog slider

    if ($('.blog_slider_for').length) {
      $('.blog_slider_for').slick({
          dots: false,
          arrows: true,
          infinite: false,
          speed: 300,
          slidesToShow: 1,
          slidesToScroll: 1,
          adaptiveHeight: true,
          autoplay: false,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          pauseOnFocus: true,
          asNavFor: '.blog_slider_nav',
          // prevArrow: '<a class="prev_btn" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none"><path d="M41.5996 28.9999L16.3996 28.9999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M24.7998 37.3999L16.3998 28.9999L24.7998 20.5999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M57 29C57 44.464 44.464 57 29 57C13.536 57 1 44.464 1 29C1 13.536 13.536 1 29 1C44.464 1 57 13.536 57 29Z" stroke="currentColor" stroke-width="2"/></svg></a>',
          // nextArrow: '<a class="next_btn" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 58 58" fill="none"><path d="M16.4004 28.9999L41.6004 28.9999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path d="M33.1992 37.3999L41.5992 28.9999L33.1992 20.5999" stroke="currentColor" stroke-width="2" stroke-linecap="round"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1 29C1 44.464 13.536 57 29 57C44.464 57 57 44.464 57 29C57 13.536 44.464 1 29 1C13.536 1 1 13.536 1 29Z" stroke="currentColor" stroke-width="2"/></svg></a>',
          prevArrow: $('.prev-btn-blog'),
            nextArrow: $('.next-btn-blog'),
            responsive: [
              {
                  breakpoint: 992,
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
    if ($('.blog_slider_nav').length) {
      $('.blog_slider_nav').slick({
          dots: false,
          arrows: false,
          infinite: false,
          speed: 300,
          slidesToShow: 2,
          slidesToScroll: 1,
          adaptiveHeight: true,
          autoplay: false,
          autoplaySpeed: 2000,
          pauseOnHover: true,
          pauseOnFocus: true,
          asNavFor: '.blog_slider_for',
      });
    }

    // product listing filter select2
    if ($('.sort-select').length) {
      $(".sort-select").select2({
        placeholder: "Sort by",
        minimumResultsForSearch: Infinity
      });
    }
    if ($('.cat-select').length) {
      $(".cat-select").select2({
        placeholder: "Categories",
        minimumResultsForSearch: Infinity
      });
    }

    // product detail recent product slider
    function handleRecentSlider() {
      if ($(window).width() < "1200") {
        $('.single__product_card').wrap('<div class="single__product_card_wrap"></div>');
      }
      else {
        // $('.our__value_item').unwrap('.our__value_item_wrap');
      }
      if ($('.recent__product_slider').length) {
          if ($(window).width() < 1200 && !$('.recent__product_slider').hasClass('slick-initialized')) {
              $('.recent__product_slider').slick({
                dots: false,
                arrows: true,
                infinite: false,
                speed: 600,
                mobileFirst: true,
                slidesToShow: 1.5,
                slidesToScroll: 1,
                autoplay: false,
                draggable: true,
                swipeToSlide: true,
                prevArrow: $('.prev-btn-recent'),
                nextArrow: $('.next-btn-recent'),
                responsive: [
                      {
                        breakpoint: 480,
                        settings: {
                          slidesToShow: 2,
                          slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 767,
                        settings: {
                          slidesToShow: 4,
                          slidesToScroll: 1
                        }
                    },
                    {
                      breakpoint: 1200,
                      settings: "unslick",
                    }
                ]
          });
        } else if ($(window).width() >= 1200 && $('.recent__product_slider').hasClass('slick-initialized')) {
          $('.recent__product_slider').slick('unslick');
        }
      }
    }

    handleRecentSlider();

    $(window).on('resize', function() {
      handleRecentSlider();
    });

    // product img slider slider
    if ($('.product__lg_slider').length) {
          $('.product__lg_slider').slick({
              dots: false,
              arrows: true,
              infinite: true,
              loop: true,
              speed: 300,
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 2000,
              pauseOnHover: true,
              pauseOnFocus: true,
              asNavFor: '.product__sm_slider',
              prevArrow: '<a class="prev_btn" href="javascript:void(0);"><svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="Component 26"><path id="Oval" opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M52.5742 27.2087C52.5742 41.3821 41.0843 52.872 26.9109 52.872C12.7374 52.872 1.24756 41.3821 1.24756 27.2087C1.24756 13.0352 12.7374 1.54535 26.9109 1.54535C41.0843 1.54535 52.5742 13.0352 52.5742 27.2087Z" fill="black" stroke="white" stroke-width="1.83309"/><path id="Path 2" d="M38.4595 27.2087L15.3625 27.2087" stroke="white" stroke-width="1.83309" stroke-linecap="round"/><path id="Path 3" d="M23.0613 34.9077L15.3623 27.2087L23.0613 19.5097" stroke="white" stroke-width="1.83309" stroke-linecap="round"/></g></svg></a>',
              nextArrow: '<a class="next_btn" href="javascript:void(0);"><svg xmlns="http://www.w3.org/2000/svg" width="54" height="54" viewBox="0 0 54 54" fill="none"><path opacity="0.4" fill-rule="evenodd" clip-rule="evenodd" d="M1.17558 27.2087C1.17558 41.3821 12.6654 52.872 26.8389 52.872C41.0123 52.872 52.5022 41.3821 52.5022 27.2087C52.5022 13.0352 41.0123 1.54535 26.8389 1.54535C12.6654 1.54535 1.17558 13.0352 1.17558 27.2087Z" fill="black" stroke="white" stroke-width="1.83309"/><path d="M15.2903 27.2087L38.3873 27.2087" stroke="white" stroke-width="1.83309" stroke-linecap="round"/><path d="M30.6882 34.9077L38.3872 27.2087L30.6882 19.5097" stroke="white" stroke-width="1.83309" stroke-linecap="round"/></svg></a>',
               
          });
        }
        if ($('.product__sm_slider').length) {
          $('.product__sm_slider .product__item').wrap('<div class="product__item_wrap"></div>');
          $('.product__sm_slider').slick({
              dots: false,
              arrows: false,
              infinite: true,
              loop: true,
              speed: 300,
              slidesToShow: 5,
              slidesToScroll: 1,
              autoplay: false,
              autoplaySpeed: 2000,
              pauseOnHover: true,
              pauseOnFocus: true,
              focusOnSelect: true,
              asNavFor: '.product__lg_slider',
              responsive: [
                  {
                      breakpoint: 1200,
                      settings: {
                          slidesToShow: 4,
                          slidesToScroll: 1
                      }
                  },
                  {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1
                    }
                }
                ]
          });
        }


        // product detail accordion
        if ($('.product__detail_wrap .faq_item_wrap').length) {
            $(".faq_item_wrap .faq_title").on("click", function(){
                $(this).siblings(".faq_content").slideToggle(300);
                $(this).parent().siblings().find(".faq_content").slideUp(300);
                $(this).parent().siblings().find(".faq_title").removeClass("active");
                $(this).parent().siblings().removeClass("active");
                $(this).parent().toggleClass("active");
                $(this).toggleClass("active");
            });
        }



    // trending product slider
    if ($('.trending__product_slider').length) {
        $('.trending__product_slider').slick({
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
            prevArrow: $('.prev-btn-trending'),
            nextArrow: $('.next-btn-trending'),
        });
    }

    // customer reviews slider 
    


})(jQuery);

document.addEventListener( 'DOMContentLoaded', function() {
  const splide = new Splide( '.review__slider',{
        type: 'loop',
        pagination: false,
        perPage: 2,
        padding: '5%',
        gap: '1.25rem',
        arrows: false,
        pagination: false,
        autoScroll: {
          speed: 1,
        },
        breakpoints: {
            // 1200: {
            //     perPage: 2,
            // },
            // 767: {
            //     perPage: 1,
            // },
        },
    } );
  splide.mount(window.splide.Extensions);
} ); 
document.addEventListener( 'DOMContentLoaded', function() {
  const splide = new Splide( '.review__reverse_slider',{
        type: 'loop',
        pagination: false,
        perPage: 2,
        padding: '5%',
        gap: '1.25rem',
        arrows: false,
        pagination: false,
        direction: 'rtl',
        autoScroll: {
          speed: 1,
        },
        breakpoints: {
            // 1200: {
            //     perPage: 2,
            // },
            // 767: {
            //     perPage: 1,
            // },
        },
    } );
  splide.mount(window.splide.Extensions);
} ); 