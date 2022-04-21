---
title: "Organizing HTML"
description: ""
---

Let's talk about organizing HTML and how to make the most of it. This will help a ton once you get to the CSS section.

Let's say you're making a social media website and you're going to make the "news feed" section where you can see all the updates from your friends. A user would expect see a bunch of posts. Each post could have an author, a date that it was posted, a profile picture, and the message itself the user posted. Let's model that as HTML

```html
<div>
  <h2>@sassy_pants_mcgee</h2>
  <h3>Posted 15m ago</h3>
  <img src="http://pets-images.dev-apis.com/pets/dog25.jpg" alt="a doggy" />
  <p>
    You ever think about barking out the window? What would happen if I didn't
    bark at them? Keeps me up at night.
  </p>
</div>
```

Notice we keep everything together with a div. Like I said before, it's a container, a cardboard box. We have a post and keep it all together with an encapsulating div. We also could have used the `<article></article>` tag. What's the difference between article and div? As far as the browser is concerned, nothing. Keep in mind that you just write code once, you also have to go back later and maintain it. What if there's a bug later and you need to debug what's wrong with it? It's good to write code that makes it every obvious what you're trying to do. In this case, article lets your future self (or coworkers) know that this is a self-contained bit of content. Divs have no meaning. Like a cardboard box, it's what is inside that matters. An article is a cardbox with a label on it that says it's a self-contained bit of content. Both are valid here, but let's roll with divs (since you'll more commonly see that.)

Let's make this better. Let's add classes.

```html
<div class="social-post">
  <h2 class="user-name">@sassy_pants_mcgee</h2>
  <h3 class="posted-date">Posted 15m ago</h3>
  <img
    class="profile-picture"
    src="http://pets-images.dev-apis.com/pets/dog25.jpg"
    alt="a doggy"
  />
  <p class="social-post-text">
    You ever think about barking out the window? What would happen if I didn't
    bark at them? Keeps me up at night.
  </p>
</div>
```

Notice it looks exactly the same. But now try reading the code we just wrote instead of the one from before. Everything is way clearer what it is. We took a label gun and labelled everything. This code is way easier to maintain.

What's more, this is reusable now. We could have a full feed of these.

```html
<div class="social-feed">
  <div class="social-post">
    <h2 class="user-name">@sassy_pants_mcgee</h2>
    <h3 class="posted-date">Posted 15m ago</h3>
    <img
      class="profile-picture"
      src="http://pets-images.dev-apis.com/pets/dog25.jpg"
      alt="a doggy"
    />
    <p class="social-post-text">
      You ever think about barking out the window? What would happen if I didn't
      bark at them? Keeps me up at night.
    </p>
  </div>
  <div class="social-post">
    <h2 class="user-name">@TailCurious</h2>
    <h3 class="posted-date">Posted 18m ago</h3>
    <img
      class="profile-picture"
      src="http://pets-images.dev-apis.com/pets/dog26.jpg"
      alt="a different doggy"
    />
    <p class="social-post-text">
      You ever notice that white bit of fluff behind you? Is that just me? I
      always try to chase it but it's always gets away. #ScaryTails
    </p>
  </div>
  <div class="social-post">
    <h2 class="user-name">@haveUrCakeAndEatIt2</h2>
    <h3 class="posted-date">Posted 21m ago</h3>
    <img
      class="profile-picture"
      src="http://pets-images.dev-apis.com/pets/dog27.jpg"
      alt="a doggy"
    />
    <p class="social-post-text">#BirthdayGrrrrrrrrrrl</p>
  </div>
</div>
```

Now I used a div to enclose the entire social feed, and then I reused our structure from above to remake a bunch of the same post. Pretty neat, huh? We build one component and then reuse it over and over again. I imagine then we'd put the `social-feed` div inside another `news` component and then that inside of our `app` page. Our `app` div might a navbar, the news div, a footer, a sidebar, and other things. But we'd just do nested things like we did with our `social-feed`.

Let's construct a navbar for fun.

```html
<nav>
  <ul class="nav-list">
    <li class="nav-list-item">
      <a class="nav-link" href="/">Home</a>
    </li>
    <li class="nav-list-item">
      <a class="nav-link" href="/news">Newsfeed</a>
    </li>
    <li class="nav-list-item">
      <a class="nav-link" href="/about">About</a>
    </li>
    <li class="nav-list-item">
      <a class="nav-link" href="/contact">Contact</a>
    </li>
  </ul>
</nav>
```

A few things here:

- It obviously isn't styled. We'd expect to look like the navbar on this site: horizontal and fixed to the top. Don't worry about that for now, we fix all that with CSS. For now we're writing just HTML and we're just concerned about the _content_ and not the _style_. (CSS can basically make any content look like anything you want.)
- Those links don't go anywhere if you click them. They're relative links. If you have an absolute link like `href="www.google.com"` that will actually take you to Google. But if your website were `www.example.com` and on there you had link to `href="/about"` it would take you to `www.example.com/about`. It's relative to the base URL. The leading slash means it's always `www.example.com/about` no matter where you are on the site. If you're `www.example.com/blah` and there's a link to `href="about"` with no slash, the link will take you to `www.example.com/blah/about` whereas `href="/about"` will take you to `www.example.com/about`.
- We didn't get nav a class. If you only have one nav that could make sense. If you have many nav (maybe nav in the footer and one in the sidebar) then you'd want to give it a class. Not everything _has_ to have a class.
- I chose to do this with a ul and li. You could have done divs inside of divs and just used classes to differentiate them. Both totally valid ways of doing it.
- There's no magic way to name classes. I used `nav-list` but could have just as easy been `head-navigation`. It's up to what makes sense to you. Naming things is hard.

There you go! HTML is 95% just what I've shown you.
