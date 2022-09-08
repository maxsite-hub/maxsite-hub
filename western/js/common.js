// SwiperSlider - 

var swiper = new Swiper(".mySwiper", { // инициализируем слайдер 
  effect: "fade", // 'плавно' скрывает предыдущий слайд 
  navigation: { // стрелки навигации 
    nextEl: ".swiper-button-next", // стрелка левая
    prevEl: ".swiper-button-prev",// стрелка правая 
  },
});

$(".grid").masonry({
  itemSelector: ".grid-item",
  columnWidth: 80,
});

  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();

    let $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;
        

    $("#nav a").removeClass("active");
    $this.addClass("active");
    
    $("html, body").animate({
        scrollTop: blockOffset
    }, 1000);
    $("#nav").removeClass("active");
    $(".menu-link").removeClass("menu-link__active");
});

$(".menu-link").on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("menu-link__active");
    $("#nav").toggleClass("active");
});

var swiperHall = new Swiper(".mySwiperHall", {
    initialSlide: 2,
    speed: 1000,
    centeredSlides: true,
    slidesPerView: 3,
    spaceBetween: 100,
    slidesPerView: "auto",
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

  });

  $(".answers_toggle").click(function (e) {
    e.preventDefault();
    var $this = $(this);
    if ($this.parent().hasClass("show")) {
      $this.parent().removeClass("show");
      $this.next().slideUp(350);
    } else {
     
      $this.parent().toggleClass("show");
      $this.next().slideToggle(350);
    }
  });

