// function
// - every function in JS accepts two hidden parameters
// - param1: this
//   - is hidden parameter which sets the context of the function
//   - reference to the current object

// - param2: arguments
//   - collection of all the arguments passed to the function

function function1() {
  console.log(`this = `, this)

  // since this file is getting executed using node, alert wont work
  // alert('this is a test button')
}

// function1()

// variable length arguments function
// - a function can accept any number of parameters
function add() {
  console.log(`arguments = `, arguments)

  let result = 0
  for (const value of arguments) {
    result += value
  }
  console.log(`result = ${result}`)
}

add(10, 20)
add(10, 20, 30)
add(10, 20, 30, 40)
add(10, 20, 30, 40, 50)
