[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/LCwhhWcf)
# ICA 6: SVGs and More

## Introduction

This ICA is about implementing SVGs and other visual HTML elements in a webpage. The goal is to implement these new elements in the base webpage.

## ICA Instructions

There will be five tasks to complete in this ICA. Each task will require you to implement a new visual element in the base webpage. Each task is worth two points. The tasks are as follows:

### Q1. Draw an svg logo
Draw an SVG logo in the color palette of the page. The logo should be a simple design, such as a letter or a shape. The logo should be placed in the div with the class of `.header-logo`. The logo should be wrapped in an `<a>` tag that links to the current page.

> [!IMPORTANT]
> It's often helpful to draw your own SVGs in separate documents and copying the code into your HTML. Doing so will help you understand the syntax and structure of SVGs, especially when they are rendered differently on different sizes of browsers.

### Q2. Insert a `<video>`
Insert a video into the webpage. The video should be placed in the div with the class of `.video`. The video should autoplay when the page is loaded. The video should be muted. The video should be a short clip, such as a few seconds long. There should be a caption tag below the video that describes the video.

Also, add text to the `.right-text` div to describe the video. The text should be a few sentences long and should describe the video. The text should be styled to match the rest of the page.

### Q3. Change the hovering styles for the button and nav links
Style the button to match the rest of the page. Then, change the styles of the button for when the user hovers over it. The changes should be significant enough for the user to acknowledge the importance of the button.

Also, change the styling of the nav links for when the user hovers over them.

> [!TIP]
> Sometimes it is helpful to use the `transition` property to make the hover effect more smooth. Feel free to research how to do this and implement it in your solution.

### Q4. Add a section break SVG image
Add a preformatted SVG image of a section break (some design) to make a more smooth transition between sections. Use an online SVG generator to create this SVG, and have the colors match the page. See the resources section for some online SVG generators.

### Q5. Insert an `<iframe>`
Using the iframe arhitecture, insert a website of your choice into the `.iframe` div. The website can be anything you want, such as a map, a video, or a social media feed. The website should be responsive and should fit within the `.iframe` div.

> [!TIP]
> Some websites may not work with iframes. It's important to test the website you choose to make sure it works with iframes. Also, try to limit the interactivity of the iframe to just one page or action, as to not inhibit your websites purpose.

## Submission
Frequently stage, commit, and push your changes to GitHub. Your submission for the assignment will be the most recent commit that is pushed to GitHub before the due date.

> [!IMPORTANT]
> The last `<section>` tag of the HTML file, with clss `.hw6-container`, is specifically for the HW of this week. You do not need to add to or edit that `<div>` until you are ready to complete your homework.

## Resources
- [Haikei SVG Shape Generator](https://haikei.app/)
- [Shape Divider SVG Generator](https://www.shapedivider.app/)

---
# Reference, Lecture Content

## SVG
SVG stands for Scalable Vector Graphics. It is a image format for two-dimensional graphics with support for interactivity and animation.

There are many use cases for SVGs, some of the most common are:

- Logos
- Icons
- Illustrations
- Animations
- Backgrounds

SVGs are a great way to add visual elements to a webpage. They are scalable, meaning they can be resized without losing quality. They are also lightweight, meaning they don't take up much space and don't require much computational power to render on a webpage.

### SVG Syntax
The SVG syntax is similar to HTML, but with some differences. The most important elements in SVG are:

- `<svg>`: The root element of an SVG image.
- `<rect>`: A rectangle.
- `<circle>`: A circle.
- `<ellipse>`: An ellipse.
- `<line>`: A line.
- `<polyline>`: A polyline.
- `<polygon>`: A polygon.
- `<path>`: A path.
- `<text>`: Text.
- `<g>`: A group (or layer) of elements.

`<path>` is the most powerful and flexible element in SVG. It can be used to create complex shapes and designs. It uses a special syntax to define the shape of the path based on a series of commands and coordinates.

```html
<svg width="100" height="100">
  <rect
    width="100"
    height="100"
    style="fill:rgb(0,0,255);stroke-width:1;stroke:rgb(0,0,0)"
  />
</svg>
```

## Video
The `<video>` element is used to embed video content in a webpage. It is a relatively new element, and is supported by all modern browsers. The `<video>` element has many attributes and methods that can be used to control the video, such as `autoplay`, `controls`, `loop`, `muted`, `play()`, `pause()`, `currentTime`, and many more.

```html
<video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4" />
  <source src="movie.ogg" type="video/ogg" />
  Your browser does not support the video tag.
</video>
```

## Iframe
The `<iframe>` element is used to embed another webpage into the current webpage. It is a powerful element that can be used to display content from other websites, such as maps, videos, and social media feeds. The `<iframe>` element has many attributes and methods that can be used to control the content, such as `src`, `width`, `height`, `sandbox`, `allow`, and many more.

```html
<iframe
  src="https://www.w3schools.com"
  title="W3Schools Free Online Web Tutorials"
>
  Your browser does not support the iframe tag.
</iframe>
```

## :hover
The `:hover` pseudo-class is one of many CSS pseudo-classes that can be used within CSS to modify styles in response to user actions. The `:hover` pseudo-class is used to apply styles to an element when the user hovers over it with the mouse. It is a powerful tool that can be used to create interactive and engaging user interfaces. The `:hover` pseudo-class can be used to change the color, size, position, and many other properties of an element when the user hovers over it.

```css
.button {
  background-color: blue;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}
.button:hover {
  background-color: red;
  color: white;
}
```
