---
description: ""
---

Okay so now what if I want do one thing multiple times? I could do something like this

```javascript
let friendsAtYourParty = 0;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty = friendsAtYourParty + 1;
console.log(friendsAtYourParty);
```

That's annoying though. I wish there was a better way. Before we explore that, let's chat about this example a tad more.

We used `let` instead of `const`. Things that are `const` cannot be reassigned later. In general I find this be of minor help but others do not so I leave you to make your own judgement call. In general one should try to follow the "principle of least power." You should always choose the least powerful "thing" to accomplish whatever you're trying to do. Things with less power tend to be simpler and simple things are less prone to having or causing bugs. Why don't you cut your hair with garden shears? You could, it'd work, but it's way easier to screw it up and has worse consequences. Same general idea here. Right tool for the right job.

We instead use `let` here because you can see on the subsequent lines we do reassign `friendsAtYourParty` to be a different number. If you used `const` your code would crash because `const` won't let you do that. Thus here we use `let`. There's another one called `var` that is the old way of doing JavaScript. There are differences but I don't see a reason to use `var` at all anymore. It behaves more similar to `let`.

Okay, so, we want to do this better, let's explore a few ways to do that using loops.

```javascript
let friendsAtYourParty = 0;
while (friendsAtYourParty < 10) {
  friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty);
```

This is a while loop. The first part works similar to an `if` statement: as long as what's inside that statement is **true** it will continue running and re-running the body (what's between the `{ }`) until that statement is false. Once that statement is false, it'll break the loop and continue on. This case, we add 1 to `friendsAtYourParty` until it's 10, and then the next loop, when it's 10, it'll stop because 10 is not less than 10.

Also, let's just show you a few shortcuts for adding one to a thing

```javascript
let friendsAtYourParty = 0;
friendsAtYourParty = friendsAtYourParty + 1;
friendsAtYourParty += 1;
friendsAtYourParty++;
++friendsAtYourParty;
console.log(friendsAtYourParty);
```

Those four lines are equivalent. They all do the exact same thing: they add one to the existing total. The second one, the plus-equals line, you can put any number there and it'll add that amount to total, so `friendsAtYourParty += 15;` would add 15 to the total. It also works with `-=` (subtraction,) as well as `*=` (multiplication,) `/=` (division,) and `**=` (exponent.) Two last two lines (`++` before or after) just signify add one. They more-or-less mean the same thing (there's a subtle different of _when_ it adds one that should never matter to you) but suffice to say everyone in the JavaScript community _always_ does the `++` after; I've never seen anyone do it before in JavaScript. `--` Works as well to subtract one as well.

Okay, so now let's see a second kind of loop to achieve the same effect as above.

```javascript
let friendsAtYourParty = 0;
for (let i = 0; i <= 10; i++) {
  friendsAtYourParty++;
}
console.log(friendsAtYourParty);
```

This is a for loop which is likely the most common kind of loop. Inside the parens are three statements and you need all of them. The `let i = 0;` is you defining your control variable that will control the loop. For some reason people always use `i`, not sure why. It's just that way. It really could be anything. The second statement `i <= 10` is just like the while loop, is that's the statement that is as soon as it's false it breaks the loop. The last statement, `i++` is that happens at the end of every loop. In our case, we increment the control variable `i` so that it creeps closer to the end of the loop each time.

An important note: in coding, we start counting from 0. In English, we count `1, 2, 3, 4, 5, etc.` but in coding we count `0, 1, 2, 3, 4, etc.`. So the fifth element of a string is index 4 (where index is how we'd refer to where that item is in the string). Index 0 is the first element. It's weird but you get used to it and it makes a lot of things easier.

Sometimes, if you mess up what's inside the control condition for the loop, you'll get a runaway loop that'll never complete. This is called an **infinite loop** and it'll lock up and crash your code. Something like this:

```display-javascript
let friendsAtYourParty = 1;
while (friendsAtYourParty > 0) {
  friendsAtYourParty = friendsAtYourParty + 1;
}
console.log(friendsAtYourParty);
```

Since you're adding one to `friendsAtYourParty` each time, and the loop will continue each time until it's less than zero, that condition will never happen. Thus it'll continue going until it crashes your code. Be careful of these. Nasty bugs.
