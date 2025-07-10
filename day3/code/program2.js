// rest of operator

function function1() {
  // object
  const person1 = {
    name: 'person1',
    address: 'pune',
    email: 'person1@test.com',
  }
  console.log(`person1 = `, person1)

  // this WILL NOT create a new copy of person1 object
  // instead only reference will be created
  // and both person1 and person will point to the same object in the memory
  const person2 = person1
  console.log(`person2 = `, person2)

  person1.name = 'person2'
  console.log(`person1 = `, person1)
  console.log(`person2 = `, person2)
}

// function1()

function function2() {
  // object
  const person1 = {
    name: 'person1',
    address: 'pune',
    email: 'person1@test.com',
  }
  console.log(`person1 = `, person1)

  // create a new copy of person1
  // const person2 = new Object()
  // person2.name = person1.name
  // person2.address = person1.address
  // person2.email = person1.email

  // create a new copy of person1
  const person2 = { ...person1 }
  console.log(`person2 = `, person2)

  person1.name = 'person2'
  console.log(`person1 = `, person1)
  console.log(`person2 = `, person2)
}

// function2()

function function3() {
  // object
  const person1 = {
    name: 'person1',
    address: 'pune',
    email: 'person1@test.com',
  }
  console.log(`person1 = `, person1)

  // create a new object
  // const person2 = { ...person1 }
  // person2.name = 'person2'
  const person2 = { ...person1, name: 'person2', email: 'person2@test.com' }
  console.log(`person2 = `, person2)
}

// function3()

function function4() {
  // array of numbers
  const numbers1 = [10, 20, 30, 40]
  console.log(`numbers1 = `, numbers1)

  // create a new copy of numbers array
  const numbers2 = [...numbers1]
  console.log(`numbers2 = `, numbers2)

  const numbers3 = [...numbers1, 50, 60]
  console.log(`numbers3 = `, numbers3)
}

function4()
