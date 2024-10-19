import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import '../styles/home.scss'
import assistantIcon from '../assets/icons/assistance.svg'
import creditIcon from '../assets/icons/credit.svg'
import payrollIcon from '../assets/icons/payroll.svg'
import securityIcon from '../assets/icons/security.svg'
import courseIcon from '../assets/icons/course.svg'
import instructor from '../assets/images/instructor.webp'
import phoneIcon from '../assets/icons/phonecall.svg'
import emailIcon from '../assets/icons/sms.svg'
import locationIcon from '../assets/icons/location.svg'
import linkedinIcon from '../assets/icons/LinkedinLogo.svg'
import TestimonialSlider from '../components/testimonials';
import CourseContent from "../components/course-component";



const Home = () => {
    return (
        <div>
            <Header page={true} />
            <main>
                {/* Career Oppurtunities */}
                <div className='container mx-auto px-4 my-24'>
                    <h1 className='text-[#222222] md:text-[40px] sm:text-3xl text-2xl font-medium text-center mb-5'>Career
                        Opportunities</h1>
                    <p className='text-[#666666] sm:text-lg text-base font-medium text-center lg:px-56 md:px-6 px-0'>Skilled
                        bookkeepers and payroll administrators are in constant demand across various industries. Equip
                        yourself with both technical and interpersonal skills to succeed in roles such as</p>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10 mt-10'>
                        <div className='p-6 bg-white rounded-xl' style={{boxShadow: '4px 8px 24px 0px #0000000D'}}>
                            <img src={assistantIcon} className="" alt="Assistant"/>
                            <h3 className='text-[#222222] font-medium text-2xl my-3'>
                                Finance Assistant
                            </h3>
                            <p className='m-0 text-[#666666] font-medium text-lg'>
                                Finance Assistant roles offer strong job security, diverse growth opportunities, and
                                essential skills in accounting and administration.
                            </p>
                        </div>
                        <div className='p-6 bg-white rounded-xl' style={{boxShadow: '4px 8px 24px 0px #0000000D'}}>
                            <img src={creditIcon} className="" alt="Credit Controller"/>
                            <h3 className='text-[#222222] font-medium text-2xl my-3'>
                                Credit Controller
                            </h3>
                            <p className='m-0 text-[#666666] font-medium text-lg'>
                                Credit Controllers manage company debts, ensure payments are timely, and assess customer
                                credit risks.
                            </p>
                        </div>
                        <div className='p-6 bg-white rounded-xl' style={{boxShadow: '4px 8px 24px 0px #0000000D'}}>
                            <img src={payrollIcon} className="" alt=" Payroll Coordinator"/>
                            <h3 className='text-[#222222] font-medium text-2xl my-3'>
                                Payroll Coordinator
                            </h3>
                            <p className='m-0 text-[#666666] font-medium text-lg'>
                                Payroll Coordinators oversee employee payments, ensure accuracy, maintain compliance,
                                and handle payroll system.
                            </p>
                        </div>
                    </div>
                </div>
                {/* Job Security  */}
                <div className='bg-[#2791F4]'>
                    <div className='container mx-auto px-4 py-20 flex flex-col items-center'>
                        <img src={securityIcon} className="w-[176px] h-[156px] object-contain" alt="Assistant"/>
                        <h3 className='text-white font-medium md:text-[40px] text-[30px] my-5 text-center'>
                            Job Security
                        </h3>
                        <p className='m-0 text-white font-medium text-lg text-center'>
                            Credit Controllers manage company debts, ensure payments are timely, and assess customer
                            credit risks.
                        </p>
                    </div>
                </div>
                {/* Courses Section */}
                <div className='learning-options py-24'>
                    <div className='max-w-[1040px] mx-auto px-4'>
                        <h1 className='text-white md:text-[40px] sm:text-3xl text-2xl font-medium text-center mb-5'>Career
                            Oppurtunities</h1>
                        <p className='text-white sm:text-lg text-base font-medium text-center'>
                            Flexible Online Learning Options to Suit Your Schedule and Career Goals
                        </p>
                        <CourseContent/>
                    </div>
                </div>
                {/* Testimonials  */}
                <TestimonialSlider/>
                {/* About Your instructor */}
                <div className='container mx-auto px-4 my-24'>
                    <h1 className='text-[#222222] md:text-[40px] sm:text-3xl text-2xl font-medium text-center mb-5'>About
                        Your instructor</h1>
                    <p className='text-[#666666] sm:text-lg text-base font-medium text-center lg:px-56 md:px-6 px-0'>
                        Contact me if you have any queries
                    </p>
                    <div className='grid md:grid-cols-2 grid-cols-1 xl:gap-20 lg:gap-12 md:gap-7 gap-5 mt-10'>
                        <div className='flex justify-center items-center w-full h-full'>
                            <img
                                src={instructor}
                                className="w-auto max-w-xs h-auto object-cover"
                                alt="Photo Of Kathy The Instructor"
                            />
                        </div>
                        <div>
                            <p className='m-0 mb-10 text-[#666666] font-medium text-lg '>
                                Kathy McHugh, UCD Graduate Master of Education and Finance & Accounting Professional,
                                has over 25 years of experience working with diverse industries including haulage,
                                manufacturing, hospitality, and more. A registered teacher with over 22 years of
                                experience, Kathy delivers online lectures in bookkeeping and payroll with UCD
                                Professional Academy.
                            </p>
                            <p className='mb-6 text-[#222] font-medium text-lg p-6 bg-white rounded-xl flex max-w-[420px] items-center gap-6'
                               style={{boxShadow: '4px 8px 24px 0px #0000000D'}}>
                                <img src={phoneIcon} className="w-[28px] h-[28px]" alt="Phone Number"/>
                                <a href="tel:+353868284168"><span>086 828 4168</span></a>
                            </p>
                            <p className='mb-6 text-[#222] font-medium text-lg p-6 bg-white rounded-xl flex max-w-[420px] items-center gap-6'
                               style={{boxShadow: '4px 8px 24px 0px #0000000D'}}>
                                <img src={emailIcon} className="w-[28px] h-[28px]" alt="Email Address"/>
                                <a href="mailto:donegalbusiness2021@gmail.com"><span>donegalbusiness2021@gmail.com</span></a>
                            </p>
                            <p className='mb-6 text-[#222] font-medium text-lg p-6 bg-white rounded-xl flex max-w-[420px] items-center gap-6'
                               style={{boxShadow: '4px 8px 24px 0px #0000000D'}}>
                                <img src={locationIcon} className="w-[28px] h-[28px]" alt="Address"/>
                                <span>Dunkineely, Co Donegal</span>
                            </p>
                            <p className='mb-6 text-[#222] font-medium text-lg p-6 bg-white rounded-xl flex max-w-[420px] items-center gap-6'
                               style={{boxShadow: '4px 8px 24px 0px #0000000D'}}>
                                <img src={linkedinIcon} className="w-[28px] h-[28px]" alt="LinkedIn Profile"/>
                                <a href={"https://www.linkedin.com/in/kathy-mchugh-65283921/"}><span>LinkedIn Profile</span></a>
                            </p>
                        </div>
                    </div>
                </div>
                {/* Contact Form   */}
                <div className='container mx-auto px-4 my-24' id="contact-us">
                    <h1 className='text-[#222222] md:text-[40px] sm:text-3xl text-2xl font-medium text-center mb-5'>
                        Contact me
                    </h1>
                    <p className='text-[#666666] sm:text-lg text-base font-medium text-center'>
                        Contact me if you have any queries
                    </p>
                    <div
                        className='max-w-xl mx-auto mt-10 lg:py-12 md:py-10 sm:py-7 py-4 lg:px-10 md:px-8 sm:px-6 px-3 bg-white rounded-xl'
                        style={{boxShadow: '4px 8px 24px 0px #0000000D'}}>
                        <form action="https://api.web3forms.com/submit" method="POST">
                            <input type="hidden" name="apikey" value="acbdc8b1-c610-40b1-bdba-f07b49ec6767"/>
                            <div>
                                <input
                                    className="border-[1.5px] py-4 px-6 border-[#DDDDDD] rounded-[5px] w-full text-[#666666] text-base font-normal focus:outline-none focus:shadow-outline mb-5"
                                    id="name" name="name" type="text" placeholder="Name" required/>
                            </div>
                            <div>
                                <input
                                    className="border-[1.5px] py-4 px-6 border-[#DDDDDD] rounded-[5px] w-full text-[#666666] text-base font-normal focus:outline-none focus:shadow-outline mb-5"
                                    id="email" name="email" type="email" placeholder="Email" required/>
                            </div>
                            <div>
                                <input
                                    className="border-[1.5px] py-4 px-6 border-[#DDDDDD] rounded-[5px] w-full text-[#666666] text-base font-normal focus:outline-none focus:shadow-outline mb-5"
                                    id="telephone" name="telephone" type="tel" placeholder="Telephone"/>
                            </div>
                            <div>
        <textarea
            className="ma-h-[100px] w-full resize-none border-[1.5px] py-4 px-6 border-[#DDDDDD] rounded-[5px] text-[#666666] text-base font-normal focus:outline-none focus:shadow-outline mb-5"
            id="message" name="message" placeholder="Message" required></textarea>
                            </div>
                            <button type="submit"
                                    className="bg-[#2791F4] text-white font-medium text-lg py-3 px-7 rounded-xl mt-12">
                                Submit
                            </button>
                        </form>
                    </div>
                </div>

            </main>
            <Footer/>
        </div>
    );
};

export default Home;
