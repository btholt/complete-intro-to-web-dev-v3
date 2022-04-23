---
description: ""
---

## Builtins

Lots of functions already exist for you! Smart people have created this commonly-used functions for things we often need. For example, say you have a string and you want to make everything lowercase, you can do this:

```javascript
const sentence = "ThIs HaS wEiRd CaSiNg On It";
const lowerCaseSentence = sentence.toLowerCase();
console.log(lowerCaseSentence);
```

Always be looking for the parens. And the best place to look all this stuff up is from our friends at Mozilla (makers of Firefox): [the MDN][mdn]. MDN used to stand for "Mozilla Developer Network" I think but now it's just synonmous with the documentation for the web. I literally look at this website several times a day. As I said before, you are not expected to remember everything. Looking things up on the MDN is **not** cheating.

There are so many builtins there's no way we could ever cover all of them. Here's just a few examples. The rest you'll learn as you go.

```javascript
// want to round a number? use Math!
const number = 5.3;
const roundedNumber = Math.round(number);
console.log(number);
```

---

---

```javascript
// want to see if a string contains another string?
const testStringOne = "The quick brown fox jumps over the lazy dog";
const testStringTwo =
  "Mirror, mirror on the wall, don't say it cause I know I'm cute";
const stringToLookFor = "cute";

console.log(testStringOne.includes(stringToLookFor));
console.log(testStringTwo.includes(stringToLookFor));
```

---

---

```javascript
// want to know how many milliseconds have elapsed since Jan 1 1970?
console.log(Date.now());
```

[mdn]: https://developer.mozilla.org/en-US/
