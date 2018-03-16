/* global $ */
(function () {
  var $form = $('#myForm')

  function validateForm () {
    var isValid = true

    $form.find('[required]').each(function (index, item) {
      if ($(item).val().length === 0) {
        isValid = false

        if (!$(item).hasClass('form__control--error')) {
          $(item)
            .addClass('form__control--error')
            .after('<p class="form__error">Please fill in this required field</p>')
        }
      } else {
        $(item)
          .removeClass('form__control--error')
          .next('.form__error')
          .remove()
      }
    })

    return isValid
  }

  $form.on('submit', function (e) {
    var isValid = validateForm()

    if (!isValid) {
      e.preventDefault()
    }
  })

  $form.find('input, select').on('input', function (e) {
    validateForm()
  })
})()
