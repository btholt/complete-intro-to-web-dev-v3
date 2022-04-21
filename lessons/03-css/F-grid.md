---
description: ""
---

Let's do a quick intro to grid, the latest-and-greatest way to do layouts with CSS. Grid shares a bit of similarities with flex but it's more oriented to making grids layouts as opposed to flex which is more flexible in terms of what you can get it to do. In short, grid is useful is more laying out a page (which are frequently grid-like) whereas flex is more flexible (if a bit more compliacted) and is more useful when you have more unique layouts to achieve.

```html
<style>
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 10px;
    column-gap: 10px;
  }

  .grid-picture {
    margin: 0;
    padding: 0;
  }
</style>

<div class="grid">
  <img
    class="grid-picture"
    src="http://pets-images.dev-apis.com/pets/dog25.jpg"
    alt="a doggy"
  />
  <img
    class="grid-picture"
    src="http://pets-images.dev-apis.com/pets/dog26.jpg"
    alt="a doggy"
  />
  <img
    class="grid-picture"
    src="http://pets-images.dev-apis.com/pets/dog27.jpg"
    alt="a doggy"
  />
  <img
    class="grid-picture"
    src="http://pets-images.dev-apis.com/pets/dog28.jpg"
    alt="a doggy"
  />
</div>
```

This is a very basic grid where we we're making a 2x2 grid.

- `row-gap` and `column-gap` are how you do gutters in grid i.e. the space between items in the grid
- `grid-template-column` allows you you to set up how the grid is constructed. You can do it in percentages, pixels, or fr which stands for fractions. With with two `1fr` we made it so each piece will take 50% of the space minus the gutters which it will calculate for you. If we did `1fr 2fr 1fr` the first column would take 25%, the second 50%, the third 25%. The math works like `flex-grow`.
- Just like block and flex, there is an `inline-grid` too.

This was a basic example. Let's do a more complicated example. Let's say you're laying out your whole webpage using grid (a common use case for it.)

```html
<style>
  .my-page-header {
    grid-area: nav-header;
    background-color: red;
    padding: 10px;
  }

  .my-page-body {
    grid-area: main-body;
    background-color: blue;
    padding: 10px;
  }

  .my-page-sidebar {
    grid-area: nav-side;
    background-color: green;
    padding: 10px;
  }

  .my-page-footer {
    grid-area: footer;
    background-color: yellow;
    padding: 10px;
  }

  .my-page {
    display: grid;
    grid-template-areas:
      "nav-header  nav-header  nav-header  nav-side"
      "main-body   main-body   .           nav-side"
      "footer      footer      footer      footer";
  }
</style>
<div class="my-page">
  <header class="my-page-header">the header</header>
  <div class="my-page-body">the body</div>
  <div class="my-page-sidebar">the sidebar</div>
  <footer class="my-page-footer">the footer</footer>
</div>
```

- `grid-area` allows you to name a section and refer to it later as that. It doesn't need to match the class name (but it can, they have have nothing to do with each other.)
- We used `grid-template-columns` before. `grid-template-areas` allows you to do a similar thing but to refer to the columns by name. As you can see here, it also allows us to have columns that reach across rows. Pretty neat.
- The `.` here just refers to an empty cell.
- You don't have to do the lined-up spacing like I did (I normally don't) but I wanted it to be clear for you.
- The padding and color here are for you to visualize the grid better.

This is a very quick intro to a powerful feature. There's a lot more to what grid can do. To read more [see here from CSS Tricks][css-tricks]. To watch more, [watch Jen's class here][fem].

[css-tricks]: https://css-tricks.com/snippets/css/complete-guide-grid/
[fem]: https://frontendmasters.com/courses/css-grid-flexbox-v2/
