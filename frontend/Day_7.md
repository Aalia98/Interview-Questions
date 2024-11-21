## Frontend interview 4:

# find second max number in the array.

const numbers = [6,9,2,7,1,8,5];
let maxVal = 0, secondMaxVal = 0;

for(let i = 0; i < numbers.length; i++) {
    if(numbers[i] > maxVal) maxVal = numbers[i];
    if(numbers[i] > secondMaxVal && numbers[i] !== maxVal) secondMaxVal = numbers[i];
}
console.log(secondMaxVal);

# how hoisting behaves with let and const compared to var.

- All variables (var, let, const) are hoisted in JavaScript.
- var is initialized with undefined, so it can be accessed before declaration without throwing an error (but will return undefined).
- let and const are hoisted but not initialized, so accessing them before declaration results in a ReferenceError due to the Temporal Dead Zone (TDZ).

# what is temporal dead zone and when it occurs.

- The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when trying to access a variable before it has been declared using the let or const keywords. During the TDZ, attempting to access the variable will result in a ReferenceError.
- The TDZ starts at the beginning of the scope (block, function, or module) where the variable is declared and continues until the actual declaration statement.

# Differentiate between the global execution context and function execution context.

- Global execution context is always created once at the start and remains until the program ends.
WHILE
- Function execution context is created dynamically whenever a function is invoked and is destroyed when the function ends.

# Explain the concept of the "macrotask" and "microtask" in the context of the event loop.

- In JavaScript, the event loop is a mechanism that handles the execution of asynchronous code. Within the event loop, macrotasks and microtasks are two types of tasks with different priorities.

- Macrotasks:
  - Lower priority.
  - Examples: setTimeout, setInterval, I/O tasks.
  - Executed after all microtasks in the current cycle are completed.

- Microtasks:
  - Higher priority.
  - Examples: Promise.then, queueMicrotask, MutationObserver.
  - Executed immediately after the current execution context finishes.

# Explore errors.

# what is output:
console.log("Start");
setTimeout(() => console.log("Timeout 1"), 0);
Promise.resolve().then(() => console.log("Promise 1"));
setTimeout(() => console.log("Timeout 2"), 0);
Promise.resolve().then(() => console.log("Promise 2"));
console.log("End");

# output based:

0. var x = 10;
function foo() {
  console.log(x);
}
function bar() {
  var x = 20;
  foo();
}
bar();

1. function example() {
  console.log(a);
  console.log(b);
  var a = 10;
  let b = 20;
}
example();

2. for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

3. const a = { prop: 1 };
const b = a;
b.prop = 2;
console.log(a.prop);

4. let x = 10;
{
  var x = 20;
}
console.log(x);

5. function test() {
  console.log(a);
  console.log(foo());
  var a = 1;
  function foo() {
    return 2;
  }
}
test();

6. let num = 5;
function multiplyByTwo() {
  num *= 2;
  let num = 10;
}
multiplyByTwo();
console.log(num);

7. const array = [1, 2, 3];
for (const i in array) {
  setTimeout(() => console.log(i), 0);
}

8. function outer() {
  console.log(innerVar);
  if (true) {
    var innerVar = "I am defined!";
  }
  console.log(innerVar);
}
outer();

9. const obj = {
  prop1: "value1",
  prop2: {
    prop3: "value2",
    prop4: function() {
      console.log(this.prop3);
    },
  },
};
obj.prop2.prop4();

console.log(true==![]);
console.log(!!"false" == !!"true");
console.log(true == "true");
console.log(false == []);
console.log(0.1+0.2 == 0.3);

10. const users = [
  {name: 'John'},
  {name: 'Alice'},
  {name: 'Bob'},
  {name: 'Emma'},
  {name: 'David'},
  {name: 'Sophia'},
  {name: 'Michael'},
  {name: 'Olivia'},
  {name: 'Daniel'},
  {name: 'Ella'}
];

function kill() { 
  console.log(`${this.name} is killed`) 
}

users.map((user) => kill.call(user))