import React from 'react'

function About() {
  return (
    <div>
      <div className="flex flex-col justify-center items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 p-6">
        <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src="https://upscpathshala.com/content/wp-content/uploads/2020/11/What-is-a-Mock-Interview-in-UPSC.jpg" alt=""/>
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">Mock Interview Platform:</h4>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-center">
          Gain valuable insights into your interview performance with our comprehensive mock interview platform. Receive feedback from seasoned professionals to refine your skills and enhance your confidence.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About