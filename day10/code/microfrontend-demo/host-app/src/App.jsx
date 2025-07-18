import React from 'react'
import Button from 'remote_app/Button'

function App() {
  return (
    <div>
      <h2>Host App</h2>
      <Button
        title='Host App Button'
        onClick={() => {
          alert('called from host application')
        }}
      />
    </div>
  )
}

export default App
