import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assest/logo.png'
function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const isActive = (path) => location.pathname === path;

    return (
        <nav className="relative bg-white shadow dark:bg-gray-800">
            <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                <div className="flex items-center justify-between">
                    <a href="#">
                        <img className="w-auto h-6 sm:h-7" src={logo} alt="" />
                    </a>

                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} type="button" className="text-gray-500  hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                            {!isOpen ? (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center`}>
                    <div className="flex flex-col md:flex-row md:mx-6">
                        <Link to="/" className={`${isActive('/') ? 'text-blue-400' : 'text-gray-200'} my-2 transition-colors duration-300 transform  hover:text-blue-500 text-lg dark:hover:text-blue-400 md:mx-4 md:my-0`}
                        aria-current={isActive('/') ? 'page' : undefined}
                        > Home </Link>
                        <Link to="/about" className={`${isActive('/about') ? 'text-blue-400' : 'text-gray-200'} my-2 transition-colors duration-300 transform  hover:text-blue-500 text-lg dark:hover:text-blue-400 md:mx-4 md:my-0`}
                        aria-current={isActive('/about') ? 'page' : undefined}
                        > About </Link>
                        <Link to="/services" className={`${isActive('/services') ? 'text-blue-400' : 'text-gray-200'} my-2 transition-colors duration-300 transform  hover:text-blue-500 text-lg dark:hover:text-blue-400 md:mx-4 md:my-0`}
                        aria-current={isActive('/services') ? 'page' : undefined}
                        > Services </Link>
                        <Link to="/contact" className={`${isActive('/contact') ? 'text-blue-400' : 'text-gray-200'} my-2 transition-colors duration-300 transform  hover:text-blue-500 text-lg dark:hover:text-blue-400 md:mx-4 md:my-0`}
                        aria-current={isActive('/contact') ? 'page' : undefined}
                        > Contact </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;