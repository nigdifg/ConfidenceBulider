import React, { useState } from 'react';



function Services() {

  return (
      <div>
    <div className="pt-20 bg-gray-800">
  <div className="header">
    <h1 className="text-4xl font-extrabold text-center text-black dark:text-white">We've got you <span className="text-tmk-blue">covered.</span></h1>
    <p className="w-full px-8 mx-auto my-4 font-light text-center text-black dark:text-white md:w-1/2 lg:w-1/3">Tailwind Master Kit offers rich set of features to help you get the most out of the components and markup. Our components are Production ready and are completely accessible.</p>
  </div>

  <div className="grid grid-cols-1 gap-8 lg:mx-20 mt-20 text-center md:grid-cols-2 lg:grid-cols-3">
    {/* <!-- First --> */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-green-400 to-blue-500 p-8">
        <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-blue-500" style={{zIndex: -10}}></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
          <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" />
          <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" />
        </svg>
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">Production Ready Code</h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">Every code snippet is optimized for production keeping in mind all the best practices.</p>
      </div>
    </div>
    {/* <!-- Second --> */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
        <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-red-500" style={{zIndex: -10}}></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
          <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" />
          <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" />
        </svg>
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">Light and Dark Themes</h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">Comes with out of the box support for light and dark themes that integrates seamlessly.</p>
      </div>
    </div>

    {/* <!-- Third --> */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8">
        <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-gray-700" style={{zIndex: -10}}></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
          <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" />
          <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" />
        </svg>
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">Complete Documentation</h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">We provide documentation for all our components and templates so that you don't face any issue.</p>
      </div>
    </div>

    {/* <!-- Fourth --> */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-red-400 to-yellow-500 p-8">
        <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-yellow-500" style={{zIndex: -10}}></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
          <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" />
          <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" />
        </svg>
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">Premium Support</h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">Get top-notch 1-year premium support from our team to help you out with any issues that you might face.</p>
      </div>
    </div>

    {/* <!-- Fifth --> */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-pink-500 via-red-400 to-red-500 p-8">
        <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-yellow-500" style={{zIndex: -10}}></div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
          <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" />
          <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" />
        </svg>
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">Community Access</h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">Get access to our exclusive Discord community where you can even request for custom components.</p>
      </div>
    </div>

    {/* <!-- Sixth --> */}
            <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
              <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-blue-500 to-indigo-600 p-8">
                <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-blue-500" style={{zIndex: -10}}></div>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white">
                  <path d="M9.95263 16.9123L8.59323 18.3608L2.03082 12.2016L8.18994 5.63922L9.64826 7.00791L4.85783 12.112L9.95212 16.8932L9.95263 16.9123Z" fill="currentColor" />
                  <path d="M14.0474 16.9123L15.4068 18.3608L21.9692 12.2016L15.8101 5.63922L14.3517 7.00791L19.1422 12.112L14.0479 16.8932L14.0474 16.9123Z" fill="currentColor" />
                </svg>
              </div>
              <div className="text-black text-box dark:text-white">
                <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">Javascript Friendly</h1>
                <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">Animations and transitions are integrated with plain Javascript and React, easy to use and ready to be deployed.</p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
  );
}

export default Services;