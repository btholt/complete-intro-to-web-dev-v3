---
description: ""
title: "The DOM"
---

So far we've been writing code pretty well in a vacuum. We've been using `console.log` as the output mechanism. We haven't really done anything in JavaScript that couldn't be done in any other language. Now we're going to start using JavaScript to interact with your webpage. This is a unique feature to JavaScript (mostly, let's not explore that at the moment.)

Let's first chat about what a browser is and how your code gets from you writing it to being on run in a browser.

In a typical circumstance.

1. You write code in your editor (like VSCode)
1. You put your code on a server so that other people can get it
1. Someone visits your website
   1. (Lots of stuff happens here. For now we're not going to talk about it)
   1. Their browser makes a request to your server for your index.html
   1. Your server sends them a copy of the html
   1. The browser reads the HTML, sees you have a `my-script.js` script tag on there
   1. Browsers makes another request for `my-script.js` from your server
   1. Your server sends them a copy of `my-script.js`
   1. The browser reads the JavaScript code and begins executing the code

Same process happens with CSS too.

Okay, so this is how it works if you have put your code on some server like in a cloud like Microsoft Azure, Amazon Web Services or other places like Bluehost or GoDaddy. So how are we doing it locally, without a server, just on our computers? Your computer is basically faking this process. It's acting as both the server and the client so that it's easier for you to write code. When you open a file in your browser from your computer, your hard drive is the server. This was a point of confusion for me when starting so I'm sharing it with you.

Right now our computer isn't doing anything other than serving up the file unmodified. A real server can do a lot of things like read from databases, call other servers, or modify in-flight requests. We're not doing any of that. Right now it's just giving you back the raw file unmodified.

Okay, now we've gotten that out of the way, let's begin making another project.

## The DOM

The way that JavaScript and HTML/CSS interact with each other is a thing called the DOM, the Document Object Model. The DOM is basically a bunch of objects and methods that you can call from JavaScript to interact with the HTML/CSS of the page.

Note: for these code samples, I'll show you the HTML and the CSS first (which won't be editable) and then I'll show you the JavaScript afterwards (which will be editable.)

Let's see an example.

```display-html
<div class="red-square"></div>
```

```css
.red-square {
  color: crimson;
  width: 100px;
  height: 100px;
}
```

<style>
  .red-square {
    color: crimson;
    width: 100px;
    height: 100px;
  }
</style>
<div class="red-square"></div>

```javascript
const redSquare = document.querySelector(".red-square");
redSquare.style.backgroundColor = "limegreen";
```

Notice that, despite the CSS class dicatating that the `div` should be `crimson` colored, it's actually `limegreen`. This is because we used JavaScript to change the color of it. So let's break it down.

- We called a method on `document`. `document` is a globally available variable in the browser that you use to interact with the HTML and CSS. It a lot of methods that you can use. In this case, we're using the `querySelector` in which you pass in a CSS selector and it returns to you the **first** one of that matches selector that it finds (if you have many of them on the page, you get just the first one.)
- From there, we have a JavaScript pointer to the `div.red-square` tag stored in the `redSquare` variable which means we can start manipulating it.
- We then use the `style` object which represents all the CSS styles that are being applied to that object at that time.
- We then set the `backgroundColor` of that element. Notice it is `backgroundColor` and not `background-color` (camelCasing vs kebab-casing). This is how you interact with CSS via JavaScript. Anything that's kebab-cased like `padding-right` becomes camelCased, like `paddingRight`. While annoying, it'd be even more annoying if they didn't switch it since everything in JavaScript is camelCased.
- We then just assign that to be whatever value we want. This works with any CSS property, eg: `tag.style.marginBottom = '50px'`.

There's a lot more you can do with an element than just modifying its style. You can add more HTML into it, remove it, change the text, search for different elements inside of it, get its position on the page, clone it, and a lot more.

Okay, so what if we had multiple elements we wanted to modify all at once. We have the tools to do that too!

```display-html
<ul>
  <li class="js-target">Unchanged</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
</ul>
```

<ul>
  <li class="js-target">Unchanged</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
  <li>Won't Change</li>
  <li class="js-target">Unchanged</li>
</ul>

```javascript
const elementsToChange = document.querySelectorAll(".js-target");
for (let i = 0; i < elementsToChange.length; i++) {
  const currentElement = elementsToChange[i];
  currentElement.innerText = "Modified by JavaScript!";
}
```
