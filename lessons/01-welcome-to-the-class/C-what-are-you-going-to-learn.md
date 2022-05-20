---
description: ""
---

Let's talk about what you're going to learn throughout this course: how to write web sites and web apps. In the process we'll teach how to use all the tools necessary to code, to do a light bit of design, and how to continue forward afterwards. After the end of this course, you can reasoably expect to know how to code a website from scratch and be prepared to take more courses on the [Frontend Masters beginner path][fem].

## What is HTML?

HTML stands for hypertext markup language. You can think of it as the content on a webpage. As you're reading this content right now, the images and text are written in HTML. It's also the _structure_ of the content. You can group bits of HTML together. We'll get into this in a bit, but it's good to associate HTML with _structure_ and _content_.

If we were building a car together, you could think of the HTML as the materials we used to build the car: the frame, the doors, the steering wheel, the tires, etc. By themselves, the materials are inert: they don't _do_ anything by themselves or look particularly. They need to arranged into a coherent car (via CSS) and it needs an engine with all the wiring (via JavaScript) to actually do anything.

## What is CSS

CSS stands for cascading stylesheets. You can think of it as the _style_ of a website. What type of font is being used, what the background color is, what is bolded, what the spacing is, what the layout is, etc. CSS is basically just a series of rules that says "if an element matches this selector, apply this style."

Continuing our car metaphor, the CSS would be what color the car is, what the various trimmings, all the styling details. You could even say it would define if it's it left or right drive.

## What is JavaScript

You can have a complete webpage without any JavaScript, with just CSS and HTML. [Example.com][example] is an example of a totally valid website that has zero JavaScript on it. Lots of websites that don't need JavaScript do. We'll get into it later, but just know not everything needs JavaScript.

JavaScript is the programming language we are going to use today. There are many programming languages like C++, Python, Go, PHP, and many, many more. We are choosing JavaScript for the exact reason that every browser (Chrome, Firefox, etc.) can run JavaScript on a web page (whereas it cannot run any other language.) JavaScript was specifically invented for the purpose of running on webpages but it has now grown beyond that and is being run in a great many places. The skills you will learn writing JavaScript will translate to other languages. It's like learning a foreign language. If you learn French it makes learning Spanish easier. While distnct languages with their own words and patterns, many of the same underlying grammar principles are unchanged or similar

HTML and CSS describe a non-interactive webpage, like a page in a book. All the content, pictures, fonts, spacing, etc. is all there and it can be read. The page in a book is not interactive though; if you try to touch your book like a touchscreen, well, it's not going to do much. Think of JavaScript being the piece that transform a non-interactive page out of a book to a touchscreen app. Whereas you had text, font, colors, images, etc. all before, now you can have things move around, have pop ups, refresh content, start animations, all sorts of stuff.

This is a relatively simplistic take. There's overlap on these things e.g. both CSS and JS can do animations, just differently. But work under these definitions for now and then down the road you can explore the overlap.

[fem]: https://frontendmasters.com/learn/beginner/
[example]: http://example.com
