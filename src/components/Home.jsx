import React from 'react';

function Home() {
    return (
        <div className="container mx-auto p-4">
            <section style={{backgroundImage: "url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')", backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}} className="bg-gray-700 bg-blend-multiply">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
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

{/*             
            <p className="mb-4">
                We provide a platform for mock interviews, where you can practice your interview skills and get feedback from experienced professionals.
            </p>
            <p className="mb-4">
                You can schedule an interview at a time that suits you, and choose from a variety of interview types and difficulty levels.
            </p>
            <p className="mb-4">
                We also offer a resume review service, where our team of experts will provide constructive feedback on your resume and suggest improvements.
            </p>
            <p className="mb-4">
                In addition, we provide career advice to help you navigate your job search and career development. Whether you're just starting out in your career or looking to make a change, we're here to help.
            </p>
            <p>
                Explore our website to learn more about our services and how we can help you prepare for your next job interview.
            </p> */}
        </div>
    );
}

export default Home;