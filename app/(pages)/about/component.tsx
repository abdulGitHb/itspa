"use client"

import { useParallax } from "react-scroll-parallax";

const AboutParaCompo = () => {

    const parallax = useParallax<HTMLDivElement>({
        translateX: [-300, 0, 'easeOutQuint'],
        scale: [0.3, 1.25],
        // translateY: [-100, 100, 'easeInQuint'],
      });
    return ( 
        <div className="h-[110vh] bg-blue-300">
            <div className="h-[350px] w-[350px] grid grid-cols-2 bg-red-600 m-auto mt-[45%]">
                {data.map((item, id)=>(
                    <div key={id} ref={parallax.ref} className="bg-white col-span-1">{item}</div>
                ))}
            </div>
        </div>
     );
}
 const data=[
    "hey", "hello", "hi", "howdy"
 ]
export default AboutParaCompo;