// optional parameters
// - parameters with default values

// scopes
// - global
//   - declared outside of any function of class
//   - variable can be accessed anywhere within the same page

// - local
//   - declared inside a function
//   - can be accessed only within the same function

// nested function
// - is called as local or inner function
// - function declared within another function

// closure
// - function returning reference of an inner function

function function1(p1, p2 = 20) {
  console.log(`inside function1`)
  console.log(`p1 = ${p1}, type = ${typeof p1}`)
  console.log(`p2 = ${p2}, type = ${typeof p2}`)
}

// p1 = 10, p2 = 30
// function1(10, 30)

// p1 = 10, p2 = 20
// function1(10)

// scope: global
let globalNum = 300
console.log(`globalNum = ${globalNum}`)

function function2() {
  console.log(`inside function2`)

  // scope: local
  const num = 200
  console.log(`num = ${num}`)
  console.log(`globalNum = ${globalNum}`)

  globalNum = 400
  console.log(`globalNum = ${globalNum}`)
}

// function2()

// globalNum will retain the value 400 which was changed in function2
// console.log(`globalNum = ${globalNum}`)

// since num is local variable of function2, it can NOT be accessed outside of function2
// console.log(`num = ${num}`)

// function3 is an outer function for function4
function function3() {
  console.log('inside function3')

  // scope: local
  const num = 200
  console.log(`num = ${num}`)

  // scope: local
  // inner function / local function / nested function
  function function4() {
    console.log(`inside function4`)
  }

  // calling function4
  // function4()

  return function4
}

// result here is a function reference storing the reference of function4
// const result = function3()
// console.log(`result = ${result}, type = ${typeof result}`)

// this statement will call the function4 outside function3
// result()

// since num is local variable of function3, it can NOT be accessed outside of function3
// console.log(`num = ${num}`)

// since function4 is local function of function3, it can NOT be called outside of function3
// function4()

function function5() {
  console.log(`inside function5`)

  // returning a function from another function as a return value
  return () => {
    console.log(`returned value of function5`)
  }
}

// const function5Result = function5()
// console.log(`function5Result = ${function5Result}`)
// function5Result()

function function6() {
  const function7 = () => {
    return () => {
      console.log(`returning function from function7`)
    }
  }

  // result will refer the returning function of function7
  const result = function7()
  result()
}
