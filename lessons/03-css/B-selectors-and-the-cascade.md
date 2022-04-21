---
description: ""
---

Before this section, you learned how to make CSS rules to affect how your webpage looks. We showed you how to make a CSS rule so that you can make every `p` on the page have green text instead of black which is amazing. However, as you start building bigger websites, you begin to have more complicated needs: you may need _this_ `p` to have green text and that `p` to have `red` text. We haven't shown you yet how to make two of the same tag be styled different. Let's start showing you how to do this so you can achieve things like this:

<p style="color: red">This is a red p.</p>
<p style="color: blue">This is a blue p.</p>

So how do we achieve this black magic? Do you remember [the section on classes](/complete-intro-to-web-dev-v3/lessons/html/attributes) in the HTML portion? We're going to use that now. Classes allow us to style the same **tags** (e.g. `p`, `div`, `span`, etc.) differently because we can select the class instead of the tag. This is where having useful class names helps. So now, if we have an `h1` that's the title of a blog post and an `h1` that's the branding logo at the top, we can do this:

```display-html
<h1 class="branding">My Super Cool Brand</h1>
<!-- other htmls … these don't have to be sibiling tags -->
<h1 class="blog-post-title">My Cool Blog Post</h1>
```

We can CSS to address these two differently. Like so:

```html
<style>
  .branding {
    color: red;
  }

  .blog-post-title {
    color: limegreen;
  }
</style>
<h1 class="branding">My Super Cool Brand</h1>
<h1 class="blog-post-title">My Cool Blog Post</h1>
```

In the CSS, notice the `.` (period) before the class name. This is how you differentiate between a tag name (like `h1`) and a class name (like "branding".)

So what should you use, generally speaking. Classes. Almost always classes. This is the consensus in the front end development community. Classes are the best way to style web pages. There are rare occasions that it may be useful style on tags (like if you literally want to style every `a` tag on the page) but those cases are rare. Use classes. Err on the side of using classes too much.

## The Cascade

I wish we could stop here. This is the part where CSS can become unnecessarily complicated, even if the ability to use the cascade is occasionally useful. Before we dive in, avoid using this ability of CSS where-ever possible. It'll save you hours-and-hours of debugging, I promise.

So, the cascade. What if you have two CSS classes that have conflicting properties? Which one "wins" and is applied? Let's see an example.

```html
<style>
  .title {
    color: red;
  }

  .title {
    color: green;
  }
</style>
<h1 class="title">Cool Title</h1>
```

In this one, we have two rules with the same class (which is "legal" CSS.) So which one gets applied? Since they're equal, the one that comes **last** wins. So in this case, the `h1` would be green. So remember that rule (we'll recap at the end): when everything is equal, the _last one_ gets applied. It'd work the same if we had two `h1` selectors as well.

Okay, one step more complicated:

```html
<style>
  .main-brand-2 {
    border: 1px solid black;
    color: red;
  }

  .title-2 {
    color: green;
  }
</style>
<h1 class="title-2 main-brand-2">Branding here</h1>
```

First of all, yes, one tag can have multiple classes, and that can be useful. Okay, so what is this going to look like? In the eyes of CSS, those two selectors are equal since they both have the same **specificity** (key word, you'll see it used a lot when talking about CSS.) They both specific one class which makes them equal. So in this case, since `.title` comes last in the CSS, it wins. The color will be green. What about the border? Since `.title` doesn't conflict, it'll have a black border too. So keep in mind that each of these "conflicts" is resolved on a property-by-property basis. So the end result in an `h1` that has a black border and green font.

```html
<style>
  .main-brand-3.title-3 {
    color: red;
  }

  .title-3 {
    color: green;
  }
</style>
<h1 class="title-3 main-brand-3">Branding here</h1>
```

This how you add two classes to one selector. Notice there's no space between the two class names (that means something else.) The selector `.main-brand.title` will only match a tag that has **both** classes. If has only one of the two, it will not match. As you may imagine, since it has two classes, it's more specific, and therefore it wins.

Okay, next steps here:

```html
<style>
  .title-4 {
    color: orange;
  }

  h1 {
    color: green;
  }
</style>
<h1 class="title-4">Another h1</h1>
```

This one is less obvious. Now we have to understand specificity even more. **A class is considered more specific than a tag**. So a class selector "overpowers" a tag selector. It's more specific. Therefore, even though the `h1` selector comes last, the `.title` wins because it's more specific. This is why it's useful to do _everything_ using classes; you don't need to worry about these specificity wars if everything is equal and try to have it some you don't have conflicting rules (which is not always possible.)

A useful but imperfect way to think about this is to think of specificity like a number. The class is like the tens digit, and the tag is like the ones digit. So something with one class selector would have a number `10` specificity and something with one tag selector would a specificity of `1`. The bigger number wins. This is imperfect because one class selector is still bigger than 10 tag selectors, but it's a useful mental device to quickly evaluate mentally which tag is more specific.

Last one and we'll move on:

```html
<style>
  h1.main-brand-5 {
    color: red;
  }

  .main-brand-5.title-5 {
    color: orange;
  }

  .main-brand-5 {
    color: green;
  }
</style>
<h1 class="title-5 main-brand-5">Another Example</h1>
```

The first selector, `h1.main-brand` is how you select both a tag and a class at the same time. As you may imagine, this is more specific than the third selector, `.main-brand`. If you remember our shortcut trick, the first selector would be 11, the second would be 20, and the last would be 10, making the second selector the most specific, and indeed it is. The first selector isn't a good idea to do; using a tag and a class is usually a bad idea and means you're likely doing something weird in your code. I'm just showing you because it does happen in a lot in existing code.

## IDs and !important

The next two I'm going to show you should nearly never use. These are wrecking balls when most problems require carpenter's hammers. I show you because a lot of tutorials online and existing code has them in there. So please, refrain from using these tools unless you have good reason (there are some problems that do require wrecking balls.)

```html
<style type="text/css">
  #site-brand {
    color: red;
  }

  h1.nav-head.nav-main.other-useful-class {
    /*
     * this class is way too specific; never have a class selector so long
     * it's ridiculous and just to illustrate a point
     */
    color: green;
  }
</style>
<h1 id="site-brand" class="nav-head nav-main other-useful-class">
  The Brand of my Website
</h1>
```

You would think by how long the second class is, it'd win. Not the case. ID selectors (`#site-brand`) win over class selectors. If tags are the one place and classes are the tens place, then IDs are the hundred place. Using that, the first one is 100 and the second is 31. Again, keep in mind this is just useful for a quick device to look at specificity. Still one ID is greater than fifty classes.

Do you want to wreck the wrecking ball? Using the previous HTML, look at this CSS:

```html
<style>
  #site-brand-2 {
    color: red;
    border: 1px solid red;
  }

  .nav-head-2 {
    color: green !important;
    border: 1px solid green;
  }
</style>
<h1 id="site-brand-2" class="nav-head-2 nav-main-2 other-useful-class-2">
  The Brand of my Website
</h1>
```

Rekt. The `h1`'s `color` is going to be green but the `border` is going to be red. This is a _terrible_ idea. Never use `!important`. As you can see, it's gets messy quickly and it makes the logic really tough to follow even for experienced devs.
