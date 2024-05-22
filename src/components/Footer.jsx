import React from 'react'
import icon1 from '../assets/maki_town.png'
import icon2 from '../assets/ic_round-call.png'
import icon3 from '../assets/message.png'
import facebook from '../assets/facebook-icon.png'
import instagram from '../assets/instagram-icon.png'
function Footer() {
  return (
    <div className='md:w-full'>
      <div className='grid grid-cols-1 lg:grid-cols-4  md:gap-y-0 gap-y-20 px-10  text-black bg-[#3771C1] p-10'>
        <div>
          <h1 className='font-bold text-white text-[20px]'>Contact</h1>
          <div className='flex mt-4 gap-4'>
              <img src={icon1} className='h-[30px] w-[30px]' alt="" />
              <p className='text-white text-[15px] w-[233px] mt-2'>1Up Investment Group LLC Ontario, CA </p>
          </div>
          <div className='flex mt-4 gap-4'>
              <img src={icon2} className='h-[30px] w-[30px]' alt="" />
              <p className='text-white text-[15px] w-[233px]'>(305) 555-4446 </p>
          </div>
          <div className='flex mt-4 gap-4'>
              <img src={icon3} className='h-[20px] w-[30px]' alt="" />
              <p className='text-white text-[15px] w-[233px] '>info@1upinvestmentgroup.ca </p>
          </div>
        </div>
        <div>
          <h1 className='font-bold text-white'>OUR COMPANY</h1>
           <div className='space-y-[20px] mt-6'>
            <ul className='text-white font-rajdhani font-normal'>About Us</ul>
            <ul className='text-white font-rajdhani font-normal'>Our Portfolio</ul>
            <ul className='text-white font-rajdhani font-normal'>Our Services</ul>
            <ul className='text-white font-rajdhani font-normal'>Privacy Policy</ul>
            <ul className='text-white font-rajdhani font-normal'>Terms of Service</ul>
           </div>
          <p></p>
        </div>
        <div>
          <h1 className='font-bold text-white'>GET IN TOUCH</h1>
          <div className='mt-6'>
          <ul className='text-white font-rajdhani font-normal'>Contact Us</ul>
          <button className='bg-[#69ABE0] text-white p-2 rounded-[5px]'>BOOK A CALL</button>

          </div>
        </div>
        <div>
          <h1 className='font-bold text-white'>SOCIAL MEDIA</h1>
          <div className='flex gap-4 mt-6'>
            <img className='w-[20.83px] h-[20.83px]' src={facebook} alt="" />
            <img className='w-[20.83px] h-[20.83px]' src={instagram} alt="" />
          </div>
        </div>
        <div className='text-start mt-20'>
        <h1 className='text-white font-bold font-rajdhani'>Copyright | WP Estate. All Rights Reserved.</h1>
      </div>
      </div>
      
    </div>
  )
}

export default Footer