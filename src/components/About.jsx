import React from 'react'
import image1 from '../assets/photo.png'
import image2 from '../assets/photo2.png'

function About() {
  return (
    <div className='md:w-full w-full'>
       <div className='grid grid-cols-1 lg:grid-cols-2  md:gap-y-0 gap-y-20 px-4  text-black bg-white'>
       
       <div>
          <img src={image1} alt="" />
        </div>
       
        
        <div className='md:p-40 text-start  '>
        
          <h1 className='uppercase font-bold text-[3rem] font-rajdhani bg-about-bg bg-cover h-24 w-full'>About us</h1>
          <p className='text-[15px] md:w-[418px] w-[296px]'>1up Investment Group is a team of seasoned real estate professionals known for their expertise and experience, conducting operations in Alberta and Ontario.</p>
          
        </div>
        
        <div className='md:p-40 text-start  '>
        
            <h1 className='uppercase font-bold text-[3rem] font-rajdhani bg-mission-bg bg-cover h-24 w-full'>What we do</h1>
            <p className='text-[15px] md:w-[418px] w-[296px]'>We provide end-to-end real estate investment solutions, including private lending, joint ventures, and equity investments, aimed at maximizing returns and simplifying the investment process for clients.</p>
          
        </div>
        
          <div>   
            <img src={image2} alt="" />
          </div>
        
        
       </div>
    </div>
  )
}

export default About