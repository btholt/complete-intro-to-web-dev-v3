## Types of Tags

So let's explore some of the essential tag types.

`h1`, `h2`, `h3`, `h4`, `h5`, and `h6` – Headings. These are the six levels of headings and subheadings you can have. You can see up top of this page we have `HTML` which is an h1 and then below that we have `Types of Tags` which is an h2. An h2 is a subheading to an h1. An h3 is a subheading to a h2. Some schools of thought say each page should only have one h1. I'm of the opinion that just use these as it feels appropriate to. Like formatting a Microsoft Word document, there's no "correct" way to do it, just different ways that make more or less sense. Example `<h1>Document Title</h1>`.

```html
<h1>This is an h1!</h1>
<h2>This is an h2!</h2>
<h3>This is an h3!</h3>
<h4>This is an h4!</h4>
<h5>This is an h5!</h5>
<h6>This is an h6!</h6>
```

`p` – Paragraph. You'll put a paragraph of text together inside of a `p` tag. Only text goes in `p` tags. Each one of these paragraphs is a `p` tag. Example: `<p>A paragraph of text</p>`.

```html
<p>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi est
  sapiente in optio quia inventore quis maxime ullam tenetur?
</p>
<p>
  Maxime quibusdam, dolorum quaerat ducimus inventore sunt pariatur et ea dolore
  ipsam. Distinctio eum nobis officiis quam quasi exercitationem eaque?
</p>
```

`a` – Anchor. An `a` tag is a link to somewhere else. <a href="#">This is a link that goes nowhere</a>. Every `a` tag needs a destination of where the link should take you. We'll talk about that in the **Attributes** section. Example: `<a href="https://www.frontendmasters.com">Frontend Masters</a>`.

```html
<a href="https://www.frontendmasters.com">Frontend Masters</a>
<a href="https://aka.ms/visual-studio-code">Visual Studio Code</a>
<a href="https://www.codepen.io">CodePen</a>
```

`div` – Short for division. A div is sort of like a cardboard box. It's not really anything by itself; it's more defined by what's in it. It's a generic container tag for grouping together other things. You'll use a lot of divs. Very useful with CSS. In general, you want to group together "like" things into a containing tag (like a div) to keep them together. If you have a website with a list of blog posts that each have paragraphs, titles, images, etc. you'll group each post together in a div or other container-type tag typically.

```html
<div style="width: 100px; height: 100px; background-color: red;"></div>
```

`span` – A container for small pieces of text. If a div is like a cardboard box, a span is like a Ziploc bag. It doesn't change the styling of anything by itself but it allows you use CSS and JavaScript later to make that text different in some way. Example: `<p>Here is some text. <span>This text is in a span</span> but it doesn't look any different.</p>`

```html
<p>This is <span style="text-decoration: underline">important</span> text</p>
```

`ol`, `ul`, and `li` – Both `ol` and `ul` represent lists. In fact, this list of various tags is a `ul`! A `ul` is an unordered list: it's a list of things that could be shuffled and still mean the same thing. If I asked you to list all the teams in a sports league, or all the characters on a TV show, those could be presented in any order. An `ol` is an organized list: what comes first matters. If I ask you to list out the ten most populous cities in the world, there is an order to that and changing the order makes the list incorrect. In either list, each item in the list is an `li`. Example: `<ul><li>Bob</li><li>Eve</li><li>Alice</li></ul>`

```html
<ol>
  <li>The First One</li>
  <li>The Second One</li>
  <li>The Third One</li>
</ol>

<ul>
  <li>An Item in the List</li>
  <li>Another Item in the List</li>
  <li>A Yet Different Item in the List</li>
</ul>
```

`button` – A … button. A button can be used by JavaScript to respond to a user clicking it, or it can be used by a form to signal a user has completed filling it and it should submit the data. Think of it like a doorbell to your house: you can put the doorbell button there but it's not going to do much unless you connect it to the buzzer. Example: `<button>Click me!!</button>`

```html
<button>Click me! I don't do anything</button>
```

`img` – An image. You use this to load images onto the page. This can be confusing because you can use CSS to bring in images too. The key difference is that when the image is apart of the content, like a diagram that shows data you're talking about or a picture that shows something from the article, it should be an `img` tag. If it's a nice background image or something that's for decoration of your website, use CSS. An `img` tag needs a `src` to say where the image is coming from and `alt` to say what is in the image for screen readers so that the image will still be useful to blind people, people who are hard of seeing, and Google and Bing search engines. `img` are always self-closing tags. Example: `<img src="http://pets-images.dev-apis.com/pets/dog25.jpg" alt="an adorable dog" />`

```html
<img
  src="http://pets-images.dev-apis.com/pets/dog25.jpg"
  alt="an adorable puppy"
/>
<img
  src="http://pets-images.dev-apis.com/pets/dog26.jpg"
  alt="an adorable puppy"
/>
<img
  src="http://pets-images.dev-apis.com/pets/dog27.jpg"
  alt="an adorable puppy"
/>
```

`input` – Browser inputs. Sometimes you need to gather input from the user. Luckily for us, the browser is already really good at doing that. It gives us several types of inputs that you can use. One of the most common ones is the text input, seen here: <input value="you can type in me" />. You can also have these `input` tags do numbers, dates, colors, checkboxes, radio buttons, and others. We'll explore them more later when we talk about forms. Inputs are always self-closing tags. Example: `<input />`.

```html
<!-- these are the same, type="text" is the default -->
<input />
<input type="text" />

<input type="color" />
<input type="file" />
<input type="number" />
<input type="datetime-local" />
<input type="radio" />
<input type="checkbox" />
```

`textarea` – Similar to an input but for a lot more text. You'd type long-form responses in here that could linebreaks in it (a linebreak happens when you hit "return" or "enter" on your keyboard.) Despite never having anything inside of a `textarea`, it is not a self-closing tag. HTML is a really old language and so we have to live with some old quirks. Example: `<textarea></textarea>`

```html
<textarea></textarea>
```

`select` and `option` — Sometimes you want to limit a user to a certain group of options to select from. What country you're from, what month you were born in, etc. A `select` is a user-interactive input that a user can select an option from a dropdown menu. An `option` is one of the available options. Each `option` needs a value that will be sent back to the server if the user select that `option`. What's inside of the option is what shown to the user. Example: `<select><option value="seattle">Seattle</option><option value="portland">Portland</option><option value="san-francisco">San Francisco</option></select>`

```html
<select>
  <option value="seattle">Seattle</option>
  <option value="portland">Portland</option>
  <option value="san-francisco">San Francisco</option>
</select>
```

`form` – A group of html tags related to gathering data from a user. This will be some combination of `input`, `textarea`, and `select` tags. You can then use this `form` element to send that data to your server. A `form` tag itself doesn't show anything; it's a just a container for the other tags. We'll use them more later. For now, just know they exist. Example: `<form><input /><textarea></textarea></form>`

```html
<form>
  <input placeholder="First Name" />
  <input placeholder="Last Name" />
</form>
```

`table`, `tr`, and `td` – Like making a table in Word or Excel. If you have a table of data, this is the best way to display it. Just for your context, we used to do terrible, awful things with `table`s to make websites, way back when. Because of that, some tutorial will tell you never ever use `table`s. That's not good either because when you have tabular data (something you would put into Excel) then `table`s are very useful. The `table` is the container for the whole table, `tr` represents a row, and `td` represents one cell in the table. Example: `<table><tr><td>(0,0)</td><td>(1,0)</td></tr><tr><td>(0,1)</td><td>(1,1)</td></tr></table>`

```html
<table>
  <tbody>
    <tr>
      <td>(0,0)</td>
      <td>(1,0)</td>
    </tr>
    <tr>
      <td>(0,1)</td>
      <td>(1,1)</td>
    </tr>
  </tbody>
</table>
```

There are many, many, many more tags. This is just a highlight of some of the more useful, common ones.

```html
<!-- old, deprecated tag from the MySpace days -->
<marquee>
  This is a really old feature that only works in some browsers. You should
  never use it for a real website.
</marquee>
```

## Comments

We, as coders, forget what things do. We write things that are really complicated or we know will be difficult to figure out later. Something to keep in mind is that you are mostly writing code for yourself to read later, not for the computer. The hardest part of writing code is having to maintain it later, not writing it the first time. Writing code the first time is the easier part. Going back and trying to remember what the hell you were thinking is the hard part.

This is where comments can be useful. You can leave little notes in your code that the computer won't read, it'll just ignore them. In HTML, the way you write a comment is `<!-- your comments go here -->`. Leave whatever notes you need in between the `<!--` and the `-->` so that later you can come back to your code and remember what you were doing. Be careful of going overboard because comments like `<h1>Title of the Article</h1><!-- the title -->` aren't useful because it's pretty obvious that's the title. It's best to have code that describes itself and don't need comments; however when that falls apart comments can help.

## A Note on Hard Returns

Here's something that people new to HTML find hard: how do I have a hard return in the middle of my text?

```display-html
<p>
  This is some text.

  This is some more text.
</p>
```

^^ That doesn't work. This will render like this:

<p>This is some text. This is some more text.</p>

So how do you get that split in text? There's the "correct"/"new" way and the "incorrect"/"old" way.

Correct:

```html
<p>This is some text.</p>

<p>This is some more text.</p>
```

This is the way you should do it. The `p` tag exists so you can have paragraphs. If you want a linebreak, then you should just use `p` tags to accomplish that. When at all possible (which should be just about always) you should do it this way.

Incorrect:

```html
<p>
  This is some text.
  <br />
  This is some more text.
</p>
```

The `br` tag is a linebreak tag and it used to be very common. However this is no longer the correct way to do it (but you'll still see it around.) It will occasionally be useful and you'll see it in documentation sometimes so I wanted you to know that it exists, it works, and it's not the preferred way of doing linebreaks.
