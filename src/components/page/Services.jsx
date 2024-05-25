import React from 'react'
import joinPhoto from '../page/image/photo-services.png'

function Services() {
  return (
    <div className='w-full'>
        <div className='text-center mt-24 mb-10'>
        <h1 className='text-black font-bold font-rajdhani text-[64px] uppercase'>Our services</h1>

        </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-16 px-4'>
           <div className='p-16 w-[641px]'>
              <h2 className='text-black font-rajdhani text-[48px] '>Joint Ventures</h2>
              <p className='text-start'>1Up assumes the role of managing partner, providing shared resources, knowledge, expertise, credibility, and capital, allowing investors to achieve ambitious goals and realize their dreams.</p>
              <div className='mt-4'>
                <h3 className='font-bold font-rajdhani text-[20px]'>Benefits of entering a Joint Venture with 1Up:</h3>
                <div className='space-y-6'>
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
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-16 px-4 mt-10 mb-10'>

        <div>
            <img className='w-[655px] h-[581px]' src={joinPhoto} alt="" />
           </div>
           <div className='p-8 w-[641px] bg-[#3771C1] text-white'>
              <h2 className='text-white font-rajdhani text-[40px] text-center'>Equity Investments</h2>
              <p className='text-start w-[549px] mt-10'>1Up offers equity investment opportunities in real estate, providing investors with the potential for high returns and diversification through direct ownership or investment in a portfolio of properties.</p>
              <div className='mt-4'>
                <h3 className='font-bold font-rajdhani text-[20px]'>Benefits of Equity Investments with 1Up</h3>
                <div className='gap-y-4 ml-6'>
                    <li className='inline text-start'> <span className='text-3xl'>.</span> {" "} Potential fractional ownership or participation in larger real estate assets is available through various legal structures, such as a GP/LP arrangement. This approach offers the added advantage of allowing investors to commence with a lower initial capital investment.</li>
                    <br/>
                    <li className='inline'> <span className='text-3xl'>.</span> {" "}Allows for smaller investments in larger projects, enabling investors to participate in ventures that might have been beyond their financial means otherwise. Fractional ownership provides potential for returns and spreads risks across multiple assets.</li>
                    

                </div>
              </div>
            </div> 
           
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-x-2 gap-y-16 px-4 mb-10'>
           <div className='p-16 w-[641px]'>
              <h2 className='text-black font-rajdhani text-[40px] uppercase'>private lending</h2>
              <p className='text-start'>Our private lending services provide a stable return on your capital through secured real estate loans with low risk and flexible loan terms. We perform thorough underwriting and due diligence for high-quality lending opportunities.</p>
              <div className='mt-4'>
                <h3 className='font-bold font-rajdhani text-[20px]'>Benefits of Private Lending with 1Up:</h3>
                <div className='space-y-6 '>
                    <li className='inline text-start'> <span className='text-3xl'>.</span> {" "} Access to secured real estate loans with low risk and short-term maturity.</li>
                    <br/>
                    <li className='inline'> <span className='text-3xl'>.</span> {" "}Utilize registered funds, lines of credit, and other financing options to capitalize investment with the aim of earning a return.</li>
                    <br/>
                    <li className='inline'> <span className='text-3xl'>.</span> {" "}Flexible investment options with a range of investment sizes and terms available.</li>

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