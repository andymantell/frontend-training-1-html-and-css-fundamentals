/* global $ */
$('[data-expand]').each(function (index, item) {
  var $trigger = $(this)
  var $target = $('#' + $trigger.data('expand'))
  var open = false

  $target.hide()

  $trigger.on('click', function (e) {
    e.preventDefault()

    if (open) {
      $target.slideUp()
    } else {
      $target.slideDown()
      $target.attr('tabindex', -1).focus()
    }

    open = !open
  })
})
