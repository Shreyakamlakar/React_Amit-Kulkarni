import React from 'react'
import './Home.css'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/navbar/Navbar'

function Home() {
  return (
    <div>
      <Navbar />

      {/* placeholder to the child component */}
      <Outlet />
    </div>
  )
}

export default Home
