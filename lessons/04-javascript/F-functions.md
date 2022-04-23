---
description: ""
---

A function is a bit of re-usable code. Just how we like to re-use CSS classes, we love to re-use code. Let's start with an example:

```javascript
function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(5);
console.log(finalAnswer);
```

This isn't super useful but hopefully it shows you the mechanics of how a function works. We created a function called `addTwo`. This function takes in one parameter, `number` and it returns that number with 2 added to it. We can now use that `addTwo` function as much as we want! Let's make a something a bit more useful.

```javascript
function greet(firstName, lastName, honorific, greeting) {
  return `${greeting} ${honorific} ${lastName}! I’m extremely pleased you could join us, ${firstName}! I hope you enjoy your stay, ${honorific} ${lastName}.`;
}

console.log(greet("Brian", "Holt", "Lord", "Salutations"));
console.log(greet("Jack", "Sparrow", "Captain", "A-hoy"));
```

Now we rather than have to repeate ourselves over-and-over again with that long string, we can just call greet with the appropriate parameters. Here we use four parameters. The order is important that we send in the parameters because this will be the order function receives these parameters. You can have as many or as few parameters as you like.

The way to **call** a function is you add parens to the end of it, like this: `someFunctionName()`. If you see parens after a variable name, you instantly know that that's a function. Inside of the parens go the parameters. These variables will be passed to the function that is being called in the order that you put them there. These input variables are called **parameters**. Example:

```javascript
const myHomeCity = "Seattle";
const myHomeState = "Washington";
const myHomeCountry = "USA";

function logOutYourHome(city, state, country) {
  console.log(`You are from ${city}, ${state} ${country}.`);
}

logOutYourHome(myHomeCity, myHomeState, myHomeCountry);
```

## Various Ways of Writing Functions

There are a few ways to write functions that are mostly the same (there are some differences but for now don't worry about it.)

```javascript
function bark() {
  console.log("woof");
}

const meow = function () {
  console.log("meeeeeeeow");
};

// the => is just = > put together, the font just combines them to one glyph
const chirp = () => {
  console.log("chirp chirp");
};

bark();
meow();
chirp();
```

All of these are functions and work as such. There are very subtle differences in how they work but for now it's enough to know "those are functions". Most of the the time they work exactly the same (as you see here.)
