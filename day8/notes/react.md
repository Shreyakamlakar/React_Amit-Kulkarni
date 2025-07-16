# react

- react is a library for developing the website / frontend
- react has less memory footprint as it does not have any framework overhead (angular)
- has component oriented architectures

## react using CDN

```html
<script
  crossorigin
  src="https://unpkg.com/react@18/umd/react.development.js"
></script>
<script
  crossorigin
  src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"
></script>
<script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
```

## jsx

```js
function render() {
  // get root object
  const root = document.getElementById('root')

  // create h2 element
  // babel converts the line to React.createElement()
  const h2 = <h2>welcome to react</h2>

  // render the h2 element
  ReactDOM.render(h2, root)
}
```

- js + xml (html)
- babel is needed to compile the jsx code to the browser understandable format

### string interpolation

- reading the value of variables inside an element
- it is achieved by {}

## component

- reusable entity which has
  - user interface (designed using jsx): view
  - logic/code (implemented using JS or TS): controller
  - decoration (implemented using CSS)
- a part of page or an entire page as well
- types
  - class component
    - before react 16,
      - the class component had an option to maintain the state
      - is used to write the stateful component
    - after react 16, class components are no preferred as they as extra overhead
  - function component
    - before react 16,
      - the function component was unable to maintain the state
      - was used to write the stateless component
    - after react 16 (which introduced react hooks)
      - can be used to write the stateful component
    - has less memory footprint compared to class component
    - simple JS function which returns JSX

```js
function Car() {
  // car data
  const car = {
    model: 'triber',
    company: 'renault',
    price: '10L',
  }

  return (
    <div>
      <h3>Car</h3>
      <div>model: {car.model}</div>
      <div>company: {car.company}</div>
      <div>price: {car.price}</div>
    </div>
  )
}
```

## vite application

```bash

# install yarn
> npm install -g yarn

# create a vite application
> yarn create vite <name of the application>

# install all the dependencies
> yarn instal
> yarn
> npm install

# run the vite application
> yarn dev --port <port>
> npm run dev

# test react application
> yarn test
> npm run test

# build the react application
> yarn build
> npm run build

# preview the application
> yarn preview
> npm run preview

```

## project structure

- .gitignore
  - file which is used to ignore the files/directories while committing the code in git repository
- eslint.config.js
  - eslint configuration file
  - linter is an application used to find the JS code style issues
- index.html
  - the only html file in the project which loads the entire react application
- package.json
  - contains
    - scripts: contains the commands to be executed using yarn or npm tool
    - dependencies:
      - used to run the application
      - when the application is build, these packages will be included in the bundle
    - devDependencies:
      - used to develop application
      - when the application is build, these packages will NOT be included in the bundle
- package-lock.json / yarn.lock
  - contains list of module names and their respective versions
- vite.config.js
  - vite configuration file
- directories
  - dist: contains the application bundle which will be deployed
  - node_modules: contains all the dependency modules
  - public: contains all the public resource (images/external js etc)
  - src: contains application source code
    - main.jsx
      - contains the application's starting/bootstrap function
    - index.css
      - contains the global css rules
      - contains css rules which will be shared across multiple components
    - App.jsx
      - contains the application's default/startup component
    - App.css
      - contains the css rules which are applicable only in App component
    - directories
      - components: contains the reusable components
      - pages: contains the application pages
      - services: contains the services to connect the react app to REST API server
      - config: contains the application configurations
      - store: contains the redux store
      - providers: contains the context providers

## exporting entities

- default export

  - used to export only one entity from a JS/JSX file
  - import the default exported entity using following syntax
  - ```js
    import Person from './component/Person'
    ```

- non-default export
  - used to export multiple entities (class/function/variable/constant)
  - does not use the default keyword
  - import the non-default exported entity using following syntax
  - ```js
    import { Person } from './component/Person'
    ```

## application run process

- vite application starts a lite server on port 5173 and loads the index.html file
- index.html loads the file src/main.jsx
- main.jsx renders the first component known as App from src/App.jsx file

## handle the events

- to handle events of html entities
  - define a local function
  - specify the function reference in the element's event

```js
import React from 'react'

function App() {
  // event handler
  const onButtonClick = () => {
    alert('test click event')
  }

  return (
    <div>
      <button onClick={onButtonClick}>Test</button>
    </div>
  )
}

export default Counter
```

## props (properties)

- props is an object which contains the collection of properties which are shared by parent component to the child component
- the only way a parent can share data with child
- is a readonly object (child can not change the data sent by parent)

```js
// parent component

import Car from './Car'

function Cars() {
  const cars = [
    { id: 1, company: 'Toyota', model: 'Corolla' },
    { id: 2, company: 'Honda', model: 'Civic' },
    { id: 3, company: 'Ford', model: 'Focus' },
    { id: 4, company: 'Chevrolet', model: 'Malibu' },
    { id: 5, company: 'Nissan', model: 'Altima' },
  ]

  return (
    <div>
      <h2>List of Cars</h2>
      {cars.map((car) => {
        return (
          <Car
            carId={car.id}
            carModel={car.model}
            carCompany={car.company}
          />
        )
      })}
    </div>
  )
}

export default Cars
```

```js
// child component v1
import './Car.css'

function Car(props) {
  return (
    <div className='car'>
      <div>id: {props.carId}</div>
      <div>model: {props.carModel}</div>
      <div>company: {props.carCompany}</div>
    </div>
  )
}

export default Car
```

```js
// child component v2
import './Car.css'

function Car(props) {
  const { carId, carModel, carCompany } = props

  return (
    <div className='car'>
      <div>id: {carId}</div>
      <div>model: {carModel}</div>
      <div>company: {carCompany}</div>
    </div>
  )
}

export default Car
```

```js
// child component v3
import './Car.css'

function Car({ carId, carModel, carCompany }) {
  return (
    <div className='car'>
      <div>id: {carId}</div>
      <div>model: {carModel}</div>
      <div>company: {carCompany}</div>
    </div>
  )
}

export default Car
```

### props drilling

- passing the props from one parent to another parent and down to the child hierarchy

```js
import { useState } from 'react'

function GrandChild({ items }) {
  return (
    <div>
      {items.map((item) => {
        return <div>{item}</div>
      })}
    </div>
  )
}

function Child({ items }) {
  return (
    <div>
      <GrandChild items={items} />
    </div>
  )
}

function Parent1() {
  const [items, setItems] = useSate([])

  return (
    <div>
      <Child items={items} />
    </div>
  )
}
```

## react hook

- special function in react which starts with `use`
- only available in functional components
- types
  - built-in hooks
  - custom hooks
- e.g.
  - react built-in
    - useState()
    - useReducer()
    - useEffect()
    - useCallback()
    - useMemo()
    - useRef()
    - useId()
    - useContext()
  - react-router
    - useLocation()
    - useNavigate()
    - useSearchParams()
  - redux
    - useDispatch()
    - useSelector()

### useState()

- used to maintain the state inside a component
- accepts the initial value of the state member
- returns an array with
  - 0th index: reference to the state member (acts as a getter to read the value of state member)
  - 1st index: reference to the function which can be used to update the value (setter)

```js
import React, { useState } from 'react'

function Counter() {
  // add a state member named value
  const [value, setValue] = useState(0)

  const onIncrement = () => {
    // update the state member
    setValue(value + 1)
  }

  const onDecrement = () => {
    // update the state member
    setValue(value - 1)
  }

  return (
    <div>
      <h2>Counter</h2>
      <div>Value = {value}</div>
      <button onClick={onIncrement}>increment</button>
      <button onClick={onDecrement}>decrement</button>
    </div>
  )
}

export default Counter
```

### useReducer()

- used to maintain a complex state member (complex object)
- accepts two parameters
  - param1: a reference to a reducer function
  - param2: initial state of the component
- returns an array with two members
  - 0th index: state of the object
  - 1st index: dispatch function reference
- reducer function
  - it is a function which is used to update the state
  - accepts two parameters
    - param1: current state (state of the component)
    - param2: action (event which is used to update the state)
  - returns the new state of the component
- dispatch function
  - used to invoke the reducer function by sending a required action

```js
import React, { useReducer } from 'react'

function Counter() {
  // used to update the state
  const reducer = (state, action) => {
    switch (action.type) {
      case 'increment':
        // returning a new state with incremented count
        return { ...state, count: state.count + 1 }
      case 'decrement':
        // returning a new state with decremented count
        return { ...state, count: state.count - 1 }
    }
  }

  // reducer is the function used to update the state,
  // {count: 0} is the initial state of the component
  const [state, dispatch] = useReducer(reducer, { count: 10 })

  const onIncrement = () => {
    // increment the count
    dispatch({ type: 'increment' })
  }

  const onDecrement = () => {
    // decrement the count
    dispatch({ type: 'decrement' })
  }

  return (
    <div>
      <h2>Counter v2</h2>
      <div>counter = {state.count}</div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default Counter
```

### useEffect()

- used to take an action on the lifecycle methods of a component
- it accepts two parameters

  - 1st parameter: function to be executed
  - 2nd parameter: dependency list

- event1:
  - component gets loaded (mounted)
  - component is rendered on the screen
  - component's user interface is loaded on screen
  - the dependency list must be empty

```js
function App() {
  useEffect(() => {
    // this function gets executed when App is rendered
    console.log('App is rendered')
  }, [])

  return (
    <div>
      <h1>App</h1>
    </div>
  )
}
```

- event2:
  - component gets unloaded (unmounted)
  - component is removed from the screen
  - the dependency list must be empty

```js
function App() {
  useEffect(() => {
    // this function gets executed when App is rendered
    console.log('App is rendered')

    return () => {
      // this function gets called when App is unloaded
      console.log('App is getting unloaded')
    }
  }, [])

  return (
    <div>
      <h1>App</h1>
    </div>
  )
}
```

### useContext()

- used to share a context (data) in multiple (selected) components of the application
- used to avoid props drilling

```js
import React, { createContext, useState } from 'react'
import Counter1 from './components/Counter1'
import Counter2 from './components/Counter2'

// create a context to share the data with multiple components
export const CounterContext = createContext()

function App() {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      {/* share the data using Provider */}
      <CounterContext.Provider value={{ counter, setCounter }}>
        <Counter1 />
        <Counter2 />
      </CounterContext.Provider>
    </div>
  )
}

export default App
```

```js
import React, { useContext } from 'react'
import { CounterContext } from '../App'

function Counter1() {
  const { counter, setCounter } = useContext(CounterContext)

  const onIncrement = () => {
    setCounter(counter + 1)
  }

  const onDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h2>Counter 1</h2>
      <div>counter = {counter}</div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default Counter1
```

```js
import React, { useContext } from 'react'
import { CounterContext } from '../App'

function Counter2() {
  const { counter, setCounter } = useContext(CounterContext)

  const onIncrement = () => {
    setCounter(counter + 1)
  }

  const onDecrement = () => {
    setCounter(counter - 1)
  }

  return (
    <div>
      <h2>Counter 2</h2>
      <div>counter = {counter}</div>
      <button onClick={onIncrement}>Increment</button>
      <button onClick={onDecrement}>Decrement</button>
    </div>
  )
}

export default Counter2
```

## state

- state of an object is the data which is stored at a given time

```js
class Person {
  constructor(name, address) {
    this.name = name
    this.address = address
  }
}

// state of the person1:
// name: person1 and address: 'pune'
const person1 = new Person('person1', 'pune')

// state of the person2:
// name: person2 and address: 'mumbai'
const person2 = new Person('person2', 'mumbai')
```

- state of a component
  - is an object maintained by component to trigger the component render cycle
  - if state changes, the component gets re-rendered
  - is a collection of key-value pairs
  - is a read-writable object

## conditional rendering

- rendering a component of a part of component only when a certain condition is evaluating to true value

```js
import React, { useState } from 'react'
import './Accordion.css'

function Accordion() {
  const [isVisible, setVisible] = useState(true)

  return (
    <div>
      <h2>Accordion</h2>

      <div className='title'>title</div>

      {/* here the div will render only when the value of isVisible is true */}
      {isVisible && (
        <div className='details'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores aut,
          libero officia est repudiandae odit molestiae sit! Quos, iste odio
          consequatur, mollitia quidem, error repellendus iusto repellat ipsa
          consequuntur necessitatibus.Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Inventore unde consequatur itaque eum laboriosam. Ad
          iste, quasi cupiditate, nisi vero quos facilis a minima nulla
          laboriosam itaque repellendus! Quaerat, tempora?
        </div>
      )}
    </div>
  )
}

export default Accordion
```

## external libraries

### jest

### react-toastify

- used to add toast message in react application
- installation
  - yarn add react-toastify
  - npm install react-toastify

```js
import React from 'react'
import { ToastContainer } from 'react-toastify'

function App() {
  return (
    <div>
      <ToastContainer />
    </div>
  )
}

export default App
```

### react router

- used to add the navigation in react application
- installation
  - yarn add react-router-dom
  - npm install react-router-dom
- BrowserRouter
  - component used to add the routing behavior in the application
- route

  - mapping between
    - path: appended to the url
    - component: which will be launched when the url is hit

- add the browser router inside the main.js

```js
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

- define the required routes inside the App component

```js
import React from 'react'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <div>
      <Routes>
        <Route
          path='/'
          element={<Login />}
        />
        <Route
          path='/register'
          element={<Register />}
        />
      </Routes>
    </div>
  )
}

export default App
```

- static navigation
  - navigating to new component without any condition
  - similar to anchor tag in html
  - no JS code is required for this type of navigation
  - implemented using <Link /> provided by react-router-dom

```js
<Link to='/register'>Register here</Link>
<Link to='/login'>Login here</Link>
```

- dynamic navigation
  - implemented using JS code
  - also known as conditional navigation

```js
function Login() {
  // get the reference to the navigate function
  const navigate = useNavigate()

  // dynamic navigation
  const onLogin = () => {
    // check if user can successfully login
    navigate('/home')
  }

  return (
    <div>
      {/* login user interface here */}
      <button onClick={onLogin}>Login</button>
    </div>
  )
}
```

- dynamic navigation with data
  - implemented using JS code
  - also known as conditional navigation

```js
function Login() {
  // get the reference to the navigate function
  const navigate = useNavigate()

  // dynamic navigation
  const onLogin = () => {
    // check if user can successfully login
    navigate('/home', { state: { id: 1 } })
  }

  return (
    <div>
      {/* login user interface here */}
      <button onClick={onLogin}>Login</button>
    </div>
  )
}
```

### axios

- used to consume the REST APIs
- uses promises to call the REST APIs
- installation
  - yarn add axios
  - npm install axios

## VS extensions

- snippets

  - https://marketplace.visualstudio.com/items?itemName=rodrigovallades.es7-react-js-snippets

- auto import

  - https://marketplace.visualstudio.com/items?itemName=NuclleaR.vscode-extension-auto-import

- auto rename tag

  - https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag

- spell checker

  - https://marketplace.visualstudio.com/items?itemName=streetsidesoftware.code-spell-checker

- es lint

  - https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint

- prettier
  - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
