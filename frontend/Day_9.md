frontend interview 6: [marks - 33.5/75]

[5x6]
# different ways to create an object [4]
# How do you add a method to an existing object [6]
# What is the difference between dot notation (.) and bracket notation ([]) when accessing object properties [3]
# How do you use object destructuring to assign variables with different names than the object properties? [6]
# Explain the concept of immutability in JavaScript objects. [2]
# How would you deeply clone an object in JavaScript? [0]

[2x2.5]
# What is the purpose of the hasOwnProperty method in JavaScript? [0]
# How can you remove a property from an object? [2.5]

# coding: 
1. Write a function that takes this array as input and returns an object with role-wise counts [0/10]
input:
const employees = [
  { name: "Alice", role: "Developer" },
  { name: "Bob", role: "Manager" },
  { name: "Charlie", role: "Designer" },
  { name: "David", role: "Developer" },
  { name: "Eve", role: "Manager" }
];
output:
{
  Developer: 2,
  Manager: 2,
  Designer: 1
}

let roleCount = {};

employees.forEach((emp) => {
  const role = emp.role;
  roleCount[role]  = (roleCount[role] || 0) + 1
})

console.log(roleCount)

# count letter
const name = "aalia";
let freqCount = {};

for(let i = 0; i < name.length; i++) {
  freqCount[name[i]] = (freqCount[name[i]] || 0) + 1;
}
console.log(freqCount)

# count unique letter
const name = "aalia";
let freqCount = {};
let ans = "";

for(let i = 0; i < name.length; i++) {
  if(freqCount[name[i]]) continue
  ans += name[i]
  freqCount[name[i]] = true;
}
console.log(ans)

2. Write a function that combines these objects into a single user object for authentication and profile details. [10/10]
input:
const authenticationData = {
  username: "user123",
  password: "securepassword"
};
const profileData = {
  name: "John Doe",
  email: "john@example.com",
  age: 28
};
output:
{
  username: "user123",
  password: "securepassword",
  name: "John Doe",
  email: "john@example.com",
  age: 28
}

3. You have a large dataset of items, and you need to implement pagination.  [0/20]
Write a function that takes this data as input and returns an array representing the items on the current page.
input:
allItems = [
  { id: 1, name: "Laptop", category: "Electronics", price: 1200 },
  { id: 2, name: "Headphones", category: "Electronics", price: 100 },
  { id: 3, name: "Book", category: "Books", price: 20 },
  { id: 4, name: "Smartphone", category: "Electronics", price: 800 },
  { id: 5, name: "Backpack", category: "Fashion", price: 50 },
  { id: 6, name: "Watch", category: "Fashion", price: 150 },
  { id: 7, name: "Desk Chair", category: "Furniture", price: 200 },
  { id: 8, name: "Plant", category: "Home & Garden", price: 30 },
  { id: 9, name: "Gaming Console", category: "Electronics", price: 300 },
  { id: 10, name: "Running Shoes", category: "Fashion", price: 80 },
  { id: 11, name: "Coffee Table", category: "Furniture", price: 120 },
  { id: 12, name: "Television", category: "Electronics", price: 1000 },
  { id: 13, name: "Cookbook", category: "Books", price: 25 },
  { id: 14, name: "Sofa", category: "Furniture", price: 500 },
  { id: 15, name: "Fitness Tracker", category: "Electronics", price: 60 },
  { id: 16, name: "Artificial Plant", category: "Home & Garden", price: 15 },
  { id: 17, name: "Dining Table", category: "Furniture", price: 300 },
  { id: 18, name: "Bluetooth Speaker", category: "Electronics", price: 70 },
  { id: 19, name: "Novel", category: "Books", price: 18 },
  { id: 20, name: "Bedside Lamp", category: "Home & Garden", price: 40 },
];
itemsPerPage = 3
currentPage = 2;
output:
[
  { id: 4, name: 'Smartphone', category: 'Electronics', price: 800 },
  { id: 5, name: 'Backpack', category: 'Fashion', price: 50 },
  { id: 6, name: 'Watch', category: 'Fashion', price: 150 }
]

// let currentPage = 3;
// const itemsPerPage = 3;

function pagination(currentPage, itemsPerPage) {
  let startIndex = (currentPage-1)*itemsPerPage;
  const pageItems = allItems.slice(startIndex, (itemsPerPage+startIndex));
console.log(pageItems)
}

pagination(7, 3);