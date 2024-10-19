import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import '../styles/testimonials.scss';
import starIcon from '../assets/icons/Star.svg';
import quoteIcon from '../assets/icons/quote-down.svg';

const testimonials = [
    {
        name: "Teresa C",
        rating: 5,
        content:
            "Kathy is an enthusiastic teacher who loves assisting others. To simplify bookkeeping questions, she breaks them down into understandable chunks. I would highly recommend the one-to-one tuition because you as a learner can tailor the course to your needs.",
        imgQuote: quoteIcon,
        imgStar: starIcon
    },
    {
        name: "Daniel Mc",
        rating: 5,
        content:
            "The lecturer, who was exceptional in her profession, delivered the course well. It is evident that she possess an abundance of knowledge, which was proficiently communicated to the students in a manner that was both engaging and informative",
        imgQuote: quoteIcon,
        imgStar: starIcon
    },
    {
        name: "Tracy R",
        rating: 5,
        content:
            "I thoroughly enjoyed and appreciated this course. The content presented with many examples referring to different industries.  I found the course insightful, and profound, affording a genuine perspective on the art of the possible, irrespective of the sector. ",
        imgQuote: quoteIcon,
        imgStar: starIcon
    },
];

const TestimonialSlider = () => {
    return (
        <div className="testimonial-slider py-14 container mx-auto px-4">
            <h1 className='text-[#222222] md:text-4xl sm:text-3xl text-2xl font-medium text-center mb-5 leading-relaxed mb-11'>Testimonials</h1>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{ clickable: true }}
                modules={[Pagination]}
                loop={true}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 }
                }}
            >
                {testimonials.map((testimonial, index) => (
                    <SwiperSlide key={index}>
                        <div className="testimonial-card">
                            <div className="flex gap-2 items-center justify-between">
                                <span>
                                    <h3 className="text-[#222222] font-medium text-2xl mb-5">{testimonial.name}</h3>
                                    <div className="flex items-center gap-3">
                                        <img src={testimonial.imgStar} className="w-6 h-6 object-contain" alt="star" />
                                        <span className="text-[#222222] font-medium text-2xl">5.0</span>
                                    </div>
                                </span>
                                <img src={testimonial.imgQuote} className="w-[120px] h-[120px] object-contain" alt="quote" />
                            </div>
                            <p className="text-[#666] font-medium text-lg m-0 text-left">{testimonial.content}</p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default TestimonialSlider;
