"use client"

import React, { useState, useEffect } from 'react';

const CountUp = ({ end }:{end:number}) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        // Total duration in milliseconds
        const duration = "700";
        const endCount = end;

        if (start === endCount) return;

        let totalMilSecDur = parseInt(duration);
        let incrementTime = (totalMilSecDur / endCount) * 10;

        let timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === endCount) clearInterval(timer);
        }, incrementTime);
    }, [end]);

    return <span>{count}</span>;
};

const AboutSection = () => {
    return (
        <div className="container-fluid py-5 mt-[95vh]">
            <div className="container py-5">
                <div className="flex flex-wrap items-center">
                    <div className="w-full md:w-1/2 pb-5 lg:pb-0 lg:pl-24 relative">
                        <img className="img-fluid w-full aspect-square object-cover rounded-md" src="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701675832/itspa/e7whtehozutxoqij5zr3.jpg" alt="About" />
                        {/* <div className='absolute -top-6 -right-12 w-10 h-10 z-10 lg:w-48 lg:h-48 bg-cover bg-center bg-no-repeat animate-[wiggle_1s_ease-in-out_infinite]'
                        style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701674886/itspa/kfph4hoezybywdpdvquk.png)`,}}
                        />
                        <div className='absolute -bottom-6 left-6 w-10 h-10 z-10 lg:w-48 lg:h-48 bg-cover bg-center bg-no-repeat animate-[wiggle_1s_ease-in-out_infinite]'
                        style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701674886/itspa/kfph4hoezybywdpdvquk.png)`,}}
                        />   */}
                    </div>
                    <div className="lg:w-1/3 ml-4">
                        <h6 className="w-fit text-uppercase bg-[#C2C0A2] text-white text-xl py-1 px-2">About Us</h6>
                        <h1 className="mb-4 font-sans text-[#616847] break-words text-5xl font-bold">Your Best Spa, Beauty & Skin Care Center</h1>
                        
                        <p className="pl-4 border-l-4 mt-8 mb-8 border-primary text-[#c1c1c1]">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde, quidem voluptate. Ab, sunt sit accusantium illo ipsam, esse fugit a, rerum voluptate necessitatibus non maiores ipsum! Ipsa earum harum facilis?</p>
                        <div className="flex pt-3 gap-x-6">
                            <div className="w-1/2 py-6 bg-[#C2C0A2] rounded-md">
                                <div className="flex flex-col items-center text-center p-4">
                                    <h3 className="text-primary text-6xl font-bold">
                                        <CountUp end={15} />
                                    </h3>
                                    <h6 className="text-uppercase">Spa Specialist</h6>
                                </div>
                            </div>
                            <div className="w-1/2 py-6 bg-[#C2C0A2] rounded-md">
                                <div className="flex flex-col items-center text-center p-4">
                                    <h3 className="text-primary text-6xl font-bold">
                                        <CountUp end={50} />
                                    </h3>
                                    <h6 className="text-uppercase">Happy Clients</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
