import React, { useState } from 'react';

const faqs = [
  {
    question: 'What is Flowbite?',
    answer: 'Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.'
  },
  {
    question: 'Is there a Figma file available?',
    answer: 'Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.'
  },
  {
    question: 'What are the differences between Flowbite and Tailwind UI?',
    answer: 'The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.'
  },
  // Add more FAQs as needed
];

function Services() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <div id="accordion-collapse" data-accordion="collapse" className="flex flex-col items-center justify-end min-h-screen pb-10">
      {faqs.map((faq, index) => (
        <div key={index} className="w-full max-w-2xl">
          <h2 id={`accordion-collapse-heading-${index + 1}`}>
            <button 
              type="button" 
              className="flex items-center justify-between w-full p-5 font-medium text-center text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" 
              data-accordion-target={`#accordion-collapse-body-${index + 1}`} 
              aria-expanded={activeIndex === index} 
              aria-controls={`accordion-collapse-body-${index + 1}`}
              onClick={() => handleClick(index)}
            >
              <span>{faq.question}</span>
              <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
              </svg>
            </button>
          </h2>
          <div id={`accordion-collapse-body-${index + 1}`} className={activeIndex === index ? '' : 'hidden'} aria-labelledby={`accordion-collapse-heading-${index + 1}`}>
            <div className="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
              <p className="mb-2 text-gray-500 dark:text-gray-400">{faq.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Services;