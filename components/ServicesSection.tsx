"use client"

import React from 'react';
import {motion} from "framer-motion";

const ServicesSection = () => {
  return (
    
    // <div className="container mx-auto px-4 py-5 my-5 mt-[95vh]">
    //   <div className="flex justify-center items-center text-center">
    //     <div className="lg:w-1/2">
    //       <h6 className="bg-light text-primary text-uppercase py-1 px-2 inline-block">Our Service</h6>
    //       <h1 className="text-4xl mt-2">Spa & Beauty Services</h1>
    //     </div>
    //   </div>
    //   <div className='bg-gray-200'>
    //     <div className='px-20 grid grid-cols-3 p-4 gap-x-14 bg-red-200 w-[60vw] mx-auto rounded-lg'>
    //         <div className=' h-36 w-36 bg-cover bg-center bg-no-repeat inline-block'
    //         style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585804/itspa/jegz3uppi8wynrlvywgn.jpg)`,}}>
    //             <h1>Nourish</h1>
    //             <p>repair your skin like nothing else</p>
    //         </div>
    //         <div className=' h-36 w-36 bg-cover bg-center bg-no-repeat inline-block'
    //         style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585804/itspa/jegz3uppi8wynrlvywgn.jpg)`,}}>
    //             <h1>Thrive</h1>
    //             <p>repair your skin like nothing else</p>
    //         </div>
    //         <div className=' h-36 w-36 bg-cover bg-center bg-no-repeat inline-block'
    //         style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585804/itspa/jegz3uppi8wynrlvywgn.jpg)`,}}>
    //             <h1>Rejuvenate</h1>
    //             <p>repair your skin like nothing else</p>
    //         </div>
    //     </div>
    //     <div>

    //     </div>
    //   </div>
      
    // </div>
    <>
      <h6 className="w-fit mt-[95vh] mb-8 mx-auto uppercase bg-[#C2C0A2] text-white text-5xl py-1 px-2">We Offer You</h6>
                        
    <div className="grid grid-cols-3 grid-rows-3 gap-4 lg:px-12 h-[80vh]">
      <div className="col-span-2 row-span-2 rounded-lg flex items-center bg-cover bg-center bg-no-repeat"
        style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776181/itspa/imbmzhwlikyat0q9joo7.jpg)'}}> 
        <motion.p
          initial={{
            y:150,
            rotate:0
          }}
          whileInView={{
            y:0,
            rotate:0
          }}
          viewport={{once:true}}
          transition={{
            duration:1.5
          }}
        className='rotate-180 text-[10vh] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black' 
        style={{writingMode:"vertical-lr",}}>LUXURY</motion.p> 
      </div>
      
      <div className="col-span-1 rounded-lg flex items-center justify-center px-2">
        <p className='text-[4vw] font-extrabold bg-clip-text text-transparent bg-cover bg-center bg-no-repeat'
        style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701698957/itspa/nrmkrt7mtkcbsr9fydgg.jpg)'}}>EXCLUSIVITY</p> 
      </div>

      <div className="col-span-1 bg-blue-300 rounded-lg flex items-end justify-start px-2 bg-cover bg-center bg-no-repeat"
      style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776181/itspa/rqutbafkfpfxxamxq4d2.jpg)'}}>
      <motion.p 
        initial={{
          x:150,
          rotate:0
        }}
        whileInView={{
          x:0,
          rotate:0
        }}
        viewport={{once:true}}
        transition={{
          duration:1.5
        }}
      className='text-[3vw] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black'>PEACE</motion.p> 
      </div>

      <div className="col-span-1 row-span-1 bg-red-300 rounded-lg flex items-end justify-start px-2 bg-cover bg-center bg-no-repeat"
      style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776180/itspa/gdewg8ee3ohy72qpnhhq.jpg)'}}>
      <motion.p 
        initial={{
          x:150,
          rotate:0
        }}
        whileInView={{
          x:0,
          rotate:0
        }}
        viewport={{once:true}}
        transition={{
          duration:1.5
        }}
      className='text-[3vw] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black'>ELEGANCE</motion.p> 
      </div>

      <div className="col-span-1 row-span-1 bg-blue-300 rounded-lg flex items-end justify-start px-2 bg-cover bg-center bg-no-repeat"
      style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776180/itspa/tohekhlczgz4zi31mr5c.jpg)'}}>
      <motion.p 
        initial={{
          x:150,
          rotate:0
        }}
        whileInView={{
          x:0,
          rotate:0
        }}
        viewport={{once:true}}
        transition={{
          duration:1.5
        }}
      className='text-[3vw] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black'>WELLNESS</motion.p> 
      </div>

      <div className="col-span-1 row-span-1 rounded-lg flex items-center justify-center px-2 ">
        <p className='text-[5vw] font-extrabold bg-clip-text text-transparent bg-cover bg-center bg-no-repeat'
        style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701759086/itspa/zrnzhenzuze7wqmxhj47.jpg)'}}>PRESTIGE</p> 
      </div>

    </div>



    </>
  );
};

export default ServicesSection;
