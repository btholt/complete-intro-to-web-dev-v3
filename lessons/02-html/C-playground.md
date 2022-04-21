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
  <p>
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt modi est
    sapiente in optio quia inventore quis maxime ullam tenetur?
  </p>
  <p>
    Maxime quibusdam, dolorum quaerat ducimus inventore sunt pariatur et ea
    dolore ipsam. Distinctio eum nobis officiis quam quasi exercitationem eaque?
  </p>
  <p>
    Tempore quaerat odit sit rem nihil eligendi error quisquam, natus deleniti
    molestias voluptate nobis, amet repellendus. Aliquam deserunt quia impedit.
  </p>
  <p>
    Doloremque expedita earum quidem pariatur amet. Officia ex corporis,
    repellendus ipsa, cumque quia at voluptas, iste harum dolor debitis labore?
  </p>
  <p>
    Et quisquam sit nemo ipsam aliquid provident, ullam eligendi aspernatur
    placeat fuga nostrum molestiae ab nobis obcaecati nesciunt cupiditate neque.
  </p>
</div>

<!-- images -->
<div>
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
</div>

<!-- inputs -->
<div>
  <input />
  <!-- with a trailing slash -->
  <input />
  <!-- without a trailing slash; it's the same thing -->
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
  <marquee
    >This is a really old feature that only works in some browsers. You should
    never use it for a real website.</marquee
  >
</div>
```
