---
description: ""
title: "async/await"
---

Promises make code hard to read. Before them we did everything will callbacks (similar to how we're doing event listeners, you just give a function to be run later) and it was even worse. We used to deal with what we called the "pyramid of doom" or just simply "callback hell" where we had to deal with functions inside of functions. As you saw with promise chaining, at least it's linear and not terrible to follow.

What if it could be better? It can! With recent versions of JavaScript we got the ability to do what's called async/await. It allows us to make code even easier to read.

```display-html
<button id="dog-btn">Gimme Doggo</button>
<div id="dog-target"></div>
```

<button id="dog-btn3">Gimme Doggo</button>

<div id="dog-target3"></div>

```javascript
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target3");

async function addNewDoggo() {
  const promise = await fetch(DOG_URL);
  const processedResponse = await promise.json();
  const img = document.createElement("img");
  img.src = processedResponse.message;
  img.alt = "Cute doggo";
  doggos.appendChild(img);
}

document.getElementById("dog-btn3").addEventListener("click", addNewDoggo);
```

How much easier is that to read!? So much easier.

Okay, so what's going on with this black magic?

First, you can only use the magic `await` keyword inside of `async` functions. This can be confusing to folks but just be aware of that `await` can only be used in `async` functions.

All `await` does is tell your code "pause execution on this function until this promise resolves." So on the line `const promise = await fetch(DOG_URL);` the function stops executing until your API call finishes and you have a response back. It then picks back up where it was. It makes the code read very linearly which is great.

One thing to note about async functions: they _always_ return promises themselves.

```javascript
async function getName() {
  return "Brian";
}

console.log("a promise", getName());

getName().then(function (name) {
  console.log("the actual name", name);
});
```

Despite the fact we're not doing any awaiting in getName, because it's async it returns a promise. I show you this because it can catch people off guard. That's how `async` functions work and why `await` does work: they're async and therefore one may have to wait when you call them.

Shouldn't be a thing to worry too much about though, only matters if you' care about what your `async` function returns at the end.
