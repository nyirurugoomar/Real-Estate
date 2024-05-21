import React from 'react'

function Banner() {
  return (
    <div className='md:w-full w-full md:mt-20 mt-20 mx-2'>
        <div className='bg-banner-bg bg-cover p-10 justify-center text-center'>
           <p className='text-center text-white md:text-[39px] text-[14px]'>we provide innovative real estate solutions, creating mutually beneficial partnerships that maximize returns while maintaining integrity and exceeding expectations.</p>
           <button className='bg-white text-blue p-4 mt-4 px-14 rounded-[5px]'>Read More</button>
        </div>

    </div>
  )
}

export default Banner