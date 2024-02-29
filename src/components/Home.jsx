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
      <div className="bg-gray-800 ">
    <div className="flex flex-col justify-between md:flex-row md:px-12 lg:px-20 p-30 dark:bg-gray-800 transition duration-500">
        <div className="text-container md:mt-10 md:w-1/2">
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
   
    <div className="box">
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
        {/* <div className="container mx-auto">
            <section style={{backgroundImage: "url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className="bg-gray-700 bg-blend-multiply">
                <div className="hero-gradient px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-18">
                <header className="flex flex-row justify-center md:h-96 items-center p-8">
                <h1 className="md:text-4xl lg:text-6xl font-semibold text-gray-50">
                Ace any
                <div className="inline-block bg-yellow-500 transform -rotate-3 px-2 rounded-md py-1">Interview</div>
                with us!
                </h1>
                </header>
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">Practise makes a man perfect!</h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10">
                        <div className="bg-white p-3 rounded shadow">
                         
                            <p className="text-lg font-normal text-gray-700">
                                We provide a platform for mock interviews, where you can practice your interview skills and get feedback from experienced professionals.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded shadow">
                            <p className="text-lg font-normal text-gray-700">
                                You can schedule an interview at a time that suits you, and choose from a variety of interview types and difficulty levels.
                            </p>
                        </div>
                        <div className="bg-white p-3 rounded shadow">
                            <p className="text-lg font-normal text-gray-700">
                                We also offer a resume review service, where our team of experts will provide constructive feedback on your resume and suggest improvements. 
                            </p>
                        </div>
                    </div>
                    <h2 className='text-white mt-3'>
                        Do you want to improve your interview skills?
                    </h2>

                    <div className="mt-5 flex flex-col sm:flex-row sm:justify-center sm:space-y-0">
                    <a href="/bookslot" className="inline-flex justify-center items-center px-7 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-900">
                        Book a Free slot!
                        <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                    </a>
                    <a href="/about" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ml-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
                        Learn more
                    </a>  
                </div>
                </div>

              
            </section>

        </div> */}
        </div>
    );
}

export default Home;