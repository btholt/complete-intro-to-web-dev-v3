---
description: ""
---

Given an object with a person's address, wouldn't it be nice if we could use a function to nicely print out a properly formatted shipping address?

```javascript
const me = {
  name: {
    first: "Brian",
    last: "Holt",
  },
  location: {
    streetNumber: 500,
    street: "Fakestreet",
    city: "Seattle",
    state: "WA",
    zipCode: 55555,
    country: "USA",
  },
  getAddress() {
    return `${this.name.first} ${this.name.last}
${this.location.streetNumber} ${this.location.street}
${this.location.city}, ${this.location.state} ${this.location.zipCode}
${this.location.country}`;
  },
};

console.log(me.getAddress());
```

This is our first time seeing the weird `this` keyword. This is a strange, complicated, and difficult concept in JavaScript known as context and trips up all sorts of people, new and old to the language. If you decide to pursue a career as a developer, interviewers will often ask questions about context in JavaScript. It's worth investment to understand how it works eventually (not now, focus just focus on basic JS for now.)

In the simplest form, anywhere you are in JavaScript you have a context you are in. You can reference that context by using `this`. If I just reference `this` from the outtermost layer, it'll be the global object, which in the browser is something called `window`. `window` already has a bunch of stuff on it. For example:

```javascript
console.log(this === window);
console.log(this.scrollY);
console.log(window.scrollY);
```

As you can see from the first line, you can see that in this context, window is the `this` at that time. However, in the example above when we're doing the address, the `this` is the object since when I **call the function**, it's created inside of an object. That object then becomes `this` when `getAddress` is called. As soon as the function completes, the context is destroyed and the context goes back to being what it was before, in this case `window`.

A good rule of thumb (that is unfortunately not always true) is that if you're inside an object of some sort, the `this` will be that object. If not, it'll be the global object, `window`. There are crazy exceptions to this and you can even manipulate it yourself. For now, operate with that definition. It's a deep-and-dark rabbit hole to go down so let's continue and you can take [Kyle Simpson's course][kyle] later where he goes in depth on it.

[kyle]: https://frontendmasters.com/courses/getting-started-javascript-v2/
