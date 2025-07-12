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

## react hook

- special function in react which starts with `use`
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
    - userNavigate()
    - useParams()
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

### axios

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
- - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
