window.addEventListener("DOMContentLoaded", function () {
	//Инициализация слайда с parallax
	// if ($(window).width() > 991) {
	let scene = document.getElementById("parallax-there-is");
	let parallaxInstance = new Parallax(scene, {
		relativeInput: true,
		clipRelativeInput: true,
		recordHistory: true,
		limitX: 150,
		limitY: 200,
		scalarX: 7,
		scalarY: 7,
	});
	// }
});

//Инициализация Fullpage-блока
const fullPage = new fullpage("#fullpage", {
	licenseKey: null,
	//options here
	autoScrolling: true,
	scrollHorizontally: true,
	verticalCentered: false,
	scrollingSpeed: 700,
	paddingTop: "0px",
	scrollOverflow: true,
	responsiveWidth: 992,
	responsiveHeight: 0,
	lazyLoading: true,
	observer: true,
	credits: { enabled: false, label: "Made with fullPage.js", position: "right" },
});

const swiperChoose = new Swiper(".choose-swiper", {
	slidesPerView: 5,
	centeredSlides: true,
	spaceBetween: 5,
	slidesPerGroup: 1,
	loop: true,
	watchOverflow: true,
	simulateTouch: false,
	initialSlide: 2,
	slideToClickedSlide: true,
	simulateTouch: true,
	observer: true,
	pagination: {
		el: ".choose-swiper-pagination",
		clickable: true,
		renderBullet: function (index, className) {
			var slideColors = this.slides;
			var colors = [];
			slideColors.forEach((slideColor) => {
				colors.push(slideColor.dataset.color);
			});
			var filterColors = colors.reduce((result, item) => {
				return result.includes(item) ? result : [...result, item];
			}, []);
			console.log(index);
			return '<span class="' + className + " " + filterColors[index] + '">' + filterColors[index] + "</span>";
		},
	},
	breakpoints: {
		1600: {
			slidesPerView: 5,
			slidesPerGroup: 1,
		},
		1300: {
			slidesPerView: 5,
			slidesPerGroup: 1,
		},
		1100: {
			slidesPerView: 4,
			slidesPerGroup: 1,
		},
		992: {
			slidesPerView: 4,
			slidesPerGroup: 1,
		},
		768: {
			slidesPerView: 3,
			slidesPerGroup: 1,
		},

		0: {
			spaceBetween: 5,
			slidesPerView: 2,
			slidesPerGroup: 1,
		},
	},
});



var colorSmokes = document.querySelectorAll(".smoke-wrapper-color > img");
// slideColors.forEach((slideColor) => {
//     colors.push(slideColor.dataset.color);
// });
// var filterColors = colors.reduce((result, item) => {
//     return result.includes(item) ? result : [...result, item];
// }, []);


colorSmokes.forEach((colorSmoke) => {
    console.log(swiperChoose.slides[swiperChoose.activeIndex].dataset.color);
    // if (colorSmoke.dataset.color == swiperChoose.slides[swiperChoose.activeIndex].dataset.color) {
    //     colorSmoke.lastElementChild.style.opacity = 1;
    // }
});






const promoSwiper = new Swiper(".promo-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: false,
	autoplay: {
		delay: 5000,
	},
	spaceBetween: 0,
	watchOverflow: true,
	navigation: {
		nextEl: ".promo-swiper-button-next",
		prevEl: ".promo-swiper-button-prev",
	},
	pagination: {
		el: ".promo-swiper-pagination",
		clickable: "true",
	},
});

const complexMarketingSwiper = new Swiper(".complex-marketing-swiper", {
	slidesPerView: 3,
	slidesPerGroup: 3,
	speed: 1000,
	simulateTouch: false,
	spaceBetween: 30,
	watchOverflow: true,
	watchSlidesProgress: "true",
	navigation: {
		nextEl: ".complex-marketing-swiper-button-next",
		prevEl: ".complex-marketing-swiper-button-prev",
	},
	pagination: {
		el: ".complex-marketing-swiper-pagination",
		clickable: "true",
	},
	breakpoints: {
		// when window width is >= 1200px
		1500: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 30,
			simulateTouch: false,
			// autoHeight: false,
		},
		768: {
			slidesPerView: 2.4,
			slidesPerGroup: 1,
			spaceBetween: 20,
		},
		576: {
			slidesPerView: 1.4,
			slidesPerGroup: 1,
			spaceBetween: 20,
			simulateTouch: true,
		},
		300: {
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 10,
			// autoHeight: true,
		},
	},
});

const otherServicesSwiper = new Swiper(".other-services-swiper", {
	speed: 1000,
	simulateTouch: "false",
	watchOverflow: "true",
	pagination: {
		el: ".other-services-swiper-pagination",
		clickable: "true",
	},
	watchSlidesProgress: "true",
	breakpoints: {
		// when window width is >= 1200px
		1200: {
			grid: {
				fill: "row",
				rows: 3,
			},
			slidesPerView: 3,
			spaceBetween: 0,
		},
		768: {
			grid: {
				fill: "row",
				rows: 4,
			},
			slidesPerView: 2,
			spaceBetween: 0,
		},
		576: {
			slidesPerView: 1.5,
			slidesPerGroup: 1,
			spaceBetween: 20,
		},
		300: {
			slidesPerView: 1.2,
			slidesPerGroup: 1,
			spaceBetween: 20,
		},
	},
});

const sliderProjectGalleryThumbs = new Swiper(".slider__thumbs--projectgallery .swiper", {
	direction: "vertical",
	slidesPerView: 4,
	spaceBetween: 60,
	navigation: {
		nextEl: ".slider__thumbs--projectgallery__next",
		prevEl: ".slider__thumbs--projectgallery__prev",
	},
	mousewheel: "true",
	freeMode: "true",
	breakpoints: {
		0: {
			direction: "horizontal",
			spaceBetween: 5,
			slidesPerView: 5,
			mousewheel: "false",
		},
		575: {
			spaceBetween: 10,
			// slidesPerView: 5,
			slidesPerView: 4.5,
			direction: "horizontal",
		},
		768: {
			spaceBetween: 15,
			// slidesPerView: 5,
			slidesPerView: 3.5,
			direction: "vertical",
		},
		992: {
			spaceBetween: 20,
			slidesPerView: 3.5,
			direction: "vertical",
		},
		1200: {
			spaceBetween: 10,
			slidesPerView: 3.7,
		},
		1500: {
			spaceBetween: 10,
			slidesPerView: 3.7,
		},
		1700: {
			spaceBetween: 10,
			slidesPerView: 3.5,
		},
		1921: {
			spaceBetween: 15,
			slidesPerView: 3.4,
		},
	},
});

const sliderProjectGalleryImages = new Swiper(".slider__images--projectgallery .swiper", {
	direction: "vertical",
	slidesPerView: 1,
	spaceBetween: 20,
	mousewheel: false,
	navigation: {
		nextEl: ".slider__next",
		prevEl: ".slider__prev",
	},
	grabCursor: true,
	thumbs: {
		swiper: sliderProjectGalleryThumbs,
	},
	breakpoints: {
		0: {
			direction: "horizontal",
		},
		768: {
			direction: "vertical",
		},
	},
});

const feedbackSwiper = new Swiper(".feedback-swiper", {
	slidesPerView: 3,
	slidesPerGroup: 3,
	speed: 1000,
	simulateTouch: "true",
	spaceBetween: 30,
	watchOverflow: "true",
	centeredSlides: false,
	navigation: {
		nextEl: ".feedback-swiper-button-next",
		prevEl: ".feedback-swiper-button-prev",
	},
	// autoplay: "true",
	pagination: {
		el: ".feedback-swiper-pagination",
		clickable: "true",
		type: "fraction",
	},
	breakpoints: {
		300: {
			centeredSlides: true,
			slidesPerView: 1,
			slidesPerGroup: 1,
			spaceBetween: 10,
		},
		576: {
			slidesPerView: 1.5,
			slidesPerGroup: 1,
			spaceBetween: 10,
			centeredSlides: true,
		},
		768: {
			slidesPerView: 1.7,
			slidesPerGroup: 1,
			spaceBetween: 10,
			centeredSlides: true,
		},
		992: {
			slidesPerView: 2.3,
			slidesPerGroup: 2,
			spaceBetween: 10,
			centeredSlides: false,
		},
		1200: {
			slidesPerView: 2.5,
			slidesPerGroup: 2,
			spaceBetween: 15,
		},
		1300: {
			slidesPerView: 3,
			slidesPerGroup: 3,
			spaceBetween: 15,
			simulateTouch: "true",
		},
		1600: {
			spaceBetween: 20,
		},
	},
});

const clientFeedbackSwiper = new Swiper(".client-feedback-swiper", {
	slidesPerView: 1,
	slidesPerGroup: 1,
	speed: 1000,
	simulateTouch: true,
	autoplay: {
		delay: 5000,
	},
	spaceBetween: 0,
	watchOverflow: true,
	pagination: {
		el: ".client-feedback-swiper-pagination",
		clickable: "true",
	},
});
