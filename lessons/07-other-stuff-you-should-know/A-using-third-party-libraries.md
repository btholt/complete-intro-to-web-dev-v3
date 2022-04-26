---
description: ""
---

One of the beauties of coding in the modern era is that many people share their code so that we can benefit from their work, cost-free. It's a mix of benevolence, wanting to move the world forward, trying to make a name for themselves, adding to their own résumé, and hoping that you too will open source your code so they can use it. One of the most important things we do as a JavaScript developer is integrate these modules of code. We'll see two ways to do that today.

There are so many things we could integrate. There are literally hundreds of thousands of libraries for JavaScript. But today we're going to use one called [Popmotion][pop]. Popmotion is an amazing library that allows you to make super cool animations. I'm not any good at doing animations myself and I'm certainly not very artistic. But these smart people took these difficult concepts and made them approachable. We get to stand the shoulders of giants.

Open a new project, put this in the index.html:

```display-html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Animation</title>
    <link href="./animation.css" rel="stylesheet" type="text/css" />
  </head>

  <body>
    <h1>Animation</h1>
    <div class="ball"></div>

    <script src="https://unpkg.com/popmotion@11.0.3/dist/popmotion.global.min.js"></script>
    <script src="./animation.js"></script>
  </body>
</html>
```

The order of the script tags is important. The first one is a compressed version of the library that makes it available for us to use in animation.js (which we're about write). If you don't put it first, then it won't be available for us to use.

Make a new CSS file, put:

```css
.ball {
  width: 100px;
  height: 100px;
  background-color: #0074d9;
  border-radius: 50%;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 400px;
}
```

<style>
  .ball {
    width: 100px;
    height: 100px;
    background-color: #0074d9;
    border-radius: 50%;
    position: relative;
  }
</style>

When you put `border-radius: 50%;` it makes the corners so rounded that the div actually ends up being a circle.

Make a new file called animation.js, put in it:

```javascript
const ball = document.querySelector(".ball");
popmotion.animate({
  from: "0px",
  to: "100px",
  repeat: Infinity,
  repeatType: "mirror",
  type: "spring",
  onUpdate(update) {
    ball.style.left = update;
  },
});
```

<div class="ball"></div>

It's less important here you actually understand how Popmotion works and it's more important that you understand how we got it on the page to be interacted with. Notice that we're using this `popmotion` object. This is being injected into the page by the script we loaded before ours in the HTML. This makes it possible for us to use the object.

The code we put there uses the Popmotion library to make it so the blue ball springs back and forth using realistic physics. Really cool, right? This is not something the browser knows how to do natively, but using JavaScript it can! If you want to play more with Popmotion, [see their docs][pop].

So this is the quick and easy way to integrate a library. An average website will have at least ten and as many as hundreds of these dependencies. It's not feasible to put all those script tags in your HTML. There is a better way!

## Building Your Code

If you haven't, [install Node.js][node]. I have Node.js 16 installed but any version over 10 should work fine. Node.js is a program that allows you to run JavaScript from the terminal. You can run web servers with it (which we will at the end) or build really cool tools. We're going to build our project using one of the cool tools.

Once you have Node.js installed, head to your terminal. When you installed Node.js, you also will have gotten a tool called `npm`. `npm` does _not_ stand for Node.js Package Manager, so they say … but yeah I think it totally does. Anyway, that's what it does. It manages JavaScript packages. What it allows you to do is install things from the npm registry. Let's try. Run the following:

```bash
npm install --global parcel
```

It's going to install a bunch of stuff for you so that you can then use the tool [parcel][parcel]. Parcel is a tool that makes it super simple to bundle all of your code together into one neat little package. You can also install whatever you want from npm and include that too! From there:

1. Okay, go to your index.html and delete the `<script src="https://unpkg.com/popmotion@11.0.3/dist/popmotion.global.min.js"></script>` line.
1. Go to your animation.js file and add to the top of the file as the very first line: `const popmotion = require("popmotion");`. This will tell the bundler to bring in Popmotion for you.
1. Navigate in your terminal to the root of your animation project. Run `npm init -y`. This will generate a `package.json` file for you which is how Node projects handle their configurations. We need to be able to keep track of dependencies and this will do that.
1. Run `npm install popmotion@11.0.3`. This will install Popmotion locally on your computer instead of loading it from somewhere else. Now your users will download just one file from you instead one file from you and one file from another server. Notice in your animation project there's now a `node_modules` directory: this is where all your installed dependencies (which is what you call the libraries you install from npm) go.
1. Run `parcel index.html`. It should tell you that a server is running at http://localhost:1234 and it'll tell you it took like 8 seconds to bundle everything for you.

Now you'll have a local development server working for you! Open that localhost link and see your same site running. Localhost is an alias for your own computer that the browser understands. The `:1234` is the port it's running on. Think of it like selecting the right input on your TV. If you plug your Xbox into HDMI3, you have tuned your TV to HDMI3 in order to see the picture and hear the sound. Same thing with ports. Your computer has thousands of them, you just have to tune to the right one to connect to it.

It may be confusing how Parcel knows how to put everything together. We pointed Parcel to the entry point, our HTML file. Our HTML points at both the CSS file and the JS file via a `link` tag and a `script` tag respectively. It then follows these and bundle those up for you. It then makes those into pieces that your browser can understand. If you want to, you could make another file and require that too. If you made a file called "rotate-animation.js", you could use the `require` function at the top of your file and bring that in too. You'd just put `const rotateAnimation = require('./rotate-animation');` and it'd bring in that too. You need the `./` or Parcel assumes you mean a Node module (like Popmotion is) instead of a file you wrote. Also, Node assumes you mean `.js` so you can leave it off (you can also include it if you want to).

`require('module-name')` is the old way of doing module imports. The new way uses `import` instead (there are a slew of reasons that we won't get into now). New browser-oriented code should be written in this new way.

```display-javascript
import { animate } from "popmotion";

const ball = document.querySelector(".ball");
animate({
  from: "0px",
  to: "100px",
  repeat: Infinity,
  repeatType: "mirror",
  type: "spring",
  onUpdate(update) {
    ball.style.left = update;
  },
});
```

This will be the syntax of JavaScript going forward so I'd suggest you adopt this one. Node.js isn't quite totally prepared for it yet, so we'll work with Commonjs for it, but eventually Node will get there too.

Notice that your Parcel process hasn't stopped yet. It's still running the development server. If you want to stop it press CTRL+C. That's the universal way to stop any program you're running in the command line.

## Next Steps

From here, this is a good head start to get into other things like frameworks and libraries. Luckily, Frontend Masters is bursting at the seams with amazing videos on those things. Check out:

- [Complete Intro to React][react] by Me!
- [Introduction to Vue.js][vue] by Sarah Drasner
- [Building Awesomer Apps with Angular][angular] by Lukas Ruebbelke
- [Introduction to Data Visualization with d3][d3] by Shirley Wu

[pop]: https://popmotion.io/
[gh]: https://github.com/popmotion/popmotion
[node]: https://nodejs.org/
[parcel]: https://parceljs.org/
[react]: https://frontendmasters.com/courses/complete-react-v7/
[vue]: https://frontendmasters.com/courses/vue-3/
[angular]: https://frontendmasters.com/courses/angular-13/
[svelte]: https://frontendmasters.com/courses/svelte/
[d3]: https://frontendmasters.com/courses/d3/
