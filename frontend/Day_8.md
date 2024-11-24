frontend interview 5: 
Marks obtained: 49/75 

# What is the difference between function declarations and function expressions? [4/5]

- A function declaration defines a named function with the function keyword and does not assign it to a variable. 
          while
- A function expression defines a function as part of an expression and assigns it to a variable or property.

- Function declarations are hoisted, while function expressions are not.
- Use function declarations for defining standalone reusable functions.
            while
- Use function expressions for dynamic behavior, like callbacks or when assigning functions to variables.

# Explain the concept of function scope and block scope. [5/5]

- In JavaScript, scope refers to the accessibility of variables, constants, and functions in different parts of the code. Function scope and block scope define the boundaries within which variables are accessible.

1. Function Scope - A variable declared inside a function is accessible only within that function. This is called function scope. var is function-scoped: It spans the entire function.

2. Block Scope - A variable declared inside a block ({}) is only accessible within that block and not outside. let and const are block-scoped: Limited to the block they are declared in, making them safer and reducing bugs.

# What is the difference between null and undefined? [5/5]

- Use undefined to represent an uninitialized variable.
- Use null to explicitly indicate that a variable has "no value" or is "empty."

# What are immediately-invoked function expressions (IIFE), and why might you use them? [5/5]

- An IIFE is a JavaScript function that is defined and executed immediately after its definition.
- Use IIFE to 
  - Avoid Polluting the Global Scope
  - Create a Private Scope
  - Initialization Code
  - Avoid Variable Hoisting Issues

# Explain the difference between bind, call, and apply in JavaScript. [3/5]

In JavaScript, call(), apply(), and bind() are methods used to explicitly set the this value of a function and optionally pass arguments to it. However, they differ in how and when the function is invoked.
- Use call when you know the number of arguments and pass them directly.
- Use apply when you have arguments in an array or an array-like structure.
- Use bind when creates and returns a new function with a specified this context and optionally pre-specified arguments. The new function can be called later.

# What is the difference between rest parameters and the arguments object in JavaScript functions? [0/5]

- Rest parameters (...) allow you to represent an indefinite number of arguments as an array.
             while
- The arguments object is an array-like object (not an actual array) available inside non-arrow functions. It contains all arguments passed to the function.  

# Explain the concept of a first-class function and provide an example. [5/5]

- "Functions in JavaScript are first-class citizens", which means you can store functions in variables, pass them to other functions as arguments, return them from other functions as values and also functions can store in data structure.

- Functions as Values:

const sayHello = function() {
  return "Hello!";
};
console.log(sayHello()); // Output: Hello!

- Functions as Arguments:

function greet(callback) {
  console.log(callback());
}

const sayHi = () => "Hi there!";
greet(sayHi); // Output: Hi there!

- Functions as Return Values:

function multiplier(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiplier(2);
console.log(double(5)); // Output: 10

[0/5]
function once(fn) {
    let hasBeenCalled = false; // Tracks whether the function has been called
    let result; // Stores the result of the first call

    return function (...args) {
        if (!hasBeenCalled) {
            hasBeenCalled = true;
            result = fn(...args); // Call the original function and store its result
        }
        return result; // Return the stored result on subsequent calls
    };
}
const addOnce = once((a, b) => a + b);
console.log(addOnce(3, 5)); // Output: 8 (fn is called)
console.log(addOnce(2, 4)); // Output: 8 (fn is not called again)

output based:

operators:
1. console.log(0 && 1 && "foo"); [0/3]   // Output: 0
2. console.log("" || "foo" || false); [3/3]    // Output: foo
3. console.log(+("1" + 2)); [3/3]    // Output: 12

4. [3/3]
let a = 10;
let b = 20;
let c = 30;
let result = (a++ * b--) + (--c);
console.log(result);  // Output: 229

5. [3/3]
let x;
let y = null;
let z = "Hello, World!";
console.log(typeof x);   // Output: undefined  
console.log(typeof y);   // Output: object
console.log(typeof z);   // Output: string

functions:
1. [5/5]
function outer() {
    let outerVar = "I am outside!";

    function inner() {
        console.log(outerVar);
    }

    outerVar = "I am modified!";

    return inner;
}

const closureFunction = outer();
closureFunction();  // OUTPUT: I am modified!

2. [0/5]
function greet() {
  setTimeout(function() {
    console.log(this.name);
  }, 500);
}greet.call({name: 'Daniel Craig'});   // OUTPUT: undefined

3. [5/5]
function outer() {
var x = 10;
function inner() {
var y = 5;
console.log(x + y);
}
var x = 20;
return inner;
}
var innerFunc = outer();
innerFunc();   // output: 25

4. [0/5]
function outer() {
var x = 10;
function inner() {
var y = 5;
console.log(x + y);
x = 20;
}
return inner;
}
var innerFunc = outer();
innerFunc();     // output: 15
innerFunc();     // output: 25