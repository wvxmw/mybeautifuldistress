$(document).ready(function () {
	$('.button').hover(
		function () {
			$('.bg').addClass('active');  // Добавляем класс bounce
		},
		function () {
			$('.bg').removeClass('active');  // Убираем класс bounce
		}
	)
})