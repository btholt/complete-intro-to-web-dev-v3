---
title: "Introduction"
description: "Brian Holt introduces you to himself, the Complete Intro to React version 6, and what you can expect to learn"
---

Hello! And welcome to the seventh edition of the Complete Intro to Web Dev v3 as taught by [Brian Holt][twitter].

![course logo](./images/course-icon.png)

> You _do not_ need to take the previous versions of this course in order to take this one. This is a total revision of the course that we do to keep it fresh.

I wrote this course to teach people to go from not knowing how to code to writing their first web applications. I feel like it's the best time ever to ever to enter the coding world because our tools are far better now than they used to be, meaning you write powerful apps today with just a few tools. I have been coding for decades now and it tooks a lot of code to just eke out a bad little quiz app. By the end of this course you code a clone of Wordle, an app that just sold millions of dollars to the New York Times.

## Who is this course for / Prerequisites

Hopefully you!

This course is teach you how to code. You do not need to know anything about coding previous to this course.

You should have some familiarity with computers and the Internet. Please head over to [Internet Fundamentals][internet-fundamentals] to make sure you feel comfortable with what Jen talks about in that course. Many of you will not need this if you have been using computers prior to this course.

This course will teach you HTML, CSS, and JavaScript. All three are necessary components to start making modern web apps. If you need help in any of these categories, this course should be helpful. If already know how to code (like C++ or Java) and want to veer more into frontend development, this course will also be helpful.

This course is also for your friends!! This course, both this website and the video, are free to everyone thanks to the fine folks at [Frontend Masters][fem]! Free!? What's the catch? The catch is that Frontend Masters makes content for developers to get better at their jobs and by you becoming a developer you are now in their target audience. Big brain stuff!

## Set up

This course works and has been tested on both macOS and Windows 10. It also will work very well on Linux (just follow the macOS instructions). You shouldn't need a particularly powerful computer for any part of this course. 8GB of RAM would more than get you through it and you can likely get away with less.

- While you do not have to use [Visual Studio Code][vsc], it is what I will be using and I'll be giving you fun tips for it along the way. I was on the VS Code team so I'm a bit biased!
- People often ask me what my coding set up is so let's go over that really quick!
  - Font: [MonoLisa][monolisa]. Be sure to [enable ligatures][ligatures] in VS Code! If you want ligatures without Dank, check out Microsoft's [Cascadia Code][cascadia].
  - Theme: I actually just like Dark+, the default VS Code theme. Though I do love [Sarah Drasner's Night Owl][night-owl] too.
  - Terminal: I just switched back to using macOS's built in terminal. [iTerm2][iterm] is great too. On Windows I love [Windows Terminal][terminal].
  - VS Code Icons: the [vscode-icons][icons] extension.

## Where to File Issues

I write these courses and take care to not make mistakes. However when teaching over ten hours of material, mistakes are inevitable, both here in the grammar and in the course with the material. However I (and the wonderful team at Frontend Masters) are constantly correcting the mistakes so that those of you that come later get the best product possible. If you find a mistake we'd love to fix it. The best way to do this is to [open a pull request or file an issue on the GitHub repo][issues]. While I'm always happy to chat and give advice on social media, I can't be tech support for everyone. And if you file it on GitHub, those who come later can Google the same answer you got.

We'll talk about GitHub at the end of this class if that's unfamiliar to you.

## Who am I

My name is Brian Holt and I am a product manager at Stripe. I work on all sorts of developer tools like the Stripe VS Code extension, the Stripe CLI, the Stripe SDKs, and other tools developers use to write code for Stripe. Before that I worked on Azure and VS Code at Microsoft as a PM and before that I was JavaScript developer for a decade at companies like LinkedIn, Netflix, Reddit, and some other startups. I've written _a lot_ of code.

I learned to code when I was somewhere around 10 years old. My brother used to make me write C++ before he'd let me play video games. This definitely set me up for success when I started to learn to code in college but let me tell you: it is not too late for anyone to code. The skills here are very learnable for anyone with enough gumption to get going.

When I'm not working or developing new Frontend Masters courses, you'll find me in Seattle, WA. I love to travel, hang out with my wife and son, get out of breath on my Peloton, play Dota 2 and Overwatch poorly, as well as drink Islay Scotches, local IPAs and fruity coffees.

![Brian teaching](./images/brian.jpg)

Catch up with me on social media! I'll be honest: I'm not great at responding at DMs. The best way to talk to me is just to tweet at me.

- [Twitter][twitter]
- [LinkedIn][linkedin]
- [GitHub][github]
- [Peloton][pelo] (you have to be a member and signed in for this link to work)

And one last request! [Please star this repo][site]. It helps the course be more discoverable and with my fragile ego.

## Expectations

Okay, so let's set some expectations.

This course is hard. It's frustrating. You are going to hit the wall, multiple times. That's okay. It's expected. Do not get down on yourself.

Very importantly, **DO NOT COMPARE YOURSELF TO OTHERS**. You have a perfect knowledge of your own shortcomings and an imperfect understanding of their achievements. You will always underestimate yourself and overattribute progress to others. You are on a very personal journey and the way you get through it is to take one step at a time and monitor your own progress and have some patience and perservence.

Don't start playing the "should" game with yourself. "I should get this", "I should understand this by now", "I should not be stumbling like this", etc. are all very dangerous games. There is no "should" here, just where you are now. This is a trap all new coders fall into.

The most comparable thing I have ever done to learning to code is learning a foreign language. I am American and thus grew up speaking English. When I graduated high school (secondary school) I went to live in Italy. It tooks months of hard work and practice before I could even order a drink at the coffee shop. It tooks months more before I felt like I could have a fluent conversation about the weather or where I'm from. It took months more before I could talk about politics or other specialized topics. You do not learn a language overnight. It takes months of work and practice. But the payoff is amazing!

Whoa, okay, so you mean I'm not going to be writing sonnets in iambic pentameter in JavaScript at the end of this course? No, you won't. You'll learn how to read and write complete statements for sure, but what's important you are going to learn how to teach yourself how to code. You're going to learn how to learn. This is the trailhead on the journey of learning how to code. Some of you will learn all you need to know about coding; you could absolutely code up the landing page to your local business from this course, even how to connect something like Stripe to take orders. But if you want to get a job at Microsoft, Netflix, Google, and the like, there's more work ahead. It's possible. You just have to stick to it!

[twitter]: https://twitter.com/holtbt
[vsc]: https://code.visualstudio.com/
[monolisa]: https://www.monolisa.dev/
[ligatures]: https://worldofzero.com/posts/enable-font-ligatures-vscode/
[night-owl]: https://marketplace.visualstudio.com/items?itemName=sdras.night-owl
[cascadia]: https://github.com/microsoft/cascadia-code
[terminal]: https://www.microsoft.com/en-us/p/windows-terminal/9n0dx20hk701?activetab=pivot:overviewtab
[icons]: https://marketplace.visualstudio.com/items?itemName=vscode-icons-team.vscode-icons
[iterm]: https://iterm2.com/
[issues]: https://github.com/btholt/complete-intro-to-web-dev-v3/issues
[github]: https://github.com/btholt
[linkedin]: https://www.linkedin.com/in/btholt/
[gh]: https://btholt.github.io/complete-intro-to-web-dev-v3/
[site]: https://github.com/btholt/complete-intro-to-web-dev-v3
[tweet]: https://twitter.com/holtbt/status/493852312604254208
[pelo]: https://members.onepeloton.com/members/btholt/overview
[internet-fundamentals]: https://internetfundamentals.com/
[fem]: https://www.frontendmasters.com
