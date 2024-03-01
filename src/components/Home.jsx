import React from 'react';
import '../index.css';
import { Link } from 'react-router-dom';
import mayank from '../assest/mayank.jpeg';
import parth from '../assest/parth.jpeg';
import ayush from '../assest/ayush.jpeg';
import harsh from '../assest/harsh.jpeg';
import anshuman from '../assest/anshuman.jpeg';
function Home() {
    return (
      <div className="bg-gray-800">
    <div className="flex flex-col justify-between md:flex-row md:px-12 lg:px-20 p-30 dark:bg-gray-800 transition duration-500">
        <div className="text-container md:mt-10 md:w-1/3 mx-auto px-4 lg:px-8">
          <h2 className="text-black bg-gray-200 dark:bg-gray-700 rounded-md px-2 inline-block text-3xl dark:text-white my-4">
            Ace your
            <h1 className="bg-blue-600 text-4xl inline-block transform -rotate-3 px-2 rounded-md py-1  text-white"> Interview</h1> success with our comprehensive strategy!
          </h2>
          <h1 className="text-2xl md:text-4xl text-black font-bold dark:text-white tracking-normal leading-10"><span className="text-tmk-blue">Resume Review </span>with experts, Mock Interviews with professionals, and much more.
      </h1>

    <h2 className="text-gray-700 text-lg font-light dark:text-white mt-8">
    Transform your interview game with our all-inclusive approach! 
      <h3 className="dark:text-white text-black">Get your resume polished by experts, practice with professional mock interviews</h3>
      <span className="dark:text-white text-black"> and embark on your journey to success.
      </span>
    </h2>

    <div className="flex mt-8 md:flex-row items-baseline space-x-4">
      <div className="flex -space-x-3">
        <a href="#" className="">
          <img className="inline-block h-8 w-8 md:h-16 md:w-16 rounded-full object-cover ring-2 ring-white" src={ayush} alt="Guy" />
        </a>
        <a href="#" className="">
          <img className="inline-block h-8 w-8 md:h-16 md:w-16  rounded-full object-cover ring-2 ring-white" src={mayank} alt="Max" />
        </a>
        <a href="#" className="">
          <img className="inline-block h-8 w-8 md:h-16 md:w-16  rounded-full object-cover ring-2 ring-white" src={parth} alt="Charles" />
        </a>
        <a href="#" className="">
          <img className="inline-block h-8 w-8 md:h-16 md:w-16  rounded-full object-cover ring-2 ring-white" src={harsh} alt="Charles" />
        </a>
        <a href="#" className="">
          <img className="inline-block h-8 w-8 md:h-16 md:w-16  rounded-full object-cover ring-2 ring-white" src={anshuman} alt="Charles" />
        </a>
      </div>
      <div>
        <h3 className="text-gray-700 md:text-lg font-light dark:text-white mt-7">
          Trusted by the top employee of<p>Atlansian, GE HealthCare, BNY Mellon,Chubb,etc.</p>
        </h3>
      </div>
    </div>
    <div className="flex mt-4 md:flex-row items-baseline space-x-4">
      <div className="text-gray-700 md:text-lg font-bold dark:text-white flex -space-x-2">
      <h2> Do you want to improve your interview skills?</h2></div>
    </div>
    <div className="buttons-container flex space-x-2 md:space-x-4 text-white dark:text-white my-12">
  <button className="font-semibold rounded-md text-sm md:text-base bg-blue-500 px-4 py-2 md:px-8 md:py-4 cursor-pointer transform transition duration-200 hover:shadow-xl hover:-translate-y-1">
    <Link to="/bookslot" className=" lg:inline-block">Book Slot</Link>
  </button>
  <button className="font-semibold rounded-md text-sm md:text-base bg-red-500 px-4 py-2 md:px-8 md:py-4 cursor-pointer transform transition duration-200 hover:shadow-xl hover:-translate-y-1">
    <Link to="/about" className=" lg:inline-block">Learn More</Link>
  </button>
</div>
  </div>
  <div className="flex p-40 flex-col justify-evenly sm:flex-auto sm:px-5 md:flex-row md:px-10 lg:px-40 ">
    <blockquote className="flex-col justify-between md:flex-row md:px-12 lg:px-20 p-40 dark:bg-gray-800 transition duration-500 text-xl italic font-semibold text-gray-900 dark:text-white">
   
    <div className="box sm:flex sm:flex-col">
      <i className='fas fa-quote-left fa2'></i>
      <div className="text">
        <i className='fas fa-quote-right fa1'></i>
        <div>
        <svg className="w-10 h-10 text-gray-400 dark:text-gray-600 mb-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z"/>
        </svg>
          <p>
          <span className='text-2xl'>In every mock interview, seeds of success sow,</span>
          <span className='text-2xl'> Dreams take flight, as preparation we bestow. </span>
          <span className='text-2xl'>With resilience, courage, and determination to show,</span>
          <span className='text-2xl'>Your dream job awaits, let's make it glow!</span>
          </p>
        </div>
      </div>
    </div>
</blockquote>
  </div>

</div>
        </div>
    );
}

export default Home;