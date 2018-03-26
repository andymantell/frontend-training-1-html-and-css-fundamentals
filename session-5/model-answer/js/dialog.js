/* global $ */
$('.wrapper').on('click', '.card > a', function (e) {
  e.preventDefault()
  var dialog = $(e.currentTarget).closest('.card').find('dialog')[0]
  dialog.showModal()
})
