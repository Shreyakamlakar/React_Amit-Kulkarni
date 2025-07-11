import Computer from './Computer'

function Computers() {
  const computers = [
    { id: 1, name: 'Computer 1', brand: 'Brand A' },
    { id: 2, name: 'Computer 2', brand: 'Brand B' },
    { id: 3, name: 'Computer 3', brand: 'Brand C' },
    { id: 4, name: 'Computer 4', brand: 'Brand D' },
    { id: 5, name: 'Computer 5', brand: 'Brand E' },
  ]

  return (
    <div>
      <h2>Computers</h2>
      <table className='table table-striped table-bordered'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Brand</th>
          </tr>
        </thead>
        <tbody>
          {computers.map((computer) => {
            return (
              <Computer
                id={computer.id}
                name={computer.name}
                brand={computer.brand}
              />
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Computers
