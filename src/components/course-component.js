import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';

const ContentSection = () => {
    const [, setSelectedCourse] = useState('Manual & Computerised Accounts');
    const navigate = useNavigate();  // Call useNavigate here

    const handleCourseChange = (event) => {
        setSelectedCourse(event.target.value);
    };

    const handleContactClick = () => {
        navigate('/');  // Navigate to the home page
        setTimeout(() => {
            const element = document.getElementById('contact-us');
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    };

    const renderCourseContent = (course) => {
        if (course === 'Manual & Computerised Accounts') {
            return (
                <>
                    <h3 className='text-[#2791F4] md:text-[32px] text-2xl font-medium text-center mb-6'>
                        Manual & Computerised Accounts
                    </h3>
                    <h3 className='text-[#222222] md:text-[48px] text-[32px] font-semibold text-center mb-3'>
                        €550.00
                    </h3>
                    <h3 className='text-[#222222] md:text-[24px] text-[20px] font-semibold text-center mb-6'>
                        Per Person
                    </h3>
                    <p className='m-0 text-[#666666] font-medium text-lg text-center mb-6'>
                        Online group learning with comprehensive training.
                    </p>
                    <p className='mt-0 mb-2 text-[#666666] font-medium text-lg flex gap-3'>
                        <span className='text-[#222222] text-nowrap'>Start Date:</span>Online group learning with comprehensive training.
                    </p>
                    <p className='m-0 text-[#666666] font-medium text-lg flex gap-3'>
                        <span className='text-[#222222] text-nowrap'>Duration:</span>8 weeks, <br/> 2 hours per week.<br/> Fee: €495
                    </p>
                </>
            );
        } else if (course === 'Manual & Computerised Payroll') {
            return (
                <>
                    <h3 className='text-[#2791F4] md:text-[32px] text-2xl font-medium text-center mb-6'>
                        Manual & Computerised Payroll
                    </h3>
                    <h3 className='text-[#222222] md:text-[48px] text-[32px] font-semibold text-center mb-3'>
                        €450.00
                    </h3>
                    <h3 className='text-[#222222] md:text-[24px] text-[20px] font-semibold text-center mb-6'>
                        Per Person
                    </h3>
                    <p className='m-0 text-[#666666] font-medium text-lg text-center mb-6'>
                        Online group learning with comprehensive training.
                    </p>
                    <p className='mt-0 mb-2 text-[#666666] font-medium text-lg flex gap-3'>
                        <span className='text-[#222222] text-nowrap'>Start Date:</span>
                    </p>
                    <p className='m-0 text-[#666666] font-medium text-lg flex gap-3'>
                        <span className='text-[#222222] text-nowrap'>Duration:</span>7 weeks, 2 hours per week. <br /> Fee: €425
                    </p>
                </>
            );
        } else if (course === 'Quickpay Accounts') {
            return (
                <>
                    <h3 className='text-[#2791F4] md:text-[32px] text-2xl font-medium text-center mb-6'>
                        Quickpay Accounts
                    </h3>
                    <h3 className='text-[#222222] md:text-[48px] text-[32px] font-semibold text-center mb-3'>
                        Contact for Price
                    </h3>
                    <p className='m-0 text-[#666666] font-medium text-lg text-center mb-6'>
                        Flexible online sessions tailored to your schedule. Available Morning, Afternoon or Evening. Monday to Saturday. <br /> Sage Micropay, Thesaurus Payroll or Collsoft Payroll Available
                    </p>
                    <p className='mt-0 mb-2 text-[#666666] font-medium text-lg flex gap-3'>
                        <span className='text-[#222222] text-nowrap'>Schedule:</span>Mon - Sat, 8:00pm - 10:00pm
                    </p>
                </>
            );
        }
    };

    return (
        <div className='grid md:grid-cols-3 grid-cols-1 gap-6 mt-10'>
            {/* Course Box 1 */}
            <div className='bg-white rounded-xl p-6 shadow-lg flex flex-col'>
                <div className='flex-grow'>
                    <h3 className='text-[#2791F4] md:text-[32px] text-2xl font-medium text-center mb-6'>
                        Manual & Computerised Accounts
                    </h3>
                    <h3 className='text-[#222222] md:text-[48px] text-[32px] font-semibold text-center mb-3'>
                        €550.00
                    </h3>
                    <h3 className='text-[#222222] md:text-[24px] text-[20px] font-semibold text-center mb-6'>
                        Per Person
                    </h3>
                    <p className='m-0 text-[#666666] font-medium text-lg text-center mb-6'>
                        Online group learning with comprehensive training.
                    </p>
                    <p className='mt-0 mb-2 text-[#666666] font-medium text-lg flex gap-3'>
                        <span className='text-[#222222] text-nowrap'>Start Date: Tues 15/10/2024 </span>
                    </p>
                    <p className='m-0 text-[#666666] font-medium text-lg flex gap-3'>
                        <span className='text-[#222222] text-nowrap'>Duration:</span>12 weeks,<br/> 2 hours per week.<br/> Fee: €495
                    </p>
                </div>
                <div className='flex justify-center mt-auto'>
                    <button onClick={() => window.location.href='https://book.stripe.com/aEU4hV018b5K30kcMP'} type="button" className="bg-[#2791F4] text-white font-medium text-lg py-3 px-7 rounded-[50px] mb-6">
                        Book & Pay
                    </button>
                </div>
            </div>

            {/* Course Box 2 */}
            <div className='bg-white rounded-xl p-6 shadow-lg flex flex-col'>
                <div className='flex-grow'>
                    <h3 className='text-[#2791F4] md:text-[32px] text-2xl font-medium text-center mb-6'>
                        Manual & Computerised Payroll
                    </h3>
                    <h3 className='text-[#222222] md:text-[48px] text-[32px] font-semibold text-center mb-3'>
                        €425.00
                    </h3>
                    <h3 className='text-[#222222] md:text-[24px] text-[20px] font-semibold text-center mb-6'>
                        Per Person
                    </h3>
                    <p className='m-0 text-[#666666] font-medium text-lg text-center mb-6'>
                        Online group learning with comprehensive training.
                    </p>
                    <p className='mt-0 mb-2 text-[#666666] font-medium text-lg flex gap-3'>
                        <span className='text-[#222222] text-nowrap'>Start Date: Mon 14/10/2024</span>
                    </p>
                    <p className='m-0 text-[#666666] font-medium text-lg flex gap-3'>
                        <span className='text-[#222222] text-nowrap'>Duration:</span>8 weeks,<br/> 2 hours per week.<br/> Fee: €425
                    </p>
                </div>
                <div className='flex justify-center mt-auto'>
                    <button onClick={() => window.location.href='https://book.stripe.com/dR6aGj3dka1GasM4gi'} type="button" className="bg-[#2791F4] text-white font-medium text-lg py-3 px-7 rounded-[50px] mb-6">
                        Book & Pay
                    </button>
                </div>
            </div>

            {/* Course Box 3 */}
            <div className='bg-white rounded-xl p-6 shadow-lg flex flex-col'>
                <div className='flex-grow'>
                    <h3 className='text-[#2791F4] md:text-[32px] text-2xl font-medium text-center mb-6'>
                        Quickpay Accounts
                    </h3>
                    <h3 className='text-[#222222] md:text-[48px] text-[32px] font-semibold text-center mb-3'>
                        Contact for Price
                    </h3>
                    <p className='m-0 text-[#666666] font-medium text-lg text-center mb-6'>
                        Flexible online sessions tailored to your schedule. Available Morning, Afternoon or Evening. Monday to Saturday. <br /> Sage Micropay, Thesaurus Payroll or Collsoft Payroll Available
                    </p>
                    <p className='mt-0 mb-2 text-[#666666] font-medium text-lg flex gap-3'>
                        <span className='text-[#222222] text-nowrap'>Schedule:</span>Mon - Sat,<br/> Morning To Evening
                    </p>
                </div>
                <div className='flex justify-center mt-auto'>
                    <button onClick={handleContactClick} type="button" className="bg-[#2791F4] text-white font-medium text-lg py-3 px-7 rounded-[50px] mb-6">
                        Contact Me
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContentSection;
