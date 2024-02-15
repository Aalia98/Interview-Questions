## CSS Questions ----

1. What is CSS?

CSS stands for Cascading Style Sheets. CSS is used to define styles for web pages, including the design, layout and variations in display for different devices and screen sizes.

2. What is the use of css rule set?

The rule consists of two parts: the selector and the next declaration block. The image below shows the structure (syntax) of the rule:

div {
  color: blue;
  text-align: justify;
}

3. What are the possible ways to apply CSS styles to a web page?

There are three ways to apply CSS to HTML: Inline, internal, and external.

- Inline -> Inline CSS is specified directly in the opening tag of the element you want it to apply to.

- Internal -> Internal or Embedded, styles are used for the whole page. Inside the head element, the style tags surround all of the styles for the page.

- External -> In external CSS rules are stored in a separate file. To refer to that file from the HTML page, add the link element (and its closing element within XHTML) to the head element.

4. What does the cascading portion of CSS mean?

- Means that CSS has an inherent hierarchy and styles of a higher precedence will overwrite rules of a lower precedence.

Even the simplest HTML document may have three or more style sheets associated with it including:

The browser's style sheet
The user's style sheet
The author's style sheet

5. Explain new features in CSS3?

CSS3 Selectors, Pseudo-classes, CSS3 Colors, border-radius, box-shadow, text-shadow, linear-gradient, radical-gradient, Multiple background images.

6. What are the css selectors?

A CSS selector is the part of a CSS rule set that actually selects the content you want to style.

i) Universal Selector: The universal selector works like a wild card character, selecting all elements on a page.
* {
   color: green;
   font-size: 20px;
   line-height: 25px;
}

ii) Element Type Selector: This selector match one or more HTML elements of the same name.
ul {
   list-style: none;
   border: solid 1px #ccc;
}

iii) ID Selector: This selector matches any HTML element that has an ID attribute with the same value as that of the selector.
#container {
   width: 960px;
   margin: 0 auto;
}

iv) Class Selector: The class selector also matches all elements on the page that have their class attribute set to the same value as the class.
.box {
   padding: 20px;
   margin: 10px;
   width: 240px;
}

v) Descendant Combinator: The descendant selector or, more accurately, the descendant combinator lets you combine two or more selectors so you can be more specific in your selection method.
#container .box {
   float: left;
   padding-bottom: 15px;
}

vi) Child Combinator: A selector that uses the child combinator is similar to a selector that uses a descendant combinator, except it only targets immediate child elements.
#container > .box {
   float: left;
   padding-bottom: 15px;
}

vii) General Sibling Combinator: A selector that uses a general sibling combinator matches elements based on sibling relationships.
h2 ~ p {
   margin-bottom: 20px;
}

viii) Adjacent Sibling Combinator: A selector that uses the adjacent sibling combinator uses the plus symbol (+), and is almost the same as the general sibling selector. The difference is that the targeted element must be an immediate sibling, not just a general sibling.
p + p {
   text-indent: 1.5em;
   margin-bottom: 0;
}

ix) Attribute Selector: The attribute selector targets elements based on the presence and/or value of HTML attributes, and is declared using square brackets
input[type="text"] {
   background-color: #444;
   width: 200px;
}

x) Pseudo-class: A pseudo-class uses a colon character to identify a pseudo-state that an element might be in—for example, the state of being hovered, or the state of being activated.
a:hover {
   color: red;
}

xi) Pseudo-element: A CSS pseudo-element is used to style specified parts of an element.
p::first-line {
      color: #ff0000;
      font-variant: small-caps;
    }

7. What is the difference between Pseudo-classes and pseudo-elements?

A pseudo-class is a selector that assists in the selection of something that cannot be expressed by a simple selector, for example :hover. A pseudo-element however allows us to create items that do not normally exist in the document tree, for example ::after.

8. What is contextual selector?

"Contextual selectors" in CSS allow you to specify different styles for different parts of your document. You can assign styles directly to specific HTML tags, or you can create independent classes and assign them to tags in the HTML. Either approach lets you mix and match styles.

9. What is Combinator selector?

A combinator is the character in a selector that connects two selectors together. There are four types of combinator.

a) Descendant Combinator (space): The descendant selector matches all elements that are descendants of a specified element.
div p {
  background-color: yellow;
}

b) Child Combinator (>): The child selector selects all elements that are the children of a specified element.
div > p {
  background-color: yellow;
}

c) Adjacent Sibling Combinator (+): The adjacent sibling selector selects all elements that are the adjacent siblings of a specified element.
div + p {
  background-color: yellow;
}

d) General Sibling Combinator (~): The general sibling selector selects all elements that are siblings of a specified element.
div ~ p {
  background-color: yellow;
}

10. What is the difference between class selectors and id selectors?

In the CSS, a class selector is a name preceded by a full stop (".") and an ID selector is a name preceded by a hash character ("#"). The difference between an ID and a class is that an ID can be used to identify one element, whereas a class can be used to identify more than one.

11. What is CSS BEM?

The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.

/* block component */
.block {
}

/* element */
.block__element {
}

/* modifier */
.block__element--modifier {
}
Here is an example with the class names on markup:

<nav class="navbar">
  <a href="/" class="navbar__link navbar__link--active"></a>
  <a href="/" class="navbar__link"></a>
  <a href="/" class="navbar__link"></a>
</nav>
In this case, navbar is the Block, navbar__link is an Element that makes no sense outside of the navbar component, and navbar__link--active is a Modifier that indicates a different state for the navbar__link Element.