window.addEventListener("DOMContentLoaded", function () {

	//Добавление и удаление класса для старта анимаций элементов активного раздела
	var addAnimatedClass = function (el) {
		if (!el.item.classList.contains("animated")) {
			el.item.classList.add("animated");
		}
	};
	var removeAnimatedClass = function (el) {
		if (el.item.classList.contains("animated")) {
			el.item.classList.remove("animated");
		}
	};

	//Инициализация Fullpage-блока
	new fullpage("#fullpage", {
		licenseKey: null,
		autoScrolling: true,
		scrollHorizontally: true,
		verticalCentered: false,
		scrollingSpeed: 700,
		scrollOverflow: true,
		// responsiveWidth: 992,
		// responsiveHeight: 0,
		lazyLoading: true,
		// recordHistory: true,
		observer: true,
		credits: { enabled: false, label: "Made with fullPage.js", position: "right" },
		afterRender: function(){
			//Инициализация слайда с parallax
			// if ($(window).width() > 991) {
			let scene = document.getElementById("parallax-there-is");
			new Parallax(scene, {
				relativeInput: true,
				clipRelativeInput: true,
				recordHistory: true,
				limitX: 150,
				limitY: 200,
				scalarX: 7,
				scalarY: 7,
			});

			let smokeWrapperScene = document.getElementById("parallax-smoke-wrapper");
			new Parallax(smokeWrapperScene, {
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
			new Parallax(specialOfferBg, {
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
			if ($(window).width() > 1920) {
				$.jScrollability([
					{
						'selector': '#redTitle',
						'start': 'parent',
						'end': 1500,
						'fn': {
							'right': {
								'start': 30,
								'end': 105,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#redNoise',
						'start': 'parent',
						'end': 1500,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#purpleTitle',
						'start': 'parent',
						'end': 1500,
						'fn': {
							'left': {
								'start': 30,
								'end': 110,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#purpleNoise',
						'start': 'parent',
						'end': 1550,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							},
						}
					},
					{
						'selector': '#blueTitle',
						'start': 'parent',
						'end': 1550,
						'fn': {
							'right': {
								'start': -50,
								'end': 120,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#blueNoise',
						'start': 'parent',
						'end': 1500,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#greenTitle',
						'start': 'parent',
						'end': 1700,
						'fn': {
							'left': {
								'start': 30,
								'end': 120,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#greenNoise',
						'start': 'parent',
						'end': 1750,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#yellowTitle',
						'start': 'parent',
						'end': 1800,
						'fn': {
							'right': {
								'start': 20,
								'end': 115,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#yellowNoise',
						'start': 'parent',
						'end': 1850,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
				]);
			}
			if (($(window).width() > 1499) && ($(window).width() < 1921)) {
				$.jScrollability([
					{
						'selector': '#redTitle',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'right': {
								'start': 25,
								'end': 115,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#redNoise',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#purpleTitle',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'left': {
								'start': 25,
								'end': 125,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#purpleNoise',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							},
						}
					},
					{
						'selector': '#blueTitle',
						'start': 'parent',
						'end': 1450,
						'fn': {
							'right': {
								'start': 25,
								'end': 130,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#blueNoise',
						'start': 'parent',
						'end': 1450,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 150,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#greenTitle',
						'start': 'parent',
						'end': 1500,
						'fn': {
							'left': {
								'start': 25,
								'end': 140,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#greenNoise',
						'start': 'parent',
						'end': 1500,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#yellowTitle',
						'start': 'parent',
						'end': 1600,
						'fn': {
							'right': {
								'start': 25,
								'end': 120,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#yellowNoise',
						'start': 'parent',
						'end': 1600,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
				]);
			}
			if (($(window).width() > 1199) && ($(window).width() < 1500)) {
				$.jScrollability([
					{
						'selector': '#redTitle',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'right': {
								'start': 25,
								'end': 110,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#redNoise',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#purpleTitle',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'left': {
								'start': 10,
								'end': 115,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#purpleNoise',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							},
						}
					},
					{
						'selector': '#blueTitle',
						'start': 'parent',
						'end': 1450,
						'fn': {
							'right': {
								'start': 25,
								'end': 115,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#blueNoise',
						'start': 'parent',
						'end': 1450,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 150,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#greenTitle',
						'start': 'parent',
						'end': 1500,
						'fn': {
							'left': {
								'start': 25,
								'end': 125,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#greenNoise',
						'start': 'parent',
						'end': 1500,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#yellowTitle',
						'start': 'parent',
						'end': 1600,
						'fn': {
							'right': {
								'start': 25,
								'end': 125,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#yellowNoise',
						'start': 'parent',
						'end': 1600,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
				]);
			}
			if (($(window).width() > 991) && ($(window).width() < 1200)) {
				$.jScrollability([
					{
						'selector': '#redTitle',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'right': {
								'start': 25,
								'end': 105,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#redNoise',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#purpleTitle',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'left': {
								'start': -60,
								'end': 100,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#purpleNoise',
						'start': 'parent',
						'end': 1300,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							},
						}
					},
					{
						'selector': '#blueTitle',
						'start': 'parent',
						'end': 1450,
						'fn': {
							'right': {
								'start': 25,
								'end': 100,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#blueNoise',
						'start': 'parent',
						'end': 1450,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 150,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#greenTitle',
						'start': 'parent',
						'end': 1500,
						'fn': {
							'left': {
								'start': 25,
								'end': 105,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#greenNoise',
						'start': 'parent',
						'end': 1500,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#yellowTitle',
						'start': 'parent',
						'end': 1600,
						'fn': {
							'right': {
								'start': 25,
								'end': 110,
								'unit': '%'
							}
						}
					},
					{
						'selector': '#yellowNoise',
						'start': 'parent',
						'end': 1600,
						'fn': {
							'opacity': {
								'start': 30,
								'end': 100,
								'unit': '%'
							}
						}
					},
				]);
			}
			// if (($(window).width() > 767) && ($(window).width() < 992)) {
			// 	$.jScrollability([
			// 		{
			// 			'selector': '#redTitle',
			// 			'start': 'parent',
			// 			'end': 900,
			// 			'fn': {
			// 				'right': {
			// 					'start': 25,
			// 					'end': 105,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#redNoise',
			// 			'start': 'parent',
			// 			'end': 900,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#purpleTitle',
			// 			'start': 'parent',
			// 			'end': 950,
			// 			'fn': {
			// 				'left': {
			// 					'start': -160,
			// 					'end': 140,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#purpleNoise',
			// 			'start': 'parent',
			// 			'end': 950,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				},
			// 			}
			// 		},
			// 		{
			// 			'selector': '#blueTitle',
			// 			'start': 'parent',
			// 			'end': 1000,
			// 			'fn': {
			// 				'right': {
			// 					'start': 25,
			// 					'end': 125,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#blueNoise',
			// 			'start': 'parent',
			// 			'end': 1000,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 150,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#greenTitle',
			// 			'start': 'parent',
			// 			'end': 1050,
			// 			'fn': {
			// 				'left': {
			// 					'start': 25,
			// 					'end': 130,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#greenNoise',
			// 			'start': 'parent',
			// 			'end': 1050,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#yellowTitle',
			// 			'start': 'parent',
			// 			'end': 1100,
			// 			'fn': {
			// 				'right': {
			// 					'start': 25,
			// 					'end': 135,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#yellowNoise',
			// 			'start': 'parent',
			// 			'end': 1100,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 	]);
			// }
			// if (($(window).width() > 649) && ($(window).width() < 768)) {
			// 	$.jScrollability([
			// 		{
			// 			'selector': '#redTitle',
			// 			'start': 'parent',
			// 			'end': 800,
			// 			'fn': {
			// 				'right': {
			// 					'start': 25,
			// 					'end': 105,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#redNoise',
			// 			'start': 'parent',
			// 			'end': 800,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#purpleTitle',
			// 			'start': 'parent',
			// 			'end': 850,
			// 			'fn': {
			// 				'left': {
			// 					'start': -250,
			// 					'end': 135,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#purpleNoise',
			// 			'start': 'parent',
			// 			'end': 850,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				},
			// 			}
			// 		},
			// 		{
			// 			'selector': '#blueTitle',
			// 			'start': 'parent',
			// 			'end': 850,
			// 			'fn': {
			// 				'right': {
			// 					'start': 0,
			// 					'end': 108,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#blueNoise',
			// 			'start': 'parent',
			// 			'end': 850,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 150,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#greenTitle',
			// 			'start': 'parent',
			// 			'end': 900,
			// 			'fn': {
			// 				'left': {
			// 					'start': 25,
			// 					'end': 115,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#greenNoise',
			// 			'start': 'parent',
			// 			'end': 900,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#yellowTitle',
			// 			'start': 'parent',
			// 			'end': 950,
			// 			'fn': {
			// 				'right': {
			// 					'start': 25,
			// 					'end': 120,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#yellowNoise',
			// 			'start': 'parent',
			// 			'end': 950,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 	]);
			// }
			// if (($(window).width() > 499) && ($(window).width() < 650)) {
			// 	$.jScrollability([
			// 		{
			// 			'selector': '#redTitle',
			// 			'start': 'parent',
			// 			'end': 600,
			// 			'fn': {
			// 				'right': {
			// 					'start': 25,
			// 					'end': 80,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#redNoise',
			// 			'start': 'parent',
			// 			'end': 600,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 80,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#purpleTitle',
			// 			'start': 'parent',
			// 			'end': 650,
			// 			'fn': {
			// 				'left': {
			// 					'start': -250,
			// 					'end': 120,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#purpleNoise',
			// 			'start': 'parent',
			// 			'end': 650,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				},
			// 			}
			// 		},
			// 		{
			// 			'selector': '#blueTitle',
			// 			'start': 'parent',
			// 			'end': 650,
			// 			'fn': {
			// 				'right': {
			// 					'start': 0,
			// 					'end': 85,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#blueNoise',
			// 			'start': 'parent',
			// 			'end': 650,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 150,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#greenTitle',
			// 			'start': 'parent',
			// 			'end': 700,
			// 			'fn': {
			// 				'left': {
			// 					'start': -25,
			// 					'end': 110,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#greenNoise',
			// 			'start': 'parent',
			// 			'end': 700,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#yellowTitle',
			// 			'start': 'parent',
			// 			'end': 750,
			// 			'fn': {
			// 				'right': {
			// 					'start': -30,
			// 					'end': 115,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#yellowNoise',
			// 			'start': 'parent',
			// 			'end': 750,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 	]);
			// }
			// if (($(window).width() > 300) && ($(window).width() < 500)) {
			// 	$.jScrollability([
			// 		{
			// 			'selector': '#redTitle',
			// 			'start': 'parent',
			// 			'end': 600,
			// 			'fn': {
			// 				'right': {
			// 					'start': 25,
			// 					'end': 80,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#redNoise',
			// 			'start': 'parent',
			// 			'end': 600,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 80,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#purpleTitle',
			// 			'start': 'parent',
			// 			'end': 650,
			// 			'fn': {
			// 				'left': {
			// 					'start': -250,
			// 					'end': 105,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#purpleNoise',
			// 			'start': 'parent',
			// 			'end': 650,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				},
			// 			}
			// 		},
			// 		{
			// 			'selector': '#blueTitle',
			// 			'start': 'parent',
			// 			'end': 650,
			// 			'fn': {
			// 				'right': {
			// 					'start': -20,
			// 					'end': 75,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#blueNoise',
			// 			'start': 'parent',
			// 			'end': 650,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 150,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#greenTitle',
			// 			'start': 'parent',
			// 			'end': 700,
			// 			'fn': {
			// 				'left': {
			// 					'start': -25,
			// 					'end': 90,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#greenNoise',
			// 			'start': 'parent',
			// 			'end': 700,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#yellowTitle',
			// 			'start': 'parent',
			// 			'end': 750,
			// 			'fn': {
			// 				'right': {
			// 					'start': -30,
			// 					'end': 115,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 		{
			// 			'selector': '#yellowNoise',
			// 			'start': 'parent',
			// 			'end': 750,
			// 			'fn': {
			// 				'opacity': {
			// 					'start': 30,
			// 					'end': 100,
			// 					'unit': '%'
			// 				}
			// 			}
			// 		},
			// 	]);
			// }
		},
		onLeave: function(origin, destination, direction, trigger){
			addAnimatedClass(destination);

			if (destination.isFirst) {
				showHeader();
				if (!header.classList.contains("fixed-visible")) {
					header.classList.add("fixed-visible");
				}
				if (scrollButton.classList.contains("show")) {
					scrollButton.classList.remove("show");
				}
			} else {
				if (header.classList.contains("fixed-visible")) {
					header.classList.remove("fixed-visible");
				}
				if (!scrollButton.classList.contains("show")) {
					scrollButton.classList.add("show");
				}
				hiddenHeader();
				mouseMoveToTop();
			}
		},
		afterLoad: function(origin, destination, direction, trigger){
			addAnimatedClass(origin);
		},
	});

	//Появление и исчезнование шапки сайта
	let header = document.querySelector(".header");

	let hiddenHeader = function () {
		if (!header.classList.contains("hidden")) {
			header.classList.add("hidden");
		}
	};

	let showHeader = function () {
		if (header.classList.contains("hidden")) {
			header.classList.remove("hidden");
		}
	};

	//Появление шапки при наведении на верхнюю часть окна и ее отключение при уходе в другую зону
	function mouseMoveToTop () {
		window.addEventListener("mousemove", function (evt) {
			if (evt.clientY <= header.clientHeight) {
				showHeader();
			} else if (evt.clientY > header.clientHeight) {
				hiddenHeader();
			}
		});
	};

	//Кнопка прокрутки наверх
	var scrollButton = document.getElementById('top-button');
	scrollButton.addEventListener("click", function () {
		fullpage_api.moveTo(1);
	});


	//Переключение изображения с дымом в зависимости от выбранного цвета
	let refreshSmokeColor = function (sliderName) {
		var colorSmokes = document.querySelectorAll(".smoke-wrapper-color > img");
		colorSmokes.forEach((colorSmoke) => {
			colorSmoke.style.opacity = 0;
		});
		var colorSmokeItem = document.querySelector(`.smoke-wrapper-color > img[data-color=${sliderName.slides[sliderName.activeIndex].dataset.color}]`);
		colorSmokeItem.style.opacity = 1;
	};


	//Слайдер с выбором цвета продукта
	new Swiper(".choose-swiper", {
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
				return '<span class="' + className + " " + filterColors[index] + '">' + filterColors[index] + "</span>";
			},
		},
		breakpoints: {
			1300: {
				slidesPerView: 5,
				slidesPerGroup: 1,
				loop: true,
			},
			576: {
				slidesPerView: 3,
				slidesPerGroup: 1,
				loop: false,
			},
			0: {
				slidesPerView: 1,
				slidesPerGroup: 1,
				loop: false,
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
});