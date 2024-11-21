# 1. write a function to make multiplication table of a number.
for example:
2 x 1 = 2
2 x 2 = 4
2 x 3 = 6
...
...
2 x 10 = 20

function table(num) {
    for(let i = 1; i <= 10; i++) {
        console.log(num + " * " + i + " = " + num*i);
    }
}
const number = 2;
table(number)

# 2. what is higher order function and make a higher order function like map?

- A function which takes another function as an arguments or returns a function from it is called higher order function.

function customMap(arr, callback) {
const result = [];

for (let i = 0; i < arr.length; i++) {
// Apply the callback function to each element and store the result in the new array
result.push(callback(arr[i], i, arr));
}

return result;
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = customMap(numbers, function (num) {
return num * 2;
});

console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

# 3. give an example of call and apply method

- Using call Method --> Syntax: function.call(thisArg, arg1, arg2, ...)

- Using apply Method --> Syntax: function.apply(thisArg, [arg1, arg2, ...])
- Example :
const numbers = [1, 2, 3, 4, 5];

// Using call
console.log(Math.max.call(null, 1, 2, 3, 4, 5)); // Output: 5

// Using apply
console.log(Math.max.apply(null, numbers)); // Output: 5

- Use call when you know the number of arguments and pass them directly.
- Use apply when you have arguments in an array or an array-like structure.

# 4. explain rest and spread operator with an example?

- rest operator is used to merge elements into an array or object, whereas spread operator is used to spread elements out of an array or object.

- Here's an example that demonstrates the rest operator:

       function sum(...numbers) {
       return numbers.reduce((total, num) => total + num, 0);
       }
       console.log(sum(1, 2, 3, 4, 5)); // Output: 15

- Here's an example that demonstrates the spread operator:

       const numbers = [1, 2, 3, 4, 5];
       const copiedNumbers = [...numbers];
       const combinedNumbers = [...numbers, 6, 7, 8];

       console.log(copiedNumbers); // Output: [1, 2, 3, 4, 5]
       console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

# 5. explain object destructuring with example

- Object destructuring is a feature introduced in ES6 that allows you to unpack properties from objects into distinct variables in a concise and readable manner.

const person = { name: "Alice", age: 25, city: "New York" };

// Destructure the `name` and `age` properties
const { name, age } = person;

console.log(name); // Output: Alice
console.log(age);  // Output: 25

# 6. how will you submit a form using js

- Submitting a form using JavaScript can be done in different ways, depending on whether you want to submit like
   - Programmatic Submission: Use form.submit().
   - With Validation: Validate inputs before calling form.submit().
   - AJAX Submission: Use fetch() or XMLHttpRequest to send the data asynchronously.
   - Custom Handling: Attach a submit event listener to execute custom logic.

# 7. what are stateless components in react?

- Stateless components are React components that do not maintain or manage their own internal state. They depend only on the data (props) passed to them for rendering and behavior.In other words If the behavior of a component is independent of its state then it can be a stateless component.

# 8. what is babel?

- Babel is a popular JavaScript compiler and toolchain primarily used to transform modern JavaScript (ES6+ and beyond) into a version that is compatible with older browsers or environments. It ensures that developers can use the latest JavaScript features without worrying about compatibility issues.

# 9. difference between state and prop?

- In React, both state and props are plain JavaScript objects and used to manage the data of a component, but they are used in different ways and have different characteristics.

- State Used for data that changes over time within a component. It’s managed locally.
whereas
- Props Used for passing data from parent to child components. They are read-only and immutable within the child.

# output based:

1. 4 + 2 + "4" and 4 + 2 - "4"

2. function sum()
{
    let a = 8;
    const b=2;
    var c=a+b;
}
console.log(a,b,c)
sum()
console.log(a,b,c)

3. let count = 0;
(function immediate() {
  if (count === 0) {
    let count = 1;
    console.log(count); 
  }
  console.log(count); 
})();