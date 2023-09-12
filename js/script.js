$('.banner-main-slider').slick({
  arrows : false,
  dots :true
});

$('.main-slide').slick({
  arrows : true,
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:'  <i class="fa-solid fa-angle-left  left"></i> ',
  nextArrow:'  <i class="fa-solid fa-angle-right  right"></i>  ',
  centerMode: true,
  centerPadding: '0px',

  responsive: [
      {
        breakpoint: 991.98,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 767.98,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          centerMode: false,

        }
      },
      {
        breakpoint: 575.98,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]











});