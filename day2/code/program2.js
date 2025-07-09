// transformation of values

// map
// - used to transform the values from collection
// - returns a collection which has exact same number of values
//   as that of the original collection

function function1() {
  // array of numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // create an empty array to hold all square values
  const squares = []

  // iterate over the collection
  for (const number of numbers) {
    // console.log(`square of ${number} = ${number ** 2}`)
    squares.push(number ** 2)
  }

  console.log(numbers)
  console.log(squares)
}

// function1()

function function2() {
  // array of numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const squares = []
  numbers.forEach((number) => {
    // console.log(`number = ${number}`)
    squares.push(number ** 2)
  })

  console.log(numbers)
  console.log(squares)
}

// function2()

function function3() {
  // array of numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // const squares = numbers.map((number) => {
  //   // console.log(`number = ${number}`)
  //   return number ** 2
  // })

  const squares = numbers.map((n) => n ** 2)
  const cubes = numbers.map((n) => n ** 3)

  console.log(numbers)
  console.log(squares)
  console.log(cubes)
}

// function3()

function function4() {
  const temperaturesC = [30, 28, 28, 29, 30, 31]
  const temperaturesF = temperaturesC.map((t) => 32 + t * (9 / 5))

  console.log(temperaturesC)
  console.log(temperaturesF)
}

// function4()

function function5() {
  // array of objects
  const persons = [
    { name: 'person1', address: 'pune', email: 'person1@test.com' },
    { name: 'person2', address: 'mumbai', email: 'person2@test.com' },
    { name: 'person3', address: 'nashik', email: 'person3@test.com' },
    { name: 'person4', address: 'satara', email: 'person4@test.com' },
    { name: 'person5', address: 'raigad', email: 'person5@test.com' },
  ]

  // const names = []
  // for (const person of persons) {
  //   names.push(person.name)
  // }

  // select name from persons;
  const names = persons.map((person) => person.name)
  // console.log(`names = ${names}`)

  // select name, address from persons;
  const personWithAddresses = persons.map((person) => {
    return { name: person['name'], address: person['address'] }
  })
  console.log(personWithAddresses)
}

// function5()
