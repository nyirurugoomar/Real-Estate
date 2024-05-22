import React from 'react'
import joinPhoto from '../page/image/photo-services.png'

function Services() {
  return (
    <div className='w-full'>
        <div className='text-center'>
        <h1 className='text-black font-bold font-rajdhani text-[64px] uppercase'>Our services</h1>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-16 px-4'>
           <div className='p-16 w-[641px]'>
              <h2 className='text-black font-rajdhani text-[48px] md:ml-8'>Joint Ventures</h2>
              <p className='text-start'>1Up assumes the role of managing partner, providing shared resources, knowledge, expertise, credibility, and capital, allowing investors to achieve ambitious goals and realize their dreams.</p>
              <div className='mt-4'>
                <h3 className='font-bold font-rajdhani text-[20px]'>Benefits of entering a Joint Venture with 1Up:</h3>
                <div className='space-y-6 ml-6'>
                    <li className='inline text-start'> <span className='text-3xl'>.</span> {" "} Access lucrative real estate opportunities and maximize your investment potential by pooling resources with other investors.</li>
                    <br/>
                    <li className='inline'> <span className='text-3xl'>.</span> {" "}Enjoy shared risk and reward with other investors in the joint venture while benefiting from a hands-off investment approach.</li>
                    <br/>
                    <li className='inline'> <span className='text-3xl'>.</span> {" "}Expand your real estate portfolio and build strategic partnerships with like-minded investors and industry professionals.</li>

                </div>
              </div>
            </div> 
           <div>
            <img className='w-[555px] h-[581px]' src={joinPhoto} alt="" />
           </div>
        </div>
       
    </div>
  )
}

export default Services