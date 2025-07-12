import React from 'react'
// import Counter from './components/Counter'
import Accordion from './components/Accordion'

function App() {
  const info = [
    {
      title: 'React',
      details: 'react is library to develop frontend SPA type applications',
    },
    {
      title: 'Angular',
      details: 'angular is library to develop frontend SPA type applications',
    },
    {
      title: 'express',
      details: 'library used to develop REST APIs using node js',
    },
  ]
  return (
    <div>
      <h1>App</h1>
      {/* <Counter /> */}

      {info.map((item) => {
        return (
          <Accordion
            title={item.title}
            details={item.details}
          />
        )
      })}
    </div>
  )
}

export default App
