import React, { useId, useRef, useState } from 'react'

function Header({ dummyFunction }) {
  // the element here will refer the native object (browser dom object) of <div> tag
  const element = useRef()
  //   console.log('rendering Header Component')
  //   console.log(dummyFunction)

  const id = useId()
  console.log(`id = ${id}`)

  const onUpdate = () => {
    // const div = document.getElementById('div1')
    // div.innerHTML = 'this is a test div'
    // div.style.backgroundColor = 'red'
    // div.style.color = 'white'
    // console.log(`div1: `, div)

    if (element.current) {
      element.current.innerHTML = 'this is a test div'
      element.current.style.backgroundColor = 'red'
      element.current.style.color = 'white'
    } else {
      alert('invalid element')
    }
  }

  return (
    <div>
      <h3 ref={element}>This is the header</h3>
      <div></div>
      <button onClick={onUpdate}>update div1</button>
    </div>
  )
}

export default React.memo(Header)
