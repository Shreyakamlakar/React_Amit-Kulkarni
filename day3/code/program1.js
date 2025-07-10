// object destructuring
// - split the object into multiple variables using the properties
// - sequence of the properties does not matter

// array destructuring
// - split the array into multiple variables
// - sequence of the variables or index positions is important

function function1() {
  // object
  const person = {
    firstName: 'john',
    lastName: 'doe',
    address: 'usa',
  }

  console.log(`first name = ${person.firstName}`)
  console.log(`last name = ${person['lastName']}`)
  console.log(`address = ${person.address}`)
  console.log('----')

  // const firstName = person.firstName
  // const lastName = person.lastName
  // const address = person.address

  // object destructuring
  const { firstName, lastName, address } = person

  console.log(`first name = ${firstName}`)
  console.log(`last name = ${lastName}`)
  console.log(`address = ${address}`)
}

// function1()

function function2() {
  // phone is not extracted as it is not required
  // since age does NOT exist in the object, the variable age will get undefined value
  const { firstName, address, email, age, lastName } = {
    firstName: 'person2',
    lastName: 'person2',
    address: 'mumbai',
    email: 'person2@test.com',
    phone: '+913423434',
  }

  console.log(
    `first name: ${firstName}\n last name = ${lastName}\n address = ${address}\n email = ${email}\n age = ${age}`
  )
}

// function2()

function function3() {
  // array of numbers
  const numbers = [10, 20, 30, 40]
  console.log(`numbers[0] = ${numbers[0]}`)
  console.log(`numbers[1] = ${numbers[1]}`)
  console.log(`numbers[2] = ${numbers[2]}`)
  console.log(`numbers[3] = ${numbers[3]}`)

  // array destructuring
  // n1 = numbers[0]
  // n2 = numbers[1]
  // n3 = numbers[2]
  // n4 = numbers[3]
  const [n1, n2, n3, n4] = numbers
  console.log(`n1 = ${n1}, n2 = ${n2}, n3 = ${n3}, n4 = ${n4}`)
}

// function3()

function function4() {
  // array destructuring
  const [n1, n2] = [100, 200]
  console.log(`n1 = ${n1}, n2 = ${n2}`)
}

function4()
