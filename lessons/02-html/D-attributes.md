---
description: ""
---

Attributes allow you to modify behavior of an HTML attribute. You've already seen a few of them but we'll go into a few more examples of them.

A really good example we have seen already is the `href` attribute of the `<a href="www.frontendmasters.com"></a>` tag. By modifying the href we're modifying what the tag does. It's contextual as well: `href` only works on `a` tags. You can't add a `href` to a `div` and expect to suddenly work as a link.

Another one we say is the `type` attribute on the `input`. By changing the type you're changing what sort of input is being show

```html
<!-- The default, if you leave off the type you get the "text" type -->
<input type="text" />

<input type="color" />
<input type="file" />
<input type="number" />
<input type="datetime-local" />
<input type="radio" />
<input type="checkbox" />
```

`href` and `type` are specific to a few tags. There are other attributes like `class` and `id` that are universal and can be applied to (nearly) all tags. These themselves are inert; they don't do anything, but allow other things to find them later (we'll cover them heavily in CSS and JS sections.)

```html
<h3 class="the-red-one">This one is red</h3>
<h3 class="the-blue-one">This one is blue</h3>

<style>
  /* don't worry about this yet, it's CSS */
  .the-red-one {
    color: red;
  }

  .the-blue-one {
    color: blue;
  }
</style>
```

Classes are more useful than IDs. You should use them 95% of the time. A class is reusable. Now I could create another tag (doesn't even have to be another h3) and that CSS style would be reapplied to it! You can also give multiple classes to one tag.

```html
<h3 class="the-red-one bolded">This is red and bold</h3>

<style>
  .bolded {
    font-weight: bold;
  }
</style>
```

## IDs

Classes are far more useful. However there are IDs that you may need occasionally. A key thing is that an _ID is unique_. Whereas I've already used the `the-red-one` class twice, you can't do with IDs. They're designed to not be reusable; they're unique to the page.

Again, in general, even if you happen to have just one of something, it's best to just use classes for everything and more-or-less pretend that IDs are not an option at all. You really only want to use IDs when something is unique and you want to make sure it stays unique. A good example is if you have a JavaScript app that needs to put its HTML inside a specific div, you could use an ID for that (you could still use a class and some people do.)

```html
<h3 id="brand">My Site's Branding</h3>
```

For now just use classes. It'll make everything easier.
