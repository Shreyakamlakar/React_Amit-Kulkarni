import Car from './Car'

function Person() {
  const person = {
    name: 'person1',
    address: 'pune',
    car: {
      id: 1,
      model: 'triber',
      company: 'renault',
    },
  }

  return (
    <div>
      <h2>Person Component</h2>
      <div>name: {person.name}</div>
      <div>address: {person.address}</div>
      <Car
        carId={person.car.id}
        carModel={person.car.model}
        carCompany={person.car.company}
      />
    </div>
  )
}

export const pi = 3.14

export default Person
