---
description: ""
---

## Pseudoclasses

Some times we want to change how elements look based on certain events that happen in the DOM. One of the most common ones is we want to change an element when someone hovers their mouse over it. Like this box:

The see we used for this is this:

```html
<style>
  .hover-example {
    width: 100px;
    height: 100px;
    background-color: limegreen;
    color: white;
  }
  .hover-example:hover {
    background-color: crimson;
    width: 150px;
    height: 150px;
  }
</style>
<div class="hover-example">Hover your mouse over me</div>
```

The `:hover` part selects that element **only when that condition is true**. There are are many [CSS pseudo classes][pseudoclasses] like being able to only select the first element of something like this:

The CSS for this is:

```html
<style>
  .first-child-example {
    color: crimson;
  }
  .first-child-example:first-child {
    color: limegreen;
  }
</style>
<ol>
  <li class="first-child-example">First</li>
  <li class="first-child-example">Second</li>
  <li class="first-child-example">Third</li>
</ol>
```

This only selects the element if it is the _first element_ inside of a tag. Otherwise it won't select it. There are numerous other CSS classes; check out the CSS-Tricks article if you want learn more.

## Pseudoelements

We're not going to dwell too much on pseudoelements as they are a bit of an advance concept. [Read here][pseudoelements] for a more in-depth dive on it. But let's have a quick example.

```html
<div class="chapter">This is a chapter of my book.</div>

<div class="chapter">This is a second chapter of my book.</div>

<style>
  .chapter p {
    margin: 0;
  }
  .chapter::after {
    content: "❦";
    font-size: 50px;
    text-align: center;
    display: block;
  }
</style>
```

Do you remember at the end of a chapter of some books, they have a little embellishment to let you know you've finished a chapter? That's called an end mark. Many use one called a fleuron and that's what the ❦ character is. Let's say we wanted to write CSS to automatically insert that character after every chapter class in our book

(By the way you can totally use CSS for print layouts like books and newspapers.)

Every element has a `::before` and an `::after`. You can use these _pseudoelements_ to insert things there like we did with the fleuron.

Again, not the most common thing to do, just wanted you to be aware of it. You will in old code and documentation see `:before` and `:after` but these are old and now are `::before` and `::after` so that pseudoclasses (like `:hover`) and pseudoelements (like `::after`) can be disambiguated by syntax.

[pseudoclasses]: https://css-tricks.com/pseudo-class-selectors/
[pseudoelements]: https://css-tricks.com/almanac/selectors/a/after-and-before/
