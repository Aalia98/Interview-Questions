Frontend Interview :

coding:

# 1. output the string with unique chars in same order

input: aalia
output: ali

const str = "aalia";
const counts = {};
for(let i = 0; i < str.length; i++) {
counts[str.charAt(i)] = (str.charAt(i) || 0) + 1;
}
for (const ch in counts) {
console.log(ch);
}

# 2. find the indices of the numbers that sums up to target number

input: arr = [2,6,7,8,11], target = 9
output: [0,2]

function sum(arr, target) {
const result = [];
for(let i = 0; i < arr.length-1; i++) {
for(let j = i+1; j < arr.length; j++) {
if(arr[i] + arr[j] === target) {
result.push(i, j);
break;
}
}
}
return result;
}

General:

# 1. Can you explain what happens when you enter a URL into the browser?

When you enter a URL in a browser, firstly browser identifies the protocol, domain, and path. The domain name is translated to an IP address by a DNS server.The browser connects to the server via TCP, using HTTPS if secure and browser requests the webpage from the server, then server processes the request and sends back the requested data. The browser processes the HTML, CSS, and JavaScript to display the page and load additional resources.

# 2. What are HTTP methods? List all HTTP methods that you know, and explain them?

- HTTP methods are actions that can be performed on resources in a web application.
- Lists of HTTP methods are :
  - GET: Retrieve data.
  - POST: Send data to create or update.
  - PUT: Replace or create a resource.
  - PATCH: Partially update a resource.
  - DELETE: Remove a resource.
  - HEAD: Get headers only (no content).
  - OPTIONS: List supported methods.
  - CONNECT: Establish a network tunnel.
  - TRACE: Echo request for debugging.

# 3. what is lazy loading?

Lazy loading is a technique used to defer the loading of resources (like images, videos, or scripts) until they are actually needed on the screen. Instead of loading all content at once, lazy loading loads only the visible content initially and loads the rest as the user scrolls down.

Key Benefits:

- It Improved Page Load Time
- It Optimized Resource Use
- It gives Better User Experience

Javascript:

# 1. What is the difference between call stack and task queue?

- The call stack is a data structure that manages synchronous code execution, while the task queue holds asynchronous callbacks waiting to run after the call stack is clear.

# 2. Explain the difference between synchronous and asynchronous functions.

Synchronous functions block the program flow, requiring each task to complete before the next starts while asynchronous functions allow other tasks to run while waiting, keeping the program responsive.

# 3. what is output:

console.log('one');
setTimeout(function() {
console.log('two');
}, 0);
Promise.resolve().then(function() {
console.log('three');
})
console.log('four');

# 4. Will they both return the same thing? Why or why not?

function foo1()
{
return {
bar: "hello"
};
}

function foo2()
{
return
{
bar: "hello"
};
}

# 5. Hoisting?

When you execute a piece of JavaScript code, the JavaScript engine creates the global execution context.
The global execution context has two phases: creation and execution.
During the creation phase, the JavaScript allocated memory to variables and function variables, assign undefined to variables and code to function variables.
note: variable with arrow function and anonymous function are assigned to undefined not code
This feature is known as hoisting in JavaScript.

# 6. What is the difference between these four promises?

doSomething().then(function () {
return doSomethingElse();
});

doSomething().then(function () {
doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);

- Summary of Differences:
  Case What Happens? Next .then Behavior
  1 doSomethingElse() is returned and awaited. Waits for doSomethingElse() to resolve.
  2 doSomethingElse() is called but not awaited. Proceeds immediately after doSomething().
  3 doSomethingElse() executes immediately (incorrect). Passes the result of doSomethingElse().
  4 doSomethingElse is executed after doSomething(). Waits for doSomethingElse() if it returns a promise.

Best Practices:

- Case 1 or Case 4 are correct for proper promise chaining.
- Case 2 is fine if you don't need to wait for doSomethingElse().
- Avoid Case 3 as it is incorrect and may lead to unintended behavior.
