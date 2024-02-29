import React from 'react';



function Services() {

  return (
      <div>
    <div className="pt-20 bg-gray-800">
  <div className="header">
    <h1 className="text-4xl font-extrabold text-center text-black dark:text-white">We've got you <span className="text-tmk-blue">covered.</span></h1>
    <p className="w-full px-8 mx-auto my-4 font-light text-center text-black dark:text-white md:w-1/2 lg:w-1/3">
      We provide you the best services to get succeed in your interview and how to crack it with ease by practising our strategy and roadmap.  
    </p>
  </div>

  <div className="grid grid-cols-1 gap-8 lg:mx-20 mt-20 text-center md:grid-cols-2 lg:grid-cols-3">
    {/* <!-- First --> */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-green-400 to-blue-500 p-8">
        <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-blue-500" style={{zIndex: -10}}></div>
        <div class="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                        <svg class="stroke-blue-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                                stroke="" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                        </svg>
                    </div>
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">Resume Review</h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
          Get your resume reviewed by experts and get personalized feedback to help you land your dream job.  
        </p>
      </div>
    </div>
    {/* <!-- Second --> */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-8">
        <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-red-500" style={{zIndex: -10}}></div>
        <div class="bg-white rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
                          <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M10 14.7875L13.0959 17.8834C13.3399 18.1274 13.7353 18.1275 13.9794 17.8838L20.625 11.25M15 27.5C8.09644 27.5 2.5 21.9036 2.5 15C2.5 8.09644 8.09644 2.5 15 2.5C21.9036 2.5 27.5 8.09644 27.5 15C27.5 21.9036 21.9036 27.5 15 27.5Z" stroke="#4F46E5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                              </svg>
                              
          </div>
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">Project Review</h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
        For freshers Project plays an important role in getting a job. Get your project reviewed by experts and get personalized feedback to your projects.  
        </p>
      </div>
    </div>

    {/* <!-- Third --> */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-gray-700 via-gray-900 to-black p-8">
        <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-gray-700" style={{zIndex: -10}}></div>
        <div class="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                        <svg class="stroke-pink-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                                stroke="" stroke-width="2"></path>
                            <path
                                d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                                stroke="" stroke-width="2"></path>
                            <path
                                d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                                stroke="" stroke-width="2"></path>
                            <path
                                d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                                stroke="" stroke-width="2"></path>
                        </svg>
                    </div>
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">Tech round Strategy</h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">We provide best roadmap and strategy to practice for tech round and how to crack it with ease.</p>
      
      </div>
    </div>

    {/* <!-- Fourth --> */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-red-400 to-yellow-500 p-8">
        <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-yellow-500" style={{zIndex: -10}}></div>
        <div class="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                        <svg class="stroke-teal-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z"
                                stroke="" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                    </div>
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">1 to 1 Mentorship</h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">Get one to one mentorship form experts who are working in top organizations. </p>
      </div>
    </div>

    {/* <!-- Fifth --> */}
    <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
      <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-pink-500 via-red-400 to-red-500 p-8">
        <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-yellow-500" style={{zIndex: -10}}></div>
      
        <div class="bg-blue rounded-full flex justify-center items-center mb-5 w-14 h-14 ">
        <svg width="10" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 9L3.58579 6.41421C4.25245 5.74755 4.58579 5.41421 4.58579 5C4.58579 4.58579 4.25245 4.25245 3.58579 3.58579L1 1" stroke="white" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"></path>
            </svg>             
          </div>
      </div>
      <div className="text-black text-box dark:text-white">
        <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">DSA Prep</h1>
        <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">Get access to our exclusive community where you can prepare for DSA and participate in contest and involve in many tech events.</p>
      </div>
    </div>

    {/* <!-- Sixth --> */}
            <div className="p-10 transition duration-200 rounded-md feature-box hover:shadow-lg custom-cursor">
              <div className="relative icon inline-block rounded-lg z-10 transition duration-200 transform hover:-rotate-6 bg-gradient-to-r from-blue-500 to-indigo-600 p-8">
                <div className="absolute inset-0 transform rotate-6 opacity-30 rounded-lg bg-blue-500" style={{zIndex: -10}}></div>
                <div class="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                        <svg class="stroke-orange-600 transition-all duration-500 group-hover:stroke-white" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                                stroke="" stroke-width="2" stroke-linecap="round"></path>
                        </svg>
                    </div>
              </div>
              <div className="text-black text-box dark:text-white">
                <h1 className="mt-2 text-xl font-semibold text-gray-700 dark:text-white">Secret key to get Succeed</h1>
                <p className="w-full mx-auto mt-2 font-light text-gray-700 text-md md:w-3/4 dark:text-gray-300">
                  We provide you the secret key to get succeed in your interview and how to crack it with ease by practising our strategy and roadmap.
                  </p>
              </div>
            </div>
          </div>
        </div>
      
      </div>
  );
}

export default Services;