import React from 'react'
import Navbar from '../../Components/Header/Navbar'
import { Outlet } from 'react-router'
import Footer from '../../Components/Footer/Footer'

function Root() {
  return (
    <div className='max-w-6xl mx-auto'>
       <Navbar></Navbar>
       <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}

export default Root
