/* global $ */
$('[data-expand]').each(function (index, item) {
  var $link = $(this)
  var $target = $('#' + $link.data('expand'))

  $target.hide()

  $link.on('click', function (e) {
    e.preventDefault()

    $target.slideToggle()
  })
})
