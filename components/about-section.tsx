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
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="flex flex-wrap items-center">
                    <div className="lg:w-1/2 pb-5 lg:pb-0">
                        <img className="img-fluid w-full" src="https://via.placeholder.com/500" alt="About" />
                    </div>
                    <div className="lg:w-1/2">
                        <h6 className="text-primary text-uppercase bg-light py-1 px-2">About Us</h6>
                        <h1 className="mb-4">Your Best Spa, Beauty & Skin Care Center</h1>
                        <p className="pl-4 border-l-4 border-primary">Dolores lorem lorem ipsum sit et ipsum...</p>
                        <div className="flex pt-3">
                            <div className="w-1/2">
                                <div className="bg-light text-center p-4">
                                    <h3 className="text-primary">
                                        <CountUp end={15} />
                                    </h3>
                                    <h6 className="text-uppercase">Spa Specialist</h6>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <div className="bg-light text-center p-4">
                                    <h3 className="text-primary">
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
