// collections
// array
// - collection of values
// - can allow to store values of different types
// - can allow to store duplicate values

function function1() {
  // empty array declaration
  const array1 = []
  console.log(`array1 = ${array1}, type = ${typeof array1}`)

  // empty array declaration
  const array2 = new Array()
  console.log(`array2 = ${array2}, type = ${typeof array2}`)
}

// function1()

function function2() {
  // array of numbers
  const numbers = [10, 20, 30, 40, 50]
  console.log(`numbers = ${numbers}`)

  // array of strings
  const countries = ['india', 'usa', 'uk', 'japan']
  console.log(`countries = ${countries}`)

  // array of mixed values
  const mixedValues = [10, true, 'pune', false, 15.5]
  console.log(`mixedValues = ${mixedValues}`)

  // array with duplicate values
  const numbers2 = [10, 20, 30, 40, 50, 10, 20, 30, 40, 50]
  console.log(`numbers2 = ${numbers2}`)
}

// function2()

function function3() {
  // array of numbers
  const numbers = [10, 20, 30, 40, 50]

  // traditional for loop
  // - accessing the values using index position
  for (let index = 0; index < numbers.length; index++) {
    console.log(`value at ${index} = ${numbers[index]}`)
  }
}

// function3()

function function4() {
  // array of numbers
  const numbers = [10, 20, 30, 40, 50]

  // for..of loop
  // - the value can be accessed by using the value reference
  for (const number of numbers) {
    console.log(`number = ${number}`)
  }
}

// function4()

function function5() {
  // array of numbers
  const numbers = [10, 20, 30, 40, 50]

  // for..in loop
  // - accessing the values using index positions
  for (const index in numbers) {
    console.log(`value at ${index} = ${numbers[index]}`)
  }
}

// function5()

function function6() {
  // array of numbers
  const numbers = [10, 20, 30, 40, 50]

  // forEach():
  // - function declared by array
  // const tempFunction = (number) => {
  //   console.log(`number = ${number}`)
  // }
  // numbers.forEach(tempFunction)

  numbers.forEach((number) => {
    console.log(`number = ${number}`)
  })
}

// function6()

function function7() {
  // array of numbers
  const numbers = [10, 20, 30, 40, 50]
  console.log(numbers)

  // append a value at the end of the array
  numbers.push(60)
  console.log(numbers)

  // add value 15 between 10 and 20
  numbers.splice(1, 0, 15)
  console.log(numbers)
}

function7()

function function8() {
  // array of numbers
  const numbers = [10, 20, 30, 40, 50]
  console.log(numbers)

  // remove the last value
  const removedValue = numbers.pop()
  console.log(`removed value = ${removedValue}`)
  console.log(numbers)

  // remove 40
  numbers.pop()
  console.log(numbers)
}

// function8()

function function9() {
  // array of numbers
  const numbers = [10, 20, 30, 40, 50]
  console.log(numbers)

  // remove value at 2nd position
  numbers.splice(2, 1)
  console.log(numbers)
}

// function9()
