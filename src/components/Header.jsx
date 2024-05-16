import React from 'react'
import logo from '../assets/LOGO.png'

function Header() {
  return (
    <div className='w-full h-full bg-white '>
       <div className='flex  justify-evenly '>
       <div className='w-3/10'>
         <img src={logo} className='h-[100px]  w-[100px] ' alt="" />
       </div>
       <div className='flex md:gap-8 gap-2 text-black mt-10 md:w-3/5 w-3/5 '>
        <ul>Home</ul>
        <ul>Our Services</ul>
        <ul>Our Portfolio</ul>
        <ul>About Us</ul>
       </div>
       <div className=''>
        <button className='bg-[#69ABE0] text-white p-2 rounded-[5px] mt-8'>BOOK A CALL</button>
       </div>
       </div>
    </div>
  )
}

export default Header