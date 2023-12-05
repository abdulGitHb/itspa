"use client"

import { Circle } from 'lucide-react';
import React from 'react';
import {motion} from "framer-motion";

const OpenHoursSection = () => {
    return (
        <div className="relative overflow-hidden">
            {/* <div className='absolute w-3 top-0 left-0 md:w-60 bg-cover bg-center bg-no-repeat h-full animate-pulse'
            style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701674371/itspa/yvu9fj7v9euijsjpo3ll.png)`,}}
            />
            <div className='absolute w-10 h-10 top-12 right-0 md:w-52 md:h-52 bg-cover bg-center bg-no-repeat  animate-[bounce_5s_ease-in-out_infinite]'
            style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701674886/itspa/kfph4hoezybywdpdvquk.png)`,}}
            /> */}

            <div className="">
                <div className="flex flex-col lg:flex-row justify-center items-center py-8">
                    <motion.div
                        initial={{
                            x:100
                          }}
                          whileInView={{
                            x:0
                          }}
                          viewport={{once:true}}
                          transition={{
                            duration:1
                          }}
                    className="w-full md:w-1/2 lg:w-1/3 lg:ml-28 z-10 aspect-square" style={{ minHeight: '500px' }}>
                        <div className=" h-full">
                            <img className=" w-full h-full object-cover" src="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701673816/itspa/h8c7qr9mx21bysfnkabt.jpg" alt="Opening Hours" />
                        </div>
                    </motion.div>
                    <motion.div 
                        initial={{
                            opacity:0,
                            x:-100
                          }}
                          whileInView={{
                            opacity:1,
                            x:0
                          }}
                          viewport={{once:true}}
                          transition={{
                            duration:1.5
                          }}
                    className="lg:w-1/2 pt-5 pb-lg-5 bg-[#E9E1CC] w-fit h-fit my-auto lg:-ml-32 z-20">
                        <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">
                            <h6 className="w-fit text-uppercase bg-[#C2C0A2] text-white py-1 px-2">Open Hours</h6>
                            <h1 className="mb-4 font-sans text-[#616847] text-4xl font-bold">Best Relax And Spa Zone</h1>
                            <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                            <ul className="list-none mt-6">
                                <li className="py-1 flex gap-x-2 items-center"><Circle color='#616847' size={20} />Mon – Fri : 9:00 AM - 7:00 PM</li>
                                <li className="py-1 flex gap-x-2 items-center"><Circle color='#616847' size={20}/>Saturday : 9:00 AM - 6:00 PM</li>
                                <li className="py-1 flex gap-x-2 items-center"><Circle color='#616847' size={20}/>Sunday : Closed</li>
                            </ul>
                            <button className="btn btn-primary mt-6 bg-red-300 px-8 py-2">Book Now</button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default OpenHoursSection;
