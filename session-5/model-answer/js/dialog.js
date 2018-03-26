/* global $ */
$('.wrapper').on('click', '.card > a', function (e) {
  e.preventDefault()
  var dialog = $(e.currentTarget).closest('.card').find('dialog')[0]
  dialog.showModal()
})

$('.wrapper').on('click', '.card__close', function (e) {
  e.preventDefault()
  var dialog = $(e.currentTarget).closest('.card').find('dialog')[0]
  dialog.close()
})
