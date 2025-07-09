// selection of values

// filter()
// - used to select/filter the values based on a condition
// - returns a collection/array with same or less number of number of original values
// - it is not meant for returning the transformed values

function function1() {
  // array of numbers
  const numbers = [3, 2, 6, 7, 9, 19, 24, 56, 78, 90]

  // select only even numbers from the collection
  const evenNumbers = []
  for (const number of numbers) {
    // check if the number is even
    if (number % 2 == 0) {
      evenNumbers.push(number)
    }
  }

  console.log(`numbers = ${numbers}`)
  console.log(`even numbers = ${evenNumbers}`)
}

// function1()

function function2() {
  // array of numbers
  const numbers = [3, 2, 6, 7, 9, 19, 24, 56, 78, 90]

  const evenNumbers = numbers.filter((n) => n % 2 == 0)
  const oddNumbers = numbers.filter((n) => n % 2 != 0)

  console.log(`numbers = ${numbers}`)
  console.log(`even numbers = ${evenNumbers}`)
  console.log(`odd numbers = ${oddNumbers}`)
}

// function2()

function function3() {
  // array of objects
  const persons = [
    { name: 'person1', address: 'pune', email: 'person1@test.com' },
    { name: 'person2', address: 'mumbai', email: 'person2@test.com' },
    { name: 'person3', address: 'nashik', email: 'person3@test.com' },
    { name: 'person4', address: 'satara', email: 'person4@test.com' },
    { name: 'person5', address: 'raigad', email: 'person5@test.com' },
  ]

  // select all the persons from pune
  // select * from persons where address = 'pune'
  const personsFromPune = persons.filter(
    (person) => person['address'] == 'pune'
  )

  console.log(personsFromPune)
}

// function3()

function function4() {
  // array of objects
  const persons = [
    { age: 10, name: 'person1', address: 'pune', email: 'person1@test.com' },
    { age: 15, name: 'person2', address: 'mumbai', email: 'person2@test.com' },
    { age: 20, name: 'person3', address: 'nashik', email: 'person3@test.com' },
    { age: 19, name: 'person4', address: 'satara', email: 'person4@test.com' },
    { age: 6, name: 'person5', address: 'raigad', email: 'person5@test.com' },
  ]

  // get all the person eligible for voting
  const personsEligibleForVoting = persons.filter((person) => person.age >= 18)
  console.log(personsEligibleForVoting)

  // get names of the persons who are eligible for voting
  const names = personsEligibleForVoting.map((person) => person['name'])
  console.log(`names = ${names}`)

  // always apply filter() before map() function
  const namesOfPersonsEligibleForVoting = persons
    .filter((person) => person.age >= 18)
    .map((person) => person.name)
  console.log(
    `namesOfPersonsEligibleForVoting = ${namesOfPersonsEligibleForVoting}`
  )
}

// function4()

// reduce()
// - used to reduce a collection into a single value

function function5() {
  // array of numbers
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  // get sun of all the values
  // let sum = 0
  // for (const number of numbers) {
  //   sum += number
  // }
  // console.log(`sum of numbers = ${sum}`)

  // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  // 3, 3, 4, 5, 6, 7, 8, 9, 10
  // 6, 4, 5, 6, 7, 8, 9, 10
  // 10, 5, 6, 7, 8, 9, 10

  const sum = numbers.reduce((n1, n2) => n1 + n2)
  console.log(`sum of numbers = ${sum}`)

  const product = numbers.reduce((n1, n2) => n1 * n2)
  console.log(`product of numbers = ${product}`)
}

// function5()
