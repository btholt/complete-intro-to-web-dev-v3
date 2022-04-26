---
title: "JSON"
description: ""
---

Some times you want to request additional data from the server after your page has loaded. Imagine like scrolling through your Facebook or Twitter feeds: when you reach the bottom it requests more data from the server to keep your infinite doomscroll going.

Requesting data from the server after the page has loaded is called AJAX. AJAX is an old acronym that has been around for a while and actually now doesn't make any sense but we still use it. It stands for asynchronous JavaScript and XML (we don't typically use XML anymore.) However the name AJAX stuck so that's what it means.

Before we hoptoo much into the AJAX portion, let's spend a bit with JSON. We need some standard language that your frontend website can speak with your backend, someway to encode messages. Think of it like morse code: we need some way that both the sender and receiver of messages can encode their messages so it's understood by both.

This is what JSON is. It stands for JavaScript Object Notation and it looks a lot like, surprise-surpise, JavaScript objects.

```JSON
{
  "name": "Luna",
  "age": 10,
  "breed": "Havanese",
  "location": {
    "city": "Seattle",
    "state": "WA"
  }
}
```

Looks like valid JavaScript, right? That's because it is! We could literally copy-and-paste that code straight into our JavaScript code and it'd just work. That's because 99.999999% of all JSON is valid JavaScript ([there are some corner cases][json] but I'd bet most devs didn't even know that.)

So let's try it out. Let's pretend we submitted a request to a server and got back a response. The response will always come back as a string so we have to convert it to an object. Luckily JavaScript can do that for us.

```javascript
// pretend this came from a server instead of me just declaring it here.
const responseFromServer = `{"name": "Luna","age": 10,"breed": "Havanese","location": {"city":"Seattle","state": "WA"}}`;

console.log(responseFromServer); // a string

const responseObject = JSON.parse(responseFromServer);

console.log(responseObject.name); // just the name
console.log(responseObject.location.city); // just the city
console.log(responseObject); // the whole object
```

That's what the JSON builtin object is for, handling data to and from JSON.

## Escape Characters

You probably see a lot of `\` being added. These are called escape characters. Notice it's showing the string between `"` but the JSON uses `"` inside of it. The way you prevent that `"` from ending the string is using `\"` to signify that you're wanting to use the `"` inside the string. So if you wanted to have a string of just one `"` you'd need to do `const quotes = "\""`. Or you could just do `'"'` too!.

What if you want to have a `\` in the string? You'd use `\\` to signify one `\`.

## JSON.stringify

Let's use to go in the opposite direction:

```javascript
const dog = {
  name: "Luna",
  age: 10,
  breed: "Havanese",
  location: {
    city: "Seattle",
    state: "WA",
  },
};

const objString = JSON.stringify(dog);
console.log(objString);
```

Yes, the function name is stringify. This takes an object and encodes it as valid JSON. Very useful.

One more thing to do. Let's say you have a big object and you want to print it out in a useful way. Let me show you how to do that.

We'll use this HTML.

```display-html
<pre>
  <code id="code-block"></code>
</pre>
```

<pre>
  <code id="code-block"></code>
</pre>

```javascript
const dog = {
  name: "Luna",
  age: 10,
  breed: "Havanese",
  location: {
    city: "Seattle",
    state: "WA",
  },
};

const el = document.getElementById("code-block");
el.innerText = JSON.stringify(dog, null, 4);
```

- `<pre>` means pre-formatted. It means respect whitespace and don't mess with the formatting
- `<code>` means a block of code
- The two tags together mean you can have a nicely formatted code block. Useful for quick debugging when you can't use console.log.
- `JSON.stringify(dog, null, 4)`
  - The `null` you can ignore. You can give it a function that will _replace_ things in your object. I don't even know how it works
  - The `4` is how much indentation you want. If you give it `0` it puts not space in. If you put `8` you'll get a lot of whitespace.

[json]: https://stackoverflow.com/questions/23752156/are-all-json-objects-also-valid-javascript-objects

<!--

# TODO To review

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

[dog]: https://dog.ceo/dog-api/
[api]: https://github.com/toddmotto/public-apis
[breeds]: https://dog.ceo/dog-api/documentation/
[docs]: https://dog.ceo/dog-api/documentation/random
[pic]: https://dog.ceo/dog-api/documentation/breed

-->
