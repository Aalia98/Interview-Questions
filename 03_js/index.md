## JavaScript Questions ----

1. What are the possible ways to create objects in JavaScript?

- There are many ways to create objects in javascript as mentioned below,

#  Object literal syntax:

  The object literal syntax (or object initializer), is a comma-separated set of name-value pairs wrapped in curly braces.

  var object = {
     name: "Sudheer",
     age: 34
  };

  Object literal property values can be of any data type, including array, function, and nested object.
  Note: This is an easiest way to create an object.

#  Object constructor:

  The simplest way to create an empty object is using the Object constructor. Currently this approach is not recommended.

  var object = new Object();
  The Object() is a built-in constructor function so "new" keyword is not required. The above code snippet can be re-written as:

  var object = Object();

#  Object's create method:

  The create method of Object is used to create a new object by passing the specificied prototype object and properties as arguments. i.e., This pattern is helpful to create new objects based on existing objects. The second argument is optional and it is used to create properties on a newly created object.

  The following code creates a new empty object whose prototype is null.

  var object = Object.create(null);

#  Function constructor:

  In this approach, create any function and apply the new operator to create object instances.

  function Person(name) {
  this.name = name;
  this.age = 21;
  }
  var object = new Person("Sudheer");

#  Function constructor with prototype:

  This is similar to function constructor but it uses prototype for their properties and methods,

  function Person() {}
  Person.prototype.name = "Sudheer";
  var object = new Person();
  This is equivalent to an instance created with an object create method with a function prototype and then call that function with an instance and parameters as arguments.

  function func() {}

  new func(x, y, z);
  (OR)

  // Create a new instance using function prototype.
  var newInstance = Object.create(func.prototype)

  // Call the function
  var result = func.call(newInstance, x, y, z),

  // If the result is a non-null object then use it otherwise just use the new instance.
  console.log(result && typeof result === 'object' ? result : newInstance);

#  ES6 Class syntax:

  ES6 introduces class feature to create the objects

  class Person {
  constructor(name) {
    this.name = name;
  }
  }

  var object = new Person("Sudheer");

2. What is a prototype chain?

- Prototype chaining is used to build new types of objects based on existing ones. It is similar to    inheritance in a class based language.

The prototype on object instance is available through Object.getPrototypeOf(object) or __proto__ property whereas prototype on constructors function is available through Object.prototype.

3. What is the difference between Call, Apply and Bind?

- The difference between Call, Apply and Bind can be explained with below examples,

Call: The call() method invokes a function with a given this value and arguments provided one by one

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.call(employee1, "Hello", "How are you?"); // Hello John Rodson, How are you?
invite.call(employee2, "Hello", "How are you?"); // Hello Jimmy Baily, How are you?
Apply: Invokes the function with a given this value and allows you to pass in arguments as an array

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

invite.apply(employee1, ["Hello", "How are you?"]); // Hello John Rodson, How are you?
invite.apply(employee2, ["Hello", "How are you?"]); // Hello Jimmy Baily, How are you?
bind: returns a new function, allowing you to pass any number of arguments

var employee1 = { firstName: "John", lastName: "Rodson" };
var employee2 = { firstName: "Jimmy", lastName: "Baily" };

function invite(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = invite.bind(employee1);
var inviteEmployee2 = invite.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello John Rodson, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Jimmy Baily, How are you?
Call and apply are pretty interchangeable. Both execute the current function immediately. You need to decide whether it’s easier to send in an array or a comma separated list of arguments. You can remember by treating Call is for comma (separated list) and Apply is for Array.

Whereas Bind creates a new function that will have this set to the first parameter passed to bind().

4. What is JSON and its common operations?

- JSON is a text-based data format following JavaScript object syntax, which was popularized by Douglas Crockford. It is useful when you want to transmit data across a network and it is basically just a text file with an extension of .json, and a MIME type of application/json

Parsing: Converting a string to a native object

JSON.parse(text);
Stringification: converting a native object to a string so it can be transmitted across the network

JSON.stringify(object);

5. What is the purpose of the array slice method?

- The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without including the last element. If you omit the second argument then it selects till the end.

Some of the examples of this method are,

let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
Note: Slice method won't mutate the original array but it returns the subset as a new array.

6. What is the event loop in Node.js?

The event loop handles all async callbacks. Callbacks are queued in a loop, while other code runs, and will run one by one when the response for each one has been received.

The event loop allows Node.js to perform non-blocking I/O operations, despite the fact that JavaScript is single-threaded

7. dayOfYear
Gets the day of the year from a Date object.

Use new Date() and Date.prototype.getFullYear() to get the first day of the year as a Date object, subtract it from the provided date and divide with the milliseconds in each day to get the result. Use Math.floor() to appropriately round the resulting day count to an integer.

const dayOfYear = date =>
  Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
dayOfYear(new Date()); // 272

8. What does the following code evaluate to?
typeof typeof 0   // string

It evaluates to "string".

typeof 0 evaluates to the string "number" and therefore typeof "number" evaluates to "string".

9. What is the DOM?

The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.

Good to hear
The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API.
The DOM is constructed progressively in the browser as a page loads, which is why scripts are often placed at the bottom of a page, in the <head> with a defer attribute, or inside a DOMContentLoaded event listener. Scripts that manipulate DOM nodes should be run after the DOM has been constructed to avoid errors.
document.getElementById() and document.querySelector() are common functions for selecting DOM nodes.
Setting the innerHTML property to a new value runs the string through the HTML parser, offering an easy way to append dynamic HTML content to a node.

10. How does hoisting work in JavaScript?

Hoisting is a JavaScript mechanism where variable and function declarations are put into memory during the compile phase. This means that no matter where functions and variables are declared, they are moved to the top of their scope regardless of whether their scope is global or local.

However, the value is not hoisted with the declaration.

The following snippet:

console.log(hoist)
var hoist = "value"
is equivalent to:

var hoist
console.log(hoist)
hoist = "value"
Therefore logging hoist outputs undefined to the console, not "value".

Hoisting also allows you to invoke a function declaration before it appears to be declared in a program.

myFunction() // No error; logs "hello"
function myFunction() {
  console.log("hello")
}
But be wary of function expressions that are assigned to a variable:

myFunction() // Error: `myFunction` is not a function
var myFunction = function() {
  console.log("hello")
}

11. What is the difference between lexical scoping and dynamic scoping?

Lexical scoping refers to when the location of a function's definition determines which variables you have access to. On the other hand, dynamic scoping uses the location of the function's invocation to determine which variables are available.

Good to hear
Lexical scoping is also known as static scoping.
Lexical scoping in JavaScript allows for the concept of closures.
Most languages use lexical scoping because it tends to promote source code that is more easily understood.

12. What is the only value not equal to itself in JavaScript?

NaN (Not-a-Number) is the only value not equal to itself when comparing with any of the comparison operators. NaN is often the result of meaningless math computations, so two NaN values make no sense to be considered equal.

Good to hear
The difference between isNaN() and Number.isNaN()
const isNaN = x => x !== x

13. What is the output of the following code?

const a = [1, 2, 3]
const b = [1, 2, 3]
const c = "1,2,3"

console.log(a == c)
console.log(a == b)  

14. What is REST?

REST (REpresentational State Transfer) is a software design pattern for network architecture. A RESTful web application exposes data in the form of information about its resources.

Generally, this concept is used in web applications to manage state. With most applications, there is a common theme of reading, creating, updating, and destroying data. Data is modularized into separate tables like posts, users, comments, and a RESTful API exposes access to this data with:

An identifier for the resource. This is known as the endpoint or URL for the resource.
The operation the server should perform on that resource in the form of an HTTP method or verb. The common HTTP methods are GET, POST, PUT, and DELETE.
Here is an example of the URL and HTTP method with a posts resource:

Reading: /posts/ => GET
Creating: /posts/new => POST
Updating: /posts/:id => PUT
Destroying: /posts/:id => DELETE

Good to hear
Alternatives to this pattern like GraphQL

Link -> https://medium.com/extend what-is-rest-a-simple-explanation-for-beginners-part-1-introduction-b4a072f8740f

15. What are truthy and falsy values in JavaScript?

A value is either truthy or falsy depending on how it is evaluated in a Boolean context. Falsy means false-like and truthy means true-like. Essentially, they are values that are coerced to true or false when performing certain operations.

There are 6 falsy values in JavaScript. They are:

false
undefined
null
"" (empty string)
NaN
0 (both +0 and -0)
Every other value is considered truthy.

A value's truthiness can be examined by passing it into the Boolean function.

Boolean("") // false
Boolean([]) // true
There is a shortcut for this using the logical NOT ! operator. Using ! once will convert a value to its inverse boolean equivalent (i.e. not false is true), and ! once more will convert back, thus effectively converting the value to a boolean.

!!"" // false
!![] // true

16. In which states can a Promise be?

A Promise is in one of these states:

pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation completed successfully.
rejected: meaning that the operation failed.

A pending promise can either be fulfilled with a value, or rejected with a reason (error). When either of these options happens, the associated handlers queued up by a promise's then method are called.
