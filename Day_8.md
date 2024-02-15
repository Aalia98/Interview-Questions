frontend interview 5: 
Marks obtained: 49/75 

# What is the difference between function declarations and function expressions? [4/5]
# Explain the concept of function scope and block scope. [5/5]
# What is the difference between null and undefined? [5/5]
# What are immediately-invoked function expressions (IIFE), and why might you use them? [5/5]
# Explain the difference between bind, call, and apply in JavaScript. [3/5]
# What is the difference between rest parameters and the arguments object in JavaScript functions? [0/5]
# Explain the concept of a first-class function and provide an example. [5/5]

[0/5]
function once(fn) {
    // Your code here
}
const addOnce = once((a, b) => a + b);
console.log(addOnce(3, 5)); // Output: 8
console.log(addOnce(2, 4));  // Output: 8

output based:

operators:
1. console.log(0 && 1 && "foo"); [0/3]
2. console.log("" || "foo" || false); [3/3]
3. console.log(+("1" + 2)); [3/3]

4. [3/3]
let a = 10;
let b = 20;
let c = 30;
let result = (a++ * b--) + (--c);
console.log(result);

5. [3/3]
let x;
let y = null;
let z = "Hello, World!";
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

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
closureFunction();

2. [0/5]
function greet() {
  setTimeout(function() {
    console.log(this.name);
  }, 500);
}greet.call({name: 'Daniel Craig'});

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
innerFunc();

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
innerFunc();
innerFunc();