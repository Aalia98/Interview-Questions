## HTML Questions ----

1. What is the difference between HTML and XHTML?
 
- HTML stands for Hypertext Markup Language, whereas XHTML stands for Extensible Hypertext Markup Language. 
- XHTML is basically an extension of HTML, which is stricter than HTML. 
- Both languages are used to create web and Android applications.

2. Difference Between HTML and HTML5?

- Form Controls:

HTML: Limited form validation on JavaScript for user input validation.
HTML5: Adds new form input types (e.g., <input type="email">, <input type="url">) and attributes for native form validation.

- Storage:

HTML: Limited client-side storage options, often relying on cookies.
HTML5: Introduces localStorage and sessionStorage for more efficient client-side storage.

3. What are the building blocks of HTML and HTML5?

HTML - Tags, Attributes, Elements
HTML5 - Semantics, Connectivity, Offline and storage, Multimedia, 2D/3D graphics and effects, Performance and integration, Device access, Styling.

4. What are the semantic tags available in html5?

HTML5 offers new semantic elements to define different parts of a web page:

<article>, <aside>, <details>, <figcaption>, <figure>, <footer>, <header>, <main>, <mark>, <nav>, <section>, <summary>, <time>

5. Why you would like to use semantic tag?

- Search Engine Optimization, accessibility, repurposing, light code.
- Search engine needs to understand page content to rank and semantic tag helps.
- It's easier to read and edit, which saves time and money during maintenance.

6. What does a <DOCTYPE html> do?

- DOCTYPE is an abbreviation for Document Type. A DOCTYPE is always associated to a DTD - for Document Type Definition.

- A DTD defines how documents of a certain type should be structured (i.e. a button can contain a span but not a div), whereas a DOCTYPE declares what DTD a document supposedly respects (i.e. this document respects the HTML DTD).

- For webpages, Doctype HTML is a declaration that tells the browser what version of HTML the document is written in. This declaration appears as the very first line in an HTML file. The DOCTYPE declaration for the HTML5 standards is <!DOCTYPE html>.

- Once a user agent has recognized a correct DOCTYPE, it will trigger the no-quirks mode matching this DOCTYPE for reading the document. If a user agent doesn't recognize a correct DOCTYPE, it will trigger the quirks mode.

7. What happens when DOCTYPE is not given?

- The web page is rendered in quirks mode. 
- The web browsers engines use quirks mode to support older browsers which does not follow the W3C specifications. 
- In quirks mode CSS class and id names are case insensitive. 
- In standards mode they are case sensitive.

8.  What are the new form elements in HTML5?

- There are four new form elements in the HTML5 forms specification: <datalist>, <output>, <progress>, and <meter>.

9. How many new form elements are introduced in html5?

01.	color	        Gives the end user a native color picker to choose a color.
02.	date	        Offers a date picker.
03.	datetime	    An element to choose both date and time.
04.	datetime-local	An element to choose both date and time, with local settings support.
05.	email	        A field for entering e-mail address(es).
06.	month	        Choose a full month.
07.	number      	Picking a number.
08.	range	        Offers a slider to set to a certain value/position.
09.	search	        A field for search queries.
10.	tel	            Choosing a telephone number.
11.	time	        Input a certain time.
12.	url	            Entering a URL.
13.	week	        Picking a specific week.

10. Create a HTML form with below constraints?

Accept User Name, Email, Country and Subject
Validate the fields
Store data into local Storage
Fetch user data and display on right side of the page

- answer -> form.html

11. What is difference between span tag and div tag?

- The primary difference between div and span tag is their default behavior. By default, a <div> is a block-level-element and a <span> is an inline element.

