import React from 'react';

import ayush from '../assest/ayush.jpeg';
import mayank from '../assest/mayank.jpeg';
import parth from '../assest/parth.jpeg';
import harsh from '../assest/harsh.jpeg';

function About() {
  return (
    <div>
      <section class="py-24 ">
        <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="mb-16 ">
                <span class=" text-blue-500 text-xl text-center block mb-2">Why Us?</span>
                <h2 class="text-4xl text-center font-bold text-gray-300 ">Let's see what peoples says!</h2>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-8 max-w-lg mx-auto md:max-w-2xl lg:max-w-full">
                <div
                    class="group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                    <div class="">
                        <div class="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span class="text-base font-semibold text-blue-600">4.9</span>
                        </div>
                        <p
                            class="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800">
                      
                           Mock Interview with Anurag was a great experience. He helped me to understand the interview process and how to prepare for it. He also gave me some tips on how to improve my resume. I would highly recommend him to anyone who is looking for a job.

                        </p>
                    </div>
                    <div class="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                        <img class="h-10 w-10" src={ayush} alt="Ayush image" />
                        <div class="block">
                            <h5 class="text-gray-900 font-medium transition-all duration-500  mb-1">Ayush Raj</h5>
                            <span class="text-sm leading-4 text-gray-500">SDE at Atlansian </span>
                        </div>
                    </div>
                </div>
                <div
                    class="group bg-white border border-solid border-gray-300 flex justify-between flex-col rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                    <div class="">
                        <div class="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span class="text-base font-semibold text-indigo-600">4.9</span>
                        </div>
                        <p
                            class="text-base text-gray-600 leading-6  transition-all duration-500 pb-8 group-hover:text-gray-800">
                            Special thanks to Anurag for helping me to prepare for my interview. He gave me a lot of useful tips and advice. I would highly recommend him to anyone who is looking for a job.

                        </p>
                    </div>
                    <div class="flex items-center gap-5 pt-5 border-t border-solid border-gray-200">
                        <img class="h-10 w-10" src={mayank} alt="mayank image" />
                        <div class="block">
                            <h5 class="text-gray-900 font-medium transition-all duration-500  mb-1">Mayank Jain</h5>
                            <span class="text-sm leading-4 text-gray-500">SDE at GE Healthcare</span>
                        </div>
                    </div>
                </div>
                <div
                    class=" flex justify-between flex-col lg:w-full group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                    <div class="">
                        <div class="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span class="text-base font-semibold text-indigo-600">4.9</span>
                        </div>
                        <p
                            class="text-base text-gray-600 leading-6  transition-all duration-500  pb-8 group-hover:text-gray-800">
                              During my interview preparation, we take mock of eachother and it helped me to understand the interview process and how to prepare for it , I would highly recommend him to anyone who is looking for a job.
                        </p>
                    </div>
                    <div class="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                        <img class="h-10 w-10" src={harsh}alt="harsh image" />
                        <div class="block">
                            <h5 class="text-gray-900 font-medium transition-all duration-500  mb-1">Harsh Deep Verma</h5>
                            <span class="text-sm leading-4 text-gray-500">SDE at BNY Mellon</span>
                        </div>
                    </div>
                </div>
                <div
                    class=" flex justify-between flex-col lg:w-full group bg-white border border-solid border-gray-300 rounded-xl p-6 transition-all duration-500  w-full mx-auto hover:border-indigo-600 hover:shadow-sm">
                    <div class="">
                        <div class="flex items-center mb-7 gap-2 text-amber-500 transition-all duration-500  ">
                            <svg class="w-5 h-5" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M8.10326 1.31699C8.47008 0.57374 9.52992 0.57374 9.89674 1.31699L11.7063 4.98347C11.8519 5.27862 12.1335 5.48319 12.4592 5.53051L16.5054 6.11846C17.3256 6.23765 17.6531 7.24562 17.0596 7.82416L14.1318 10.6781C13.8961 10.9079 13.7885 11.2389 13.8442 11.5632L14.5353 15.5931C14.6754 16.41 13.818 17.033 13.0844 16.6473L9.46534 14.7446C9.17402 14.5915 8.82598 14.5915 8.53466 14.7446L4.91562 16.6473C4.18199 17.033 3.32456 16.41 3.46467 15.5931L4.15585 11.5632C4.21148 11.2389 4.10393 10.9079 3.86825 10.6781L0.940384 7.82416C0.346867 7.24562 0.674378 6.23765 1.4946 6.11846L5.54081 5.53051C5.86652 5.48319 6.14808 5.27862 6.29374 4.98347L8.10326 1.31699Z"
                                    fill="currentColor" />
                            </svg>
                            <span class="text-base font-semibold text-indigo-600">4.9</span>
                        </div>
                        <p
                            class="text-base text-gray-600 leading-6  transition-all duration-500  pb-8 group-hover:text-gray-800">
                              If you are preparing for an interview ,confidenece is the key and Anurag helped me to build that confidence by practicing mock interviews with me. I would highly recommend him to anyone who is looking for a job.
                        </p>
                    </div>
                    <div class="flex items-center gap-5 border-t border-solid border-gray-200 pt-5">
                        <img class="h-10 w-10" src={parth}alt="parth image" />
                        <div class="block">
                            <h5 class="text-gray-900 font-medium transition-all duration-500  mb-1">Parth Maheshwari</h5>
                            <span class="text-sm leading-4 text-gray-500">SDE at Chubb</span>
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