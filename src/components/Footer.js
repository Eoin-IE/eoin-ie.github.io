import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import '../styles/footer.scss';
import footerLogo from '../assets/icons/logo-light.svg';

const Footer = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleContactClick = () => {
        navigate('/'); // Navigate to the home page
        setTimeout(() => {
            const element = document.getElementById('contact-us');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100); // Timeout to ensure navigation is completed
    };

    return (
        <footer className='py-[100px] bg-[#215991]'>
            <div className='container mx-auto px-4'>
                <div className='footer-top flex flex-wrap pb-8 gap-5'>
                    <div className='md:flex-grow flex-auto md:w-auto w-full pb-5'>
                        <a href="/" rel="noopener noreferrer">
                            <img src={footerLogo} alt="Footer Logo" />
                        </a>
                    </div>
                    <div className='lg:w-[200px] md:w-[20%] sm:w-[48%] w-full'>
                        <h4 className='font-normal text-lg mb-4 text-white'>Pages</h4>
                        <ul className='list-none m-0 p-0'>
                            <li>
                                <a className='text-sm leading-8 text-white font-normal hover:underline' href="/" rel="noopener noreferrer">Home</a>
                            </li>
                            <li>
                                <a className='text-sm leading-8 text-white font-normal hover:underline' href="/courses" rel="noopener noreferrer">Courses</a>
                            </li>
                        </ul>
                    </div>
                    <div className='lg:w-[300px] md:w-[40%] sm:w-[48%] w-full'>
                        <h4 className='font-normal text-lg mb-4 text-white'>Contact Me</h4>
                        <ul className='list-none m-0 p-0'>
                            <li className='text-white font-normal text-sm flex items-center gap-2 mb-4'>
                                <span className='text-[#bccdde]'>Address:</span> Dunkineely, Co Donegal
                            </li>
                            <li className='text-white font-normal text-sm flex items-center gap-2 mb-4'>
                                <span className='text-[#bccdde]'>Phone No:</span><a href="tel:+0868284168">086 828 4168</a>
                            </li>
                            <li className='text-white font-normal text-sm flex items-center gap-2'>
                                <span className='text-[#bccdde]'>Email:</span><a className='text-wrap break-all' href="mailto:donegalbusiness2021@gmail.com">donegalbusiness2021@gmail.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='footer-bottom pt-7 border-t border-white flex flex-wrap items-center justify-between gap-4'>
                    <a href="https://setantahosting.com" rel="noopener noreferrer"><p className='font-normal text-sm underline text-white m-0'>Built By Setanta Hosting</p></a>
                    <p className='font-normal text-sm text-white m-0'>&copy; 2024 Kathy McHugh | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
