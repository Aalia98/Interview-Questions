## React Interview Questions--------------

1.  Consider the following code:
const reducer = (state, action) => {
    switch(action.type){
        case "FIELD":
            return {...state, [action.field]: action.value }
        default:
             break
    }
}

What does the above reducer do?
      
a) Reduce the number of fields matching the dispatch field.
b) Sets the state of the property with the name specified by "field" in the dispatch to the value specified by "value" in the dispatch.
c) Produces an error as you can't set object properties like this.
d) Store the action's type.

- The above reducer is designed to handle actions with the type "FIELD". When such an action is dispatched, it updates the state by setting the value of the property specified by the "field" property in the action to the value specified by the "value" property in the action. The spread operator ({...state}) is used to create a shallow copy of the state object, and [action.field]: action.value is used to update the specific property.

So, the correct answer is:

Sets the state of the property with the name specified by "field" in the dispatch to the value specified by "value" in the dispatch.

2. JWT stands for?
      
a) JSON Web Test
b) JavaScript Web Test
c) JavaScript Web Trial
d) JSON Web Token
e) JSON Waiting Time

- JWT stands for JSON Web Token.

3. What does the useState hook do?
      
a) Tracks state in a class based component.
b) States a new constant.
c) Loads a React components state.
d) Creates a new class.
e) Tracks state in a function component.

- The useState hook in React is used to add state to functional components. So, the correct answer is:
Tracks state in a function component.

4. What is the MAIN purpose of webpack?
      
a) Create React packages
b) Bundle JavaScript modules for usage in a browser
c) To run a web server
d) Simplifying React code
e) Pack and Compress images for the web

- The main purpose of Webpack is to bundle JavaScript modules for usage in a browser. It takes different modules, dependencies, assets, etc., and bundles them together into a more optimized and efficient package for the browser. While it is commonly used in conjunction with React and other frameworks, its primary function is not limited to any specific framework but rather managing and bundling various assets for web applications.

5. What does the useReducer hook do?
      
a) Changes how DOM elements behave
b) Allows you to write your own custom state logic
c) Reduces the number of modules imported into a single module
d) Reduces the number of classes in a stylesheet
e) Reduces the number of components on a page

- The useReducer hook in React is used for state management and is an alternative to the useState hook. It is particularly useful when the next state depends on the previous state and when the state logic is more complex. It allows you to write your own custom state logic by specifying a reducer function. The reducer function takes the current state and an action as arguments and returns the new state.

So, the correct answer is:
Allows you to write your own custom state logic.

6. Consider the following code:
const App = () => {
    const [revealed, setRevealed] = useState(false)

    return (
        <form>
            <input type={(revealed)?"text":"password"}/>
            // Button goes here
        </form>
    )
}
How do we add a button that reveals the password but does not submit the form?
      
 No way of doing it with this code
 <button type="button" onClick={setRevealed(!revealed)}>Reveal</button>
 <input type="checkbox" bind={revealed}/>Reveal
 <button type="button" value={!revealed}>Reveal</button>
 <button type="button" bind={!revealed}>Reveal</button>

To add a button that reveals the password without submitting the form, you can use the following code:

const App = () => {
    const [revealed, setRevealed] = useState(false);

    return (
        <form>
            <input type={revealed ? "text" : "password"} />
            <button type="button" onClick={() => setRevealed(!revealed)}>
                Reveal
            </button>
        </form>
    );
};
This code includes a button with type="button" to prevent it from triggering the form submission. The onClick event is set to toggle the revealed state, which, in turn, changes the input type between "text" and "password".

7. Consider the following code:
const App = () => {
    const formElement = useRef();
    const submit = (event) => {
        event.preventDefault()
        // Submit form data
    }
    return (
        <form ref={formElement} onSubmit={submit}>
            <input type="text" id="username"/>
            <input type="password" id="password"/>
        </form>
    )
}

Which of the following answers gets the value of the input with the id username which is in the form using the ref formElement?
      
a) formElement.username.value
b) formElement.getValue("username")
c) event.username.value
d) formElement.current.querySelector("#username").value
e) formElement.getElementById("username").value

To get the value of the input with the id "username" using the ref named formElement, you can use the following code:

formElement.current.querySelector("#username").value
So, the correct answer is:
formElement.current.querySelector("#username").value

8. Which of the following is NOT a React hook?
      
a) useCallback
b) useRef
c) useContext
d) useLoad
e) useReducer

Among the options provided, useLoad is NOT a standard React hook. The correct answer is:
- useLoad

9. Consider the following code:
const App = () => {
    const inputElement = useRef();
    return (
        <input type="text" ref={inputElement}/>
    )
}

How do we change the value of the rendered input element to "test"?
      
a) inputElement.value = "test"
b) inputElement.current.value = "test"
c) setValue(inputElement) = "test"
d) inputElement.innerHTML = "test"
e) useRef(inputElement).value = "test"

To change the value of the rendered input element using a useRef hook, you should use inputElement.current.value. So, the correct answer is:
- inputElement.current.value = "test"

10. Consider the following code:
const App = () => {
    const [arr,setArr] = useState([1,2,3])
    return (
        {arr.map(item=>(
            <div>{item}</div>
        ))}
    )
}
What is wrong with this code?
      
a) The map method must not use an arrow function
b) There should be a key for each item in the arr.map
c) The useState hook doesn't work in function components
d) The useState hook can't store arrays.
e) The array is too small to use the map method

The issue with the provided code is that the JSX inside the return statement should be wrapped in a parent element. React requires a single parent element to encapsulate multiple children. Additionally, it's a good practice to include a unique key for each item in the arr.map to help React identify and optimize the rendering of list items.

Here's a corrected version of the code:
const App = () => {
    const [arr, setArr] = useState([1, 2, 3]);

    return (
        <div>
            {arr.map(item => (
                <div key={item}>{item}</div>
            ))}
        </div>
    );
};
In this corrected version, a div is used as the parent element, and each <div> inside the arr.map has a unique key attribute.

11. Which answer is NOT a React hook?
      
a) useReducer
b) useMemo
c) useState
d) useEffect
e) useRoute

Among the options provided, useRoute is NOT a standard React hook. The correct answer is:
- useRoute

12. Consider the following code:
const App = () => {
	const [counter, setCounter] = useState(6)
	useEffect(()=>{
		setCounter(counter+1)
	},[])
	return <div>{counter}</div>
}

What does the component display after it has loaded?
      
a) 1
b) 7
c) 0
d) undefined
e) 6
The component displays 7 after it has loaded.

In the useEffect hook, the callback function is executed after the initial render because the dependency array ([]) is empty. Inside the useEffect, setCounter(counter+1) is called, but the state update is asynchronous, so the value of counter in that scope is still 6. However, the render that follows will display the updated value of counter (which becomes 7) due to the state update.

So, the correct answer is:
- 7

13. Which following answers will set the state of "username" to the value of the input whenever the input is changed.  
Assume the following hook is being used:
const [username, setUsername] = useState("")
      
 <input onChange={e=>setUsername(e.target.value)}/>
 <input onChange={setUsername(value)}/>
 <input value={username}/>
 <input bind={username}/>
 <input onChange={setUsername(this.value)}/>

The correct answer is:

<input onChange={e => setUsername(e.target.value)} />
This code uses the onChange event to trigger the setUsername function with the new value from the input field. The event parameter e is used to access the value of the input field via e.target.value, and it updates the state of "username" accordingly.

14. The package react-router-dom is used for?
      
a) Sorting DOM elements
b) Configuring the users Router
c) Creating DOM elements
d) Page Routing
e) Routing of visual effects on the page

The react-router-dom package is used for page routing in React applications. It provides a way to handle navigation and rendering of components based on the URL, enabling the creation of single-page applications with multiple views.

So, the correct answer is:
- Page Routing

15. What does the useEffect hook do?
      
a) Gets one element to effect another element by changing it.
b) Load an external React library.
c) Creates a visual effect on the page.
d) Plays a sound.
e) Run code on every render where an optional list of dependencies has changed.

The useEffect hook in React is used to run side effects in functional components. It does not create visual effects directly or play sounds; instead, it is used for tasks such as data fetching, subscriptions, manually changing the DOM, and more.

So, the correct answer is:
- Run code on every render where an optional list of dependencies has changed.

16. How can React interact with a database?
      
a) Using a router
b) By interacting with a server side API
c) Using React.database()
d) Using the react-database package
e) Using React.connect()

React, being a front-end library, doesn't interact directly with databases. Instead, it typically interacts with a server-side API, which in turn communicates with the database. The common approach is to make HTTP requests from React components to a server, and the server is responsible for handling database interactions.

So, the correct answer is:
- By interacting with a server-side API.

17. Consider the following code:
const App = () => {
	let  Item = <div>An Item</div>
	<Item>
}

What is wrong with this app?
      
a) No JSX is returned in App
b) Item must be declared with brackets
c) Item is declared inside a function component
d) Item isn't a separate function
e) Item isn't declared using const

The code has a couple of issues:

The JSX is not being returned from the App component.
The syntax for declaring the Item is incorrect.
Here's a corrected version:

const App = () => {
    let Item = <div>An Item</div>;
    return (
        <div>
            {Item}
        </div>
    );
}
Changes made:

The JSX is now enclosed within the return statement, so it is returned from the App component.
Added a wrapping <div> to contain the Item JSX.
Now the component will render the "An Item" text inside a <div>.

18. Consider the following code:
const App = () => {
    const [loading, setLoading] = useState(true)
    const load = () => {
        setTimeout(()=>setLoading(false),5000);
    }
    if(loading){
        return <h1>Loading</h1>
    }
    return (
        <h1>Complete</h1>
    )
}

How does this component display on a webpage?
      
a) Displays the text Complete
b) Starts out with the text Complete, then switches to Loading after 5 seconds
c) Starts out with the text Complete and immediately switches to Loading
d) Starts out with the text Loading, then switches to Complete after 5 seconds
e) Displays the text Loading

The component will start with the text "Loading" and then switch to "Complete" after 5 seconds. This is because the initial state of loading is true, and the setTimeout function is used to set loading to false after a delay of 5 seconds.

So, the correct answer is:
- Starts out with the text Loading, then switches to Complete after 5 seconds

19. Consider the following code:
const App = () => {
	const [coins, setCoins] = useState([])
	const send = async () => {
		let res = await fetch("/api/coins")
		let data = await res.json()
		setCoins(data.coins)
	}
	useEffect(()=>{
		send()
	},[])
	return <div>{coins.map(coin=>(<div>{coin}</div>))}</div>
}

What does this App do?
      
a) Loads then saves data from the file "/api/coins"
b) Display an image of a coin
c) Loads then fetches the data from an API and displays the total value of the coins property
d) Uses web3 to load /api/coins then prints the value of the blockchain.
e) Loads then fetches data from an API and displays all of the items in the array stored in the responses property coins

The App loads data from the "/api/coins" endpoint using the fetch function, updates the state with the fetched data, and then displays each item in the array stored in the coins property of the response.

So, the correct answer is:
- Loads then fetches data from an API and displays all of the items in the array stored in the response's property coins.

20. Consider the following code:
const Input = (props) => {
    return <input/>
}

const App = () => {
    const [input, setInput] = useState("")
    return <Input/>
}

How do we change the code so the input state is set to the value of the Input component whenever it is changed?
      
a) <Input change={e=>setInput(e.target.value)}/> AND <input onChange={props.change}/>
b) Adding useRef to Input.
c) <Input value={e=>e.target.value}/>
d) <Input onChange={e=>setInput(e.target.value)}/>

To pass the value from the Input component to the parent App component and update the state, you can modify the Input component to accept a prop for the onChange event. Here's the corrected code:

const Input = (props) => {
    return <input onChange={props.onChange} />;
}

const App = () => {
    const [input, setInput] = useState("");

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    return <Input onChange={handleInputChange} />;
}
This way, the Input component now receives the onChange prop, and the handleInputChange function in the App component is passed as the event handler to update the state.