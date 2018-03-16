$('.wrapper').on('click', '.card > a', function(e) {
  e.preventDefault()
console.log(e)
  var dialog = $(e.currentTarget).closest('.card').find('dialog')[0]
  dialog.showModal()
})
