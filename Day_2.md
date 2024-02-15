## 03/12 is correct

# Sum of array elements with reduce method
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

# What will be output and give reasons **************
    var a = 5;
    (function() {
    console.log(a);
    var a = 10;
    })();

- Output is: undefined


# What are CSS Sprites and what are the benefits of using that ?

CSS Sprites ek web development technique hai jisme kai saare chhote images ko ek hi image mein combine kiya jata hai, aur phir CSS ke background properties ka istemal karke webpage ke alag-alag sections mein is ek image ko display kiya jata hai. Is technique ka istemal HTTP requests ko kam karne ke liye kiya jata hai, jo webpage ke loading times ko improve kar sakta hai. Niche CSS Sprites ke benefits ko detail mein dekhte hain:

1. Kam HTTP Requests:
CSS Sprites ka sabse bada benefit yeh hai ki yeh multiple images ko ek hi request mein load karwane ki madad karta hai, jisse overall HTTP requests kam ho jate hain.
2. Tezi se Page Load:
Kam HTTP requests ka matlab hai kam data download karna, jisse webpage ki loading speed me improvement hoti hai, khaas kar slower network connections par.
3. Caching Ki Badhiya Upyogita:
Kam images ka use karke caching ko badhiya taur par manage kiya ja sakta hai. Caching ki efficiency badhti hai, jisse user ko better experience milta hai.
4. Latency Kam Hona:
Har ek HTTP request ke saath associated latency (jaise DNS lookup, connection establishment) significant ho sakta hai. Sprites latency ko kam karke webpage ke load time ko improve karte hain.
5. Behtar Performance:
CSS Sprites ke istemal se webpage ki overall performance aur responsiveness me sudhar hota hai.
6. CSS Simplification:
CSS Sprites ka istemal karke CSS code ko simplify kiya ja sakta hai. Har ek element ke liye alag background image define karne ki jagah, ek hi sprite image ka use kiya ja sakta hai.
7. Bandwidth Usage Kam Hona:
Sprites ke istemal se total transferred data kam hota hai, jo limited bandwidth wale users ke liye beneficial hota hai.
8. Icons aur Small Images ke liye Optimized:
Sprites chhote icons, buttons, aur dusri small images ke liye particularly effective hote hain.
CSS Sprite Ka Istemal Kaise Hota Hai:
Maan lijiye aapke paas ek sprite image hai jisme multiple icons hain, aur har ek icon 20x20 pixels ka hai. Aap ise CSS ke istemal se alag-alag elements ke liye display kar sakte hain:

.icon {
  width: 20px;
  height: 20px;
  background-image: url('sprites.png');
}

.icon1 {
  background-position: 0 0; /* Pehle icon ke liye position */
}

.icon2 {
  background-position: -20px 0; /* Dusre icon ke liye position */
}

/* Aise hi aur classes add kiye ja sakte hain dusre icons ke liye */
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

# What are the different kinds of Doctypes available?

- html, html5, xml and many more

# Can we display a web page inside a web page or Is nesting of webpages possible?

- Yes, its possible using iframe

# What is 200 OK response codes in HTTP

The HTTP status code "200 OK" is a standard response status code indicating that the request was successful. It is one of the most commonly used status codes and signals that the server has successfully fulfilled the request.

Here are some key points about the "200 OK" status code:

Success:

This status code indicates that the request has been successfully processed by the server.
Request Methods:

It can be used with any HTTP request method (GET, POST, PUT, DELETE, etc.) to indicate that the operation was successful.
Response Body:

The server may include additional information in the response body, which typically contains the requested data or a confirmation message.
Caching:

The response can be cached by the client for future use, as the request was successful.
Example of an HTTP response with a "200 OK" status code:

HTTP/1.1 200 OK
Content-Type: text/html
Content-Length: 123

<!DOCTYPE html>
<html>
  <head>
    <title>Successful Request</title>
  </head>
  <body>
    <h1>Request Successful</h1>
    <p>This is the content of the response.</p>
  </body>
</html>
In this example, the server responds with a "200 OK" status code, indicating that the request was successful, and it includes an HTML response body.

# Difference between local storage and session storage

Local Storage aur Session Storage dono hi modern web browsers mein client-side storage provide karte hain, lekin inme kuch key differences hain:

Local Storage:
Lifetime:

Data stored in local storage remains persistently available even after the browser is closed and reopened.
The data has no expiration time, and it is stored until explicitly removed by the user or the web application.
Scope:

Local storage has a broader scope and is accessible across all windows and tabs for the same origin (same protocol, host, and port).
Storage Limit:

The storage limit for local storage is typically higher than session storage, with a capacity of around 5 MB or more per domain.
Use Cases:

Suitable for storing long-term data that needs to be available across multiple sessions or tabs.
Session Storage:
Lifetime:

Data stored in session storage is available only for the duration of the page session.
The data is cleared when the user closes the browser tab or window, or when the session ends due to inactivity.
Scope:

Session storage is limited to the same window or tab. It is not accessible across different tabs or windows for the same origin.
Storage Limit:

The storage limit for session storage is similar to local storage, but it tends to be lower, typically around 5 MB or more per domain.
Use Cases:

Suitable for storing temporary data that is only needed for the duration of a user's visit to a website.
Commonalities:
Both local storage and session storage use the same Web Storage API and provide a simple key-value storage mechanism.
Data stored in both storage types is accessible using JavaScript on the client side.
Example Usage:

// Local Storage
localStorage.setItem('key', 'value');
const storedValue = localStorage.getItem('key');

// Session Storage
sessionStorage.setItem('key', 'value');
const storedValueSession = sessionStorage.getItem('key');

In summary, the main differences between local storage and session storage lie in their lifetime, scope, and use cases. Local storage is suitable for persistent, long-term storage, while session storage is designed for temporary, session-specific storage.

# [1,2,3]+[2,3,4]

- Output is : 1, 2, 32, 3, 4
