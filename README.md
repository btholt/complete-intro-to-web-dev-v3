<h1 align="center">next-course-starter</h1> <br>

<p align="center">
  A NextJS starter to get you started creating educational materials using Markdown
</p>

## Get Started

1. Set up Node.js v14+
1. Clone this repo
1. Run `npm install`
1. Run `npm run dev` to start the dev server
1. Open http://localhost:3000 in a browser

## Configure Your Course

There are several things to configure before getting started.

### course.json

This json file allows you to configure the details of the site. Update the info here and it'll update it everywhere throughout the course website.

- _author.name_ – Your name
- _author.company_ – The company you work at or whatever you want as your subtitle. Optional.
- _title_ – The title of your course
- _subtitle_ – The subtitle of your course. Optional.
- _frontendMastersLink_ – A link to the published video on FrontendMasters.com. Optional.
- _social.linkedin_ - Your LinkedIn public user name, just the name, not the full link. Optional
- _social.twitter_ – Your Twitter user name. Optional.
- _social.github_ – Your GitHub user name. Optional.
- _description_ – The description you want to show up in search engine results.
- _keywords_ – The SEO keywords for this course. An array of strings
- _productionBaseUrl_ – Typically useful for GitHub Pages. This adds a base path to your project. For GitHub Pages, this will be the name of your repo. For example, this site's base URL is `/next-course-starter` because the production URL for this site is `btholt.github.io/next-course-starer`. Do note this will also make your dev server's base URL this as well so you can catch problems before they go to production.

### styles/variables.css

Here is where you can theme your site. You can retheme the whole site with just these.

### public/images

Here is where you should stick all your images. Inside of your markdown, refer to images in this folder as `./images/<image file name>`.

Note this site doesn't use `next/image` because that requires the server component.

### public/images/author.jpg

Your image. If you call it this, you won't have to change any code. If you need to change it, it's in `pages/index.js`.

### public/images/social-share-cover.jpg

The image that will be used if someone shares your website to Twitter/Facebook/etc. If you call it this, you won't have to change any code. If you do need to change it, it's in `pages/index.js`

### public/images/course-icon.png

The image at the top of the course. If you call it this, you won't have to change any code. If you do need to change it, it's in `pages/index.js`

## Lessons

All your markdown lesson files will go in `lessons/`. They **must** be organized an named this way:

The folders must be named `01-section-one-name`, `02-section-two-name`, `03-section-three`, etc.

The lessons are then grouped inside of these, the lessons are ordered by letters, `A-lesson-one.md`, `B-lesson-two.md`, `C-lesson-three.md`, etc. This numbering scheme matches how Frontend Masters organizes their content.

The titles of your lessons and sections are generated from the folder and lesson names (and can be overridden.) The first, organizing part of the name is stripped (the `01-` part of `01-section-one` and the `A-` part of `A-lesson-one`), the hyphens are turned into spaces (`section-one` becomes `section one`) and then those are run through [title-case](https://github.com/blakeembrey/change-case#titlecase) (so `section one` becomes `Section One`.) If you need to override these, use the frontmatter (explained below.)

The folder and lesson names are also used for the slugs. `02-section-two/C-lesson-three.md` becomes `yoursite.com/lessons/section-two/lesson-three`.

Each of these lessons can have a [frontmatter](https://github.com/jonschlinkert/gray-matter#readme) for the following properties

- _title_ – If you want the title to be different from the file name, you can specify here what that title should be. Frequently this useful for things where the capitalization would be off e.g. TailwindCSS instead of Tailwindcss. Optional.
- _description_ – If you want to give individual lessons descriptions for SEO and for Frontend Masters, you can write a brief description here.

Be aware because of how the numbers and letters are stripped out, it is possible to have ambigious paths. `01-welcome/A-intro.md` and `03-welcome/D-intro.md` would resolve to the same thing and only the first one would be visitable.

## meta.json

Each **section** (e.g. inside of `03-section-three` folder) folder can have a meta.json file, and is totally optional.

- _title_ – an override for the title of the section. Frequently useful for capitalization e.g. `JS Tools` instead of `Js Tools`.
- _icon_ – so you can set the icon used in the home page and the header. These icons are pulled from [the free Font Awesome v5 icons](https://fontawesome.com/v5.15/icons). If you want [fa-hammer](https://fontawesome.com/v5.15/icons/hammer), use "hammer" as the value for icon.

## highlight.js Theme

The code blocks use [Highlight.js](https://highlightjs.org/static/demo/). By default it will use `a11y-light` as the theme for the code blocks. Change the CSS import in `pages/_app.js` to the theme you want to use.

## GitHub Pages / GitHub Actions

By default this repo works with GitHub Pages. Just make sure you set the `productionBaseUrl` in the course.json to the name of the repo.

It also includes a GitHub Action to automatically deploy to your gh-pages branch. Just make sure that your repo has GitHub Pages enabled and the branch is set to gh-pages. If you're not deploying to GitHub Pages go ahead and delete the `.github` directory.

By default the GitHub Action looks for a `main` branch, so be sure you're using that instead of `master`.

## Example Sites

- [This repo itself](https://btholt.github.io/next-course-starter/)
- [Complete Intro to React v6](https://btholt.github.io/next-react-v6/)

## CSV

**Not implemented yet, but coming soon**.

If you run `npm run csv`, a CSV will be generated with all the various lessons' frontmatter outputted to `public/lessons.csv`. You can change the path by changing the `OUTPUT_CSV_PATH` environment variable.

Another CSV will be output to `public/links.csv` where it pull all the links out of each lesson and put them into a CSV. This path can be modified by setting the `LINKS_CSV_PATH` environment variable.

## npm commands

- `npm run dev` - Next's dev command. Start a local dev server. Note if you have a productionBasePath set in your course.json, your dev server will respect that (so you don't mess up your paths in production.)
- `npm run build` - Build your site for production. This will still include the Next.js server run time. Use this if you're using something like Vercel to host your site.
- `npm run export` - Builds your site statically, use this if you're going to deploy to GitHub Pages, S3, or somewhere else with no server. This will run next build and then next export (no need to run build yourself first.)
- `npm run start` - Start an already-built server.

## License

The **code** is this repo is licensed under the Apache 2.0 license.

I include the CC-BY-NC-4.0 license for the content; this is what I recommend you license your **content** under: anyone can use and share the content but they cannot sell it; only you can.
