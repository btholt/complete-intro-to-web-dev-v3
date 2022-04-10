---
description: "Brian teaches what tags are, the foundation unit of HTML"
---

We're going to start building our very first website. At first our website is going be pretty ugly but it's still going to be functional! We're going to be using the language HTML, or hypertext markup language. This isn't a programming language since it doesn't actually _do_ anything. It's like how English isn't a programming language either: you can't "run" English. Same idea with HTML: you can't "run" HTML. HTML is simply the language and pictures on the page. It's the static (which is another word for unchanging) content.

## Tags

HTML's base building block is the **tag**. A tag is a building block. It describes what's inside it. Every tag has an opening and a closing tag (some tags open and close at the same point.) I think the easiest way to learn it is just to show a bunch of examples.

```html
<h1>This is the title to my document</h1>
```

You can see the `<h1>` and the `</h1>` surrounding the the text "This is the the title to my document". This is how HTML operates. You can have opening tag which has information or more tags inside of it. In this case we have an `h1` tag which is a heading tag: it's used for the biggest title on the page, typically a title. If you rendered that using the browser, it's look like:

<h1>This is the title to my document</h1>

It's bigger and bolder because that's what browsers do with h1s, it makes them look important on the page. However it does more than that too. Browsers aren't the only thing reading websites. Blind and people who can't see well will use screen readers to read web pages out loud to them; it uses things like headers to understand what information is important to read to the users. It's also how Google and Bing will understand the important details of your website. In other words, it's important which type of tag you use. More than just the visual aesthetic is using those tags.

A tag, whether it's opening or closing, are surrounded by angle brackets, `<` and `>`. Closing tags always have a slash, `/`, after the opening angle bracket, so it looks like `</h1>`. There are things called "self-closing tags" or "void tags" that open and close themselves. These will look like this: `<input />` (I'll explain in a sec what inputs are.) That slash at the end means it is self closing. To make it more confusing, that last slash is optional, so `<input>` (with no closing tag ever) is valid too since input tags are always self-closing.

Tags are also opened and closed in a specific order too. The most recently opened tag must be the next closed tag. For example, if I have an h1 instead of a div, the h1 must be closed first.

```html
<div>
  <h1>
    Hi
  </h1>
</div>
```

The above is correct.

```htm
<div>
  <h1>
    Hi
  </div>
</h1>
```

The above is incorrect. I can't close the div _before_ I close the h1 since the h1 was the last one I opened.

## Types of Tags

So let's explore some of the essential tag types.

* `h1`, `h2`, `h3`, `h4`, `h5`, and `h6` – Headings. These are the six levels of headings and subheadings you can have. You can see up top of this page we have `HTML` which is an h1 and then below that we have `Types of Tags` which is an h2. An h2 is a subheading to an h1. An h3 is a subheading to a h2. Some schools of thought say each page should only have one h1. I'm of the opinion that just use these as it feels appropriate to. Like formatting a Microsoft Word document, there's no "correct" way to do it, just different ways that make more or less sense. Example `<h1>Document Title</h1>`.
* `p` – Paragraph. You'll put a paragraph of text together inside of a `p` tag. Only text goes in `p` tags. Each one of these paragraphs is a `p` tag. Example: `<p>A paragraph of text</p>`.
* `a` – Anchor. An `a` tag is a link to somewhere else. <a href="#">This is a link that goes nowhere</a>. Every `a` tag needs a destination of where the link should take you. We'll talk about that in the **Attributes** section. Example: `<a href="https://www.frontendmasters.com">Frontend Masters</a>`.
* `div` – Short for division. A div is sort of like a cardboard box. It's not really anything by itself; it's more defined by what's in it. It's a generic container tag for grouping together other things. You'll use a lot of divs. Very useful with CSS. In general, you want to group together "like" things into a containing tag (like a div) to keep them together. If you have a website with a list of blog posts that each have paragraphs, titles, images, etc. you'll group each post together in a div or other container-type tag typically.
* `span` – A container for small pieces of text. If a div is like a cardboard box, a span is like a Ziploc bag. It doesn't change the styling of anything by itself but it allows you use CSS and JavaScript later to make that text different in some way. Example: `<p>Here is some text. <span>This text is in a span</span> but it doesn't look any different.</p>`
* `ol`, `ul`, and `li` – Both `ol` and `ul` represent lists. In fact, this list of various tags is a `ul`! A `ul` is an unordered list: it's a list of things that could be shuffled and still mean the same thing. If I asked you to list all the teams in a sports league, or all the characters on a TV show, those could be presented in any order. An `ol` is an organized list: what comes first matters. If I ask you to list out the ten most populous cities in the world, there is an order to that and changing the order makes the list incorrect. In either list, each item in the list is an `li`. Example: `<ul><li>Bob</li><li>Eve</li><li>Alice</li></ul>`
* `button` – A … button. A button can be used by JavaScript to respond to a user clicking it, or it can be used by a form to signal a user has completed filling it and it should submit the data. Think of it like a doorbell to your house: you can put the doorbell button there but it's not going to do much unless you connect it to the buzzer. Example: `<button>Click me!!</button>`
* `img` – An image. You use this to load images onto the page. This can be confusing because you can use CSS to bring in images too. The key difference is that when the image is apart of the content, like a diagram that shows data you're talking about or a picture that shows something from the article, it should be an `img` tag. If it's a nice background image or something that's for decoration of your website, use CSS. An `img` tag needs a `src` to say where the image is coming from and `alt` to say what is in the image for screen readers so that the image will still be useful to blind people, people who are hard of seeing, and Google and Bing search engines. `img` are always self-closing tags. Example: `<img src="http://pets-images.dev-apis.com/pets/dog25.jpg" alt="an adorable dog" />`
* `input` – Browser inputs. Sometimes you need to gather input from the user. Luckily for us, the browser is already really good at doing that. It gives us several types of inputs that you can use. One of the most common ones is the text input, seen here: <input value="you can type in me" />. You can also have these `input` tags do numbers, dates, colors, checkboxes, radio buttons, and others. We'll explore them more later when we talk about forms. Inputs are always self-closing tags. Example: `<input />`.
* `textarea` – Similar to an input but for a lot more text. You'd type long-form responses in here that could linebreaks in it (a linebreak happens when you hit "return" or "enter" on your keyboard.) Despite never having anything inside of a `textarea`, it is not a self-closing tag. HTML is a really old language and so we have to live with some old quirks. Example: `<textarea></textarea>`
* `select` and `option` — Sometimes you want to limit a user to a certain group of options to select from. What country you're from, what month you were born in, etc. A `select` is a user-interactive input that a user can select an option from a dropdown menu. An `option` is one of the available options. Each `option` needs a value that will be sent back to the server if the user select that `option`. What's inside of the option is what shown to the user. Example: `<select><option value="seattle">Seattle</option><option value="portland">Portland</option><option value="san-francisco">San Francisco</option></select>`
* `form` – A group of html tags related to gathering data from a user. This will be some combination of `input`, `textarea`, and `select` tags. You can then use this `form` element to send that data to your server. A `form` tag itself doesn't show anything; it's a just a container for the other tags. We'll use them more later. For now, just know they exist. Example: `<form><input /><textarea></textarea></form>`
* `table`, `tr`, and `td` – Like making a table in Word or Excel. If you have a table of data, this is the best way to display it. Just for your context, we used to do terrible, awful things with `table`s to make websites, way back when. Because of that, some tutorial will tell you never ever use `table`s. That's not good either because when you have tabular data (something you would put into Excel) then `table`s are very useful. The `table` is the container for the whole table, `tr` represents a row, and `td` represents one cell in the table. Example: `<table><tr><td>(0,0)</td><td>(1,0)</td></tr><tr><td>(0,1)</td><td>(1,1)</td></tr></table>`
* There are many, many, many more tags. This is just a highlight of some of the more useful, common ones.

## Comments

We, as coders, forget what things do. We write things that are really complicated or we know will be difficult to figure out later. Something to keep in mind is that you are mostly writing code for yourself to read later, not for the computer. The hardest part of writing code is having to maintain it later, not writing it the first time. Writing code the first time is the easier part. Going back and trying to remember what the hell you were thinking is the hard part.

This is where comments can be useful. You can leave little notes in your code that the computer won't read, it'll just ignore them. In HTML, the way you write a comment is `<!-- your comments go here -->`. Leave whatever notes you need in between the `<!--` and the `-->` so that later you can come back to your code and remember what you were doing. Be careful of going overboard because comments like `<h1>Title of the Article</h1><!-- the title -->` aren't useful because it's pretty obvious that's the title. It's best to have code that describes itself and don't need comments; however when that falls apart comments can help.

## Playground

I've embedded a little widget here for you to play with the HTML elements we've talked about. This is through a website called [CodePen][codepen]. I use this site all the time and we'll use it a lot throughout this entire workshop for quick little demos and lessons. Instead of having to set up all your tools and such, this will give you quick access to run these demos online.

On the left, you'll see the HTML that you can edit. On the right you'll see what that HTML looks like as if it was being run on a website. You can edit the left pane and on the right pane you'll instantly see it being displayed. Take some time to toy around with it and see what happens when you edit it and rearrange things. Learning comes easily during play. We'll get to making our own websites from scratch but this is a good place to start with and not get burdened down with some of the details.

```html
<!-- links -->
<div>
  <a href="https://www.frontendmasters.com">Frontend Masters</a>
  <a href="https://aka.ms/visual-studio-code">Visual Studio Code</a>
  <a href="https://www.codepen.io">CodePen</a>
</div>

<!-- header -->
<div>
  <h1>This is an h1!</h1>
  <h2>This is an h2!</h2>
  <h3>This is an h3!</h3>
  <h4>This is an h4!</h4>
  <h5>This is an h5!</h5>
  <h6>This is an h6!</h6>
</div>

<!-- text empasis -->
<div>
  <strong>This text is strong.</strong>
  <em>This text is emphasized.</em>
</div>

<!-- paragraphs -->
<div>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi est sapiente in optio quia inventore quis maxime ullam tenetur?</p>
  <p>Maxime quibusdam, dolorum quaerat ducimus inventore sunt pariatur et ea dolore ipsam. Distinctio eum nobis officiis quam quasi exercitationem eaque?</p>
  <p>Tempore quaerat odit sit rem nihil eligendi error quisquam, natus deleniti molestias voluptate nobis, amet repellendus. Aliquam deserunt quia impedit.</p>
  <p>Doloremque expedita earum quidem pariatur amet. Officia ex corporis, repellendus ipsa, cumque quia at voluptas, iste harum dolor debitis labore?</p>
  <p>Et quisquam sit nemo ipsam aliquid provident, ullam eligendi aspernatur placeat fuga nostrum molestiae ab nobis obcaecati nesciunt cupiditate neque.</p>
</div>

<!-- images -->
<div>
  <img src="http://pets-images.dev-apis.com/pets/dog25.jpg" alt="an adorable puppy" />
  <img src="http://pets-images.dev-apis.com/pets/dog26.jpg" alt="an adorable puppy" />
  <img src="http://pets-images.dev-apis.com/pets/dog27.jpg" alt="an adorable puppy" />
</div>

<!-- inputs -->
<div>
  <input /> <!-- with a trailing slash -->
  <input> <!-- without a trailing slash; it's the same thing -->
  <input type="color" />
  <input type="file" />
  <input type="number" />
  <input type="datetime-local" />
  <input type="radio" />
  <input type="checkbox" />
</div>

<!-- textarea -->
<div>
  <textarea></textarea>
</div>

<!-- select -->
<div>
  <select>
    <option value="seattle">Seattle</option>
    <option value="portland">Portland</option>
    <option value="san-francisco">San Francisco</option>
  </select>
</div>

<!-- buttons -->
<div>
  <button>Click me! I don't do anything</button>
</div>

<!-- table -->
<table>
  <tr>
    <td>(0,0)</td>
    <td>(1,0)</td>
  </tr>
  <tr>
    <td>(0,1)</td>
    <td>(1,1)</td>
  </tr>
</table>

<!-- for fun -->
<div>
  <marquee>This is a really old feature that only works in some browsers. You should never use it for a real website.</marquee>
</div>
```
