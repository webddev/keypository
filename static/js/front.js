//Слайдеры
const topSwiperThumbs = new Swiper('.top-slider-thumbs', {
	direction: "horizontal",
	slidesPerView: 1,
	spaceBetween: 0,
	freeMode: false,
    simulateTouch: false,
    allowTouchMove: false,
    autoplay: {
        delay: 5000,
    },
    loop: false,
    watchOverflow: true,
    speed: 500,
});

const topSwiper = new Swiper(".top-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    watchOverflow: true,
    speed: 500,
    simulateTouch: true,
    autoplay: {
        delay: 5000,
    },
    // If we need pagination
    pagination: {
        el: ".top-slider-swiper-pagination",
        clickable: true,
        type: "fraction",
        formatFractionCurrent: function (number) {
            if (number < 10) {
                return "0" + number;
            }
            else {
                return number;
            }
        },
        formatFractionTotal: function (number) {
            if (number < 10) {
                return "0" + number;
            }
            else {
                return number;
            }
        }
    },
	thumbs: {
		swiper: topSwiperThumbs
	},

    navigation: {
        nextEl: ".top-slider-swiper-button-next",
        prevEl: ".top-slider-swiper-button-prev",
    },
});

const featuresSwiper = new Swiper(".features-swiper", {
    slidesPerView: 4,
    grid: {
      fill: "row",
      rows: 3,
    },
    speed: 1000,
    spaceBetween: 30,
    watchOverflow: true,
    // navigation: {
    //     nextEl: ".features-swiper-button-next",
    //     prevEl: ".features-swiper-button-prev",
    // },
    scrollbar: {
        el: ".features-swiper-scrollbar",
        hide: false,
        draggable: true,
    },
    breakpoints: {
        992: {
            slidesPerView: 4,
            grid: {
              fill: "row",
              rows: 3,
            },
            spaceBetween: 30,
        },
        768: {
            slidesPerView: 3,
            grid: {
              fill: "row",
              rows: 4,
            },
            spaceBetween: 20,
        },
        576: {
            slidesPerView: 2,
            grid: {
              fill: "row",
              rows: 4,
            },
            spaceBetween: 20,
        },
        0: {
            slidesPerView: 1,
            grid: {
              fill: "row",
              rows: 4,
            },
            spaceBetween: 20,
        },
    },
});

const directionsSwiper = new Swiper(".directions-slider", {
    // Optional parameters
    direction: "horizontal",
    loop: false,
    watchOverflow: true,
    speed: 1000,
    simulateTouch: false,
    spaceBetween: 30,
    slidesPerView: 5,
    slidesPerGroup: 5,
    // If we need pagination
    pagination: {
        el: ".directions-swiper-pagination",
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: ".directions-swiper-button-next",
        prevEl: ".directions-swiper-button-prev",
    },
    breakpoints: {
        1700: {
            spaceBetween: 30,
        },
        1400: {
            spaceBetween: 20,
        },
        992: {
            spaceBetween: 10,
        },
        768: {
            spaceBetween: 20,
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        500: {
            spaceBetween: 15,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
        0: {
            spaceBetween: 10,
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
    }
});