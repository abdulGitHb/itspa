"use client"

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { Parallax } from "react-parallax";

interface CardProp {
    card:{
        url: string;
        title: string;
        id: number;
    }
}

const OurCenterScroll = () => {
  return (
    <div className="bg-white">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <>
        <h6 className="w-fit font-bold mx-auto text-[#E9E1CC]/60 text-[6vw] pt-1 px-2"
            style={{fontFamily:"Alex Brush"}}>Welcome To</h6>
        <h1 className='text-center text-[#616847] -mt-5 lg:-mt-20 font-serif text-[4vw]'>Our Exquisite Spa Centers</h1>
            
    <section ref={targetRef} className="relative h-[300vh] bg-[#E9E1CC]/30">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
        <div className="z-50 text-[16vw] font-extrabold text-[#C2C0A2]/30">OUR LUXURY CENTERS ARE HERE</div>
    </section>
    </>
  );
};

const Card = ({card}:CardProp) => {
  return (
    <div
      key={card.id}
      className="group z-10 relative h-[250px] sm:h-[450px] w-[98vw] sm:w-[65vw] overflow-hidden"
    >
      {/* <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 grid place-content-center">
        <p className="bg-gradient-to-br from-white/20 to-white/0 p-8 text-6xl font-black uppercase text-white backdrop-blur-lg">
          {card.title}
        </p>
      </div> */}
        <div className="z-10 grid grid-cols-5 h-full bg-[#fffbf1]">
            <Parallax className="col-span-3" bgImageSizes="cover" bgImage={`${card.url}`} strength={500}>
                
            </Parallax>
                <div className="z-10 col-span-2 p-2 md:p-0 md:pl-4 flex flex-col gap-y-2 md:gap-y-6 justify-center bg-[#fffbf1]">
                    <h1 className="text-[5vw] md:text-[5vh] font-bold">THE PALACE <br /> <p className="text-[2vh]">by itSPA</p></h1>
                    <p className="text-[2vw] md:text-[2vh]">Location lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere officia rerum totam eaque id nihil corrupti</p>
                    <button className="bg-[#616847] p-1 md:px-4 md:py-2 text-white hover:bg-[#616847]/70 hover:text-black rounded-lg w-fit text-[2vw] md:text-sm">Book Session</button>
                </div>
        </div>
    </div>
  );
};

export default OurCenterScroll;

const cards = [
  {
    url: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701750198/itspa/zknhl6w75cwpjydlq599.png",
    title: "Title 1",
    id: 1,
  },
  {
    url: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701773006/itspa/zoaek4wqriddfohnq20c.png",
    title: "Title 2",
    id: 2,
  },
  {
    url: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701750199/itspa/zknhl6w75cwpjydlq599.png",
    title: "Title 3",
    id: 3,
  },
  {
    url: "https://res.cloudinary.com/dmquwnaeb/image/upload/v1701773006/itspa/zoaek4wqriddfohnq20c.png",
    title: "Title 4",
    id: 4,
  },
];