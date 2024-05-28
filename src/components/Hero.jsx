import React from 'react'
import Bounce from 'react-reveal/Bounce';
import Fade from 'react-reveal/Fade';

function Hero() {
  return (
    <div className='md:w-full  bg-hero-bg bg-cover '>
        <div className=''>
            <div className='md:text-center text-center p-10 md:p-60 '>
                 <Bounce>
                    <h1 className='md:text-[50px] text-[40px] text-white font-[600] font-rajdhani '>REAL ESTATE Solutions IN CANADA</h1>
                 </Bounce>
                 <Bounce down>
                 <p className='text-white text-[20px] tracking-widest font-thin uppercase font-rajdhani '>Effortless property investments giving you freedom</p>
                 </Bounce>
                  
                 
                <button className='bg-[#3771C1] p-4 px-12 text-white font-[800] mt-10 rounded-lg font-rajdhani animate-bounce'>BOOK A CALL NOW</button>
            </div>
            
        </div>
    </div>
  )
}

export default Hero