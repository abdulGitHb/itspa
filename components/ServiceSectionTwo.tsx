"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';

const ServiceItem = ({ title, description }:{title:string, description:string}) => {
    return (
        <div className=" group mt-[55px] border-2 border-gray-300">
            <img className="w-full z-10 group-hover:-mt-[55px] transition-all ease-in-out" src="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585803/itspa/eggo1oork4cmtjvxwwvz.jpg" alt="" />
            <div className="hidden bg-red-300">
                <h4 className="text-white font-medium px-3 text-center">{title}</h4>
                <p className="text-white px-3 mb-3">{description}</p>
            </div>
            <div className="z-0 text-transparent -mt-[55px] h-[55px] group-hover:mt-0 group-hover:text-white flex justify-center bg-red-400 items-center overflow-hidden transition-all ease-in-out">
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
        <div className="container mx-auto py-5 my-5 mt-[95vh] overflow-hidden">
            <div className="text-center">
                <h6 className="inline-block bg-light text-primary text-uppercase py-1 px-2">Our Service</h6>
                <h1>Spa & Beauty Services</h1>
            </div>
            <Slider {...settings}>
                <ServiceItem 
                    title="Body Massage" 
                    description="Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum" 
                />
                <ServiceItem 
                    title="Body Massage" 
                    description="Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum" 
                />
                <ServiceItem 
                    title="Body Massage" 
                    description="Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum" 
                />
                <ServiceItem 
                    title="Body Massage" 
                    description="Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum" 
                />
                <ServiceItem 
                    title="Body Massage" 
                    description="Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum" 
                />
                
            </Slider>

            <div className="flex justify-center bg-appointment bg-cover bg-center"
            style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585804/itspa/hywfd1b47xnompz1k4cx.jpg)`,}}>
        <div className="lg:w-1/2 py-5">
          <div className="p-5 my-5" style={{ background: 'rgba(33, 30, 28, 0.7)' }}>
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
                  <button className=" bg-[#616847] w-full text-white" type="submit" style={{ height: '47px' }}>
                    Make Appointment
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
        </div>
    );
};

export default ServiceSection;
