// window.scroll({
//   behavior: "smooth",
// })

$(".tab-btn-div").click(function () {
  $.each($(".tab-btn-div"), function (index, element) {
    $(element).find("button").removeClass("active")
    $(element).find("#caret-down").removeClass("active")
    $(element).find("#caret-down").addClass("inactive")
    $(element).find("button").css("color", "rgba(0, 0, 0, 0.377)")
  })
  $(this).find("button").css("color", "rgba(0,0,0,0.87)")
  $(this).find("#caret-down").removeClass("inactive")
  $(this).find("#caret-down").addClass("active")

  const dataName = $(this).data("name")

  $.each($(".details-div"), function (index, div) {
    if ($(div).data("name") == dataName) {
      $(div).removeClass("inactive")
      $(div).addClass("active")
    } else {
      $(div).removeClass("active")
      $(div).addClass("inactive")
    }
  })
})

window.addEventListener("scroll", function () {
  checkY()
})

function checkY() {
  if (!$(".sticky-div-fixed").hasClass("removed")) {
    if (
      window.scrollY > document.getElementById("pdp-top-container").offsetHeight
    ) {
      $(".sticky-div-fixed").addClass("active")
      // $('.sticky-div-fixed > img').addClass('active')
    } else {
      $(".sticky-div-fixed").removeClass("active")
      // $('.sticky-div-fixed > img').removeClass('active')
    }
  } else {
    window.removeEventListener("scroll")
  }
}

$(".close-button").click(function () {
  $(".sticky-div-fixed").removeClass("active")
  $(".sticky-div-fixed").addClass("removed")
})
