 # 1. What is HTML5? How is it different from HTML4?

- HTML5 improves upon HTML4 by adding more features like multimedia support, a canvas for drawing, storage for web apps to work offline, Focus on new APIs, semantic elements, no need for external plugins and a way to find a user's location.

# 2. What are semantic elements in HTML5? Why are they important?

- Semantic elements in HTML5 are tags that clearly describe the meaning or role of the content inside them — both to developers and to browsers or search engines.
- Semantic elements make your HTML meaningful, accessible, and SEO-friendly, while also improving collaboration and code quality.

# 3. Which new input types were introduced in HTML5?

- email, url, date, number, range, color, tel, search.

# 4. How does HTML5 handle multimedia content?

- Through <audio> and <video> tags — no Flash needed.

# 5. What is the difference between <section>, <div>, and <article>?

- Use <div> when you just need a container with no specific meaning.
- Use <section> to organize related content with a heading.
- Use <article> for self-contained, standalone pieces of content.

Using semantic tags like <section> and <article> instead of <div> makes your HTML more meaningful, accessible, and SEO-friendly.

# 6. What is the purpose of the placeholder, required, and autofocus attributes?

- Used to enhance user experience and form validation.

# 7. What is the difference between localStorage, sessionStorage, and cookies?

- localStorage, sessionStorage, and cookies are all used to store data in the browser, but they differ in purpose and behavior. 
- localStorage stores data with no expiration and remains available even after the browser is closed, making it ideal for saving long-term preferences like theme settings or user data. 
- sessionStorage, on the other hand, only retains data for the duration of a browser tab — once the tab is closed, the data is lost — making it useful for temporary data like form input during a session. 
- cookies are small data files (about 4KB) that are automatically sent to the server with every HTTP request, commonly used for authentication, tracking, and session management. While localStorage and sessionStorage are accessible only via JavaScript and not sent to the server, cookies can be accessed by both the client and server, making them suitable for server-side needs.

# 8. What is the <canvas> element in HTML5?

- Used for drawing 2D graphics dynamically via JavaScript. The <canvas> element is a powerful HTML5 feature that allows you to draw and manipulate visual content directly in the browser using JavaScript. It's perfect for anything from charts and visualizations to full-on 2D/3D games — but remember, it’s a blank slate; all rendering is done with code!.

# 9. What is the difference between <canvas> and <svg>?

- The primary difference between <canvas> and <svg> lies in how they handle graphics. <canvas> is a bitmap-based element, meaning it draws using pixels, while <svg> is a vector-based element, meaning it draws using shapes defined by mathematical equations.

# 10. What are data attributes in HTML5?

- Data attributes allow developers to store custom data in HTML elements. They provide a way to add extra information to HTML elements that can be used by JavaScript or CSS to add functionality to a webpage.
Example: <div data-user-id="123"></div>

# 11. What is the Geolocation API in HTML5? How is it used?

- Geo-location in HTML5 is used to share the location with some websites and be aware of the exact location. It is mainly used for local businesses, and restaurants, or showing locations on the map. It uses JavaScript to give latitude and longitude to the backend server. Most browsers support Geolocation API.
navigator.geolocation.getCurrentPosition(successCallback);

# 12. What are Web Workers? How do they improve performance?

- Web Workers provide a way to run JavaScript in the background, separate from the main execution thread. This allows for performing tasks like heavy computations or I/O operations without blocking the user interface, leading to a smoother user experience.

# 13. What is the Drag and Drop API in HTML5?

- Use of draggable="true", and JavaScript events like ondragstart, ondrop, etc.

# 15. What is the purpose of the novalidate attribute in forms?

- The novalidate attribute prevents forms from running their validation logic when the form is submitted.
- Disables browser’s built-in validation.

# 16. How does HTML5 support offline storage?

- Through localStorage, sessionStorage, and older methods like AppCache (deprecated).

# 17. Explain how you would use the <template> tag in HTML5.

- The <template> tag is used as a container to hold some HTML content hidden from the user when the page loads. The content inside <template> can be rendered later with a JavaScript. You can use the <template> tag if you have some HTML code you want to use over and over again, but not until you ask for it.