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

One constaint that normal Wordle has that _we are not_ going to do is that Wordle only lets you guess valid words. We'll skip that requirement in the name of simplicity.

Moreover, you need to call an API to get the secret word. Frontend Masters has created one that you can call here:

# TODO: put in API call documentation

You will need to do all the HTML, CSS, and JavaScript yourself. There are infinite goood and correct ways to do this so don't feel like you need to match my solution.

For reference, this took me about 100 lines of JavaScript, 50 lines of HTML, and 50 lines of CSS.

This is a hard one! Give it your best shot and tweet me the results!

- [Here is my HTML (you'll need to view source)][html]
- [Here is my JavaScript][js]
- [Here is my CSS][css]

[html]: https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/word-masters.html
[css]: https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/word-masters.css
[js]: https://btholt.github.io/complete-intro-to-web-dev-v3/project-files/word-masters.js
