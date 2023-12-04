import React from 'react';

const OpenHoursSection = () => {
    return (
        <div className="container-fluid py-5">
            <div className="container py-5">
                <div className="flex flex-wrap">
                    <div className="lg:w-1/2" style={{ minHeight: '500px' }}>
                        <div className="relative h-full">
                            <img className="absolute w-full h-full object-cover" src="https://via.placeholder.com/500" alt="Opening Hours" />
                        </div>
                    </div>
                    <div className="lg:w-1/2 pt-5 pb-lg-5">
                        <div className="hours-text bg-light p-4 p-lg-5 my-lg-5">
                            <h6 className="text-white text-uppercase bg-primary py-1 px-2">Open Hours</h6>
                            <h1 className="mb-4">Best Relax And Spa Zone</h1>
                            <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et...</p>
                            <ul className="list-none">
                                <li className="py-1"><i className="far fa-circle text-primary mr-2"></i>Mon – Fri : 9:00 AM - 7:00 PM</li>
                                <li className="py-1"><i className="far fa-circle text-primary mr-2"></i>Saturday : 9:00 AM - 6:00 PM</li>
                                <li className="py-1"><i className="far fa-circle text-primary mr-2"></i>Sunday : Closed</li>
                            </ul>
                            <a href="#" className="btn btn-primary mt-2">Book Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OpenHoursSection;
