---
description: ""
title: "Numbers, Strings, and Booleans"
---

So far we've just dealt with numbers. Let's go further and start working with words and characters. In programming, we refer to these things are strings, as in a string of one-letter characters. An example of this would be

```javascript
const myName = "Brian Holt";
console.log(myName);
```

You can see I use the " (double quote) to enclose everything I want to be in the string. In JavaScript you can also use ' (single quote) and ` (back tick) as well to demarcate strings.

Strings, as you may imagine, are everywhere in programming. We're constantly keeping track of names, addresses, names of products, cities, etc. and thus constantly need strings.

Let's go further. Strings let you connect them together through string concatenation. If I want to be able to greet someone based on their name, I might have something like this:

```javascript
const firstName = "Brian";
const lastName = "Holt";

const sentence = "Hello " + firstName + " " + lastName + "! How are you!?";
const sentenceWithTemplate = `Hello ${firstName} ${lastName}! How are you!?`;

console.log(sentence);
console.log(sentenceWithTemplate);
```

The first way is the old way. We can use the `+` to tell JavaScript to connect two strings. Notice how we have insert the space between `firstName` and `lastName`. The computer only does exactly what you tell it to do. If you don't insert that space, it doesn't get put there.

The second line is the new way of doing this. JavaScript got a large update in 2015 and it made things a lot easier. Now you can use the back tick (notice the first uses a double quote, you must use back ticks to do template strings) to do template strings. If you do that, anything inside of `${yourVariableHere}` gets output in the string. Cool, right?

## Booleans

Sometimes you just need a simple true or false. These are where booleans are useful. Something like a light switch's state is best represented by a boolean. A light is either on (true) or off (false). You'd have something like `const lightIsOn = true;`. Useful and you'll see them everywhere.

## Number

Some languages separate integers (whole numbers, like 1, 2, 3, 4, 500, 1000) and floats (1.2, 3.14159, 14.01, etc.) differently but not JavaScript. JavaScript just has one type of number, Number. A number is a number.
