---
description: ""
---

Sometimes I want to modify the flow of how my program works, or in other words, some time I only want to run code if some condition is true. This is where `if` statements are very useful. Imagine if we tried this.

```javascript
const skyIsBlue = true;

if (skyIsBlue) {
  console.log("The sky is blue!");
} else {
  console.log("The sky is … not blue?");
}
```

In the above example, the condition inside of the parens is evaluated and if it's true, the first block is run and the second is skipped. If it is false, the second block is run and the first block is skipped. Paste that code into your experiments and play with it. You also do not have to have an else block. Okay, let's go further.

```javascript
// if you see three lines, it's just three = in a row, ===. the font just combines them into one big character
if (2 + 2 === 4) {
  console.log(
    "Oh thank god, the fundamental principles of mathematics still hold true."
  );
} else {
  console.log("Uh, panic?");
}
```

You can put any expression (a technical terms, means anything you can stick on the right side of an equal sign, we'll explore it more as we go) inside of the if statement. In this case, we are asking, is two plus two still equal to four. If this is true (I hope so) then again the first block will be run. If not, the second will be.

Let's talk about `===` for a second. If you use just one `=` in JavaScript, it means **is assigned to**. So when we have `const isBrianCool = true;` you can verbalize that as "The variable isBrianCool is assigned to true". Thus we can't use that inside of the if statement because that's not we mean. We're trying to ask a question, not assign something. We're trying to ask "is two plus two equal to four." Enter the triple equals. Triple equals is the same as asking "is this equal to that." We use the triple equals instead of the double equals because double equals does a lot of funny business that usually we don't want it to do. It does what's called coercion and we'll talk about that below. But in an example `2 == "2"` but it does not `2 === "2"`. String 2 is double equal to number 2 but string 2 is not triple equal to number 2.

There's also `!==`. This is asking "is this not equal to that". Lastly you can ask with numbers `>` `>=` `<` `<=` as well to ask if numbers less than or greater than too. For another example:

```javascript
const friendsAtYourParty = 10;

if (friendsAtYourParty === 0) {
  console.log("Cool, now I have a lot of nachos to myself.");
} else if (friendsAtYourParty <= 4) {
  console.log("Perfect amount to play some Mario Kart.");
} else {
  console.log("Wooooo turn on the dance music!");
}
```

This also demonstrates the `else if` if you have more than just two different conditions.
