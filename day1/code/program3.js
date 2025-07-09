// JavaScript
// - procedure oriented language
// - object oriented language
// - functional programming language
//   - functions are considered to the first class citizens
//     - functions are variables of type function
//   - function can be passed as a parameter to another function
//   - function can be returned as a return value of a function

// function reference
// - reference to a function
// - memory block which stores an address of the block which stores the function body

// function types
// named function
// - function declared with a name
// anonymous or unnamed function
// - function declared without any name
// - types
//   - using function keyword
//   - using arrow symbol

// data type: number
let num1 = 100
console.log(`num1 = ${num1}, type = ${typeof num1}`)

let num2 = num1
console.log(`num2 = ${num2}, type = ${typeof num2}`)

num1 = 200
console.log(`num1 = ${num1}, type = ${typeof num1}`)
console.log(`num2 = ${num2}, type = ${typeof num2}`)

// named function
// function declaration + definition
function function1() {
  console.log('inside function1')
}

// call the function
// function1()
// console.log(`function1 = ${function1}, type = ${typeof function1}`)

// function reference
// const function2 = function1
// function1()
// function2()

// unnamed function
// - function2 is NOT a function name
// - it is rather a function reference
const function2 = function () {
  console.log(`inside function2`)
}
// console.log(`function2 = ${function2}, type = ${typeof function2}`)

// arrow function
// - function3 here is a reference to the function
const function3 = () => {
  console.log(`inside function3`)
}
// console.log(`function3 = ${function3}, type = ${typeof function3}`)

// parameterized function
const function4 = (p1, p2) => {
  console.log(`inside function4`)
  console.log(`p1 = ${p1}, type = ${typeof p1}`)
  console.log(`p2 = ${p2}, type = ${typeof p2}`)
}

// p1 = 10, p2 = 20
// function4(10, 20)
// function4('test1', 'test2')
// function4(10, true)

// p1 = 10, p2 = undefined
// function4(10)

// p1 = undefined, p2 = undefined
// function4()

// p1 = 10, p2 = 20
function4(10, 20, 30, 40, 50)
