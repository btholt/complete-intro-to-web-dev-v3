---
description: ""
title: "AJAX"
---

What is an API? An application programming interface is a URL that you can make requests to get information back from. It's like website but only for machines. It's a method that one computer can request information from another.

> Note that API is also used to describe how something is used. If I wrote a dog object in JavaScript and gave it two methods: `eat()` and `bark()`, you could those two methods its "API". A similar but slightly different meaning for the word. I just point that out because it can be confusing. For the rest of this course, we're talking about endpoints that we can call to get data from.

Now that we speak the language of APIs, let's dive into making some server requests. Let's walk through the hypothetical process.

Let's say you're making a weather page where the user enters their zip code and gets back their forecast for the day.

1. The user navigates to your page and the page loads.
1. The user types `98109` into the search bar and hits enter
1. Your app makes a request to `api.example.com/weather?zip=98109`
1. The API response `{ "temperature": 75, units: "F" }`
1. Your app decodes the string to an object using `JSON.parse`
1. Your app updates the page to say "The current weather is 75ºF"

So let's dive into a few things:

- Who is makes the API? It depends. It could be you; your frontend could be requesting against a server you yourself wrote (a topic for a different class.) Or it could be against a myriad of public and free APIs. Or it could be a service you pay for.
- [Check out these publically available APIs][apis]. [dog.ceo][dog] is a favorite of mine.
- In our case, we're going to make requests an API that Frontend Masters maintains for us. [See here][pets] to see an example request.
- Whats is the `?zip=98109` part of the request. This is called a query string. It allows us to send parameters to a request (like sending parameters to a function) that it can use. In that case, we're sending the zip code we want the weather for. If you want multiple queries, they are separated by an `&` e.g. `example.com/weather?zip=98109&day=tomorrow`.
- What variables you send via querystring will be determined by the API.

Okay, so let's make our first request to the dog API. I'm going to be attaching this to a button so we don't hammer our poor friend's APIs. Running these APIs isn't free.

> I don't take responsibility for what images this gives back. They should all just be cute pups.

```display-html
<button id="dog-btn">Gimme Doggo</button>
<div id="dog-target"></div>
```

<button id="dog-btn">Gimme Doggo</button>

<div id="dog-target"></div>

```javascript
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.text();
      return processingPromise;
    })
    .then(function (processedResponse) {
      const dogObject = JSON.parse(processedResponse);
      const img = document.createElement("img");
      img.src = dogObject.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}

document.getElementById("dog-btn").addEventListener("click", addNewDoggo);
```

Let's dissect this.

Requests take time. The process of calling out to the Internet, reaching the server, the server processing, responding, and coming back takes time. It could be very fast. It could be a minute. You don't know until it happens. You need to have the ability to _wait_ in your code. This is called async code, the A in AJAX.

JavaScript has several ways of dealing with this. We're using a way called promises. A promise represents a future value. With a promise, you can give it a function with its `then` function to run whenever it gets its ansewr back. In this case, we say "hey, you're going to get some text back from this API, so we need that text.

`fetch` is a function (builtin for the browser) that allows you to give it a URL like `https://dog.ceo/api/breeds/image/random` and it will try to get information from that API. In this case we're asking for a random image of a dog.

`fetch` gives you back a promise. Then we need to tell it what we think the API is going to send us back. In our case we're saying it's going to be `text()` from the API. There are others (and I'll show you one in a sec.)

You can do what's called **promise chaining**. This allows you to do one async action after another. In our case, we don't know how long it will take to transform our response into text (it's basically instant and usually is but it could not be). In any case, by **returning the promise** at the end of the first `then`, we then can use its data in the second `then`. That's why that's weird that way.

In the second `then` we read the `message` which has the URL, we create an `img` tag, and append it to the DOM. The result is we get a cool dog pic!

Okay, let's tweak it minorly.

```display-html
<button id="dog-btn">Gimme Doggo</button>
<div id="dog-target"></div>
```

<button id="dog-btn2">Gimme Doggo</button>

<div id="dog-target2"></div>

```javascript
const DOG_URL = "https://dog.ceo/api/breeds/image/random";

const doggos = document.getElementById("dog-target2");

function addNewDoggo() {
  const promise = fetch(DOG_URL);
  promise
    .then(function (response) {
      const processingPromise = response.json(); // json instead of text
      return processingPromise;
    })
    .then(function (processedResponse) {
      // we get to skip this line since it'll already be an object
      // const dogObject = JSON.parse(processedResponse);

      const img = document.createElement("img");
      img.src = processedResponse.message;
      img.alt = "Cute doggo";
      doggos.appendChild(img);
    });
}

document.getElementById("dog-btn2").addEventListener("click", addNewDoggo);
```

A slight difference, but if we know we're going to get JSON back from the API, fetch can do the parsing directly for you with the `json()` function.

[apis]: https://github.com/toddmotto/public-apis
[dog]: https://dog.ceo/dog-api/
[pets]: http://pets-v2.dev-apis.com/pets
