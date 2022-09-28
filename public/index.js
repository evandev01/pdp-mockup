$('img.thumb').click(function () {
  let clickSrc = $(this).attr('src')

  $('img.large').removeAttr('src')
  $('img.large').attr('src', clickSrc)
})