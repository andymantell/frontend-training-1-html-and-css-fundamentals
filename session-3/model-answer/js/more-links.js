/* global $ */
$('[data-expand]').each(function (index, item) {    // Find all links with a data-expand attribute
  var $trigger = $(item)                            // Grab a reference to the "more" link
  var $target = $($trigger.attr('href'))            // Use the value from the href attribute to find the target by ID
  var open = false                                  // Boolean to keep track of whether the menu is open or not

  $target.hide()                                    // When the page first loads, hide the links

  $trigger.on('click', function (e) {               // Bind a click event handler to
    e.preventDefault()                              // Prevent the browser from "navigating" to the link's target

    if (open) {                                     // If the menu is open
      $target.slideUp()                             // Then close it
    } else {
      $target.slideDown()                           // Otherwise it's closed, so open it
      $target.attr('tabindex', -1).focus()          // Move keyboard focus to the target div
    }

    open = !open                                    // Update the state of the menu
  })
})
