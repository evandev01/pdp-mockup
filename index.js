$('img.thumb').click(function () {
	let clickSrc = $(this).attr('src')

	$('img.large').removeAttr('src')
	$('img.large').attr('src', clickSrc)
})

function show1() {
	if ($('.tablink-1').hasClass('inactive')) {
		$('.tablink-1').removeClass('inactive')
		$('.tablink-1').addClass('active')
	}
	if ($('.i-1').hasClass('inactive')) {
		$('.i-1').removeClass('inactive')
		$('.i-1').addClass('active')
	}
	if ($('.details-div').hasClass('inactive')) {
		$('.details-div').removeClass('inactive')
		$('.details-div').addClass('active')
	}

	if ($('.tablink-2').hasClass('active')) {
		$('.tablink-2').removeClass('active')
		$('.tablink-2').addClass('inactive')
	}
	if ($('.ingredients-div').hasClass('active')) {
		$('.i-2').removeClass('active')
		$('.i-2').addClass('inactive')
	}
	if ($('.ingredients-div').hasClass('active')) {
		$('.ingredients-div').removeClass('active')
		$('.ingredients-div').addClass('inactive')
	}

	if ($('.tablink-3').hasClass('active')) {
		$('.tablink-3').removeClass('active')
		$('.tablink-3').addClass('inactive')
	}
	if ($('.i-3').hasClass('active')) {
		$('.i-3').removeClass('active')
		$('.i-3').addClass('inactive')
	}
	if ($('.productInfo-div').hasClass('active')) {
		$('.productInfo-div').removeClass('active')
		$('.productInfo-div').addClass('inactive')
	}
}

function show2() {
	if ($('.tablink-2').hasClass('inactive')) {
		$('.tablink-2').removeClass('inactive')
		$('.tablink-2').addClass('active')
	}
	if ($('.i-2').hasClass('inactive')) {
		$('.i-2').removeClass('inactive')
		$('.i-2').addClass('active')
	}
	if ($('.ingredients-div').hasClass('inactive')) {
		$('.ingredients-div').removeClass('inactive')
		$('.ingredients-div').addClass('active')
	}

	if ($('.tablink-1').hasClass('active')) {
		$('.tablink-1').removeClass('active')
		$('.tablink-1').addClass('inactive')
	}
	if ($('.i-1').hasClass('active')) {
		$('.i-1').removeClass('active')
		$('.i-1').addClass('inactive')
	}
	if ($('.details-div').hasClass('active')) {
		$('.details-div').removeClass('active')
		$('.details-div').addClass('inactive')
	}

	if ($('.tablink-3').hasClass('active')) {
		$('.tablink-3').removeClass('active')
		$('.tablink-3').addClass('inactive')
	}
	if ($('.i-3').hasClass('active')) {
		$('.i-3').removeClass('active')
		$('.i-3').addClass('inactive')
	}
	if ($('.productInfo-div').hasClass('active')) {
		$('.productInfo-div').removeClass('active')
		$('.productInfo-div').addClass('inactive')
	}
}

function show3() {
	if ($('.tablink-3').hasClass('inactive')) {
		$('.tablink-3').removeClass('inactive')
		$('.tablink-3').addClass('active')
	}
	if ($('.i-3').hasClass('inactive')) {
		$('.i-3').removeClass('inactive')
		$('.i-3').addClass('active')
	}
	if ($('.productInfo-div').hasClass('inactive')) {
		$('.productInfo-div').removeClass('inactive')
		$('.productInfo-div').addClass('active')
	}

	if ($('.tablink-2').hasClass('active')) {
		$('.tablink-2').removeClass('active')
		$('.tablink-2').addClass('inactive')
	}
	if ($('.i-2').hasClass('active')) {
		$('.i-2').removeClass('active')
		$('.i-2').addClass('inactive')
	}
	if ($('.ingredients-div').hasClass('active')) {
		$('.ingredients-div').removeClass('active')
		$('.ingredients-div').addClass('inactive')
	}

	if ($('.tablink-1').hasClass('active')) {
		$('.tablink-1').removeClass('active')
		$('.tablink-1').addClass('inactive')
	}
	if ($('.i-1').hasClass('active')) {
		$('.i-1').removeClass('active')
		$('.i-1').addClass('inactive')
	}
	if ($('.details-div').hasClass('active')) {
		$('.details-div').removeClass('active')
		$('.details-div').addClass('inactive')
	}
}

$('.tablinks').click(function showHandler() {
	var className = $(this).attr('class')

	console.log(className)

	if (className.includes('tablink-1')) {
		show1()
	} else if (className.includes('tablink-2')) {
		show2()
	}
	if (className.includes('tablink-3')) {
		show3()
	}
})
