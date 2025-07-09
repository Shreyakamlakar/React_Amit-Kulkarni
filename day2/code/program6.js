// create objects using constructor functions

// constructor function
// - function used to create an object

function function1() {
  const person1 = new Object()
  person1['name'] = 'person1'
  person1['address'] = 'pune'

  const person2 = new Object()
  person2['name'] = 'person2'
  person2['address'] = 'mumbai'

  console.log(`person1 = `, person1)
  console.log(`person2 = `, person2)
}

// function1()

function function2() {
  // constructor function
  function Person(name, address) {
    this.name = name
    this.address = address
  }

  const person1 = new Person('person1', 'pune')
  console.log(`person1 = `, person1)

  const person2 = new Person('person2', 'mumbai')
  console.log(`person2 = `, person2)
}

function2()
