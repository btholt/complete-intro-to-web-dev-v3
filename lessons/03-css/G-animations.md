---
description: ""
---

CSS animations are a deep pool of knowledge and we're just going to look at a few of the techniques. [You can achieve some truly amazing things with _just_ CSS animations][solar-system]. You can also use JavaScript with CSS to make anything you can imagine.

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

## Easing

Animation implies some sort of change over time. You're going from 0 to 1 in some capacity. The rate of change can be manipulated to achieve some cool effects. In the previous example you saw a linear function (these effects are called functions) where it's just a smooth line between 0 and 1. Let's check out the other possibilities.

```html
<style>
  @keyframes move {
    to {
      translate: 50px;
    }
  }
  .dancer {
    position: relative;
    display: inline-block;
    font-size: 30px;
    position: absolute;
    right: 0;

    /*
    this is the log way of doing:
    animation: move 1s infinite alternate;
    */
    animation-name: move;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  .dancers-list {
    width: 100%;
    max-width: 300px;
    position: relative;
  }

  .linear {
    animation-timing-function: linear;
  }
  .ease {
    animation-timing-function: ease;
  }
  .ease-in-out {
    animation-timing-function: ease-in-out;
  }
  .ease-in {
    animation-timing-function: ease-in;
  }
  .ease-out {
    animation-timing-function: ease-out;
  }
  .cubic-bezier {
    animation-timing-function: cubic-bezier(0,1,.5,1);
  }
</style>

<ul class="dancers-list">
  <li>linear: <span class="dancer linear">💃</li>
  <li>ease: <span class="dancer ease">💃</li>
  <li>ease-in-out: <span class="dancer ease-in-out">💃</li>
  <li>ease-in: <span class="dancer ease-in">💃</li>
  <li>ease-out: <span class="dancer ease-out">💃</li>
  <li>cubic-bezier: <span class="dancer cubic-bezier">💃</li>
</ul>
```

Notice all of them some sort of what we'd call "rubber-banding" effect where it speeds up and slows down in some way. Imagine we could use ease-out to simulate the gravity of a bouncing ball or something like that.

The last one, cubic-bezier allows you to define your own curve via mathematics that I don't understand well enough to explain to you. But I wanted to show you if you have exact needs that one of the functions doesn't fit you can accomplish with cubic-bezier.

[Read more on the MDN here][mdn]

## Beyond Positioning

I've been showing you how to do this with positioning since it's the easiest to visualize. _Many_ CSS properties are able to be animated so let's see one example here.

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

[solar-system]: https://codepen.io/juliangarnier/pen/krNqZO
[mdn]: https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function
