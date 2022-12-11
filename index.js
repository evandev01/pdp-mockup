// window.scroll({
//   behavior: "smooth",
// })

$('.tab-btn-div').hover(
	function () {
		$(this).find('span').css('color', 'black')
		$(this).find('#caret-down').css('color', 'black')
	},
	function () {
		$(this).find('span').css('color', 'rgba(0, 0, 0, 0.377)')
		$(this).find('#caret-down').css('color', '#27ae60')
	}
)
