# Session 2 (http://bit.ly/2oTwNsS)

## Outline plan

Applying what we learnt in session 1 to a more complex situation - building the navigation menu from the BBC homepage.

**Stretch goal:** Use JavaScript to add interactivity to the menu

The [Model answer](model-answer) is available for you to refer to. If you don't have code from the previous session you can [grab the previous model answer from here](../session-1/model-answer)

### Couple of tweaks from session 1

- Constrain the site to a reasonable width
  Apply `max-width` to the `body` element and centre it with `margin: 0 auto`
- Switch to a better font for screen display
  Apply `font-family` to the `body` element and set it to `"Arial", sans-serif`

### Navigation banner

  ![Goal](goal.png)

- Adding a navigation banner to our site
  - Create a `<nav>` element
  - Add an `<img>` element and pop the BBC logo in it. (https://nav.files.bbci.co.uk/orbit/2.0.0-128.414982a/img/blq-orbit-blocks_grey.svg)  
  _For the curious among you - view the source of the SVG file... Whilst it is complex, it is in plain text and editable (Although this particular example was clearly created by a piece of software). There's a good guide here on how to do hand create SVGs: http://svgpocketguide.com/book/#section-2_
  - Wrap the logo in an `<a>` tag and link it to `#` (Effectively a "no-op" for links.)
  - Consider the accessibility of this element. You might want to add some hidden text for screen readers saying "Return to the homepage". [See here for a class which lets you create invisible text](https://github.com/h5bp/html5-boilerplate/blob/86df1ead6fbaddd28ea95be727810571144ff797/dist/css/main.css#L129)
  - Add a `<ul>` element and `<li>` and `<a>` elements for each navigation item.
  - Use the `float` property from last week's session to sit the items up on a single line (Hint: You need to float almost everything - the logo, the ul, the li items inside it)
  - Apply `padding`, `border` and `font-weight` styles to achieve the design.  
    - You may find that your `<ul>` element isn't quite sitting right. Inspect it in dev tools and you will see it has some margin and padding you need to remove.
    - You will need to set `height` on your links so they match the height of the logo. And a `line-height` of the same amount to centre the text vertically
    - Think carefully about where you apply the padding to achieve a large "hit area" on the links
    - You may need to use `:first-child` and `:last-child` selectors to override styles for the first or last elements and remove borders from them. (Alternatively, talk to Andy about using the `+` operator (https://css-tricks.com/child-and-sibling-selectors/#article-header-id-1))
  - Add hover states to the menu items using `border`
  - Use `:nth-child` selectors on the list items such as `:nth-child(4)` to apply different colours to each hover state

- Adding simple JS toggle to the "more" link
  - Disastrous live coding demo time!
