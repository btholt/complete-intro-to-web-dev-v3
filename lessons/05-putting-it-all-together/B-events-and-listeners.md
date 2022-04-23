---
description: ""
---

We've been able to modify HTML and CSS using JavaScript using `document`. Awesome! We're going to go one step further and start involving the user. Web sites are meant to be reactive to users. In order to be reactive to them, we need to wait for them to do stuff, like click a button or type in an input. The way we do that is we wait for **events** to happen. An event is created every time certain events happens like when a user clicks something or when they type something. We respond to these events by having what are called **event listeners**. We give an event listener a function to run whenever an event happens. Let's take a look at responding to a click when a user clicks a button.

> NOTE: Since it's possible for a single tag to have multiple listeners, every time you type into the coding box, it's adding more event listeners to that same button. Therefore you'll have multiple alerts.

```display-html
<button class="event-button">Click me!</button>
```

<button class="event-button">Click me!</button>

```javascript
const button = document.querySelector(".event-button");
button.addEventListener("click", function () {
  alert("Hey there!");
});
```

Let's break it down.

- We grab the button via `querySelector` and store it in the JavaScript variable `button`.
- We then call the `addEventListener` method on the button. This takes two parameters (no need to memorize this, you can always look it up): the name of the event you want respond to, which in this case is the `click` event, and a function that is called whenever that event happens. This function is often called a **callback** because it gets called back whenever the event happens.
- We then call a function called `alert`. `alert` is a super, super annoying function that pops up a dialog window with whatever you call it with.
- People often get confused seeing `});` on the last line. The first `}` is closing the function, the second `)` is closing the function call of `addEventListener`, and the `;` ends the statement.

> `alert` comes from the DOM. It's technically `window.alert` but when you're working in a browser you can always leave out `window` since it's implied. This pretty much only ever happens with `window` so don't worry too much about it. Only becomes a problem when you start writing Node.js which is beyond the scope of this class.

Let's do another example with an `input` tag.

```display-html
<input placeholder="type into me!" class="input-to-copy" />
<p class="p-to-copy-to">Nothing has happened yet.</p>
```

<input placeholder="type into me!" class="input-to-copy" />
<p class="p-to-copy-to">Nothing has happened yet.</p>

```javascript
const input = document.querySelector(".input-to-copy");
const paragraph = document.querySelector(".p-to-copy-to");

input.addEventListener("keyup", function () {
  paragraph.innerText = input.value;
});
```

Try typing into the input. You'll see whatever text you type into the input will instantly be reflected in the `p` tag. Pretty cool, right?

- We're now using the `keyup` event. This event happens whenever you release a key after pressing it. As you may guess, there is a `keydown` event too that is fired whenver you press a key. We're using `keyup` because `keydown` happens _before_ a key actually registers which means we would always be one key behind.
- We're reference `input.value`. The value property of an input reflects whatever the user has typed into the input.
- We're taking whatever is in `input.value` and passing that directly into the `paragraph.innerText`. Since that function is called every time a user types into the input, it keeps the two in sync!

One more example and then we'll move on.

```css
.color-box {
  background-color: limegreen;
  width: 100px;
  height: 100px;
}
```

```display-html
<div class="color-box"></div>
<input class="color-input" placeholder="Type a color here!" />
```

<style>
  .color-box {
    background-color: limegreen;
    width: 100px;
    height: 100px;
  }
</style>
<div class="color-box"></div>
<input class="color-input" placeholder="Type a color here!" />

```javascript
const input = document.querySelector(".color-input");
const paragraph = document.querySelector(".color-box");

input.addEventListener("change", function () {
  paragraph.style.backgroundColor = input.value;
});
```

Similar to above. The key difference here is that we're listening for `change` events. `change` events happen whenever a user types something in the input and then unfocuses the input by clicking somewhere else or hitting tab to change the focus. Try typing "red" and then clicking somewhere else. Also, try something that isn't a color. Notice that if you give it an invalid color it just doesn't change anything.

## Event Delegation

If you have a bunch of elements that you need to listen for events on, you could attach an event listener to each but that's a bit tedious to do. Instead what is sometimes easier to do is to use what's called **event bubbling**. When event fires on an element, after that "bubbles" up to its parent, and then its parent, and its parent, etc. until it's at the root element.

```display-html
<div class="button-container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>
```

<div class="button-container">
  <button>1</button>
  <button>2</button>
  <button>3</button>
  <button>4</button>
  <button>5</button>
</div>

```javascript
document
  .querySelector(".button-container")
  .addEventListener("click", function (event) {
    alert(`You clicked on button ${event.target.innerText}`);
  });
```

You can see that we only bound event listener, and that was the div above it. Then, when we click the button, we're using the `event` parameter that is being passed into the callback. You may be wondering where that came from. It was always there, we just ignoring it. An event listener's first parameter is always an event object. There's lots of information on the event object but we're most concerned with `event.target`. `target` is the tag that the event originated from. In this case it'll be the button that caused the event. And we know that with tags you can use the `innerText` property to get the text inside of them. That's how we able to alert the correct number. Cool, right?
