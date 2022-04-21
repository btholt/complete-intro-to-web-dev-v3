---
description: "Brian teaches what tags are, the foundation unit of HTML"
---

We're going to start building our very first website. At first our website is going be pretty ugly but it's still going to be functional! We're going to be using the language HTML, or hypertext markup language. This isn't a programming language since it doesn't actually _do_ anything. It's like how English isn't a programming language either: you can't "run" English. Same idea with HTML: you can't "run" HTML. HTML is simply the language and pictures on the page. It's the static (which is another word for unchanging) content.

## Tags

HTML's base building block is the **tag**. A tag is a building block. It describes what's inside it. Every tag has an opening and a closing tag (some tags open and close at the same point.) I think the easiest way to learn it is just to show a bunch of examples.

```html
<h1>This is the title to my document</h1>
```

You can see the `<h1>` and the `</h1>` surrounding the the text "This is the the title to my document". This is how HTML operates. You can have opening tag which has information or more tags inside of it. In this case we have an `h1` tag which is a heading tag: it's used for the biggest title on the page, typically a title. If you rendered that using the browser, it's look like:

<h1>This is the title to my document</h1>

It's bigger and bolder because that's what browsers do with h1s, it makes them look important on the page. However it does more than that too. Browsers aren't the only thing reading websites. Blind and people who can't see well will use screen readers to read web pages out loud to them; it uses things like headers to understand what information is important to read to the users. It's also how Google and Bing will understand the important details of your website. In other words, it's important which type of tag you use. More than just the visual aesthetic is using those tags.

A tag, whether it's opening or closing, are surrounded by angle brackets, `<` and `>`. Closing tags always have a slash, `/`, after the opening angle bracket, so it looks like `</h1>`. There are things called "self-closing tags" or "void tags" that open and close themselves. These will look like this: `<input />` (I'll explain in a sec what inputs are.) That slash at the end means it is self closing. To make it more confusing, that last slash is optional, so `<input>` (with no closing tag ever) is valid too since input tags are always self-closing.

Tags are also opened and closed in a specific order too. The most recently opened tag must be the next closed tag. For example, if I have an h1 instead of a div, the h1 must be closed first.

```html
<div>
  <h1>Hi</h1>
</div>
```

The above is correct.

```display-html
<div>
  <h1>
    Hi
  </div>
</h1>
```

The above is incorrect. I can't close the div _before_ I close the h1 since the h1 was the last one I opened.
