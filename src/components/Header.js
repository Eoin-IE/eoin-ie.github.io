import React, { useState } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/header.scss';
import headerLogo from '../assets/icons/logo-color.svg';
import emailIcon from '../assets/icons/sms.svg';
import bannerImage from '../assets/images/banner.svg';

// Corrected handleContactClick to accept 'navigate' as a parameter
export const handleContactClick = (navigate) => {
    navigate('/'); // Navigate to the home page
    setTimeout(() => {
        const element = document.getElementById('contact-us');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }, 100);
};

const Header = ({ page = false }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate(); // Initialize useNavigate inside the component

    return (
        <header className='header'>
            <div className='container mx-auto px-4 py-10'>
                <nav className="flex items-center justify-between sm:flex-wrap flex-nowrap">
                    <div className="">
                        <Link to="/" className="text-[#2791F4] text-lg font-normal flex gap-2 items-center">
                            <img
                                src={headerLogo}
                                className="md:block md:w-full w-[50%]"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    {/* buttons */}
                    <div className="block md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="flex items-center"
                        >
                            <svg
                                className={`fill-[#2791F4] h-3 w-3 ${isOpen ? "hidden" : "block"}`}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                            </svg>
                            <svg
                                className={`fill-[#2791F4] h-3 w-3 ${isOpen ? "block" : "hidden"}`}
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                            </svg>
                        </button>
                    </div>
                    <div
                        className={`w-full block flex-grow md:flex md:items-center md:w-auto ${isOpen ? "block w-full absolute z-50 top-16 bg-white left-0 p-4" : "hidden"}`}
                    >
                        <ul className="md:ml-auto flex md:flex-row flex-col m-0 p-0 list-none md:items-center items-start">
                            <li>
                                <Link
                                    to="/"
                                    className={`text-lg font-normal hover:font-semibold hover:text-[#2791F4] ${location.pathname === '/' ? 'font-semibold text-[#2791F4]' : 'text-[#666666]'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className='md:px-10 py-4'>
                                <Link
                                    to="/courses"
                                    className={`text-lg font-normal hover:font-semibold hover:text-[#2791F4] ${location.pathname === '/courses' ? 'font-semibold text-[#2791F4]' : 'text-[#666666]'
                                    }`}
                                    onClick={() => setIsOpen(false)}
                                >
                                    Courses
                                </Link>
                            </li>
                        </ul>
                        <button className="bg-[transparent] border border-[#2791F4] py-3 px-4 rounded-lg text-white">
                            {/* Use arrow function to call handleContactClick with 'navigate' */}
                            <button onClick={() => handleContactClick(navigate)} className="text-[#2791F4] text-lg font-normal flex gap-2 items-center">
                                <img src={emailIcon} className="w-6 h-6 object-contain" alt="Contact" />
                                Contact Me
                            </button>
                        </button>
                    </div>
                </nav>

                {page ? (
                    <div className='mt-20 grid grid-cols-1 lg:grid-cols-2 gap-7'>
                        <div className='flex flex-col justify-center py-6'>
                            <h1 className='text-[#222222] xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-medium leading-tight'>Commence Your</h1>
                            <h1 className='text-[#2791F4]  xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-medium leading-tight lg:py-4 py-2'>Bookkeeping & Payroll</h1>
                            <h1 className='text-[#222222]  xl:text-5xl lg:text-4xl md:text-4xl text-2xl font-medium leading-tight'>Journey</h1>
                            <p className='text-[#666666] font-medium text-lg m-0 pt-5 max-w-lg'>
                                Start your Bookkeeping & Payroll journey today. Gain valuable skills in a constantly in-demand field and secure a stable career with numerous opportunities.
                            </p>
                            <div className='flex flex-wrap gap-4 mt-6'>
                                <Link to="/courses">
                                    <button className="bg-white text-[#666666] font-medium text-lg py-3 px-7 rounded-xl">
                                        View Courses
                                    </button>
                                </Link>
                            </div>
                        </div>
                        <div className='flex lg:justify-end justify-center'>
                            <img src={bannerImage} className="w-3/4 object-contain" alt="Banner Image" width={460} height={460} />
                        </div>
                    </div>
                ) : (
                    <div className='my-20 max-w-[715px] mx-auto flex flex-col items-center text-center'>
                        <h1 className='text-[#222222] xl:text-[48px] lg:text-[36px] md:text-[36px] text-[24px] font-medium leading-relaxed sm:px-6'>
                            Master <span className='text-[#2791F4]'>Bookkeeping & Payroll</span> with Expert-Led Courses
                        </h1>
                        <p className='text-[#666666] font-medium text-lg m-0 pt-5'>
                            Gain essential bookkeeping and payroll skills through comprehensive manual and computerized courses, using industry-standard software like Sage Accounts and Sage Micropay.
                        </p>
                        <div className='flex flex-wrap gap-4 mt-6'>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header;
