// Tabs Functionality
$(".tab-btn-div").click(function () {
  $.each($(".tab-btn-div"), function (i, element) {
    $(element).children().removeClass("active")
    $(element).find("button").css("color", "rgba(0, 0, 0, 0.377)")
  })

  $(this).children().addClass("active")

  const dataName = $(this).data("name")

  $.each($(".details-div"), function (i, div) {
    if ($(div).data("name") == dataName) {
      $(div).addClass("active")
    } else {
      $(div).removeClass("active")
    }
  })
})

// Accordion Functionality
$(".accordion").click(function () {
  $(this).find("#caret-right").toggleClass("fa-rotate-90")
  $(this).toggleClass("active")

  const aDataName = $(this).data("name")

  $.each($(".details-div-acc"), function (i, el) {
    if ($(el).data("name") == aDataName) {
      $(el).toggleClass("active")
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
    } else {
      $(".sticky-div-fixed").removeClass("active")
    }
  } else {
    window.removeEventListener("scroll")
  }
}

$(".close-button").click(function () {
  $(".sticky-div-fixed").removeClass("active")
  $(".sticky-div-fixed").addClass("removed")
})

// JS
// Make tabs inactive
// Make accordion active
// Give accordion links same data-name(s) as divs
// Toggle class

// HTML/CSS
// Add fa icon caret-right to each accordion
// Add fa animation to rotate 90deg clockwise
