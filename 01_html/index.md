## HTML Questions ----

# Notes:-
- 1989	Tim Berners-Lee invented www
- 1991	Tim Berners-Lee invented HTML
- HTML tags are not case sensitive: <P> means the same as <p>.
- The HTML standard does not require lowercase tags, but W3C recommends lowercase in HTML, and demands lowercase for stricter document types like XHTML.
- All HTML elements can have attributes. Attributes provide additional information about elements.Attributes are always specified in the start tag. Attributes usually come in name/value pairs like: name="value" 
- There are two ways to specify the URL in the src attribute:

1. Absolute URL - Example: src="https://www.w3schools.com/images/img_girl.jpg".

2. Relative URL - Example: src="/images/img_girl.jpg".

- the first two characters define the language of the HTML page, and the last two characters define the country.
<html lang="en-US">

- _self - Default. Opens the document in the same window/tab as it was clicked
- _blank - Opens the document in a new window or tab
- _parent - Opens the document in the parent frame
- _top - Opens the document in the full body of the window

- <img>	Defines an image

<img src="workplace.jpg" alt="Workplace" usemap="#workmap">

- usemap -> The usemap value starts with a hash tag # followed by the name of the image map, and is used to create a relationship between the image and the image map.

- <map>	Defines an image map
- <area>	Defines a clickable area inside an image map

<map name="workmap">
  <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm">
  <area shape="rect" coords="290,172,333,250" alt="Phone" href="phone.htm">
  <area shape="circle" coords="337,300,44" alt="Coffee" href="coffee.htm">
</map> 

- <picture>	Defines a container for multiple image resources

<picture>
  <source media="(min-width: 650px)" srcset="img_food.jpg">
  <source media="(min-width: 465px)" srcset="img_car.jpg">
  <img src="img_girl.jpg">
</picture>

1. What is the difference between HTML and XHTML?
 
HTML stands for Hypertext Markup Language, whereas XHTML stands for Extensible Hypertext Markup Language. XHTML is basically an extension of HTML, which is stricter than HTML. Both languages are used to create web and Android applications.

2. What are the building blocks of HTML and HTML5?

HTML - Tags, Attributes, Elements
HTML5 - Semantics, Connectivity, Offline and storage, Multimedia, 2D/3D graphics and effects, Performance and integration, Device access, Styling.

3. What are the semantic tags available in html5?

HTML5 offers new semantic elements to define different parts of a web page:

<article>
<aside>
<details>
<figcaption>
<figure>
<footer>
<header>
<main>
<mark>
<nav>
<section>
<summary>
<time>

4. Why you would like to use semantic tag?

- Search Engine Optimization, accessibility, repurposing, light code.
- Search engine needs to understand page content to rank and semantic tag helps.
- It's easier to read and edit, which saves time and money during maintenance.

5. What does a <DOCTYPE html> do?

- Doctype HTML is a declaration that tells the browser what version of HTML the document is written in. This declaration appears as the very first line in an HTML file.

6. What happens when DOCTYPE is not given?

- The web page is rendered in quirks mode. 
- The web browsers engines use quirks mode to support older browsers which does not follow the W3C specifications. 
- In quirks mode CSS class and id names are case insensitive. 
- In standards mode they are case sensitive.

7.  What are the new form elements in HTML5?

- There are four new form elements in the HTML5 forms specification: <datalist>, <output>, <progress>, and <meter>.

8. How many new form elements are introduced in html5?

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

9. Create a HTML form with below constraints?

Accept User Name, Email, Country and Subject
Validate the fields
Store data into local Storage
Fetch user data and display on right side of the page

- answer -> form.html

10. What is difference between span tag and div tag?

- The primary difference between div and span tag is their default behavior. By default, a <div> is a block-level-element and a <span> is an inline element.

