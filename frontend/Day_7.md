## Frontend interview 4:

# find second max number in the array.

# how hoisting behaves with let and const compared to var.

# what is temporal dead zone and when it occurs.

# Differentiate between the global execution context and function execution context.

# Explain the concept of the "macrotask" and "microtask" in the context of the event loop. *****

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