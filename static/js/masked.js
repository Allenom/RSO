$.mask.definitions['h'] = "[0|1|3|4|5|6|7|9]"
$(".phone").mask("+7 (h99) 999-99-99");
$('.pass-masked').mask('99-99 999999');
$('.mask-inn').mask('999999999999');
$('.mask-snils').mask('999-999-999 99');
$('.mask-workbook').mask('999999999999');
$('.mask-foreign-pass').mask('99-999999');
$('.mask-military').mask('aa 9999999');
// $('.mask-email').mask("A", {
// 	translation: {
// 		"A": { pattern: /[\w@\-.+]/, recursive: true }
// 	}
// });

// $('.mask-vk').mask('https://vk.com/');
// $('.mask-telegram').mask('https://t-me/');