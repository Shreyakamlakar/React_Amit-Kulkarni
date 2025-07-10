# react

- react is a library for developing the website / frontend
- react has less memory footprint as it does not have any framework overhead (angular)

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
