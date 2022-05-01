---
description: ""
---

<iframe style="margin: 10px auto; display: block;" class="doggos" height="595" title="Doggos" src="/complete-intro-to-web-dev-v3/project-files/word-masters.html" frameborder="no" allowtransparency="true"></iframe>

You and I are going to recreate the well known word game Wordle. If you're not familiar with Wordle (which we'll call Word Masters), here's how you play

> My demo doesn't work on mobile phones. Bonus points for you if yours does.

- There is a secret five letter word chosen
- Players have six guesses to figure out the secret word. After six guesses, they lose
- If the player guesses a letter that is in the right place, it is shown as green
- If the player guesses a letter that is in the word but not in the right place, it is shown as yellow
- It does account for however many of the letter exist in the word. For example, if the player guesses "SPOOL" and the word is "OVERT", one "O" is shown as yellow and the second one is not.
- If the player guesses the right word, the player wins and the game is over.

Above you have a working copy of it, feel free to try (you may need to click on it.)

One constaint that normal Wordle has that _we are not_ going to do is that Wordle only lets you guess valid words. We'll skip that requirement in the name of simplicity. That is a stretch goal for you.

Moreover, you need to call an API to get the secret word. Frontend Masters has created one that you can call here:

## The API

You have two APIs to work with today:

**GET http://localhost:3000/get-word-of-the-day**

- This will give you the word of the day. It changes every night at midnight
- The response will look like this: `{"word":"humph","puzzleNumber":3}` where the word is the current word of the day and the puzzleNumber is which puzzle of the day it is
- If you do add `random=1` to the end of your URL (127.0.0.1:3000/get-word-of-the-day?random=1) then it will give you a random word of the day, not just the same daily one.

**POST http://localhost:3000/validate-word**

- You must _POST_ to this endpoint, not GET.
- The endpoint expects JSON with a property called `"word"`. A valid post body would be `{ "word": "crane" }`.
- The API will return back to you the word you sent and `isValid` which will be true or false. e.g. `{ "word": "crane", "isValid": true }` or `{ "word": "asdfg", "isValid": false }`.
- This endpoint only validates five letter words.
- This endpoint only validates English words and will not validate any accents or non-letter characters
- Do this part last. It's the hardest part to get right.

## Tips and Tricks

- Solve one problem at the time. Maybe create and style the HTML and CSS first, then just make a user able to guess six times. Then add detection for correct guesses. Then add highlighting in green correct letters. Then add gray for definitely wrong letters. Then do yellow for close.
- I didn't show you all the JavaScript methods you're going to need to do this. **You will need to Google things**. Learning how to answer your own questions is perhaps the most useful you'll learn in this course.
- I added some animations, you don't have to.

## Quick animation primer

```html
<style>
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  .spinny-boi {
    animation: spin 0.5s infinite linear;
    display: inline-block;
    font-size: 30px;
  }
</style>
<div class="spinny-boi">🤢</div>
```

- The `@keyframes` part allows you to define a reusable animation. We could throw `spin` on anything now.
- We just definte `to` which is what you want the end state of your animation state to be. We could define `from` too which is where you want your animation to start from. Implicitly if you don't define a from, your animation starts from where it is already. In this case, the `spinny-boi` isn't rotated at all, or `transform: rotate(0deg)`. So it will rotate from 0 t0 360, or a full revolution. Feel free to play with it.
- `animation` is the property to _use_ a defined keyframe. Here we just say "do what spin defines, the whole animation should take a half second, do it infinitely (aka never stop), and do it in a linear fashion (so there's no speed-up or speed-down in the animation). This is a short hand. You can define the properties separately. [See the MDN here][mdn].

```html
<style>
  @keyframes rainbow {
    100%,
    0% {
      color: rgb(255, 0, 0);
    }
    8% {
      color: rgb(255, 127, 0);
    }
    16% {
      color: rgb(255, 255, 0);
    }
    25% {
      color: rgb(127, 255, 0);
    }
    33% {
      color: rgb(0, 255, 0);
    }
    41% {
      color: rgb(0, 255, 127);
    }
    50% {
      color: rgb(0, 255, 255);
    }
    58% {
      color: rgb(0, 127, 255);
    }
    66% {
      color: rgb(0, 0, 255);
    }
    75% {
      color: rgb(127, 0, 255);
    }
    83% {
      color: rgb(255, 0, 255);
    }
    91% {
      color: rgb(255, 0, 127);
    }
  }
  .rainbow-boi {
    animation: rainbow 4s infinite linear;
    font-size: 30px;
  }
</style>
<div class="rainbow-boi">Rainbow</div>
```

- Similar idea but with color. Lots of things can be animated, like size and position.
- `from` is an alias for `0%` and `to` is an alias for `100%`. You can define percentages like we did here.

## Get to it!

You will need to do all the HTML, CSS, and JavaScript yourself. There are infinite good and correct ways to do this so don't feel like you need to match my solution.

For reference, this took me about 125 lines of JavaScript, 50 lines of HTML, and 75 lines of CSS.

This is a hard one! Give it your best shot and tweet me the results!

- [Here is my HTML (you'll need to view source)][html]
- [Here is my JavaScript][js]
- [Here is my CSS][css]

[html]: https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/word-masters.html
[css]: https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/word-masters.css
[js]: https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/word-masters.js
[mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations
