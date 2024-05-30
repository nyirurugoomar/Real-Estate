import React from 'react'

function BookCall() {
  return (
    <div className='w-full'>
      <div className='bg-contact-banner-bg bg-cover p-10 justify-center text-center pt-20 h-[400px]'>
        
         <h1 className="text-[32px] md:text-[48px] lg:text-[64px] font-bold text-white font-rajdhani uppercase pt-20">Contact us</h1>
         
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-20 text-black bg-[#032C45]/50 px-5 md:px-20 lg:px-40 py-20'>
          
           <div className='p-10 mt-14 md:text-start text-center'>
            <h1 className='md:text-[64px] text-[40px] font-rajdhani font-medium text-white '>Get in touch.</h1>
            <p className='text-white md:text-[16px] text-[14px] md:mt-0 mt-4 font-rajdhani font-normal '>We look forward to hearing from you.</p>
           </div>
           

           <div className="md:mt-10">
            
              <form className="grid grid-cols-1 gap-4" onSubmit="">
              <div className='flex gap-8'>
                <div className="mb-4">
                  <input
                    type="text"
                    name="username"
                    className="w-full px-10 py-2 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F7F7F7]"
                    placeholder="Full Name"
                  />
                </div>
                <div className="mb-4">
                  <input
                    type="text"
                    name="lastname"
                    className="w-full px-10 py-2 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F7F7F7]"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="mb-4">
                <input
                  type="email"
                  name="email"
                  className="w-full  px-3 py-2 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F7F7F7]"
                  placeholder="E-mail"
                />
              </div>
              <div className="mb-4">
                <textarea
                  name="message"
                  className="w-full px-3 py-2 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F7F7F7]"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
              <div className="flex justify-center">
                <button className="bg-[#3771C1] text-white font-bold text-[20px] text-center p-4 rounded px-20">
                  Submit
                </button>
              </div>
            </form>
            
            
          </div>
      </div>
    </div>
  )
}

export default BookCall
