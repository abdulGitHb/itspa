"use client"

import React from 'react';
import {motion} from "framer-motion";
import { Parallax } from 'react-parallax';

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
    <div className='mt-[95vh]'>
      <h6 className="w-fit font-bold mx-auto text-[#E9E1CC]/60 text-[6vw] pt-1 px-2"
      style={{fontFamily:"Alex Brush"}}>We Offer You</h6>
      <h1 className='text-center text-[#616847] -mt-5 lg:-mt-20 mb-8 font-serif text-[4vw]'>An Experience of Ultimate</h1>
    </div>
                        
    <div className="grid grid-cols-3 grid-rows-3 gap-2 md:gap-4 lg:px-12 h-[80vh]">
      <Parallax className='col-span-2 row-span-2 rounded-lg flex items-center bg-cover bg-center bg-no-repeat overflow-hidden' bgImage="https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776181/itspa/imbmzhwlikyat0q9joo7.jpg" strength={500}>
     
        <motion.p
          initial={{
            y:150,
            rotate:180
          }}
          whileInView={{
            y:0,
            rotate:180
          }}
          viewport={{once:true}}
          transition={{
            duration:1.5
          }}
        className='rotate-180 text-[10vh] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black' 
        style={{writingMode:"vertical-lr",}}>LUXURY</motion.p> 
      </Parallax>
      
      <div className="col-span-1 rounded-lg flex items-center justify-center px-2">
        <p className='text-[4vw] font-extrabold bg-clip-text text-transparent bg-cover bg-center bg-no-repeat'
        style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701698957/itspa/nrmkrt7mtkcbsr9fydgg.jpg)'}}>EXCLUSIVITY</p> 
      </div>

      <Parallax bgImage='https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776181/itspa/rqutbafkfpfxxamxq4d2.jpg' strength={400} className="col-span-1 row-span-1 rounded-lg flex items-center justify-center px-2 ">
      <motion.p 
        initial={{
          y:-100,
        }}
        whileInView={{
          y:0,
        }}
        viewport={{once:true}}
        transition={{
          duration:1.5
        }}
      className='text-[3vw] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black'>PEACE</motion.p> 
      </Parallax>

      <Parallax className="col-span-1 row-span-1 rounded-lg flex items-center justify-start px-2 bg-cover bg-center bg-no-repeat overflow-hidden"
      bgImage='https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776180/itspa/gdewg8ee3ohy72qpnhhq.jpg'>
      <motion.p 
        initial={{
          y:-100,
        }}
        whileInView={{
          y:0,
        }}
        viewport={{once:true}}
        transition={{
          duration:1.5
        }}
      className='text-[3vw] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black'>ELEGANCE</motion.p> 
      </Parallax>

      <Parallax className="col-span-1 row-span-1 rounded-lg flex items-center justify-start px-2 bg-cover bg-center bg-no-repeat overflow-hidden" strength={100}
      bgImage='https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776180/itspa/tohekhlczgz4zi31mr5c.jpg'>
      <motion.p 
        initial={{
          y:-100,
        }}
        whileInView={{
          y:0      
        }}
        viewport={{once:true}}
        transition={{
          duration:1.5
        }}
      className='text-[3vw] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black'>WELLNESS</motion.p> 
      </Parallax>

      <div className="col-span-1 row-span-1 rounded-lg flex items-center justify-center px-2 ">
        <p className='text-[5vw] font-extrabold bg-clip-text text-transparent bg-cover bg-center bg-no-repeat'
        style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701759086/itspa/zrnzhenzuze7wqmxhj47.jpg)'}}>PRESTIGE</p> 
      </div>

    </div>

{/* 
_________________________________________________________________________________________
_________________________________________________________________________________________
_________________________________________________________________________________________ 
*/}

    {/* <div className="grid grid-cols-5 grid-rows-4 gap-2 md:gap-4 lg:px-12 h-[80vh]">
      <div className="col-span-2 bg-red-300 row-span-3 rounded-lg flex items-center bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776181/itspa/imbmzhwlikyat0q9joo7.jpg)'}}> 
      <motion.p
          initial={{
            y:150,
            rotate:180
          }}
          whileInView={{
            y:0,
            rotate:180
          }}
          viewport={{once:true}}
          transition={{
            duration:1.5
          }}
        className='rotate-180 text-[10vh] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black' 
        style={{writingMode:"vertical-lr",}}>LUXURY</motion.p> 
      </div>
      
      <div className="col-span-2 row-span-2 rounded-lg flex items-end justify-start px-2 bg-cover bg-center"
      style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776180/itspa/tohekhlczgz4zi31mr5c.jpg)'}}
      >
      <motion.p 
        initial={{
          x:-150,
        }}
        whileInView={{
          x:0,
        }}
        viewport={{once:true}}
        transition={{
          duration:1.5
        }}
      className='text-[3vw] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black'>WELLNESS</motion.p> 
      </div>

      <div className="col-span-1 row-span-1 rounded-lg flex items-center justify-center px-2 bg-cover bg-center bg-no-repeat overflow-hidden">
      <p className='text-[3vw] font-extrabold bg-clip-text text-transparent bg-cover bg-center bg-no-repeat'
        style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701759086/itspa/zrnzhenzuze7wqmxhj47.jpg)'}}>PRESTIGE</p> 
      </div>

      <div className="col-span-1 row-span-1 rounded-lg flex items-end justify-start px-2 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776181/itspa/rqutbafkfpfxxamxq4d2.jpg)'}}
      >
      <motion.p 
        initial={{
          x:-150,
        }}
        whileInView={{
          x:0,
        }}
        viewport={{once:true}}
        transition={{
          duration:1.5
        }}
      className='text-[3vw] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black'>PEACE</motion.p>
      </div>

      <div className="col-span-3 row-span-2 bg-blue-300 rounded-lg flex items-end justify-start px-2 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701776180/itspa/gdewg8ee3ohy72qpnhhq.jpg)'}}
      >
      <motion.p 
        initial={{
          x:-150,
        }}
        whileInView={{
          x:0,
        }}
        viewport={{once:true}}
        transition={{
          duration:1.5
        }}
      className='text-[3vw] font-bold text-white [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-black'>ELEGANCE</motion.p> 
      </div>

      <div className="col-span-2 row-span-1 rounded-lg flex items-center justify-center px-2 ">
      <p className='text-[4vw] font-extrabold bg-clip-text text-transparent bg-cover bg-center bg-no-repeat'
        style={{backgroundImage:'url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701698957/itspa/nrmkrt7mtkcbsr9fydgg.jpg)'}}>EXCLUSIVITY</p> 
      </div>

    </div> */}


    </>
  );
};

export default ServicesSection;
