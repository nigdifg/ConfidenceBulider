import React from 'react';

import ayush from '../assest/ayush.jpeg';
import mayank from '../assest/mayank.jpeg';
import parth from '../assest/parth.jpeg';
import harsh from '../assest/harsh.jpeg';
import mock from '../assest/mock.jpg';
function About() {
  return (
    <div>
      <section className="py-10 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="mb-14 text-center">
                  <h2 className="text-4xl text-center font-bold text-blue-200 leading-[3.25rem] mb-6 max-w-max lg:max-w-3xl lg:mx-auto">
                      We are here to help you to your dream job!

                  </h2>
                  <p className="text-base font-normal text-blue-100 lg:max-w-2xl lg:mx-auto mb-8"> Practice makes a man perfect! </p>  
                  <div className="flex flex-col justify-center md:flex-row gap-5 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">   
                      <a href="/bookslot"  className="cursor-pointer bg-blue-600 py-3 px-6 rounded-full flex items-center justify-center text-sm font-semibold text-white transition-all duration-500 focus:outline-none hover:bg-indigo-700">
                          Get started
                      </a>
                      <a href="/services"  className="cursor-pointer bg-indigo-50 py-3 px-6 rounded-full flex items-center justify-center  text-sm font-semibold text-indigo-600 transition-all duration-500 focus:outline-none hover:bg-indigo-100">
                          Learn more
                      </a>
                  </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
                  <div className="relative w-full h-auto md:col-span-2">
                      <div className="bg-gray-800 rounded-2xl flex  justify-between flex-row flex-wrap">
                          <div className="p-5  xl:p-8 w-full md:w-1/2 ">
                              <div className="block">
                                  <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M15 12.5V18.75M18.75 2.5L11.25 2.5M15 28.75C8.7868 28.75 3.75 23.7132 3.75 17.5C3.75 11.2868 8.7868 6.25 15 6.25C21.2132 6.25 26.25 11.2868 26.25 17.5C26.25 23.7132 21.2132 28.75 15 28.75Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>                                    
                              </div>
                              <h3 className="text-lg font-bold xl:text-xl text-white py-5 w-full xl:w-64">
                                  Schedule a mock interview at your flexible time!
                              </h3>
                              <p className="text-xs font-normal text-gray-300 w-full mb-8 xl:w-64">Experience personalized mentorship from industry professionals for resume refinement and interview preparation. Elevate your chances of success with tailored guidance tailored to your unique career goals.</p>
                              <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                                  View More
                                  <svg width="8" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                      <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                      </svg>
                                      
                              </button>
                          </div>
                          <div className="relative hidden h-auto md:w-1/2 md:block">
                              <img src={mock} alt="Header tailwind Section" className="h-full object-cover ml-auto"/>
                          </div>
                      </div>
                  </div>
                  <div className="relative w-full h-auto">
                      <div className="bg-blue-500 rounded-2xl p-5  xl:p-8 h-full">
                          <div className="block">
                              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M24.6429 11.4286C24.6429 14.3872 20.2457 16.7857 14.8214 16.7857C9.3972 16.7857 5 14.3872 5 11.4286M24.6429 16.7857C24.6429 19.7444 20.2457 22.1429 14.8214 22.1429C9.3972 22.1429 5 19.7444 5 16.7857M24.6429 22.1429C24.6429 25.1015 20.2457 27.5 14.8214 27.5C9.3972 27.5 5 25.1015 5 22.1429M24.6429 6.96429C24.6429 9.42984 20.2457 11.4286 14.8214 11.4286C9.3972 11.4286 5 9.42984 5 6.96429C5 4.49873 9.3972 2.5 14.8214 2.5C20.2457 2.5 24.6429 4.49873 24.6429 6.96429Z" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                                  </svg>                                
                          </div>
                          <h3 className="py-5 text-white text-lg font-bold xl:text-xl">One to one mentorship from professional </h3>
                          <p className="text-xs font-normal text-white mb-8"> We as a team will motivate and guide you with roadmap to land at your first dream job! </p>
                          <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                              View More
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                  
                          </button>
                      </div>
                  </div>
                  <div className="relative w-full h-auto">
                      <div className="bg-blue-500 rounded-2xl p-5 xl:p-8 h-full">
                          <div className="block">
                              <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M26.7301 15.661C26.7301 22.1995 21.306 27.5 14.6151 27.5C7.9241 27.5 2.5 22.1995 2.5 15.661C2.5 9.1225 7.9241 3.822 14.6151 3.822M18.1313 10.1507L18.1313 4.85383C18.1313 3.22503 19.6455 2.00299 21.1519 2.70013C23.7608 3.90751 26.6177 6.25557 27.456 10.2563C27.7542 11.6798 26.4931 12.8563 25.0064 12.8368L20.7873 12.7814C19.3147 12.762 18.1313 11.5899 18.1313 10.1507Z" stroke="white" stroke-width="2" stroke-linecap="round"></path>
                                  </svg>
                                                                 
                          </div>
                          <h3 className="py-5 text-white text-lg font-bold xl:text-xl">Develop confidenece to crack your interviews</h3>
                          <p className="text-xs font-normal text-white mb-8"> With our effective strategy , we guide you to become expert in cracking any interviews!   </p>
                          <button className="py-2 px-5 border border-solid border-gray-300 rounded-full gap-2 text-xs text-white font-semibold flex items-center justify-between transition-all duration-500 hover:bg-white/5">
                              View More
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
                                  </svg>
                                  
                          </button>
                      </div>
                  </div>
              
              </div>
        </div>
    </section>
                                            

      <section className="py-10 ">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mb-16 ">
                <span className="bg-blue-600 inline-block transform -rotate-3 px-2 rounded-md py-1  text-white text-4xl text-center  mb-2">Why Us?</span>
                <h2 className="text-4xl text-center font-bold text-gray-300 ">Let's see what peoples says!</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
                <div
                    className="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                    <div className="">
                        <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span className="text-base font-semibold text-blue-600">4.9</span>
                        </div>
                        <p
                            className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800">
                      
                           Mock Interview with Anurag was a great experience. He helped me to understand the interview process and how to prepare for it. He also gave me some tips on how to improve my resume. I would highly recommend him to anyone who is looking for a job.

                        </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                        <img className="h-10 w-10" src={ayush} alt="Ayush image" />
                        <div className="block">
                            <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Ayush Raj</h5>
                            <span className="text-sm leading-4 text-gray-500">SDE at Atlasian </span>
                        </div>
                    </div>
                </div>
                <div
                    className="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                    <div className="">
                        <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span className="text-base font-semibold text-indigo-600">4.9</span>
                        </div>
                        <p
                            className="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800">
                            Special thanks to Anurag for helping me to prepare for my interview. He gave me a lot of useful tips and advice. I would highly recommend him to anyone who is looking for a job.

                        </p>
                    </div>
                    <div className="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                        <img className="h-10 w-10" src={mayank} alt="mayank image" />
                        <div className="block">
                            <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Mayank Jain</h5>
                            <span className="text-sm leading-4 text-gray-500">SDE at GE Healthcare</span>
                        </div>
                    </div>
                </div>
                <div
                    className=" flex justify-between flex-col lg:w-full group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                    <div className="">
                        <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span className="text-base font-semibold text-indigo-600">4.9</span>
                        </div>
                        <p
                            className="text-base text-gray-600 leading-6  transition-all duration-500  pb-8 group-hover:text-gray-800">
                              During my interview preparation, we take mock of eachother and it helped me to understand the interview process and how to prepare for it , I would highly recommend him to anyone who is looking for a job.
                        </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                        <img className="h-10 w-10" src={harsh}alt="harsh image" />
                        <div className="block">
                            <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Harsh Deep Verma</h5>
                            <span className="text-sm leading-4 text-gray-500">SDE at BNY Mellon</span>
                        </div>
                    </div>
                </div>
                <div
                    className=" flex justify-between flex-col lg:w-full group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                    <div className="">
                        <div className="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg className="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span className="text-base font-semibold text-indigo-600">4.9</span>
                        </div>
                        <p
                            className="text-base text-gray-600 leading-6  transition-all duration-500  pb-8 group-hover:text-gray-800">
                              If you are preparing for an interview ,confidenece is the key and Anurag helped me to build that confidence by practicing mock interviews with me. I would highly recommend him to anyone who is looking for a job.
                        </p>
                    </div>
                    <div className="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                        <img className="h-10 w-10" src={parth}alt="parth image" />
                        <div className="block">
                            <h5 className="text-gray-900 font-medium transition-all duration-500  mb-1">Parth Maheshwari</h5>
                            <span className="text-sm leading-4 text-gray-500">SDE at Chubb</span>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>
      </section>
                                            
    </div>
  )
}

export default About