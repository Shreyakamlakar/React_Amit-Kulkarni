// create object using Object (root function)
// Object
// - root function in JS
// - everything in JS is an Object

function function1() {
  // create a person object using Object
  const person = new Object()

  // add the required attributes
  person['name'] = 'person1'
  person.address = 'pune'
  person['email'] = 'person1@test.com'
  console.log(`person = `, person)

  console.log(`----`)

  // create an object of mobile
  const mobile1 = new Object()
  mobile1['model'] = 'iPhone'
  mobile1['company'] = 'Apple'
  console.log(`mobile1 = `, mobile1)

  const mobile2 = new Object()
  mobile2['mobileModel'] = 'S25'
  mobile2['mobileCompany'] = 'Samsung'
  mobile2['price'] = 90000
  console.log(`mobile2 = `, mobile2)

  console.log(`----`)

  // create a computer object using JSON
  const computer = {
    cpu: 'core i9',
    ram: '64GB',
  }
  console.log(`computer = `, computer)
}

// function1()
