// keyed collection
// - the values will be stored on keys not on the indexes
// - types
//   - object
//   - map
//   - set

// object:
// - collection of key-value pairs
// - there are 4 ways to create objects

// using JavaScript Object Notation
// - syntax used to create an object in JS
// - types of objects
//   - using {}: creates an object
//   - using []: creates an array of object

function function1() {
  // object to store person information
  const person = {
    name: 'John Doe',
    'present address': 'USA',
    email: 'john@test.com',
  }

  // here the object person gets converted into string: [object Object]
  // console.log(`person info: ${person}`)
  console.log('person info: ', person)
  console.log(`name = ${person.name}`)
  console.log(`email = ${person.email}`)
  // can NOt use dot syntax as the key has special character
  // console.log(`address = ${person.present address}`)

  console.log(`---`)

  console.log(`name = ${person['name']}`)
  console.log(`address = ${person['present address']}`)
  console.log(`email = ${person['email']}`)

  console.log(`---`)

  // get all the keys and theirs values from the object
  for (const key in person) {
    console.log(`key = ${key}, value = ${person[key]}`)
  }
}

// function1()

function function2() {
  // array of objects
  // - 2d collection -> multi-dimensional collection
  const persons = [
    { name: 'person1', address: 'pune', email: 'person1@test.com' },
    { name: 'person2', address: 'mumbai', email: 'person2@test.com' },
    { name: 'person3', address: 'nashik', email: 'person3@test.com' },
    { name: 'person4', address: 'satara', email: 'person4@test.com' },
    { name: 'person5', address: 'raigad', email: 'person5@test.com' },
  ]

  // console.log(`name => ${persons[0]['name']}`)

  // for (const person of persons) {
  //   console.log(
  //     `name: ${person.name}, address: ${person.address}, email: ${person.email}`
  //   )
  // }

  //for (let index = 0; index < persons.length; index++) {
  //  // get all the keys of person
  //  const person = persons[index]
  //  const keys = Object.keys(person)
  //  for (let keyIndex = 0; keyIndex < keys.length; keyIndex++) {
  //    const key = keys[keyIndex]
  //    console.log(`${key} = ${person[key]}`)
  //  }
  //  console.log('--')
  //}

  for (const person of persons) {
    for (const key in person) {
      console.log(`key = ${key}, value = ${person[key]}`)
    }
    console.log('---')
  }
}

// function2()
