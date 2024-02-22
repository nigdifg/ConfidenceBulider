import React, { useEffect, useState } from 'react';

export default function Bookslot() {
    const [showForm, setShowForm] = useState(false);

    useEffect(() => {
        if (showForm) {
            const script = document.createElement('script');
            script.src = 'https://forms.app/static/embed.js';
            script.async = true;
            script.defer = true;
            script.onload = () => {
                new window.formsapp('65d6e825d1f4ea2e173c2df8', 'standard', {
                    width: '100vw',
                    height: '600px',
                });
            };
            document.body.appendChild(script);

            return () => {
                document.body.removeChild(script);
            };
        }
    }, [showForm]);

    return (
        <div>
            <div className="container mx-auto p-4">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16">
                    <div className="bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-8 md:p-12 mb-8">
                        <h1 className="text-gray-900 dark:text-white text-3xl md:text-5xl font-extrabold mb-2">Book a slot for your interview</h1>
                        <p className="text-lg font-normal text-gray-500 dark:text-gray-400 mb-6">
                            Choose a time that suits you, and select from a variety of interview types and difficulty levels.
                            Our experienced professionals will conduct the interview and provide feedback to help you improve your interview skills.
                            Schedule your interview today and take the next step in your career development.
                        </p>
                        <button 
                        style={{
                            backgroundColor: 'blue', 
                            color: 'white', 
                            padding: '10px 20px', 
                            border: 'none', 
                            cursor: 'pointer',
                            transition: 'background-color 0.3s ease'
                        }} 
                        onClick={() => setShowForm(true)}
                        onMouseOver={(e) => e.currentTarget.style.backgroundColor = 'darkblue'}
                        onMouseOut={(e) => e.currentTarget.style.backgroundColor = 'blue'}
                        >
                        book
                        </button>
                        {showForm && <div formsappId="65d6e825d1f4ea2e173c2df8"></div>}
                    </div>
                </div>
            </div>
        </div>
    );
}