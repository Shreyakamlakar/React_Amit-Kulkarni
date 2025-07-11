import './Car.css'

function Car({ carId, carModel, carCompany }) {
  return (
    <div className='car'>
      <div>id: {carId}</div>
      <div>model: {carModel}</div>
      <div>company: {carCompany}</div>
    </div>
  )
}

export default Car
