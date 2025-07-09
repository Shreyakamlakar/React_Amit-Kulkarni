// variable
// - all variables are  declared implicitly
// - everything is JS is dynamically allocated  and data types are inferred
// - the data type is automatically assigned by JS language
// - by using the literals used to declare the variables
// - literals are the constant values

// data types
// value types
// - number
// - boolean
// - string
// - undefined (both: predefined and data type)

// reference type:
// - object

// keywords to declare variables
// let: will declare mutable variable (can be updated/modified)
// const:
// - will declare immutable variable (constant or can not be updated)
// - prefer immutable over mutable

// data type: number
let num = 200
console.log(`num = ${num}, type = ${typeof num}`)

num = 300
console.log(`num = ${num}, type = ${typeof num}`)

// data type: number
let salary = 15.5
console.log(`salary = ${salary}, type = ${typeof salary}`)

// data type: boolean
let canVote = false
console.log(`canVote = ${canVote}, type = ${typeof canVote}`)

// data type: string
let firstName = 'amit'
console.log(`firstName = ${firstName}, type = ${typeof firstName}`)

// data type: string
let lastName = 'kulkarni'
console.log(`lastName = ${lastName}, type = ${typeof lastName}`)

// data type: string
let address = `house number 100,
sinhgad road,
pune`
console.log(`address = ${address}, type = ${typeof address}`)

// data type: undefined
let myVar
console.log(`myVar = ${myVar}, type = ${typeof myVar}`)

// data type: object
let person = null
console.log(`person = ${person}, type = ${typeof person}`)

console.log('--')

const num2 = 200
console.log(`num2 = ${num2}, type = ${typeof num2}`)

// can not update as it is declared as constant
// num2 = 300
