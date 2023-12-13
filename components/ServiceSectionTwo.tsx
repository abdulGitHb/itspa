"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';
import { ParallaxBanner } from 'react-scroll-parallax';
import { Parallax } from 'react-parallax';

const ServiceItem = ({ title, description, image }:{title:string, description:string, image: string}) => {
    return (
        <div className=" group mt-[55px] border-2 border-white rounded-md">
            <img className="w-full z-10 group-hover:-mt-[55px] rounded-md transition-all ease-in-out opacity-60 group-hover:opacity-100" src={image} alt="" />
            <div className="absolute bg-[#C2C0A2]/60 group-hover:bg-[#C2C0A2] top-1/2 w-[300px] group-hover:-translate-y-[55px] transition-all ease-in-out ml-2">
                <h4 className="text-[#616847] font-bold px-3 text-2xl text-center">{title}</h4>
                <p className="text-black px-3 mb-3">{description}</p>
            </div>
            <div className="z-0 text-transparent -mt-[55px] h-[55px] group-hover:mt-0 group-hover:text-white flex justify-center group-hover:bg-[#616847] items-center overflow-hidden transition-all ease-in-out">
                <Link href="/">
                    <button className="">
                        Book Now
                    </button>
                </Link>
            </div>
        </div>
    );
};

const ServiceSection = () => {
    const settings = {
        // dots: true,
        infinite: true,
        autoplaySpeed: 1500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay:true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
      <>
        <div className="container mx-auto py-5 my-5 overflow-hidden relative">
          {/* <div className='absolute top-2 left-8 w-10 h-10 z-10 lg:w-36 lg:h-36 bg-cover bg-center bg-no-repeat animate-[wiggle_1s_ease-in-out_infinite]'
            style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701674886/itspa/kfph4hoezybywdpdvquk.png)`,}}
          /> */}
            <div className=" z-20 text-center flex flex-col justify-center items-center">
              <h6 className="w-fit font-bold mx-auto text-[#E9E1CC]/60 text-[6vw] pt-1 px-2"
              style={{fontFamily:"Alex Brush"}}>Our Services</h6>
              <h1 className='text-center text-[#616847] -mt-5 lg:-mt-20 font-serif text-[4vw]'>The Art Of Natural Beauty</h1>
            </div>
            <Slider {...settings}>
                <ServiceItem 
                    title="Body Massage" 
                    description="Our expert body massage, a holistic experience to rejuvenate your body and soul." 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/wwvjbee07530bfirra6q.jpg"
                />
                <ServiceItem 
                    title="Stone Tharapy" 
                    description="Experience relaxation through soothing warmth and therapeutic stones, restoring balance and serenity." 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/q1up5w3s2yov4fibphpt.jpg"
                />
                <ServiceItem 
                    title="Facial Tharapy" 
                    description="Reveal your glow with personalized skincare that indulges your senses and enhances your beauty." 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/miboqizxu4x8wnfrihf5.jpg"
                />
                <ServiceItem 
                    title="Skin Care" 
                    description="Discover skincare luxury, with personalized treatments and opulent formulations for radiant beauty." 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/lumc3pgwnag0mqiw7nnj.jpg"
                />
                <ServiceItem 
                    title="Steam Bath" 
                    description="Immerse in rejuvenation with our steam bath- Revitalize your body, clear mind and soul." 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/yikymyvdpyoy05zbdggf.jpg"
                />
                <ServiceItem 
                    title="Face Masking" 
                    description="Our face masking service is a bespoke experience to renew and unveil your radiant complexion." 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/k96t0w7yug2lxq0blrlv.jpg"
                />
                
            </Slider>

<Parallax bgImage='https://res.cloudinary.com/dmquwnaeb/image/upload/v1701759086/itspa/zrnzhenzuze7wqmxhj47.jpg'  strength={500}>
        <div className="lg:w-1/2 py-5 mx-auto">
          <div className="p-5 my-8" style={{ background: 'rgba(33, 30, 28, 0.7)' }}>
            <h1 className="text-white text-center mb-4">Make Appointment</h1>
            <form>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <input
                    type="text"
                    className="form-input bg-transparent p-4 w-full border-2 border-white"
                    placeholder="Your Name"
                  />
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <input
                    type="email"
                    className="form-input bg-transparent p-4 w-full border-2 border-white"
                    placeholder="Your Email"
                  />
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <div className="date" id="date" data-target-input="nearest">
                    <input
                      type="date"
                      className="form-input bg-transparent p-4 datetimepicker-input w-full border-2 border-white text-gray-400"
                      placeholder='2016-10-10'
                      data-target="#date"
                      data-toggle="datetimepicker"
                    />
                  </div>
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <div className="time" id="time" data-target-input="nearest">
                    <input
                      type="time"
                      className="form-input bg-transparent p-4 datetimepicker-input w-full border-2 border-white"
                      placeholder='12:00am'
                      data-target="#time"
                      data-toggle="datetimepicker"
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <select className="form-select bg-transparent text-gray-400 p-2 w-full border-2 border-white" style={{ height: '47px' }}>
                    <option defaultValue={"0"}>Select A Service</option>
                    <option value="1">Service 1</option>
                    <option value="2">Service 2</option>
                    <option value="3">Service 3</option>
                  </select>
                </div>
                <div className="w-full sm:w-1/2 px-2 mb-4">
                  <button className=" bg-[#9A9F78] hover:bg-[#616847] w-full text-white" type="submit" style={{ height: '47px' }}>
                    Make Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Parallax>
    </div>
    </>
    );
};

export default ServiceSection;
