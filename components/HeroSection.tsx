"use client"

import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import "./style.css";

interface Slide {
  key: string;
  content: React.ReactNode;
}

const Example: React.FC = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);

  const slides = [
    {
      key: 1,
      name:"Hello",
      desc:"this is the description-1",
      content: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585804/itspa/jegz3uppi8wynrlvywgn.jpg"
    },
    {
      key: 2,
      name:"Hello",
      desc:"Your body is as delicate as a flower, give it the right care and it will bloom.",
      content: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585803/itspa/eggo1oork4cmtjvxwwvz.jpg"
    },
    {
      key: 3,
      name:"Hello",
      desc:"this is the description-3",
      content: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585804/itspa/hywfd1b47xnompz1k4cx.jpg"
    },
    {
      key: 4,
      name:"Hello",
      desc:"this is the description-4",
      content: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701585804/itspa/qmxxasi9izegxn22214g.jpg"
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
                    <div className="HScontent">
                    <div className="HSname text-4xl">{slide.name}</div>
                    <div className="HSdes text-3xl">{slide.desc}</div>
                    <button>See more</button>
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
