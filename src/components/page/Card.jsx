import React from 'react';
import data from '../utils/CardContainer.json';
import Bounce from 'react-reveal/Bounce';

function Card() {
  return (
    <div className='w-full pt-20 mb-20 bg-white'>
      <h1 className='text-center text-[50px] font-bold mb-10 uppercase font-rajdhani'>portfolio</h1>
      <div className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16 px-4 text-black'>
        {data.map((card, index) => (
          <Bounce up key={index}>
            <div className='bg-white rounded-xl shadow-lg'>
              <img className='w-full md:h-56 h-40 sm:h-64 object-cover rounded-t-xl' src={card.image_url} alt="" />
              <div className='p-6'>
                <h1 className='md:text-[20px] text-[12px] font-bold mb-2 text-center'>{card.title}</h1>
                <p className='font-thin font-rajdhani mb-4 md:text-[14px] text-[12px] text-center text-[#69ABE0]'>{card.description}</p>
              </div>
            </div>
          </Bounce>
        ))}
      </div>
    </div>
  )
}

export default Card;
