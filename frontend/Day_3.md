## Interview 3 — (16 questions)

# Write a function to make acronym of sentence

function generateAcronym(sentence) {
if (typeof sentence !== 'string') {
return 'Invalid input. Please provide a valid string.';
}

const words = sentence.split(' ');

const acronym = words.map(word => word[0].toUpperCase()).join('');

return acronym;
}

const sentence = 'World Health Organization';
const acronym = generateAcronym(sentence);
console.log(acronym); // Output: WHO

# What are polyfills and why do we use this

- Polyfill ka use primarily JavaScript mein hota hai, jahan new APIs aur features latest browser versions mein available hote hain, lekin older browsers inhe support nahi karte. Polyfills ka istemal karke developers un features ko older browsers mein implement kar sakte hain.

- Polyfills are tools that help bridge the gap between old and new browser capabilities, enabling developers to use modern features and APIs in a backward-compatible manner.
- By using polyfills, developers can implement those features in older browsers.

- Example:

// Polyfill for Promise
if (!window.Promise) {
window.Promise = function (executor) {
// Polyfill implementation of Promise
};
}

# Can you explain me the term functions are first class citizens in js

"Functions in JavaScript are first-class citizens", which means you can store functions in variables, pass them to other functions as arguments, return them from other functions as values and also functions can store in data structure.

# What are anonymous functions

Functions without a name.

# What is pass by value and pass by reference in js. Explain with example.

Pass by Value - When you pass primitive data types (like numbers, strings, booleans, null, undefined, and symbol) to a function, they are passed by value.
This means that JavaScript creates a copy of the variable’s value, and any changes made to this copy do not affect the original variable.
WHERE AS
Pass by Reference - When you pass non-primitive data types (like objects or arrays) to a function, they are passed by reference.
This means that JavaScript passes a reference to the original object rather than creating a new copy. As a result, if you modify the object inside the function, the changes will be reflected in the original object.

# What is output of this snippet of code

let person = {
name: "John",
age: 25,
};
function increaseAge(obj) {
obj.age += 1;
obj = { name: "Jane", age: 22 };
}
increaseAge(person);
console.log(person);

# What is shallow copy and deep copy.

A shallow copy creates a new object or array, but it only copies the first level of properties.
For nested objects or arrays, the references (pointers) are copied, not the actual nested values. So, changes to nested objects in the copy affect the original.
WHERE AS
A deep copy creates a completely independent copy of an object or array, including all nested structures.
Changes to nested objects or arrays in the copy do not affect the original, as they are fully duplicated.

# What are closures and give some benefits of using closures

Closure is a function that references variables in the outer scope from its inner scope.

- Common uses of closures -->
  - Module design pattern
  - currying
  - functions like once
  - memoize
  - maintaining state in async world
  - setTimeouts
  - Iterators
  - and many more ...

# What is the difference between Pseudo-classes and pseudo-elements?

- Pseudo-classes (:) - Target the state or condition of an element, like :hover or :nth-child(), to apply styles based on user interaction or positioning.

- Pseudo-elements (::) - Target specific parts of an element's content, like ::before, ::after, or ::first-letter, allowing you to style or insert content within an element.

# What are counters in CSS3?

- Counters in CSS3 are a feature used to create custom counters that can be incremented and displayed with CSS, allowing for automated numbering within a web page without needing additional HTML or JavaScript.
- Counters are particularly useful for dynamic, structured documents such as reports, tables of contents, or articles with numbered sections.

# What is the difference between border-box and content-box?

- border-box --> When using box-sizing: border-box, the specified width and height of an element include the content, padding, and border.
- content-box --> When using box-sizing: content-box, the specified width and height of an element apply only to the content area of the element.

# What is specificity?

- Specificity in CSS is a concept that determines which styles are applied to an element when multiple selectors target it.
- CSS specificity rules rank selectors based on their type and importance, helping the browser to decide which style to apply when there are conflicts.

# What is the difference between em and rem units?

The em unit is relative to the font size of the parent element
WHERE AS
The rem unit is relative to the font size of the root element’s that is (<html>).

# What does !important mean in CSS?

- In CSS, !important is a keyword that increases the specificity of a CSS rule, making it override all other conflicting rules that don’t also have !important.
- When a style is marked with !important, it takes precedence over other rules, regardless of the usual specificity hierarchy.

# Does margin-top or margin-bottom have an effect on inline elements?

- No, margin-top and margin-bottom do not have an effect on inline elements.
- Inline elements are those that do not start on a new line and only take up as much width as necessary.

# What will be the output:

var x = 1;
a();
b();
console.log(x);
function a() {
var x = 2;
console.log(x);
}
function b() {
var x = 3;
console.log(x);
}
