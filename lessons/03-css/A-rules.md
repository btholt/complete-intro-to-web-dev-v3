---
description: ""
---

<style>
  .step-one {
    color: red
  }

  .step-two {
    color: limegreen;
    font-size: 60px;
    font-weight: normal;
    text-decoration: underline;
    text-transform: uppercase;
    border: 3px solid pink;
  }
</style>

Okay, now we've began putting HTML elements on a page. Using our house-building analogy, this is like we have all the materials now in a pile in front of our house. However a pile of lumber does not make a house. We're going to start reasoning about how to put together these things, how to create our blueprints, our plans. CSS is really powerful and can accomplish a wide variety of things: colors, sizes, order, positioning, hiding, showing, animation, etc. We'll scratch the surface here, but know you can do a lot with just CSS. It's a deep subject and a powerful tool.

Like HTML, CSS is not a programming language. It's a list of rules that you give the browser. You'll provide rules to the browser like "all `h1`s will be colored red." We'll explore why this is different than JavaScript later, but know that's the gist.

## Style

We'll first explore the most apparent way to use CSS: to effect visual changes on your HTML. Imagine an `h1` like this:

```display-html
<h1>This is an h1.</h1>
```

So far so good. What if we wanted to instead make the h1 be red instead? Like this

<h1 class="step-one">This is an h1.</h1>

We're going to write a CSS rule that makes the case. That would look like:

```css
h1 {
  color: red;
}
```

That's it! There's your first CSS. Let's dissect each piece of this rule:

- `h1` — This is what we'd call the **selector**. Anything that matches this selector is going to have everything inside the `{ }` applied to it. These selectors can be a wide variety of things but for now we're just selecting _every_ `h1` on the page. That's important to keep in mind too: it'll apply the changes to everything that matches that selector.
- `color:` – This is called the **property**. There are about [~350 properties](https://meiert.com/en/indices/css-properties/) that you can use but to be honest you'll never use all of them. Maybe fifty to a hundred are used frequently and the rest are a long tail that are rarely used. The `color` property affects the color of the font (as well as some other things, but for now just assume it means font color.)
- `red` – This is the **value**. This identifies what the value of the property is going to be. In this case, we're telling the color to be red. There are variety of ways to define color in CSS. This is called using "named color", of which there are about [150 different colors][colors] that CSS understands. CSS also understands hex values like `#ff0000`, rgb values like `rgb(255, 0, 0)`, and hsl values like `hsl(0, 100%, 50%)`. All those values I gave in the previous sentence are the same color as `red`. You don't actually need to understand how these values work to understand web programming or CSS and I would assert most web developers don't. If you need to understand, here's a great article on it from [CSS Tricks][css-tricks].
- `;` – Every property-value pair will end in a semicolon. Think of it like a period/full-stop to end of a sentence. This is how the computer knows you're done with that property and moving on.

So let's go a step further. Let's make our h1 even more different! Let's make it limegreen, bigger, not bold (`h1`s are by-default bold), underlined, uppercased, and have pink border!

```css
h1 {
  color: limegreen;
  font-size: 60px;
  font-weight: normal;
  text-decoration: underline;
  text-transform: uppercase;
  border: 3px solid pink;
}
```

<h1 class="step-two">This is an h1</h1>

Notice the HTML we're using for this is still: `<h1>This is an h1</h1>`. Nothing has changed there! This is all just using a CSS rule the affect how it looks. Pretty cool, right? Also notice that one selector can have multiple properties and that one property can have multiple values! Let's dissect that.

- `color: limegreen;` – We used this before, but now we're using the color `limegreen`!
- `font-size: 60px;` – `font-size` is how we make text bigger or smaller. Since we wanted to make it bigger, we made it 60 pixels tall which is quite large. The `px` represent the unit of measurement here. Just as it's different to say something is five feet long, five inches long, or five meters long, so too is it different to say something is `60px` or `60em`. CSS has a bunch of different measurements, but _most_ things are measured in `px`, `em`, or `rem`. [See this CSS Tricks article][css-lengths] if you want see more about the various measurements of CSS.
- `font-weight: normal;` – Like I stated previously, `h1`s are bold by default. This is how you tell the browser to keep the text's weight to normal. There are more things you _can_ do here, but typically you're only telling it be bold or normal.
- `text-decoration: underline;` – This is how you tell it underline the text. Mostly text-decoration is used for that but you'll also see `line-through` for strikethrough or `overline` for … overlining purposes? Yeah, I'm not sure. But you can do it!
- `text-transform: uppercase;` – This can be a bit confusing because we're not changing the text inside the HTML tag but we're making everything upprecase. This is what `text-transform` can do for you. It will also do `lowercase` or `capitalize` (the latter being capitalize the first letter of each word.) Be careful with this since if your website supports other languages, changing the cases of letters will modify the meaning.
- `border: 3px solid pink;` – This is how you make borders around items. First, notice the border goes all the way to the edge of the page. That's because `h1`s take the whole line even though they don't necessarily have text to fill that. We'll address this later when we talk about the block model but it's good to know that now. So notice we have three values there for the one property: `3px`, `solid`, and `pink`. These are all separate and could be put in any order (ie you could say `border: solid pink 3px;` and it's the same.) The `3px` represents the thickness of the border, the `solid` represents that it's a solid line (it could be `dotted`, `dashed`, `double`, or a few others) and `pink` represents the color of the border. This actually an example of a combined CSS property, a shortcut. You could separate this out as `border-style: solid;`, `border-color: pink;`, and `border-width: 3px;`. You'll see a lot of these in CSS.
- Why is it `font-*` sometimes and `text-*` other times? Font has to do with the acutal font being loaded. An italics font is actually different glyphs as in as a bolded font. Text has to do with the text being the text displayed, like uppercase or a line underneath. It doesn't need to change the actual font being loaded.

## Parents and Children

You'll notice that if I have HTML like this:

```display-html
<div>
  <h1>An h1</h1>
</div>
```

And I have CSS that looks like this:

```css
div {
  color: blue;
}
```

The `h1` will be colored blue. This is because it has a parent (or ancestor) tag that is a `div` which means that CSS will still affect it. This even works will large degrees of separation. If I have `<body><div><div><div><div><div><h1>my h1</h1></div></div></div></div></div></body>` and my CSS selector is `body { color: orange }` that will affect the `h1` in the middle.

## Experiment

That's a basic primer to CSS and properties. Play around with the below CodePen and see what sorts of trouble you can cause. The key with CSS is experimentation. As you may imagine, all the various properties will interact with each other, sometimes to your detriment and sometimes in really cool and interesting ways. We'll explore more how to CSS to position and size things, but for now mess around with these styling techniques. To switch between the HTML and CSS, click the buttons at the top of the CodePen.

<iframe height='600' scrolling='no' title='CSS Playground' src='//codepen.io/btholt/embed/ELaxOB/?height=265&theme-id=dark&default-tab=css,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>See the Pen <a href='https://codepen.io/btholt/pen/ELaxOB/'>CSS Playground</a> by Brian Holt (<a href='https://codepen.io/btholt'>@btholt</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

[properties]: https://meiert.com/en/indices/css-properties/
[colors]: https://css-tricks.com/snippets/css/named-colors-and-hex-equivalents/
[css-tricks]: https://css-tricks.com/nerds-guide-color-web/
[css-lengths]: https://css-tricks.com/the-lengths-of-css/
