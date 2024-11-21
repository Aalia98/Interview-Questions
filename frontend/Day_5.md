## Frontend Interview:

# What is Virtual DOM in React and how does it work?

- The Virtual DOM in React is a lightweight JavaScript representation of the real DOM. It improves performance by creating an in-memory Virtual DOM tree during the initial render and updating it whenever state or props change. React uses a diffing algorithm to compare the updated Virtual DOM with the previous one.
- The Virtual DOM works in three simple steps.
  - Whenever any underlying(basic) data changes, the entire UI is re-rendered in Virtual DOM representation.
  - Then the difference between the previous DOM representation and the new one is calculated.
  - Once the calculations are done, the real DOM will be updated with only the things that have actually changed.

# What are the differences between controlled and uncontrolled components?

- controlled components depends on React for state management, providing more control and flexibility, while uncontrolled components depends on the DOM, making them simpler but less dynamic.                                   

# What data types exist in JavaScript? 

JavaScript has several data types, which can be categorized into primitive and non-primitive (or reference) types.
- Primitive --> number, string, boolean, undefined, null, symbol, bigInt
- Non-Primitive --> Object, Array

# What is the difference between null and undefined? 

- Use undefined to represent an uninitialized variable.
- Use null to explicitly indicate that a variable has "no value" or is "empty."

# How to check for the presence of a property in an object? 

- in Operator --> Checks if a property exists in the object or its prototype chain.
"name" in obj; // true

- hasOwnProperty() Method --> Checks if a property exists directly on the object (not in the prototype).
obj.hasOwnProperty("name"); // true

- Object.hasOwn() (ES2022) --> Modern, safer alternative to hasOwnProperty() for direct property checks.
Object.hasOwn(obj, "name"); // true

- Optional Chaining (?.) --> Safely checks for nested properties without errors.
obj?.nested?.property !== undefined; // true or false

- typeof Check --> Checks if a property exists and is not undefined, but beware of edge cases with undefined values.
typeof obj.property !== "undefined"; // true

- Object.keys() / Object.values() --> Indirect method by inspecting arrays of keys or values.
Object.keys(obj).includes("name"); // true

# How can you get a list of keys and a list of values from an object? 

- Using the built-in methods Object.keys() and Object.values().
- Get Both Keys and Values using Object.entries(object)

# Write a deleteGreatestValue function that takes a two-dimensional array of numbers and removes the greatest number from each nested array. 
arr = [[1, 4, 4], [2, 6, 3], [9, 2, 7]]
output: [[1, 4], [2, 3], [2, 7]]

const arr = [[1,4,4], [2,6,3], [9,2,7]];
let maxVal = 0;

for(let i = 0; i < arr.length; i++) {
    for(let j = 0; j < arr[i].length; j++) {

        if(arr[i][j] > maxVal) maxVal = arr[i][j];
        
    }
    arr[i].splice(arr[i].indexOf(maxVal), 1);
    maxVal = 0;
}
console.log(arr);

# what is its output and why?

1. let x = '{ "b": 1, "c": 2 }'; 
let y = JSON.parse(x); 
console.log(typeof y); 

2. let x = 1 > 2 > 3; 
console.log(x); 

3. let a = () => { 
  console.log(this); 
}; 
a(); 

4. let x = "b"; 
let y = "a"; 
console.log(x + y + + y + y); 

5. const a = { b: { c: 2 } }; 
const b = { ...a }; 
a.b.c = 3; 
console.log(b.b.c); 

6. let x = [1, 2, 3, 5]; 
x.forEach((e) => { 
  if (e > 2 && e < 5) return; 
  console.log(e); 
}); 