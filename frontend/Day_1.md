## 02/10 is correct

# Q1 You are given a 3 litres jar, a 5 litres jar, and an unlimited water supply. How will you get 4 litres of water using the above items?


Firstly, take out 3 litres of water from a 3 litres jar and put it in a 5 litres jar. Then take water from the 3 litres jar and pour it into the remaining 5 litres jar and remaining 5 litres jar is 2 litres . Then 1 litre of water is left in the 3 litres jar. We will throw away the water we had in the 5 litre jar and then pour the water from the 3 litre jar into the 5 litre jar. And lastly, fill the water in a 3 litre jar and pour it in a 5 litre jar.


# Q2 find the missing number [11,13,14,16,17,19,20] (code)


  int arr[] = {11, 14, 16, 17, 19, 20};

for (int i = 0; i < arr.length-1; i++) {
    int diff = arr[i+1] - arr[i];
    for (int j = 1; j < diff; j++) {
        System.out.println(arr[i] + j);
}
  }

# Q3 What are void elements in HTML?

In HTML, void elements (also known as self-closing elements) are elements that do not have any content or closing tags. Void elements can have attributes. The following is a complete list of the void elements in HTML : area , base , br , col , command , embed , hr , img , input , keygen , link , meta , param , source , track , wbr.

# Q4 How to optimize website assets loading?

- Minify Js and CSS files
- Asynchronous loading of Js and CSS files
- Defer large size elements
- Choose right Hosting options according to your need
- Media compression
- Convert Images in Next Gen Formats like webP
- Enable browser caching
- Apply CDN
- Optimize the CSS using external CSS
- Enable Lazy Load
- Regular monitoring of Website speed

# Q5 How is margin different from padding in CSS? Can margin or padding be negative ?

- Margins are the transparent space outside an element.
              Padding is the transparent space inside an element.
- They create space between the element and other adjacent elements, effectively pushing them away.
              It creates space between the content of the element and its border.
- Margins do not have a background color or border, and any content within the element does not extend into the margin space.
              Padding can have a background color or background image, and any content within the element extends into the padding space.
- Margins can have positive or negative values.
              Padding cannot have negative values.
- Margins collapse, which means that adjacent margins collapse into a single margin when they are touching each other vertically.
              Padding does not collapse. If two adjacent elements have padding, the space between them is determined by the sum of their padding values.

# Q6 flexFroggy level 11 (online question)

# Q7 What is a Temporal Dead Zone?

- The Temporal Dead Zone (TDZ) is a behavior in JavaScript that occurs when trying to access a variable before it has been declared using the let or const keywords. During the TDZ, attempting to access the variable will result in a ReferenceError.

Let take an example in front of you-------

console.log(myVariable); // ReferenceError: myVariable is not defined
let myVariable = 10;

In this example, we try to log the value of myVariable before it has been declared. However, instead of returning undefined, it throws a ReferenceError. This is because the variable myVariable is in the TDZ until the point of declaration.

The TDZ starts at the beginning of the scope (block, function, or module) where the variable is declared and continues until the actual declaration statement. Within this TDZ, any attempts to access the variable will result in an error.

# Q8 difference between rest and spread operator?

- rest operator is used to merge elements into an array or object, whereas spread operator is used to spread elements out of an array or object.

- spread operator unpacks elements WHEREAS rest parameter packs elements.

- Rest Parameter collects all remaining elements into an array WHEREAS Spread Operator expands collected elements such as arrays into single elements. 

- Here's an example that demonstrates the rest operator:

       function sum(...numbers) {
       return numbers.reduce((total, num) => total + num, 0);
       }
       console.log(sum(1, 2, 3, 4, 5)); // Output: 15

- In this example, the rest operator (...numbers) is used in the sum function's parameter list. It allows us to pass any number of arguments, and they will be collected into an array named numbers. The reduce method then calculates the sum of all the numbers.

- Here's an example that demonstrates the spread operator:

       const numbers = [1, 2, 3, 4, 5];
       const copiedNumbers = [...numbers];
       const combinedNumbers = [...numbers, 6, 7, 8];

       console.log(copiedNumbers); // Output: [1, 2, 3, 4, 5]
       console.log(combinedNumbers); // Output: [1, 2, 3, 4, 5, 6, 7, 8]

- In this example, the spread operator is used to create a shallow copy of the numbers array ([...numbers]). It unpacks the elements of the numbers array and spreads them into a new array, copiedNumbers. Similarly, the spread operator is used to combine elements from the numbers array with additional values, creating a new array named combinedNumbers.

# Q9 What is higher order function?

- A function which takes another function as an arguments or returns a function from it is called higher order function.
    EXAMPLE:--

    function multiplyBy(factor) {
    return function (number) {
    return number * factor;
    };
    }

    const double = multiplyBy(2);
    console.log(double(5)); // Output: 10

- In this example, the multiplyBy function is a higher-order function because it takes a factor as an argument and returns a new function. The returned function, when invoked with a number, multiplies the number by the specified factor.

- map() ->  The map() method does not change the original array, it creates a new array of all elements that have been transformed by the callback function.
            The map() method calls a callback function on every element of an array and returns a new array that contains the results.
            The map() method takes two named arguments, the first one is required whereas the second one is optional.
            example-----

            let circles = [10, 30, 50];
            let areas = circles.map(radius => Math.floor(Math.PI * radius * radius));
            console.log(areas);

- filter() -> The filter() method creates a new array with all the elements that pass the test implemented by the callback() function.
              Internally, the filter() method iterates over each element of the array and passes each element to the callback function. If the callback function returns true, it includes the element in the return array.
              The filter() method accepts two named arguments: a callback function and an optional object.       
              example------

               let cities = [
               {name: 'Los Angeles', population: 3792621},
               {name: 'New York', population: 8175133},
               {name: 'Chicago', population: 2695598},
               {name: 'Houston', population: 2099451},
               {name: 'Philadelphia', population: 1526006}
               ];
               let bigCities = cities.filter(city => city.population > 3000000);
               console.log(bigCities);   

- reduce() ->  The reduce() method takes two arguments:
               A callback function callbackFn. The function is often referred to as a reducer.
               An optional initial value.

               The reduce() method calls the callbackFn() function for every element in the array.

               The reducer() function returns a value that results from executing the callbackFn to completion over the entire array.

- reduceRight() -> The reduceRight() method works in the same way as the reduce() method, but in the      opposite direction.
                   The reduce() method starts at the first element and travels toward the last, whereas the reduceRight() method starts at the last element and travels backward the first.     

- every() ->  every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value    

- some() ->   some() method tests whether at least one element in the array passes the test implemented by the provided function. It returns true if, in the  array, it finds an element for which the provided function returns true; otherwise it returns false. It doesn't modify the array

- sort() -> sort() method sorts the elements of an array in place and returns the sorted array. The default sort order is ascending, built upon converting the elements into strings, then comparing their sequences of UTF-16 code units values.

- forEach() -> forEach() method executes a provided function once for each array element.
               const array2 = ["a", "b", "c"];
               array1.forEach((element) => console.log(element));
               expected output: "a"
               expected output: "b"
               expected output: "c"

# Q10 Does JavaScript pass by value or by reference?  ***********

- JavaScript always passes by value. However, with objects, the value is a reference to the object.