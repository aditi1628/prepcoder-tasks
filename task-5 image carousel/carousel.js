$(document).ready(function () {
  $(".carousel").slick({
    dots: true, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1, // Scroll one slide at a time
    autoplay: true, // Auto-play slides
    autoplaySpeed: 3000, // Slide interval (3 seconds)
    arrows: true, // Show previous/next arrows
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
