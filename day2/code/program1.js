// every function in JS will return undefined

// named function
function function1() {
  console.log('inside function1')
}

// function1()

// unnamed or anonymous function
const function2 = function () {
  console.log('inside function2')
}

// function2()

// arrow function
// const function3 = (p1, p2) => {
//   return p1 + p2
// }

// shorthand of arrow function
// - there must be only one statement in the body
// - the statement must be an expression
// - the expression will get evaluated and the value will be returned by default
const function3 = (p1, p2) => p1 + p2
console.log(`addition = ${function3(10, 20)}`)

const square = (n) => n ** 2
console.log(`square of 10 = ${square(10)}`)

const function4 = (p1) => console.log(`p1 = ${p1}`)
console.log(`function4 returns = ${function4(10)}`)
