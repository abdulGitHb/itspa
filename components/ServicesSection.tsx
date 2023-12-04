import React from 'react';

const ServicesSection = () => {
  return (
    <div className="container mx-auto px-4 py-5 my-5 mt-[95vh]">
      <div className="flex justify-center items-center text-center">
        <div className="lg:w-1/2">
          <h6 className="bg-light text-primary text-uppercase py-1 px-2 inline-block">Our Service</h6>
          <h1 className="text-4xl mt-2">Spa & Beauty Services</h1>
        </div>
      </div>
      <div className='bg-gray-200'>
        <div className='px-20 grid grid-cols-3 p-4 gap-x-14 bg-red-200 w-[60vw] mx-auto rounded-lg'>
            <div className=' h-36 w-36 bg-cover bg-center bg-no-repeat inline-block'
            style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585804/itspa/jegz3uppi8wynrlvywgn.jpg)`,}}>
                <h1>Nourish</h1>
                <p>repair your skin like nothing else</p>
            </div>
            <div className=' h-36 w-36 bg-cover bg-center bg-no-repeat inline-block'
            style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585804/itspa/jegz3uppi8wynrlvywgn.jpg)`,}}>
                <h1>Thrive</h1>
                <p>repair your skin like nothing else</p>
            </div>
            <div className=' h-36 w-36 bg-cover bg-center bg-no-repeat inline-block'
            style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585804/itspa/jegz3uppi8wynrlvywgn.jpg)`,}}>
                <h1>Rejuvenate</h1>
                <p>repair your skin like nothing else</p>
            </div>
        </div>
        <div>

        </div>
      </div>
      
    </div>
  );
};

export default ServicesSection;
