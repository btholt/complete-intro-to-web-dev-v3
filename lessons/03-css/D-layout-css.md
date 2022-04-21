---
description: ""
title: "Layout CSS"
---

CSS can also be used to layout the page differently. Without this, you couldn't have two boxes next to each other, like this:

<style>
  .gatsby-highlight {
    flex-direction: column;
  }
  .klipse-result {
    width: 100%;
  }
  .CodeMirror {
    width: 100%;
    border-right: 1px solid #90b4fe;
    margin-bottom: 15px;
  }
  .long-inline-box {
    display: inline-block;
    border: 1px solid green;
    background-color: limegreen;
    width: 30px;
    height: 15px;
    margin: 0 3px;
    border-radius: 3px;
  }
  .margin-container {
    background-color: blue;
    padding: 25px;
  }

  .box-model {
    border: 3px red solid;
    padding: 5px;
    background-color: white;
    color: black;
  }
  .interior-span {
    display: inline-block;
    border: 2px green dashed;
    width: 100%;
  }
</style>

```html
<style>
  .ex-box {
    border: 3px solid #aaa;
    background-color: #eee;
    height: 200px;
    width: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    float: left;
    margin-right: 10px;
    border-radius: 5px;
    font-size: 30px;
  }
  .ex-box:last-of-type {
    clear: right;
  }
</style>
<div class="ex-box">Box 1</div>
<div class="ex-box">Box 2</div>
```

Those are just two `div`s with some text inside. Without CSS, we wouldn't be able to control the width, height, the fact that they're side-by-side instead of on different lines, the space between them, or the vertical and horizontal centering of the text. We're getting into the more layout-oriented CSS.

## The Box Model

We're going to talk about what is call the **box model** of CSS. This is one of the most confusing thing for people new to CSS to grasp at front, so it's worth investing time into understanding. It's important.

### Display

Every tag in CSS has a `display` property associated with it by default. In fact, CSS has a lot of hidden defaults, just like by-default all text's color is black. With `display`, it varies by what type of tag we're talking about. `div`s are `display: block;` by default while `span`s are `display: inline;` and this makes sense given their functions. However, being that we have access to CSS, we can manipulate a `span` to act like a `div` and vice-versa (though usually you'd just use the appropriate tag.) We'll list out a few of the options here of what `display` can be.

- `inline` – Like it sounds, it makes whatever the `tag` is behave like text. If you I want to style some text inline, this is how to do. The key here is the browser will determine all the height, width, padding, margins, etc. for you and **will not let you change it**. This is a common pitfall for those learning. If you have something and you're trying to set the width or height and it's not respecting it, it's probably the wrong `display` type.
- `block` – `div`s and `p`s by default are `display: block;`. This give you control over the height, width, padding, margins, etc. of something. By default, something that is `block` takes the whole line to itself.
- `inline-block` – A hybrid of the previous two. This will make browser try to place the tag inline, but will still allow you to control the height, width, padding, and margins. Like this box: <div class="long-inline-box"></div> This wouldn't be possible with either of the previous.
- `flex` and `inline-flex` – Similar to `block` in that it affects the tags around it like `block` does, however it gains some new super power on how its interior tags are layed out. There's a section where we'll talk about `flex`.
- `grid` and `inline-grid` – More advance display mode that allow you more power to layout tags _inside_ of them. We'll have a section just on this too.
- `table` – Make something act like a `table`. In general, use the `<table></table>` tag instead of using CSS to make things act like `table`s.

### Height, Width, Padding, Border, and Margin

Again, these properties cannot be manipulated if something is `display: inline`. Be careful of that.

Something is a `block` or `block`-like has several measurements that add up to its whole.

<div class="margin-container">
  <div class="box-model"><span class="interior-span">Interior Content</span></div>
</div>

I'm using several elements here to concretely demonstrate how the box model works, but assume it was all one `div` tag. The css would look like:

```css
.example {
  border: 3px solid red;
  padding: 5px;
  margin: 25px;
  background-color: white;
}
```

The `background-color` of the parent of the container is `blue`. The `2px dashed green` border is added by me to show padding. So let's pick this apart, starting from the outside and working in.

- `margin` – This is the space **outside** of the element between it and other elements. It is outside of the border. If you give something a `background-color`, it will not color in the margin space. This is used to space elements out from other elements.
- `border` – Next is the border. If your element has a border, it comes next (not everything has or needs a border.)
- `padding` – Inside the border is the `padding`. This is the spacing **inside** the element. If you give something a `background-color`, you will color the padding space. In our diagram above, you can see the space between the red, solid border and the green, dashed border. This is the padding of the element.

Right now, the above element doesn't have a set `height` or `width`, which means it will take its height from what ever inside of it and it will try to take `100%` of the width it can. We can modify both of these. However, if I say `width: 200px`, _what_ is `200px` wide? Unfortunately, the answer is it depends. It depends on what the value of the `box-sizing` property. By default, it does things the old way of writing code which if I say `width: 200px` I am _not including_ the `border` or the `padding`. This is annoying because if I'm trying to fit things together well, it's much easier to include `border` and `padding`. Remember how I told you to never use the wild card selector before? This is the one exception where I permiss you to:

```css
* {
  box-sizing: border-box;
}
```

This will make everything use the `border-box` sizing instead of the default one (which is called `content-box` but you'll never have to know that.) This is the first thing I put in every project I start. You'll need it once in one file. This will make everything by-default be `border-box` and thus be easier to work with. This used to be controversial to use but [here is Paul Irish (really smart guy who works on Google Chrome)][paul-irish] saying it's okay.

## Laying Out Tags

There are a few ways to accomplish layouts. We'll briefly discuss two: floats and flex. There is also grid, but it's still new which means a significant of people's computers don't support it and the best practices for it are still being ironed out. In addition, you don't need it right away.

We're going to be using these boxes a lot over the next examples. Here's the CSS if you want to play with them:

```html
<style>
  .box-1 {
    border: 1px solid black;
    color: white;
    background-color: blue;
    height: 150px;
    width: 300px;
  }
  .box-2 {
    border: 1px solid black;
    color: white;
    background-color: red;
    height: 100px;
    width: 300px;
  }
  .box-3 {
    border: 1px solid black;
    color: white;
    background-color: green;
    height: 200px;
    width: 100px;
  }
</style>
<div class="box-1">1</div>
<div class="box-2">2</div>
<div class="box-3">3</div>
```

### Floats

The old, bullet-proof of laying things is using a property called `float`. The idea behind float is you'll an element to push itself as far left or right as possible, and once it's out of space, go to the next line. I'll put an example on the line below. Try resizing your browser horizontally and see the boxes re-arrange themselves.

```html
<style>
  .floated div {
    float: left;
  }
</style>
<div class="floated">
  <div class="box-1">1</div>
  <div class="box-2">2</div>
  <div class="box-3">3</div>
</div>
```

You'll see the boxes will wrap themselves once they run out of room and box 3 wraps as you would expect. However, once you wrap **both** boxes 2 and 3, you'll see that box 3 won't go all the way up next to 1; it stays at the same vertical position as 2. Since box 2 is higher in the HTML, box 3 cannot go higher on the page due to the way that CSS works. This is just one limitation of floats. They have peculiar behavior that's tough to understand. Let's move on and talk about flex which makes it much easier to handle.

[paul-irish]: https://www.paulirish.com/2012/box-sizing-border-box-ftw/
