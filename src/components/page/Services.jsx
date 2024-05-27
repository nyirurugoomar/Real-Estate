import React from 'react';
import joinPhoto from '../page/image/photo-services.png';

function Services() {
  return (
    <div className='w-full'>
      <div className='text-center mt-12 mb-6'>
        <h1 className='text-black font-bold font-rajdhani text-4xl md:text-6xl uppercase'>Our services</h1>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4'>
        <div className='p-4 md:p-8 lg:p-16 max-w-full lg:max-w-[641px]'>
          <h2 className='text-black font-rajdhani text-3xl md:text-4xl lg:text-5xl'>Joint Ventures</h2>
          <p className='md:text-start text- mt-4'>1Up assumes the role of managing partner, providing shared resources, knowledge, expertise, credibility, and capital, allowing investors to achieve ambitious goals and realize their dreams.</p>
          <div className='mt-4'>
            <h3 className='font-bold font-rajdhani text-lg md:text-xl lg:text-2xl'>Benefits of entering a Joint Venture with 1Up:</h3>
            <ul className='space-y-4 mt-2'>
              <li className='text-start'><span className='text-xl md:text-2xl'>•</span> Access lucrative real estate opportunities and maximize your investment potential by pooling resources with other investors.</li>
              <li className='text-start'><span className='text-xl md:text-2xl'>•</span> Enjoy shared risk and reward with other investors in the joint venture while benefiting from a hands-off investment approach.</li>
              <li className='text-start'><span className='text-xl md:text-2xl'>•</span> Expand your real estate portfolio and build strategic partnerships with like-minded investors and industry professionals.</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center'>
          <img className='max-w-full h-auto' src={joinPhoto} alt="Joint Ventures" />
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mt-10 mb-10'>
        <div className='flex justify-center'>
          <img className='max-w-full h-auto' src={joinPhoto} alt="Equity Investments" />
        </div>
        <div className='p-4 md:p-8 lg:p-16 max-w-full lg:max-w-[641px] bg-[#3771C1] text-white'>
          <h2 className='text-white font-rajdhani text-3xl md:text-4xl lg:text-5xl text-center'>Equity Investments</h2>
          <p className='text-start mt-4 md:mt-8'>1Up offers equity investment opportunities in real estate, providing investors with the potential for high returns and diversification through direct ownership or investment in a portfolio of properties.</p>
          <div className='mt-4'>
            <h3 className='font-bold font-rajdhani text-lg md:text-xl lg:text-2xl'>Benefits of Equity Investments with 1Up:</h3>
            <ul className='space-y-4 mt-2'>
              <li className='text-start'><span className='text-xl md:text-2xl'>•</span> Potential fractional ownership or participation in larger real estate assets is available through various legal structures, such as a GP/LP arrangement. This approach offers the added advantage of allowing investors to commence with a lower initial capital investment.</li>
              <li className='text-start'><span className='text-xl md:text-2xl'>•</span> Allows for smaller investments in larger projects, enabling investors to participate in ventures that might have been beyond their financial means otherwise. Fractional ownership provides potential for returns and spreads risks across multiple assets.</li>
            </ul>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 mb-10'>
        <div className='p-4 md:p-8 lg:p-16 max-w-full lg:max-w-[641px]'>
          <h2 className='text-black font-rajdhani text-3xl md:text-4xl lg:text-5xl uppercase'>Private Lending</h2>
          <p className='text-start mt-4'>Our private lending services provide a stable return on your capital through secured real estate loans with low risk and flexible loan terms. We perform thorough underwriting and due diligence for high-quality lending opportunities.</p>
          <div className='mt-4'>
            <h3 className='font-bold font-rajdhani text-lg md:text-xl lg:text-2xl'>Benefits of Private Lending with 1Up:</h3>
            <ul className='space-y-4 mt-2'>
              <li className='text-start'><span className='text-xl md:text-2xl'>•</span> Access to secured real estate loans with low risk and short-term maturity.</li>
              <li className='text-start'><span className='text-xl md:text-2xl'>•</span> Utilize registered funds, lines of credit, and other financing options to capitalize investment with the aim of earning a return.</li>
              <li className='text-start'><span className='text-xl md:text-2xl'>•</span> Flexible investment options with a range of investment sizes and terms available.</li>
            </ul>
          </div>
        </div>
        <div className='flex justify-center'>
          <img className='max-w-full h-auto' src={joinPhoto} alt="Private Lending" />
        </div>
      </div>
    </div>
  );
}

export default Services;
