import React from "react";
import image1 from "../assets/contact-photo.png";

function Contact() {
  return (
    <div className="w-full p-20 bg-white">
      <div className="text-center justify-center mb-20">
        <h4 className="font-thin text-[20px] font-rajdhani">Contact</h4>
        <h1 className="text-[50px] font-bold font-rajdhani">Book A CALL</h1>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2  md:gap-y-0 gap-y-20 px-4  text-black bg-white">
        <div>
          <img className="h-[699px]" src={image1} alt="" />
        </div>
        <div className="md:p-10 text-start  ">
          <h1 className="font-rajdhani text-[32px] font-semibold tracking-wider">
            GET IN TOUCH WITH OUR TEAM
          </h1>
          <p className="text-[17px] font-rajdhani  text-black/50">
            Contact our team to discuss how we can assist you in achieving your
            investment goals.
          </p>
          <div className="mt-10">
            <form className="grid grid-cols-1 lg:grid-cols-2 gap-4" onSubmit="">
              <div className="mb-4">
                <label className="block text-gray-700">First name</label>
                <input
                  type="text"
                  
                  name="username"
                  className="w-full px-3 py-2  rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F7F7F7]"
                  placeholder="First name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Last name</label>
                <input
                  type="text"
                  name="lastname"
                  className="w-full px-3 py-2  rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F7F7F7]"
                  placeholder="Last name"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3 py-2  rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F7F7F7]"
                  placeholder="Email"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Phone</label>
                <input
                  type="number"
                  name="phone"
                  className="w-full px-3 py-2  rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F7F7F7]"
                  placeholder="Phone"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700">Message</label>
                <textarea
                  name="message"
                  className="w-[550px] px-3 py-2  rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 bg-[#F7F7F7]"
                  placeholder="Message"
                  rows="4"
                ></textarea>
              </div>
             
            </form>
            <button className="bg-[#3771C1] text-white   justify-center">
            Send Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
