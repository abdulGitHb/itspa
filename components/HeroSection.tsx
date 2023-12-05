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
      key: 1,
      name:"The Essence of Ultimate Luxury",
      desc:"this is the description-1",
      content: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701750200/itspa/bhv7w2q8wm8cl9cbehxx.jpg"
    },
    {
      key: 2,
      name:"Exclusive to Invitation Only",
      desc:"Your body is as delicate as a flower, give it the right care and it will bloom.",
      content: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701750199/itspa/ikknjdcybesy0elwsjhv.jpg"
    },
    {
      key: 3,
      name:"Personalized Touch in Every Service",
      desc:"Our skin is as delicate as a flower, give it the right care and it will bloom.",
      content: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701750198/itspa/fvxkpjubc5hghnxr2rec.jpg"
    },
    {
      key: 4,
      name:"Products That Suit Your Skin",
      desc:"this is the description-4",
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
                  <div className="HScontent left-[10px] w-[250px] lg:left-[100px] lg:w-[500px]">
                    <div className="HSname text-4xl p-4 bg-opacity-40">{slide.name}</div>
                    <div className="HSdes text-3xl text-black [text-shadow:2px_2px_3px_var(--tw-shadow-color)] shadow-[#E9E1CC]">{slide.desc}</div>
                    <button className="hover:bg-[#616847]">See more</button>
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
