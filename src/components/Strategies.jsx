import React from 'react';
import '../App.css';
import data from './utils/Strategies.json';

function Strategies() {
  return (
    <div className='w-full mt-10 mb-20 '>
      <h1 className='text-center text-[50px] font-bold mb-10 uppercase font-rajdhani'>strategies</h1>
      
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 px-4  text-black'>
        {data.map((strategy, index) => (
          <div key={index} className='bg-white rounded-xl shadow-lg p-14'>
            <div className='text-center'>
              <div className='flex justify-center mb-4'>
                <img className='' src={strategy.icon} alt="" />
              </div>
              <h1 className='text-xl font-bold mb-4'>{strategy.title}</h1>
              <p className='text-gray-700 font-normal'>{strategy.description}</p>
              <p className=' mt-4 text-[#69ABE0] text-[14px] font-rajdhani font-bold'>Read me...</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Strategies;
