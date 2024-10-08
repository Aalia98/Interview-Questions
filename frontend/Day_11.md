## JavaScript Interviews [38/60]

# coding -> const array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8]; return unique int . output -> 3,9,8 [10] - 10

# Types of errors and difference between them with examples [10] - 8

TypeError: Occurs when a variable or value is not of the expected type.
ReferenceError: Occurs when trying to reference an undeclared variable.
RangeError: Occurs when trying to use a value that is outside the allowable range.
SyntaxError: Specific to issues with the code syntax.
EvalError: Rarely used, as it was intended for errors in the deprecated eval() function.

TypeError se bachne ke liye aapko data types ko dhyan se handle karna chahiye, SyntaxError se bachne ke liye code likhne mein attention deni chahiye, aur ReferenceError se bachne ke liye variable aur function ko pehle se define karna important hai.

# What is the difference between lexical scoping and dynamic scoping? [5] 3

Lexical scoping refers to when the location of a function's definition determines which variables you have access to. On the other hand, dynamic scoping uses the location of the function's invocation to determine which variables are available.

Good to hear
Lexical scoping is also known as static scoping.
Lexical scoping in JavaScript allows for the concept of closures.
Most languages use lexical scoping because it tends to promote source code that is more easily understood.

# Why microtask queue has higher priority than callback queue? [5]  - 0

Microtasks ki priority zyada hoti hai comparison mein callback queue ke is liye, kyunki isse aksar developers ko better control milta hai event loop ke flow par. Yahan kuch reasons hain jin se yeh priority assignment hoti hai:

- Responsiveness:

Microtasks ka higher priority rakhna developers ko flexibility deta hai user interfaces ko responsive banane mein. Microtasks jald execute hote hain, isse user ke actions ka response time kam hota hai.

- Avoiding Callback Hell:

Microtasks ka use Promise resolution aur DOM mutations ke tarah tasks ko organize aur execute karne ke liye hota hai. Isse nested callbacks se bacha ja sakta hai aur code ko maintainable bana rakh sakte hain.

- Consistency:

Callback queue tasks ko jis order mein schedule kiya gaya hai, waise hi execute karna hota hai. Lekin microtasks ek hi iteration mein complete ho jate hain, jisse code ka behavior predictable rehta hai.

- Clearer Code Execution Flow:

Microtasks ka use aise tasks ke liye hota hai jo ek event loop iteration ke andar hi complete ho sakte hain. Isse code execution flow clear rehta hai aur developers ko better control milta hai.

- Prioritizing User-Initiated Actions:

Microtasks ko higher priority dene se user-initiated actions jaise click events, keyboard events, ya touch events ka response time improve hota hai. Isse user experience behtar hota hai.

- Promises and Async/Await:

Microtasks ka zyada use Promises aur async/await ke asynchronous programming paradigms mein hota hai. Agar Promises se related tasks callback queue mein hote, toh unka execution time increase ho jata, jo ki user experience ko affect kar sakta hai.

# output based: [3*10=30]

<!-- 1. 
const a = [1, 2, 3]
const b = [1, 2, 3]
const c = "1,2,3"

console.log(a == c)
console.log(a == b)  -->

2. -2
for (const k = 0; k < 3; k++) {
  console.log(k);
}
0

index.js:1
for (const k = 0; k < 3; k++) {}
                          ^

TypeError: Assignment to constant variable.

3. - 0
const funcs = [];
for (var i = 0; i < 5; i++) {
  funcs.push(function() {
    console.log(i);
  });
}
funcs[2]();

ans -> 5

<!-- 4. 
function foo() {
  let x = 10;
  if (true) {
    console.log(x);
  }
}
foo();
console.log(x); -->

5. - 3
const obj = {
  prop1: 'value1',
  prop2: 'value2',
  prop3: 'value3',
};
for (const prop in obj) {
  setTimeout(function() {
    console.log(obj[prop]);
  }, 100);
}

6. - 0
const x = 5;
function foo() {
  console.log(x);
}
function bar() {
  const x = 10;
  foo();
}
bar();

ans -> 5

7. - 3
const obj = {
  a: 1,
  b: function() {
    console.log(this.a);
  },
};
const func = obj.b;
func();

ans -> undefined

<!-- 8. 
function delayLog() {
  for (let i = 1; i <= 5; i++) {
    setTimeout(() => {
      console.log(i);
    }, i * 1000);
  }
}
delayLog();
ans -> 1,2,3,4,5 -->

9. - 0
const promise1 = new Promise((resolve) => {
  console.log('Promise 1');
  resolve('Resolved 1');
});

const promise2 = new Promise((resolve) => {
  console.log('Promise 2');
  resolve('Resolved 2');
});

Promise.race([promise1, promise2]).then((value) => {
  console.log(value);
});

ans -> promise1, promise2, resolved1

<!-- 10. 
async function asyncExample() {
  console.log('Start');
  await Promise.resolve('Middle').then(console.log);
  console.log('End');
}

asyncExample(); -->

11. - 3
let x = 1;
function outer() {
  let x = 2;
  function inner() {
    x++;
    console.log(x);
  }
  return inner;
}

const closureFn = outer();
closureFn();
console.log(x);

ans -> 3,1

12. - 3
let count = 0;
const interval = setInterval(() => {
  console.log(++count);
  if (count === 5) {
    clearInterval(interval);
  }
}, 1000);

13.  - 3
async function asyncFunc() {
  console.log('Async Function Start');
  await new Promise(resolve => setTimeout(resolve, 1000));
  console.log('Async Function End');
}

console.log('Script Start');
asyncFunc();
console.log('Script End');

14. - 0
const obj = {
  a: 10,
  b: function() {
    setTimeout(() => {
      console.log(this.a);
    }, 100);
  },
};
obj.b();

