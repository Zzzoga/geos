var sliderModal = new Swiper(".catalog__slider.swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	freeMode: false,
	allowTouchMove: false,
	navigation: {
		nextEl: "section.catalog .arrow.next",
		prevEl: "section.catalog .arrow.prev",
	}
});

var sliderModal = new Swiper(".catalog__item__img__slider.swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	pagination: {
        el: ".catalog__item__img__slider.swiper .swiper-pagination.catalog__item__img__dots",
		clickable: true,
    },
	autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
});

var sliderModal = new Swiper(".technologies__slider.swiper", {
	slidesPerView: 1,
	spaceBetween: 0,
	loop: true,
	freeMode: false,
	autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
	navigation: {
		nextEl: "section.technologies .arrow.next",
		prevEl: "section.technologies .arrow.prev",
	},
	breakpoints: {
        992: {
			slidesPerView: 2,
			spaceBetween: 16,
        },
        1180: {
			slidesPerView: 2,
			spaceBetween: 16,
        },
		1500: {
			spaceBetween: 21,
			slidesPerView: 2,
		},
    },
});
