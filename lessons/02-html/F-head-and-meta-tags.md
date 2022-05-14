---
description: ""
---

So far we've been discussing snippets of HTML, using things like divs to build up "components" (or a group of tags that represents a higher level concept like a post or a navigation bar). But let's talk about the overall structure of an HTML document.

Open up VS Code, create a new document and save it in a new folder that we'll make our project.

In that folder, make a file called index.html. Why index? By convention that is the root file of a website. If you were building example.com, then index.html would be the home page. If you made an about.html page, then that'd be example.com/about.html. If you made a directory called `dogs` inside of your folder and you added a luna.html file to that directory, the address would be example.com/dogs/luna.html.

Okay, so now you have an index.html file, put this in there (this will be the start of your project in the next lesson.)

```display-html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>My Blog</title>
  </head>
  <body>
    <!-- all your content will go here -->
  </body>
</html>
```

Let's pick these tags apart one-by-one.

- `<!DOCTYPE html>` - There have been several revisions of HTML. You'll frequently see HTML5 referred to. As you may guess, this is the fifth major review of HTML. HTLM5 was release in 2008 and there's no HTML6 brewing so no worries about this initial tag changing. In any case, since your browser can understand several versions of HTML, put this at the top to signal to the browser that we're using the latest version.
- `<html lang="en"></html>` - This tag is the absolute most root tag of an HTML document. Technically HTML is just a specific type of XML, this tag is necessary to signal to any reader this is actually an HTML doc (you never need to worry about that, just FYI.) Everything inside it will be interpreted as HTML. The `lang="en"` is the language you're writing your HTML in. Since this class is English, we're writing it in English. Specifically that's important to search engines so they know where to index your content. For our content we want English readers to see it.
- `<head></head>` - All of your web pages are going to need important meta data. They need to tell browsers how to handle browser resizings, what character sets your page uses, what the title is, what the favicon is (the little logo on your browser tab), where the CSS is located, etc. The `<head>` tag (which is over the `body` tag, duh) contains all the important meta data. Nothing that gets _displayed_ to the user (like a div or an h1) will _ever_ be put in the head. It's _just_ meta data.
- `<meta>` - Okay, so all these meta tags are giving the browser information of how to handle your documents
  - The `charset="UTF-8"` bit says that your document is written using the UTF-8 character set. This basically means you can use all character/letters/numbers/emojis/etc. that you expect to be able to use. Another example (that you would never use is) is ASCII (as in ASCII Art). ASCII is a much narrower set of characters that wouldn't have emojis for example. ASCII can't even do a lot of the characters you'd expect you'd be able to use like non-English accents. In other words, always include this line and never think about it. It's always UTF-8.
  - `name="viewport" content="width=device-width, initial-scale=1.0"` - This is letting the browser know how specifically to handle mobile devices like phones and small tablets. If you don't put this, the browser may just output a really zoomed out view of your website and it's very hard to read. This allows you to have mobile browsers treat your content better and more like you'd expect. Always put this too.
- `<title></title>` allows you to set the title that shows up on the browser tab. It will also be the title of the search result when people search for it on Google.
- `<body></body>` All of your visible HTML will go here. Your divs, spans, tables, h1s, etc. all here.

This is the barebones skeleton of an HTML. You can literally just copy/paste this from project to project. Some of these things you can leave out but I don't recommend it. It makes the browser guess what you meants and that can vary how they guess from Safari to Edge to Chrome to Firefox, etc. Best to be explicit.

Let's talk about one second having multiple HTML docs in one project. Put this tag in the index.html we created.

```display-html
<a href="about.html">About</a>
```

Then create a new file called about.html (must be in same directory) and put this in there:

```display-html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>About</title>
  </head>
  <body>
    <h1>About Me</h1>
    <a href="index.html">Go home</a>
  </body>
</html>
```

Now open index.html in your browser. You can either just drag the file onto your browser or you can use the CMD+O or CTRL+O shortcut to open the open dialog. Once you've done that, try clicking the links. You should it navigate between the two pages (if you put them in the same directory.) We'll take advantage of this in the project.
