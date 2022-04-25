---
title: "AJAX"
description: ""
---

Web development is full of stupid acronyms. AJAX is one of the worst offenders of this because it actually means something different than what it does. It stands for "asynchronous JavaScript and XML" which is not what it does. However it morphed and evolved and now it's the term that we use to represent what you do when a website requests more information from a server after the page has loaded.

We're going to use AJAX to request data from an API (lol acronyms.) An API is application programming interface, but what we mean we say API in this context is it's a public server that will allow us to make AJAX calls and it will respond. Most big websites will have some sort of public API, like Twitter for example. There are many [public APIs][api].

The API we're going to use is [dog.ceo][dog]. It's a simple, silly API that will give you back random pictures of dogs. Awesome. Make a new project in your favorite editor, add an index.html with the following:

```display-html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Dogs</title>
  </head>

  <body>
    <h1>Doggos</h1>
    <div class="doggos"></div>

    <script src="./doggos.js"></script>
  </body>
</html>
```

Make a new file called `doggos.js` and put the following:

```javascript
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);

promise
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processedResponse) {
    console.log(processedResponse);
  });

console.log("this will log first");
```

We're using a browser function here called `fetch`. `fetch` is the new way of doing AJAX and it is so much easier than the old one. Never use the old one. What `fetch` returns is called a **promise** and it's similar to a callback that we used before. A promise, like callbacks, allows you to deal with things that don't happen immediately, things that are asynchronous. In this case, we're waiting for the API to respond with the information we asked for. It takes to request more information over the Internet and we don't want to hold up the rest of our code.

With a promise, it's an object that represents the future answer to whatever you asked. That's sort of weird, but it ends up being convenient. So, we have this promise, and with it we call the `then` method on it and give it a function to run once that asynchronous action (the API request) finishes.

The response will look something like:

```json
{
  "status": "success",
  "message": "https://images.dog.ceo/breeds/affenpinscher/n02110627_11783.jpg"
}
```

If that looks like JavaScript it's because it's technically valid JavaScript! It makes it really easy to use with JavaScript. Once it finishes, it gives you back an unuseful blob of stuff though. We know this blob is actually given to us in a special format called **JSON** (lol more acronyms.) JSON stands for JavaScript Object Notation, and it's a very common way to exchange data over the Internet because it's machine readable but also pretty readable to humans. Because we know this response will be in JSON (we know that because the [documentation][docs] say so) we can say process this blob into a JavaScript object we can use.

However processing this into JSON is not always trivial. If you have a lot stuff to process, it can take a lot of time and computer processing to do so. As such, this made asynchronous as well and it returns a promise. That's why we do the `return processingPromise;` line. This is called **promise chaining**. The next `then` will be called once this processing is finished.

Once finished, it's a normal JavaScript we can access normally. So try (inside of the function with `processedResponse`): `console.log(processedResponse.status)`. It should log out `"success"`. Cool, right?

So now what I want to do make an image on the page of a random doggo. This API happens to do just that! So, let's make it happen. Make you file say:

```javascript
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const promise = fetch(DOG_URL);
const doggos = document.querySelector(".doggos");

promise
  .then(function (response) {
    const processingPromise = response.json();
    return processingPromise;
  })
  .then(function (processedResponse) {
    const img = document.createElement("img");
    img.src = processedResponse.message;
    img.alt = "Cute doggo";
    doggos.appendChild(img);
  });
```

Here we create an `<img />` tag and append it into the DOM via `appendChild`. Wouldn't it be cool if we could do it multiple times? Let's do it!!

```javascript
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.querySelector(".doggos");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}

document.querySelector(".add-doggo").addEventListener("click", addNewDoggo);
```

<!-- Now you can add as many doggos as you want! Here's my example:

<iframe class="doggos" height="595" title="Doggos" src="/complete-intro-to-web-dev-v3/doggos.html" frameborder="no" allowtransparency="true"></iframe> -->

[dog]: https://dog.ceo/dog-api/
[api]: https://github.com/toddmotto/public-apis
[breeds]: https://dog.ceo/dog-api/documentation/
[docs]: https://dog.ceo/dog-api/documentation/random
[pic]: https://dog.ceo/dog-api/documentation/breed
