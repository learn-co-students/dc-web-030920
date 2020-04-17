# Intro to CSS

## Objectives

+ Discuss what CSS is and why it's important
+ Differentiate between inline, internal, and external stylesheets
+ Understand how to use class, id, and element selectors and selector _order of importance_
+ Understand positioning and working with floats, flexbox, and grid for CSS page layouts
+ Go over some basic UX/UI best practices
+ Introduce CSS Framework Bulma and demonstrate how to implement in Rails

## What is CSS ❓

+ Stands for Cascading Style Sheet
+ Adds styling on top of the structure of the app
+ There's so much you can do with CSS. Take a look [here](http://www.csszengarden.com/)

### Why is it important ❓

+ Makes our webpages look good
+ Can enhance the overall user experience which can increase the number of returning users
+ It's the polish you put on your app to make it more appealing to the public
  + ❗️ CSS should be the LAST thing you do on your app
  + ❗️ It's what you work on when we call Feature Freeze 🥶

## How does one even CSS ❓

+ Inline
  + Applies to a single element
  + Written in the `style` attribute of the HTML element

    ```html
      <p style='color: blue'>This is a paragraph tag and everything between the <p> will be blue. This style will ONLY apply to this specific tag<p>
    ```

  + Not best practice:
    + Cannot be reusued across similar elements (What if I wanted to have ALL my p tags blue, instead of just the one)
    + Very difficult to override these styles

+ Internal
  + Slightly better than inline.
  + Makes use of the `<style>` tags within the `<head>`

  ```html
    <head>

      <style>
        p { color: blue; }

        h1 { color: red; background-color: pink; }
      </style>

    <head>
  ```

  + The above code turns all the paragraph tags blue and all the header 1 tags red (with an ugly pink background)
    + ❗️ Syntax note: CSS has a tendancy to not error out and "fail silently" so if you have a syntax error, it may not always be obvious
    + ❗️ Don't be afraid to double check your assumptions about syntax
    + ❓ What things do you notice about CSS syntax?
  + Grabs elements by selectors (more on that in a bit) and applies those styles to all common selectors in the file
    + What's a selector? They're patterns used to select the elements you want to style
  + It's better than inlines styles since it can be used to style multiple elements at once
  + What drawbacks might this present?
    + Drawback is that it's limited to a single file.
    + If you need to style multiple pages, you'd have to repeat yourself 😨

+ External
  + Allow us to style multiple elements across various pages!
  + How does this work?
    + We create an external .css file and link that file to our .html (or .erb) file in the `<head>` tag

    ```html
      <head>
        <link href="my-awesome-stylesheet.css" rel="stylesheet" type="text/css" />
      </head>
    ```

## CSS Specificity and the Specificity Heirarchy

CSS has something called **specificity**. This is a set of rules applied to CSS selectors that determines which styles get applied to elements. The more specific a style is, the more likely it will have the styles applied to it. This is important if there are two conflicting styles on the same element. The more specific the selector, the more likely that style will be applied to the element.

We use selectors in different ways. This affects the importance our CSS file places on them

1. HTML tags are the most general. They apply to all elements with the same tag name. As such, they are easily overwritten. Using HTML tags for your selector can apply to all tags in your app unless those particular tags have a selector or _higher importance_
2. Classes can be used to group and style multiple elements. E.g. If you want to style all the `<h2>` elements, but ONLY the ones that are subtitles for an article, you could add a `.subtitle` class and use the `.subtext` selector to target them in your CSS file.
    + This would override any general styles for `<h2>` elements
3. IDs are used for _unique_ elements. You should only use an id for a specific element. As such, they override both _class_ and _HTML tag_ selectors.

As a rule, the more specific the selector you use in your CSS file, the more likely it is to override any conflicting styles

```css
  /* HTML Tags */
  p {
    color: blue;
  }

  /* class tags */
  .my-awesome-class-tag {
    margin: 0px;
    padding: 5px;
  }

  p.my-awesome-class-selector {
    font: green;
  }

  /* id tags */
  #my-cool-id-tag {
    font-family: sans-serif;
  }

```

For more practice with CSS selectors, visit [Flukeout](https://flukeout.github.io/)

## The Box Model

4 Elements of the box model

| Name    | Description |
| ------- | ----------- |
| Content  | What's in between the html tags or what is actually displayed to the user (e.g. paragraph text, image, etc.) |
| Padding | The space between the border and the element's content. Increasing this value adds space inside the element itself. It can affect the element's overall size. It does _not_ affect the spacing between different elements, but it does affect the specinf between the element's content and the border |
| Border  | The final boundary of the html element. Increasing this value will affect the element's overall size |
| Margin  | The element's surrounding area. Increasing this value creates more space between different elements. It does not affect the element's size because it is outside of the border |

❗️Use the Chrome console to explore this deeper!

## CSS Best Practices

+ No inline styles
  + Hard to overwrite
  + Cannot apply similar styles to multiple elements
  + Makes searching for styles difficult
+ Using precedence
  + Helps when wanting to apply similar styles to multiple elements (.class)
  + Allows you to differentiate a specific element (#id)
+ External stylesheets
  + Keeps all your styles in a single place which helps with organization
  + Can apply similar styles across multiple html files

## Layouts and Positioning

### Floats

+ Float
  + Used for positioning and formatting
  + Take out elements outside of the standard flow of the page.
  + Specifies how an element should flot (i.e. in which direction it should float)

```css
  .grand-canyon-image {
    width: 400px;
    float: left;
  }
```

### Flexbox and Grid

Great tools for laying out large chunks of your page (or the page as a whole)

+ Check out Flexbox Froggy to practice Flexbox [here](https://flexboxfroggy.com/)
+ Check out CSS-Tricks for a full guide on CSS Grid [here](https://css-tricks.com/snippets/css/complete-guide-grid/)

## CSS Frameworks

+ Pros
  + Does a lot of the CSS work for us (can save lots of TIME!)
  + Tends to look more polished
  + Tends to have responsive design built in
    + ❓ What is 'Responsive Design'
      + Looks good no mater what screen the client is using to access your application
      + Mobile First

+ Cons
  + Can be difficult to customize
  + Need to understand the syntax of the framework to use it effectively

+ Common CSS Libraries:

[Bulma](https://bulma.io/) | [Bootstrap](https://getbootstrap.com/) | [Semantic-UI](https://semantic-ui.com) | [Materialize](https://materializecss.com/)

### Getting Started With Bulma

🚀 To the [DOCS](https://bulma.io/documentation/overview/start/) !
