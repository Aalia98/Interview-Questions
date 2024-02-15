## Interview 3  — (16 questions)

# Write a function to make acronym of sentence

function generateAcronym(sentence) {
  if (typeof sentence !== 'string') {
    return 'Invalid input. Please provide a valid string.';
  }

  const words = sentence.split(' ');

  const acronym = words.map(word => word[0].toUpperCase()).join('');

  return acronym;
}

const sentence = 'World Health Organization';
const acronym = generateAcronym(sentence);
console.log(acronym); // Output: WHO

# What are polyfills and why do we use this

- Polyfill ka use primarily JavaScript mein hota hai, jahan new APIs aur features latest browser versions mein available hote hain, lekin older browsers inhe support nahi karte. Polyfills ka istemal karke developers un features ko older browsers mein implement kar sakte hain.

- polyfills are tools that help bridge the gap between old and new browser capabilities, enabling developers to use modern features and APIs in a backward-compatible manner.

- Example:

// Polyfill for Promise
if (!window.Promise) {
  window.Promise = function (executor) {
    // Polyfill implementation of Promise
  };
}

# Can you explain me the term functions are first class citizens in js

"Functions as first-class citizens" ka matlab hai ki JavaScript mein functions ko dusre data types ki tarah treat kiya jata hai aur un par kuch khaas privileges nahi hote. Functions ko variable mein store kiya ja sakta hai, unhe arguments ke roop mein pass kiya ja sakta hai, dusre functions se return kiya ja sakta hai, aur inhe data structures mein store kiya ja sakta hai.

# What are anonymous functions 

Functions without a name.

# What is pass by value and pass by reference in js. Explain with example.

pass by value - isme value ka copy pass hota h actual value niii aur ye primitive data type me hota hai.
pass by reference - isme address pass hota h aur ye non-primitive datatype me hota h.

# What is output of this snippet of code
   let person = {
   name: "John",
   age: 25,
   };
   function increaseAge(obj) {
   obj.age += 1;
   obj = { name: "Jane", age: 22 };
   }
   increaseAge(person);
   console.log(person); 

# What is shallow copy and deep copy.

# What are closures and give some benefits of using closures

# What is the difference between Pseudo-classes and pseudo-elements?

# What are counters in CSS3?

# What is the difference between border-box and content-box?

# What is specificity?

# What is the difference between em and rem units?

# What does !important mean in CSS?

# Does margin-top or margin-bottom have an effect on inline elements?

No, margin-top and margin-bottom do not have an effect on inline elements in the same way they do on block-level elements. Inline elements are those that do not start on a new line and only take up as much width as necessary.

The CSS specification specifies that vertical margins (like margin-top and margin-bottom) do not apply to inline-level elements. Inline elements are typically aligned with the baseline of the text and do not have the concept of block-level layout where top and bottom margins would create space.

However, horizontal margins (margin-left and margin-right) can be applied to inline elements, affecting their left and right spacing within the inline flow.

If you want to control the spacing around inline elements vertically, you might consider using padding or line-height, or converting the inline element to a block-level element using CSS properties like display: block; or display: inline-block;.

# What will be the output:
   var x = 1;
   a();
   b();
   console.log(x);
   function a() {
   var x = 2;
   console.log(x);
   }
   function b() {
   var x = 3;
   console.log(x);
   }