(function ($) {
  "use strict";

  var Medi = {
    init: function () {
      this.Basic.init();
    },

    Basic: {
      init: function () {
        this.BackgroundImage();
        this.Slider();
      },
      BackgroundImage: function () {
        $("[data-background]").each(function () {
          $(this).css(
            "background-image",
            "url(" + $(this).attr("data-background") + ")"
          );
        });
      },
      Slider: function () {
        var swiper = new Swiper(".mySwiper", {
          slidesPerView: 1,
          spaceBetween: 10,
          autoplay: true,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          breakpoints: {
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          },
        });
      },
    },
  };
  jQuery(document).ready(function () {
    Medi.init();
  });
})(jQuery);
