"use client"

import React, { useState, useRef, useEffect } from "react";
import {useScroll} from "framer-motion"
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import "./style.css";
import Lenis from "@studio-freight/lenis";

interface Slide {
  key: string;
  content: React.ReactNode;
}

const Example: React.FC = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis()

    function raf(time:number) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  })

  const slides = [
    {
      key: 3,
      name:"Individually Crafted Wellness Odyssey",
      desc:"Meticulously crafted for you, blending personalized care with transformative experiences for ultimate rejuvenation.",
      content: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701750198/itspa/fvxkpjubc5hghnxr2rec.jpg"
    },
    {
      key: 1,
      name:"A Symphony of Ultimate Opulence",
      desc:"Step into a world where every moment is a canvas painted with opulence, creating an atmosphere of timeless luxury.",
      content: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701750200/itspa/bhv7w2q8wm8cl9cbehxx.jpg"
    },
    {
      key: 2,
      name:"An Invitation to Serene Luxury",
      desc:"Explore an invitation to serenity, where luxury beckons in every detail, creating an oasis of exclusive indulgence.",
      content: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701750199/itspa/ikknjdcybesy0elwsjhv.jpg"
    },
    {
      key: 4,
      name:"Sculpted Beauty, Suited for You",
      desc:"Uncover your beauty, sculpted with precision to celebrate your distinct elegance and the natural grace.",
      content: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701750198/itspa/zfupjsv9dsorildo7102.jpg"
    }
  ];

const handleNext=()=>{
    let lists = document.querySelectorAll('.HSitem');
    document.getElementById('HSslide')?.appendChild(lists[0]);
}
const handlePrev = () => {
    let lists = document.querySelectorAll('.HSitem');
    document.getElementById('HSslide')?.prepend(lists[lists.length - 1]);
}
  

  return (
    <div className="HScontainer overflow-hidden">
        <div id="HSslide">
            {slides.map((slide, index)=>(
                <div key={index} className="HSitem" style={{backgroundImage: `url(${slide.content})`,}}>
                  <div className="HScontent left-[10px] w-[330px] lg:left-[100px] lg:w-[500px]">
                    <div className="HSname text-4xl lg:text-6xl bg-[#E9E1CC]/80 p-4 text-center"
                    style={{fontFamily:"Alex Brush"}}>{slide.name}</div>
                    <div className="HSdes text-sm lg:text-2xl -mt-7 text-center bg-[#E9E1CC] bg-opacity-60 text-black [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-[#E9E1CC]">{slide.desc}</div>
                    <button className="hover:bg-[#616847] mt-6 bg-[#616847]/40">See more</button>
                    </div>
                </div>
            ))}
        </div>
        <div className="HSbuttons gap-x-6 flex justify-center">
            <button onClick={handlePrev} id="next">prev</button>
            <button onClick={handleNext} id="prev">next</button>
        </div>
    </div>
  );
};

export default Example;
