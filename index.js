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

window.addEventListener('scroll', function () {
	checkY()
})

function checkY() {
	if (
		window.scrollY > document.getElementById('pdp-top-container').offsetHeight
	) {
		console.log('past container')
		$('.sticky-div-fixed').addClass('active')
		// $('.sticky-div-fixed > img').addClass('active')
	} else {
		$('.sticky-div-fixed').removeClass('active')
		// $('.sticky-div-fixed > img').removeClass('active')
	}
}
