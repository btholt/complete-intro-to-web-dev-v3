---
description: ""
---

Objects are un-ordered collections of data using keys and values. Arrays, in contrast, are **ordered collections of data**. If you put something in an array, it has an order. For example, you might a list of the days of the week.

```javascript
const daysOfTheWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
console.log(daysOfTheWeek);
console.log(daysOfTheWeek[0]);
console.log(daysOfTheWeek[1]);
console.log(daysOfTheWeek[6]);
```

You first can see how we declare an array, using `[ ]`. Inside of an array, you can store anything you can store in a variable. You can have an array of numbers, an arry of strings, an array of objects, an array of arrays, an array of arrays of arrays, etc.

You can also see above how we access individual elements in an array: we use square brackets again and then we reference the number that we want to access. Again, remember, the numbering starts at 0. So the first element is index 0.

Arrays also have many methods (another word for functions that live on an object) and properties (another word for key/value pairs) that live on them. Let's see some of those:

```javascript
const primeNumbers = [1, 2, 3, 5, 7, 11, 13, 17];
console.log(primeNumbers.length);
console.log(primeNumbers.join(" | "));
```

`primeNumbers.length` gives you back an number that is how long the array is. In this case there are eight elements in the array so it gives us back `8`. `primeNumbers.join(" | "))` takes your whole array and makes it into one string. THe `" | "` paramenter I'm passing is what I want put between each element, so you end up with the string `"1 | 2 | 3 | 5 | 7 | 11 | 13 | 17"`.

So what if I want to add an element to the array after I've created. Use `push`!

```javascript
const courses = [
  { teacher: "Will Sentance", course: "JavaScript: The Hard Parts" },
  { teacher: "Sarah Drasner", course: "Intro to Vue" },
  { teacher: "Brian Holt", course: "Complete Intro to React" },
  { teacher: "Steve Kinney", course: "Build Your Own Programming Language" },
  { teacher: "Scott Moss", course: "Intro to Node.js" },
];

courses.push({ teacher: "Jen Kramer", course: "Getting Started with CSS" });

console.log(courses);

courses[2] = { teacher: "Brian Holt", course: "Complete Intro to Databases" };

console.log(courses);
```

The first thing we do is add an element to the end using the push function that arrays have. It "pushes" the element on the end.

Below that, we're overriding index 2 with a new course. This will throw away what was there before and set it to be what we've set it to be.

Okay, now, given that, what if we wanted to `console.log` everything in the array? You already have all the tools to do that? Let's see to do it.

```javascript
const cities = [
  "Seattle",
  "San Francisco",
  "Salt Lake City",
  "Amsterdam",
  "Hong Kong",
];

// method 1
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}

// method 2
cities.forEach(function (city) {
  console.log(city);
});
```

The first way, using a for loop, we're using that `i` control variable which gets incremented each loop. We use that `i` to access each item in the array on each iteration of the loop. We have the loop stop when `i` gets equal to the `length` of cities. Very useful pattern. You'll see it a lot.

The second way is using a function that arrays have called `forEach`. This `forEach` method takes in a function and that function will be called once on each item of the array. It will pass that item into the function, which is what `city` is in this situation. Both are useful patterns to know. You'll use both frequently. While you're getting started, just use the one you feel comfortable with. They have different things that make them preferable in different situations but usually you can use either. Method 2 may be a bit more advance but I don't think you should be scared of it. For now prefer method 1. I just wanted you to see method 2.
