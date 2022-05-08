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
[dog]: https://dog.ceo/dog-api/
[api]: https://github.com/toddmotto/public-apis
[breeds]: https://dog.ceo/dog-api/documentation/
[docs]: https://dog.ceo/dog-api/documentation/random
[pic]: https://dog.ceo/dog-api/documentation/breed
