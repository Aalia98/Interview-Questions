## 03/12 is correct

# Sum of array elements with reduce method

const arr = [1,2,3,4,5];

const sum = arr.reduce((acc, curr) => acc + curr, 0);
console.log(sum);

# Implement your own map method

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

# What will be output and give reasons 

    var a = 5;
    (function() {
    console.log(a);
    var a = 10;
    })();

- Output is: undefined

# What are CSS Sprites and what are the benefits of using that ?

CSS Sprites are a web development technique where multiple images are combined into a single image file, and then different parts of that image are displayed in specific sections of a web page using CSS. This is done by positioning the larger image using CSS background-position, showing only the required part of the image at any given time.

Benefits of Using CSS Sprites:

- Reduced HTTP Requests
- Faster page load time
- Efficient caching

.icon {
width: 20px;
height: 20px;
background-image: url('sprites.png');
}

.icon1 {
background-position: 0 0;
}

.icon2 {
background-position: -20px 0;
}

Is example mein, aapke paas ek sprite image ('sprites.png') hai jisme kai icons hain. Har ek icon ko display karne ke liye aapne specific CSS classes create ki hain, aur background position ko adjust kiya hai taki har ek icon ki jagah sahi dikhaye.

# What are the different media types allowed by CSS?

CSS (Cascading Style Sheets) supports various media types, which allow you to apply different styles based on the type of media being used to display the document. Here are some commonly used media types in CSS:

- All (all):
  Applies to all media types. This is the default if no media type is specified.

- Print (print):
  Applies to printers or print preview.

- Screen (screen):
  Applies to computer screens, tablets, smart-phones, etc. (default for most styles).

- Speech (speech):
  Applies to screen readers that "reads" the page out loud.

- Braille (braille):
  Applies to braille tactile feedback devices.

- TTY (tty):
  Applies to media using a fixed-pitch character grid (such as teletypes, terminals, or portable devices with limited display capabilities).

- TV (tv):
  Applies to television-type devices.

- Projection (projection):
  Applies to projected presentations, such as slides.

- Handheld (handheld):
  Applies to small, handheld devices.

These media types allow for more targeted and customized styling based on the characteristics of the device or medium through which the content is being presented. You can use them in combination with media queries to create responsive designs.

# Find the maximum number in array without using sort function

const arr = [2, 8, 1, 3, 9, 4];
let maxNum = 0;

for(let i = 0; i < arr.length; i++) {
if(arr[i] > maxNum) {
maxNum = arr[i];
}
}
console.log(maxNum);

# Sort this array ac to price, if price is same then sort ac to order

const products = [
{
id: 1,
name: "Polo Jeans",
price: 499,
color: "black",
category: "clothing",
},
{
id: 2,
name: "Kurta jeans",
price: 299,
color: "blue",
category: "clothing",
},
{
id: 3,
name: "Iphone",
price: 49999,
color: "black",
category: "electronics",
},
{
id: 4,
name: "TV",
price: 49999,
color: "black",
category: "electronics",
},
];

products.sort((a,b) => a.price - b.price);
console.log(products);

# What are the different kinds of Doctypes available?

- html, html5, xml and many more

# Can we display a web page inside a web page or Is nesting of webpages possible?

- Yes, its possible using iframe.

# What is 200 OK response codes in HTTP?

This status code indicates that the request has been successfully processed by the server.

# Difference between local storage and session storage?

Local storage is suitable for persistent, long-term storage, WHILE session storage is designed for temporary, session-specific storage.

# [1,2,3]+[2,3,4]

- Output is : 1, 2, 32, 3, 4
