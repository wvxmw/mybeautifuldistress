$(document).ready(function () {
	$('.button').hover(
		function () {
			$('.bg').addClass('active');  // Добавляем класс 
		},
		function () {
			$('.bg').removeClass('active');  // Убираем класс 
		}
	)
});
$(document).ready(function () {
	$('.button__free').hover(
		function () {
			$('.bg').addClass('active-free');  // Добавляем класс 
		},
		function () {
			$('.bg').removeClass('active-free');  // Убираем класс 
		}
	)
});

let wrapper = document.querySelector('.wrapper'); 

const pageSlider = new Swiper('.page', {
	wrapperClass: "page__wrapper",
	slideClass: "page__screen",

	direction: 'vertical',

	slidesPerView: 'auto',

	parallax: true,

	// включение/отключение
	// перетаскивание на пк
	simulateTouch: false,

	// управление клавиатурой
	keyboard: {
		// включить/выключить
		enabled: true,
		// включить/выключить
		// только когда слайдер
		// в пределах вьюпорта
		onlyInViewport: true,
		// включить/выключить
		// управление клавишами
		// pageUp, pageDown
		pageUpDown:true
	},

	// управление колесом мыши
	mousewheel: {
		// чувствительность колеса мыши
		sensitivity: 1,
		// класс объекта на котором
		// будет срабатывать прокрутка мышью
		//eventsTarget: ".image-slider"
	},

	// отключение функционала
	// если слайдов меньше чем нужно
	watchOverflow: true,

	// скорость
	speed: 1000,

	// обновить свайпер
	// при изменении элементов слайдера
	observer: true,

	// обновить свайпер
	// при изменении родительских элементов 
	observeParents: true,

	// обновить свайпер
	// при изменении дочерних элементов 
	observeSlideChildren: true,

	// If we need pagination
	pagination: {
		el: '.page__pagination',
		type: 'bullets',
		clickable: true,
		// dynamicBullets: true,
		bulletClass: "page__bullet",
		bulletActiveClass: "page__bullet_active"
	},

	 // And if we need scrollbar
	//  scrollbar: {
	// 	el: '.page__scroll',
	// 	dragClass: "page__drag-scroll",
	// 	// возможность перетаскивания скролла
	// 	draggable: true
	//  },

	// события 
	on: {
		// события инициализации
		init: function () {
			wrapper.classList.add('_loaded')
		},
		// событие смены слайда
		slidechange: function () {

		},
	},
});