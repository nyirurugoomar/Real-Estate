import React from 'react';
import user1 from '../page/image/faizan Yousaf.png';
import user2 from '../page/image/babar Moghal.png';

function AboutUs() {
  return (
    <div className="w-full">
      <div className="bg-about-banner-bg bg-cover p-10 justify-center text-center pt-20">
        <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-white font-rajdhani uppercase">About Us</h1>
        <h3 className="text-[20px] md:text-[25px] lg:text-[30px] font-semibold text-white">1UP Investment Group</h3>
        <p className="text-white text-center text-[14px] md:text-[18px] lg:text-[20px] py-4">
          1Up Investment Group is a real estate investment company specializing in Private Lending, Joint Ventures, and Equity Investments. Our team of professionals provides comprehensive services to help clients achieve their investment goals.
        </p>
        <p className="text-white text-center text-[14px] md:text-[18px] lg:text-[20px]">
          From stable returns on Private Lending to strategic partnerships through Joint Ventures and Equity Investments, 1Up Investment Group offers a range of investment options designed to maximize returns and minimize risk.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 text-black bg-[#FAFAFA] px-5 md:px-20 lg:px-40 pt-20">
        <div className="w-full lg:w-[457px] h-[501px] mx-auto">
          <img src={user1} alt="Faizan Yousaf" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-[24px] md:text-[32px] lg:text-[48px] font-semibold">Faizan Yousaf</h1>
          <p className="my-2">Faizan is a seasoned sales and marketing expert with a strong background in consumer sales within the home improvement and telecommunication sectors. With extensive experience in direct marketing strategies, leading remote teams, and driving sales targets through expert contract negotiation and customer service skills, Faizan is able to deliver results for clients across diverse industries.</p>
          <p className="my-2">Faizan has been investing in real estate since 2020 with a focus on flips, conversions, and wholesaling in the GTA and Niagara regions of Ontario. He is highly analytical and has a keen eye for identifying investment opportunities.</p>
          <p className="my-2">Faizan's objective in real estate is to simplify the investment process for others by offering a complete solution that encompasses acquisitions, renovations, stakeholder management, and asset management for long-term growth and returns. He is committed to obtaining time freedom, spending quality time with his family, and serving others.</p>
          <p className="my-2">He is an avid reader, fitness enthusiast, and loves to travel and experience new cultures.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 text-black bg-[#FAFAFA] px-5 md:px-20 lg:px-40 py-20">
        <div className="w-full lg:w-[457px] h-[501px] mx-auto">
          <img src={user2} alt="Babar Moghal" className="w-full h-full object-cover" />
        </div>
        <div>
          <h1 className="text-[24px] md:text-[32px] lg:text-[48px] font-semibold">Babar Moghal</h1>
          <p className="my-2">Babar is a professional engineer and seasoned business development professional with over 18 years of experience in high-ticket sales, engaging with the C-suite in Fortune 500 companies. He has been investing in real estate since 2013, both as an active and passive investor across Alberta and Ontario.</p>
          <p className="my-2">His expertise in leadership and business, and managing cross-functional teams in the corporate world, has led to synergies in real estate, building relationships, negotiations, developing strategic partnerships, and creative strategies.</p>
          <p className="my-2">Babar's goal in real estate is to simplify the investing process for others, providing an end-to-end solution covering acquisitions, executing renovations, working with a variety of stakeholders, and managing the asset for long-term growth and returns.</p>
          <p className="my-2">His true passion is time freedom and being able to spend time with family, living life on his terms and serving others. He is a husband and father to two young children.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
