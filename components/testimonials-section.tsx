"use client"
import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from 'next/link';


const ServiceItem = ({ title, description, image }:{title:string, description:string, image: string}) => {
    return (
        // <div className=" group mt-[55px] border-2 border-gray-300">
        //     <img className="w-full z-10 group-hover:-mt-[55px] transition-all ease-in-out opacity-60 group-hover:opacity-100" src={image} alt="" />
        //     <div className="absolute bg-[#C2C0A2]/60 top-1/2 w-[300px] group-hover:-translate-y-[55px] transition-all ease-in-out ml-2">
        //         <h4 className="text-[#616847] font-medium px-3 text-2xl text-center">{title}</h4>
        //         <p className="text-[#616847] px-3 mb-3">{description}</p>
        //     </div>
        //     <div className="z-0 text-transparent -mt-[55px] h-[55px] group-hover:mt-0 group-hover:text-white flex justify-center group-hover:bg-red-400 items-center overflow-hidden transition-all ease-in-out">
        //         <Link href="/">
        //             <button className="">
        //                 Book Now
        //             </button>
        //         </Link>
        //     </div>
        // </div>
        <div className="rounded-lg relative bg-transparent px-7 py-8">
                          <div className="text-[#616847]">
                            <svg
                              width="33"
                              height="20"
                              viewBox="0 0 33 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M1.28375 19.41L0.79375 18.64C1.21375 17.0067 1.75042 15.07 2.40375 12.83C3.05708 10.5433 3.75708 8.28 4.50375 6.04C5.29708 3.75333 6.06708 1.77 6.81375 0.0899959H15.3538C14.9338 2.09666 14.4904 4.26667 14.0238 6.6C13.5571 8.88666 13.1371 11.15 12.7638 13.39C12.4371 15.5833 12.1571 17.59 11.9238 19.41H1.28375ZM31.69 0.0899959L32.18 0.859998C31.76 2.54 31.2233 4.5 30.57 6.74C29.9167 8.98 29.2167 11.2433 28.47 13.53C27.7233 15.77 26.9533 17.73 26.16 19.41H17.69C18.0167 17.9167 18.3433 16.33 18.67 14.65C18.9967 12.9233 19.3 11.22 19.58 9.54C19.9067 7.81333 20.1867 6.15667 20.42 4.57C20.7 2.93666 20.91 1.44333 21.05 0.0899959H31.69Z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                          <blockquote
                            className="mt-8 text-[#454545] font-3xl font-extrabold">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, excepturi? Labore, quisquam ratione nesciunt dolorum tempora temporibus doloremque accusantium vitae, in aliquid deserunt. Repellat qui ex ut adipisci tenetur similique sed reprehenderit. Placeat error dolores modi repellat dicta voluptatem veritatis debitis unde consequuntur, libero cupiditate similique suscipit dolorum eum vero.
                            </blockquote>
                          <div className="mt-11 flex items-center justify-center">
                            <div className="text-white h-28 w-28">
                              {/* <ImageFallback
                                height={50}
                                width={50}
                                className="rounded-full"
                                src={item.avatar}
                                alt={item.name}
                              /> */}
                            </div>
                            <div className="ml-4">
                              <h3
                                className="h5 font-primary font-semibold text-white">hello there</h3>
                              <p
                                className="text-[#454545] dark:text-white">
                                    hello there
                                </p>
                            </div>
                          </div>
                        </div>
    );
};

const TestimonialsSection = () => {
    const settings = {
        // dots: true,
        infinite: true,
        autoplaySpeed: 1200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
    };
    return (
        <div className="relative py-8 bg-[#E9E1CC]/70 "
         style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701755310/itspa/uxnvdwbg0chnzaegbd7l.png)'}}>
        <div className="container mx-auto w-full md:w-1/2 py-5 overflow-hidden relative">
            <div className=" z-20 text-center flex flex-col justify-center items-center">
              <h6 className="w-fit font-bold mx-auto text-[#C2C0A2] text-[6vw] pt-1 px-2"
              style={{fontFamily:"Alex Brush"}}>Let's Hear</h6>
              <h1 className='text-center text-[#616847] -mt-5 lg:-mt-20 mb-8 font-serif text-[4vw]'>Our Customers' Hearts</h1>
            </div>
            <Slider {...settings}>
                <ServiceItem 
                    title="Body Massage" 
                    description="Elitr labore sit dolor erat est lorem diam sea ipsum nnnnnnnnnnnn diam dolor duo sit ipsum" 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/wwvjbee07530bfirra6q.jpg"
                />
                <ServiceItem 
                    title="Stone Tharapy" 
                    description="Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum" 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/q1up5w3s2yov4fibphpt.jpg"
                />
                <ServiceItem 
                    title="Facial Tharapy" 
                    description="Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum" 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/miboqizxu4x8wnfrihf5.jpg"
                />
                <ServiceItem 
                    title="Skin Care" 
                    description="Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum" 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/lumc3pgwnag0mqiw7nnj.jpg"
                />
                <ServiceItem 
                    title="Steam Bath" 
                    description="Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum" 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/yikymyvdpyoy05zbdggf.jpg"
                />
                <ServiceItem 
                    title="Face Masking" 
                    description="Elitr labore sit dolor erat est lorem diam sea ipsum diam dolor duo sit ipsum" 
                    image="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701686384/itspa/k96t0w7yug2lxq0blrlv.jpg"
                />
                
            </Slider>
        </div>
     </div>
            
    );
};

export default TestimonialsSection;
