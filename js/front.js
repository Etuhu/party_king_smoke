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

	let smokeWrapperScene = document.getElementById("parallax-smoke-wrapper");
	let parallaxSmokeWrapper = new Parallax(smokeWrapperScene, {
		relativeInput: true,
		hoverOnly: true,
		clipRelativeInput: true,
		recordHistory: true,
		limitX: 150,
		limitY: 200,
		scalarX: 7,
		scalarY: 7,
	});

	let specialOfferBg = document.getElementById("parallax-specialOfferBg");
	let parallaxspecialOfferBg = new Parallax(specialOfferBg, {
		relativeInput: true,
		hoverOnly: true,
		clipRelativeInput: true,
		recordHistory: true,
		limitX: 150,
		limitY: 300,
		scalarX: 7,
		scalarY: 10,
	});
	// }

	(function($) {
		$(document).ready(function() {
			$.jScrollability([
				{
					'selector': '#redTitle',
					'start': 'parent',
					'end': 5000,
					'fn': {
						'right': {
							'start': 85,
							'end': 105,
							'unit': '%'
						}
					}
				},
				{
					'selector': '#purpleTitle',
					'start': 'parent',
					'end': 6000,
					'fn': {
						'left': {
							'start': 85,
							'end': 105,
							'unit': '%'
						}
					}
				},
				{
					'selector': '#blueTitle',
					'start': 'parent',
					'end': 7000,
					'fn': {
						'right': {
							'start': 80,
							'end': 140,
							'unit': '%'
						}
					}
				},
				{
					'selector': '#greenTitle',
					'start': 'parent',
					'end': 8000,
					'fn': {
						'left': {
							'start': 85,
							'end': 145,
							'unit': '%'
						}
					}
				},
				{
					'selector': '#yellowTitle',
					'start': 'parent',
					'end': 9000,
					'fn': {
						'right': {
							'start': 70,
							'end': 155,
							'unit': '%'
						}
					}
				},
			]);
		});
	})(jQuery);
});




//Инициализация Fullpage-блока
const fullPage = new fullpage("#fullpage", {
	licenseKey: null,
	//options here
	autoScrolling: true,
	scrollHorizontally: true,
	verticalCentered: false,
	scrollingSpeed: 700,
	// paddingTop: "0px",
	scrollOverflow: true,
	// responsiveWidth: 992,
	// responsiveHeight: 0,
	lazyLoading: true,
	recordHistory: true,
	observer: true,
	credits: { enabled: false, label: "Made with fullPage.js", position: "right" },
	onLeave: function(origin, destination, direction, trigger){
		var origin = this;
		//после покидания раздела 1
		if(origin.index == 0 && direction =='down'){
			addVisibleHeader();
		}
		else if(origin.index == 1 && direction == 'up'){
			removeVisibleHeader();
		}
	},
	afterLoad: function(origin, destination, direction, trigger){
		var origin = this;
		if(origin.index !== 0){
			mouseMoveToTop();
		}
	}
});


//Появление и исчезнование шапки сайта
let header = document.querySelector(".header");

let addVisibleHeader = function () {
	if (!header.classList.contains("slide-top")) {
		header.classList.add("slide-top");
	}
};

let removeVisibleHeader = function () {
	if (header.classList.contains("slide-top")) {
		header.classList.remove("slide-top");
	}
};

//Появление шапки при наведении на верхнюю часть окна и ее отключение при уходе в другую зону
let mouseMoveToTop = function () {
	window.addEventListener("mousemove", function (evt) {
		if (evt.clientY <= header.clientHeight) {
			removeVisibleHeader();
		} else if (evt.clientY > header.clientHeight) {
			addVisibleHeader();
		}
	});
};




let refreshSmokeColor = function (sliderName) {
	var colorSmokes = document.querySelectorAll(".smoke-wrapper-color > img");
	colorSmokes.forEach((colorSmoke) => {
		colorSmoke.style.opacity = 0;
	});
	var colorSmokeItem = document.querySelector(`.smoke-wrapper-color > img[data-color=${sliderName.slides[sliderName.activeIndex].dataset.color}]`);
	colorSmokeItem.style.opacity = 1;
};

const swiperChoose = new Swiper(".choose-swiper", {
	slidesPerView: 5,
	centeredSlides: true,
	spaceBetween: 5,
	slidesPerGroup: 1,
	loop: true,
	watchOverflow: true,
	watchSlidesProgress: true,
	initialSlide: 2,
	slideToClickedSlide: true,
	simulateTouch: true,
	observer: true,
	// observeSlideChildren: true,
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
	on: {
		init: function () {
			refreshSmokeColor(this);
		},
		slideChange: function () {
			refreshSmokeColor(this);
		},
	  }
});