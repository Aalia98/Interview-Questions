Frontend Interview :

coding:
# 1. output the string with unique chars in same order
input:
aalia
output
ali

# 2. find the indices of the nums that sums up to target number
input:
arr = [2,6,7,8,11], target = 9
output:
[0,2]

General:
# 1. Can you explain what happens when you enter a URL into the browser?
# 2. What are HTTP methods? List all HTTP methods that you know, and explain them?

# 3. what is lazy loading?

Lazy loading ek programming concept hai, jisme resources (jaise ki images, scripts, stylesheets) ko load karne mein delay kiya jata hai, jab tak ki unki zarurat na ho. Iska mukhya uddeshya webpage ki initial loading time ko kam karna hota hai, jisse users ko faster access mil sake.

Lazy loading ka istemal khas kar large websites aur web applications mein hota hai, jisme multiple resources hote hain aur sabko ek hi saath load karna initial loading time ko bada sakta hai.

Example--------------
Images Lazy Loading:

Lazy loading ka common use case images me hota hai. Agar ek webpage par kai images hain, to sabko ek hi saath load karna initial page load time ko badha sakta hai. Is liye, lazy loading se images ko tab tak load nahi kiya jata jab tak wo user ke viewport me visible na ho.

Javascript:
# 1. What is the difference between call stack and task queue?
# 2. Explain the difference between synchronous and asynchronous functions.
# 3.  what is output:
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

# 6. What is the difference between these four promises?

doSomething().then(function () {
  return doSomethingElse();
});

doSomething().then(function () {
  doSomethingElse();
});

doSomething().then(doSomethingElse());

doSomething().then(doSomethingElse);