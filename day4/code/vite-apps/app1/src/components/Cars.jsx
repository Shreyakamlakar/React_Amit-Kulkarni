import Car from './Car'

function Cars() {
  const cars = [
    { id: 1, company: 'Toyota', model: 'Corolla' },
    { id: 2, company: 'Honda', model: 'Civic' },
    { id: 3, company: 'Ford', model: 'Focus' },
    { id: 4, company: 'Chevrolet', model: 'Malibu' },
    { id: 5, company: 'Nissan', model: 'Altima' },
  ]

  return (
    <div>
      <h2>List of Cars</h2>
      {cars.map((car) => {
        return (
          <Car
            carId={car.id}
            carModel={car.model}
            carCompany={car.company}
          />
        )
      })}
    </div>
  )
}

export default Cars
