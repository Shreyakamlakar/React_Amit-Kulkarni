// create an object using class
// - JS does not support class based object orientation
// - class in JS is just a sugar syntax
//   (while compiling the code, the class gets converted into constructor function)

// class
// - collection of properties and methods
// - properties are used to store the state of an object
// - methods are used to add behavior of an object
// - methods
//   - functions defined inside a class
//   - methods
//     - constructor
//     - destructor: not supported in JS
//     - setter or mutator
//     - getter or inspector
//     - facilitator

class Person {
  // gets called by default for every object
  constructor(name, address, age) {
    this.name = name
    this.address = address
    this.age = age
  }

  // setter
  setAge(age) {
    this.age = age
  }

  // getter
  getAge() {
    return this.age
  }

  // facilitator method
  canVote() {
    if (this.age >= 18) {
      console.log(`${this.name} is eligible for voting`)
    } else {
      console.log(`${this.name} is NOT eligible for voting`)
    }
  }
}

// instantiation
const p1 = new Person('person1', 'pune', 20)
p1.canVote()

const p2 = new Person('person2', 'mumbai', 10)
p2.canVote()
