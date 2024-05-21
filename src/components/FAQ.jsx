// src/components/FAQ.js
import React, { useState } from 'react';

const faqs = [
  {
    question: "Where do you invest?",
    answer: "We invest in primary and secondary markets of Ontario and Alberta, Canada. We have invested in the Greater Toronto Area, Greater Niagara area and have a focus in the Kitchener Waterloo Cambridge area.",
  },
  {
    question: "Can I sell my house to you?",
    answer: "Absolutely! We are always buying new houses as investment properties in our portfolio. We can assist you with the selling process, and best of all there is no realtor fees.",
  },
  {
    question: "How can I partner with you?",
    answer: "As a passive investor, you can partner with us in two ways: either as a joint venture through an equity ownership in the property, or you can private lend capital towards a project with a fixed annual interest rate. Terms are dependent on the project and are mutually decided.",
  },
  {
    question: "How do I get started?",
    answer: "Use the Contact Us page to schedule a consultation call and determine if this is a good fit for you.",
  },
];

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
    <div className='mt-10'>
    <h4 className="text-[15px]  mb-5 text-center font-rajdhani font-normal">FREQUENTLY ASKED</h4>
    <h1 className="md:text-[50px] text-[32px] font-bold mb-5 text-center font-rajdhani">QUESTIONS</h1>


    </div>
    <div className="max-w-6xl mx-auto my-10 p-8 bg-white ">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b-2 border-gray-200">
          <button
            className="w-full text-left flex justify-between items-center p-4 bg-gray-100 hover:bg-gray-200"
            onClick={() => toggleFAQ(index)}
          >
            <span className="text-lg font-medium text-blue text-[20px]">{faq.question}</span>
            <span className={`transform transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`}>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </span>
          </button>
          <div className={`overflow-hidden transition-max-height duration-500 ${activeIndex === index ? 'max-h-screen' : 'max-h-0'}`}>
            <p className="p-4 text-[20px]">{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}

export default FAQ;
