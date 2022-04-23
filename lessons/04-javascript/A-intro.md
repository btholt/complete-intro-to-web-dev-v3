---
description: ""
---

This is a tough section to teach because the needs of the student vary quite widely here. Some of you are programmers from other languages who are coming here to learn front end coding. Some of you are totally new to coding and JavaScript will be your first programming language. Just like if you know Spanish already, learning Italian becomes a whole lot easier since you take the same concepts and express them with minor variances. This workshop is optimizing for those totally new to coding and thus we assume no prior knowledge. If you do know another progamming language, I invite you instead to skim this section in familiarize with how JavaScript looks. The next sections will aimed also at you.

## What is code?

A dumb question but its answer may surprise you. Code is for humans first and computers second. You can think of writing code as essentially writing notes on how to solve a particular problem that just happens to be in a way that computer can understand it.

Wait, why? The why is because you or someone else will have to go back and re-read that code some time in the future, maybe tomorrow or maybe in ten years (I've worked on code older than 10 years old, it's not fun.) As such, it's important to write code in such a way that it can understood as quickly as is reasonable. Think of it like a textbook: you don't want to read the entire textbook everytime you want to review a concept, you want to jump right to the page and learn just the thing you're looking for. Same with code: you want to jump right to the bit of code in question and understand it at a glance without re-reading the whole codebase.

You will spend far longer maintaining this code than you will writing it the first time. Be explicit. Be deliberate. The point here is not to be clever but to be simple and to communicate clearly. Code is communication.

Okay, given this, let's frame how this code works then. When you write code, the computer breaks it down into smaller pieces it can understand and then executes those one bit at a time. With JavaScript, only one thing is ever happening at a time (this is called being _single threaded_ but that is not a term you need to know.) In general, this means it executes line 1, then line 2, then line 3, etc. Let's that in action:

```javascript
const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);
```

The first thing that happens above is that we declare a variable, `monthlyRent`. The `const` keyword is how we let JavaScript know we're declaring a variable. Variable names always have to know no spaces in them, which is why we squish the words "monthly rent" together. In order to make this more readable, we use what's called _camel casing_, so-called because the capital letters in the middle make it look like humps on a camel. You can also use other styles of captialization, there's no rule it must be camel case in JavaScript; everyone just happens to do camel casing in JavaScript.

Notice the `;` at the end of every line. This semi colon lets JavaScript know you've completed your thought. Think of this as the period/full-stop of the the programming world.

Variable can be called _almost_ anything. You **can't** use keywords. An example would be `const const = 15`. `const` is a keyword so it can't be used as a variable name. You do want to give your variables good names, even if they end up being long sometimes. Imagine we have a huge file and 200 lines below we see the variable named `monthlyRent`: we'll know instantly what this variable does and we won't have to go try to read other parts of the code to figure it out. Always, always, always use good variable names. Seriously. Put time into it. Naming things is hard and it's a big part of your job.

Okay, so after line one, I have a variable named `monthlyRent` that I can use as much as I want. In this case, it represents the number of `500` but it also semantically represents monthlyRent. Imagine if I had 1000 lines between where `monthlyRent` is declared and where `yearlyRent` is calculated. I could have just put `500` directly in `yearlyRent` but I don't because I now understand how that's calculated just by reading the code. Use variables. Use them everywhere. It makes your code way easier to read. Also, later, if my monthly rent changes, I can change it one place and everywhere I reference `monthlyRent` and `yearlyRent` get updated automatically. Powerful stuff.

Okay, I want to calculate `yearlyRent`. I use the `*` to represent multiplication. I'm also mixing variables and numbers which is just fine. I also could have said `const yearlyRent = monthlyRent * monthsInAYear;` (assuming I put `const monthsInAYear = 12;` somewhere else) too and that would be a good idea. I would argue the two are roughly the same since it's obvious there are 12 months in a year. But you do what you think is most clear. That's your job.

`console.log(yearlyRent);` is going to print whatever is stored in `yearlyRent` to the JavaScript console. The JavaScript Console is a part of the dev tools. If you need help finding them, [see here][devtools]. We'll explain how it works in a bit but for now just know that anything you put between the parenthesises gets logged out to your JavaScript console.

Let's get this little snippet working in our browser. Make a new folder (I'll just a put it on my desktop) and add an index.html file with the following in it:

```display-html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>JavaScript Experiments</title>
  </head>
  <body>
    <h1>JavaScript Experiments!</h1>
    <script src="./experiments.js"></script>
  </body>
</html>
```

That `script` tag is going to let us load JavaScript code into out HTML page. So make another file in the same folder called `experiments.js` (it really can be called anything as long as the script tag matches it.) Then in the that JS file put our code from above:

```display-javascript
const monthlyRent = 500;

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);
```

Now, if you open your **HTML** file, not the JS file, in your browser and open your console, you should see the number `6000` being printed. Congrats! You just wrote your first code!

[devtools]: https://webmasters.stackexchange.com/questions/8525/how-do-i-open-the-javascript-console-in-different-browsers
