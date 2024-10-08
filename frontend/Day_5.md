## Frontend Interview:

# What is Virtual DOM in React and how does it work?

# What are the differences between controlled and uncontrolled components?

# What data types exist in JavaScript? 

# What is the difference between null and undefined? 

# How to check for the presence of a property in an object? 

# How can you get a list of keys and a list of values from an object? 

# Write a deleteGreatestValue function that takes a two-dimensional array of numbers and removes the greatest number from each nested array. 
arr = [[1, 4, 4], [2, 6, 3], [9, 2, 7]]
output: [[1, 4], [2, 3], [2, 7]]

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