import React from 'react'
import logo from '../assets/LOGO.png'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div className='w-full h-full bg-white '>
       <div className='flex  justify-evenly '>
       <div className='w-3/10'>
       <NavLink  to='/' >
         <img src={logo} className='md:h-[100px] h-[50px]  md:w-[100px] w-[50px] cursor-pointer ' alt="" />
         </NavLink>
       </div>
       <div className='flex md:gap-8 gap-2 text-black md:mt-10 mt-6 md:w-3/5 w-3/5 '>
       <NavLink  to='/' >
         <ul className='cursor-pointer md:text-[20px] text-[9px]'>Home</ul>
        </NavLink>
        <NavLink  to='/services' >
         <ul className='cursor-pointer md:text-[20px] text-[9px]'>Our Services</ul>
        </NavLink>
        
        
        <NavLink  to='/OurPortfolio' >
          <ul className='cursor-pointer md:text-[20px] text-[9px]'>Our Portfolio</ul>
        </NavLink>
        <NavLink  to='/AboutUs' >
          <ul className='cursor-pointer md:text-[20px] text-[9px]'>About Us</ul>
        </NavLink>
        
       </div>
       <NavLink  to='/BookCall' >
       <div className='cursor-pointer'>
        <button className='bg-[#69ABE0] hover:bg-sky-700 text-white md:p-2 p-2 rounded-[5px] md:mt-8 mt-4 md:text-[15px] text-[10px]'>BOOK A CALL</button>
       </div>
       </NavLink>
       
       </div>
    </div>
  )
}

export default Header
