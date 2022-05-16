---
description: ""
---

<iframe style="margin: 10px auto; display: block;" class="doggos" height="595" title="Word Masters" src="/complete-intro-to-web-dev-v3/project-files/word-masters.html" frameborder="no" allowtransparency="true"></iframe>

You and I are going to recreate the well known word game Wordle. If you're not familiar with Wordle (which we'll call Word Masters), here's how you play

> My demo doesn't work on mobile phones. Bonus points for you if yours does.

- There is a secret five letter word chosen
- Players have six guesses to figure out the secret word. After six guesses, they lose
- If the player guesses a letter that is in the right place, it is shown as green
- If the player guesses a letter that is in the word but not in the right place, it is shown as yellow
- It does account for however many of the letter exist in the word. For example, if the player guesses "SPOOL" and the word is "OVERT", one "O" is shown as yellow and the second one is not.
- If the player guesses the right word, the player wins and the game is over.

Above you have a working copy of it, feel free to try (you may need to click on it.)

You need to call an API to get the secret word. Frontend Masters has created one that you can call here:

## The API

You have two APIs to work with today:

**GET https://words.dev-apis.com/word-of-the-day**

- This will give you the word of the day. It changes every night at midnight
- The response will look like this: `{"word":"humph","puzzleNumber":3}` where the word is the current word of the day and the puzzleNumber is which puzzle of the day it is
- If you add `random=1` to the end of your URL (`words.dev-apis.com/wordof-the-day/get-word-of-the-day?random=1`) then it will give you a random word of the day, not just the same daily one.
- If you add `puzzle=<number>` to the end of your URL (`words.dev-apis.com/wordof-the-day/get-word-of-the-day?puzzle=1337`) then it will give you the same word every time.

> Please note the words are chosen at total random. No meaning is meant by the words; they're just random words for a word puzzle.

**POST https://words.dev-apis.com/validate-word**

- You must _POST_ to this endpoint, not GET.
- The endpoint expects JSON with a property called `"word"`. A valid post body would be `{ "word": "crane" }`.
- The API will return back to you the word you sent and `validWord` which will be true or false. e.g. `{ "word": "crane", "validWord": true }` or `{ "word": "asdfg", "validWord": false }`.
- This endpoint only validates five letter words.
- This endpoint only validates English words and will not validate any accents or non-letter characters
- Do this part last. It's the hardest part to get right.

> 🚨 If you see a 403 error, it means you hit a non-supported or non-existant endpoint. Maybe you spelled the URL incorrectly. Maybe you're trying to GET when an endpoint expects a POST. If you see the payload `{"message":"Missing Authentication Token"}` this is the same error.

## Tips and Tricks

- Solve one problem at the time. Maybe create and style the HTML and CSS first, then just make a user able to guess six times. Then add detection for correct guesses. Then add highlighting in green correct letters. Then add gray for definitely wrong letters. Then do yellow for close.
- I didn't show you all the JavaScript methods you're going to need to do this. **You will need to Google things**. Learning how to answer your own questions is perhaps the most useful you'll learn in this course.
- I added some animations, you don't have to. It was just for fun.

## isLetter

Use this function to test is a string is a single alphabetical string is a letter

```javascript
function isLetter(letter) {
  return /^[a-zA-Z]$/.test(letter);
}

console.log(isLetter("a")); // true
console.log(isLetter("abc")); // false, not a single character
console.log(isLetter("1")); // false, not a number
```

- `/^[a-zA-Z]$/` is a regular expression. Do not worry too much about this as it's not critical to understand. Many, many developers don't know or need it ever. The TLDR on it is:
  - the `/` in `/<stuff>/` denote that this is going to be a regular expression. It is its own data type in JS (like number or boolean)
  - the `^` denotes that this string must happen at the beginning of the string.
  - the `$` denotes that this string must happen at the end of the string.
  - by having both `^` and `$` there, and only allowance for one character, we're implying that this is a string with only one character.
  - the `[` and `]` allow us to define ranges of acceptable characters.
  - the `-` in the `a-zA-z` defines ranges. Here we're saying anything in the character ranges of `a` to `z` (the lowercase alphabet) and `A` to `Z` (the uppercase alphabet) are allowed
  - we didn't allow for anything outside of that, so our regex gives us only one charact that's upper or lowercase alphabet, that's it.
  - again, don't worry about this. this is just an explainer for the curious.
- Use this function to determine if a user hit a keystroke that is a valid keystroke. Ignore it if it's not.

```display-html
<input type="text" class="tester-input" placeholder="only letters allowed here" />
```

<input type="text" class="tester-input" placeholder="only letters allowed here" />

```javascript
document
  .querySelector(".tester-input")
  .addEventListener("keydown", function (event) {
    // uses the isLetter function from above
    if (!isLetter(event.key)) {
      event.preventDefault();
    }
  });
```

> This will even prevent backspace and enter!

## Get to it!

You will need to do all the HTML, CSS, and JavaScript yourself. There are infinite good and correct ways to do this so don't feel like you need to match my solution.

For reference, this took me about 125 lines of JavaScript, 50 lines of HTML, and 75 lines of CSS.

## Help me get started

I suggest you try to get started yourself. It's good for you to conceptualize a whole problem and then work on it yourself so you arrive at the whole solution yourself.

Still need help though? Here's how I broke down the project

Steps:

1. Write the HTML. Get all the divs and such that you'll need. Make sure to link a stylesheet and a script to run your CSS and JS
1. Style it. Write the CSS to get to the state where everything _looks_ right.
1. Starting on the JS, get the core mechanic of typing down. You'll have to handle
   1. Handle a keystroke with a letter.
   1. Handle a wrong keystroke (like a number or spacebar). Ignore it.
   1. Handle "Enter" when the word is complete (go to the next line)
   1. Handle "Enter" when the word is incomplete (ignore it)
   1. Handle "Backspace" when there's a letter to delete
   1. Handle "Backspace" when there's no letter to delete
1. Handle the API request to get the word of the day
1. Handle checking just if the word submitted after a user hits enter is the word is the word of the day
1. Handle the "win" condition (I'd just start with `alert('you win'))`)
1. Handle the "lose" condition (I'd just start with `alert('you lose, the word was ' + word))`)
1. Handle the guess's correct letter in the correct space (the green squares)
1. Handle the guess's wrong letters outright (the gray squares)
1. Handle the yellow squares
   1. Handle the correct letters, wrong space (the yellow squares) naïvely. If a word contains the letter at all but it's in the wrong square, just mark it yellow.
   1. Handle the yellow squares correctly. For example, if the player guesses "SPOOL" and the word is "OVERT", one "O" is shown as yellow and the second one is not. Green squares count too.
1. Add some indication that a user needs to wait for you waiting on the API, some sort of loading spinner.
1. Add the second API call to make sure a user is requesting an actual word.
1. Add some visual indication that the user guessed something isn't an actual word (I have the border flash red on the current line)
1. Add some fun animation for a user winning (I have the Word Masters brand flash rainbow colors)

## Good Luck!

This is a hard one! Give it your best shot and tweet me the results!

- [Here is my HTML (you'll need to view source)][html]
- [Here is my JavaScript][js]
- [Here is my CSS][css]

[html]: https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/word-masters.html
[css]: https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/word-masters.css
[js]: https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/word-masters.js
[mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
