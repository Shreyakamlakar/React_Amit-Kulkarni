import React, { useState } from 'react'
import './Accordion.css'

function Accordion({ title, details }) {
  const [isVisible, setVisible] = useState(false)

  const onToggle = () => {
    setVisible(!isVisible)
  }

  return (
    <div>
      <div
        onClick={onToggle}
        className='title'
      >
        {title}
      </div>

      {isVisible && <div className='details'>{details}</div>}
    </div>
  )
}

export default Accordion
