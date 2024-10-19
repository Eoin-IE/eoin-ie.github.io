import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import courseIcon from '../assets/icons/course.svg'
import termIcon from '../assets/icons/terms.svg'
import tickIcon from '../assets/icons/tickround.svg'
import CourseContent from "../components/course-component";

const Courses = () => {
    return (
        <div>
            <Header />
            <main>
                <div className='container mx-auto px-4 py-20'>
                    {/* course 1 Content  */}
                    <div>
                        <div className='flex gap-7 items-center flex-col sm:flex-row mb-9'>
                            <img src={courseIcon} className="w-20 h-20 object-contain" alt="Cource"/>
                            <div>
                                <h1 className='text-[#222222] md:text-[40px] sm:text-3xl text-2xl font-medium mb-4'>
                                    Course 1 Content
                                </h1>
                                <h3 className='text-[#2791F4] md:text-[32px] sm:text-2xl text-xl font-medium'>
                                    Manual & Computerised Accounts (with Sage Accounts)
                                </h3>
                            </div>
                        </div>
                        <div>
                            <ul className='m-0 p-0 list-none flex flex-col gap-3'>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>1.</span>Introduction to Bookkeeping
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>2.</span>Double-entry Bookkeeping
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>3.</span>Financial Statements
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>4.</span>Cashflow
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>5.</span>Financial Reporting
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>6.</span>Computerised Accounts using Sage Accounts.
                                </li>
                                <p className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center my-5'>
                                    Note: one-to-one students may choose from Sage Accounts or Quickbooks computerised
                                    accounts packages.
                                </p>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>7.</span>Setup a company, sole trader, charity or partnership.
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>8.</span>Setup customers, suppliers, nominal/ledger accounts, departments,
                                    cost centres, tax codes, etc.
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>9.</span>Entering batch invoices and creating sales invoices and purchase
                                    orders.
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>10.</span>How to deal with sales and purchase returns.
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>11.</span>Receiving payment from customers and making payments to suppliers.
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>12.</span>Understanding the chart of accounts/ledger
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>13.</span>Backup and its importance.
                                </li>
                            </ul>
                        </div>
                        <div className='mt-9 flex justify-end'>
                            <button onClick={() => window.location.href='https://book.stripe.com/aEU4hV018b5K30kcMP'}
                                    type="button"
                                    className="bg-[#2791F4] text-white font-medium text-lg py-3 px-7 rounded-xl mt-12">
                                Book & Pay
                            </button>
                        </div>
                    </div>
                    <hr className='bd-[#DDDDDD] h-[1px] w-full md:my-20 sm:my-14 my-8'/>
                    {/* Course 2 Content  */}
                    <div>
                        <div className='flex gap-7 items-center flex-col sm:flex-row mb-9'>
                            <img src={courseIcon} className="w-20 h-20 object-contain" alt="Cource"/>
                            <div>
                                <h1 className='text-[#222222] md:text-[40px] sm:text-3xl text-2xl font-medium mb-4'>
                                    Course 2 Content
                                </h1>
                                <h3 className='text-[#2791F4] md:text-[32px] sm:text-2xl text-xl font-medium'>
                                    Manual & Computerised Payroll (with Sage Micropay)
                                </h3>
                            </div>
                        </div>
                        <div>
                            <ul className='m-0 p-0 list-none flex flex-col gap-3'>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>1.</span>Introduction to Payroll
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>2.</span>Understanding terminology used by the Irish tax system.
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>3.</span>Computation of payslips
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>4.</span>Computerised Payroll using Thesaurus.
                                </li>
                                <p className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center my-5'>
                                    Note: one-to-one students may choose from Sage Micropay, Collsoft or Thesaurus
                                    computerised payroll packages.
                                </p>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>5.</span>Setting up employees, hourly, salary, holiday pay, sick pay,
                                    maternity/paternity, tax credits, SRCOP, etc.
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>6.</span>Entering payroll information for each employee
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>7.</span>Auto-enrolment for pensions.
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>8.</span>PAYE modernisation and Revenue reporting.
                                </li>
                                <li className='text-[#222222] font-medium md:text-xl text-base flex gap-3 items-center'>
                                    <span>9.</span>Backup and its importance.
                                </li>
                            </ul>
                        </div>
                        <div className='mt-9 flex justify-end'>
                            <button onClick={() => window.location.href='https://book.stripe.com/dR6aGj3dka1GasM4gi '}
                                    type="button"
                                    className="bg-[#2791F4] text-white font-medium text-lg py-3 px-7 rounded-xl mt-12">
                                Book & Pay
                            </button>
                        </div>
                    </div>
                </div>
                {/* Terms & Conditions  */}
                <div className='bg-[#2791F4]'>
                    <div className='container mx-auto px-4 py-20 flex flex-col items-center'>
                        <img src={termIcon} className="w-[180px] h-[180px] object-contain" alt="termicon"/>
                        <h3 className='text-white font-medium md:text-[40px] text-[30px] my-5 text-center'>
                            Terms & Conditions
                        </h3>
                        <p className='m-0 text-white font-medium text-lg text-center'>
                            Following are the payment Terms & Conditions to be followed for payments
                        </p>
                        <ul className='p-0 m-0 flex flex-col gap-6 max-w-[810] mt-9'>
                            <li className='text-white font-medium md:text-xl text-lg flex gap-3 items-center'>
                                <img src={tickIcon} className="w-[32px] h-[32px] object-contain" alt="Assistant"/>
                                A deposit of 50% is payable at the time of booking.
                            </li>
                            <li className='text-white font-medium md:text-xl text-lg flex gap-3 items-center'>
                                <img src={tickIcon} className="w-[32px] h-[32px] object-contain" alt="Assistant"/>
                                The remaining 50% will become payable before the start date of the course.
                            </li>
                            <li className='text-white font-medium md:text-xl text-lg flex gap-3 items-center'>
                                <img src={tickIcon} className="w-[32px] h-[32px] object-contain" alt="Assistant"/>
                                An invoice will be issued at the time of deposit becoming payable.
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Courses */}
                <div className='learning-options py-24'>
                    <div className='max-w-[1040px] mx-auto px-4'>
                        <h1 className='text-white md:text-[40px] sm:text-3xl text-2xl font-medium text-center mb-5'>Career
                            Opportunities</h1>
                        <p className='text-white sm:text-lg text-base font-medium text-center'>
                            Flexible Online Learning Options to Suit Your Schedule and Career Goals
                        </p>
                        <CourseContent/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Courses;
