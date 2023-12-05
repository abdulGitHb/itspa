const OurCenters = () => {
    return ( 
        <>
        <h6 className="w-fit uppercase text-3xl mx-auto bg-[#C2C0A2] text-white py-1 px-2">Our Centers</h6>
        <h1 className="mb-4 font-sans text-center text-[#616847] text-4xl font-medium">Some of our Exquisite Spa Centers</h1>
           
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-4 md:grid-rows-2 lg:px-12 h-[80vh]">
      
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 bg-blue-300">
                <div className="col-span-1 bg-red-300 bg-cover bg-center"
                    style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701773347/itspa/zknhl6w75cwpjydlq599.png)`,}}></div>
                <div className="col-span-1 p-2 md:p-0 md:pl-4 flex flex-col gap-y-2 md:gap-y-6 justify-center bg-[#fffbf1]">
                    <h1 className="text-[5vw] md:text-[5vh] font-bold">THE PALACE <br /> <p className="text-[2vh]">by itSPA</p></h1>
                    <p className="text-[2vw] md:text-[2vh]">Location lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere officia rerum totam eaque id nihil corrupti</p>
                    <button className="bg-[#616847] p-1 md:px-4 md:py-2 text-white hover:bg-[#616847]/70 hover:text-black rounded-lg w-fit text-[2vw] md:text-sm">Book Session</button>
                </div>
            </div>

            <div className="col-span-1 md:col-span-2 grid grid-cols-2 bg-blue-300">
                <div className="col-span-1 bg-red-300 order-last md:order-first bg-cover"
                    style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701773006/itspa/zoaek4wqriddfohnq20c.png)`,}}></div>
                <div className="col-span-1 p-2 md:p-0 md:pl-4 flex flex-col gap-y-2 md:gap-y-6 justify-center bg-[#fffbf1]">
                    <h1 className="text-[5vw] md:text-[5vh] font-bold">THE PALM <br /> <p className="text-[2vh]">by itSPA</p></h1>
                    <p className="text-[2vw] md:text-[2vh]">Location lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere officia rerum totam eaque id nihil corrupti</p>
                    <button className="bg-[#616847] p-1 md:px-4 md:py-2 text-white hover:bg-[#616847]/70 hover:text-black rounded-lg w-fit text-[2vw] md:text-sm">Book Session</button>
                </div>
            </div>

            <div className="col-span-1 md:col-span-2 grid grid-cols-2 bg-red-300">
                <div className="col-span-1 bg-red-300 bg-cover order-first md:order-last"
                    style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701773347/itspa/zknhl6w75cwpjydlq599.png)`,}}></div>
                <div className="col-span-1 p-2 md:p-0 md:pl-4 flex flex-col gap-y-2 md:gap-y-6 justify-center bg-[#fffbf1]">
                    <h1 className="text-[5vw] md:text-[5vh] font-bold">THE OPAL OASIS <br /> <p className="text-[2vh]">by itSPA</p></h1>
                    <p className="text-[2vw] md:text-[2vh]">Location lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere officia rerum totam eaque id nihil corrupti</p>
                    <button className="bg-[#616847] p-1 md:px-4 md:py-2 text-white hover:bg-[#616847]/70 hover:text-black rounded-lg w-fit text-[2vw] md:text-sm">Book Session</button>
                </div>
            </div>
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 bg-red-300">
                <div className="col-span-1 order-2 bg-red-300 bg-cover"
                    style={{backgroundImage: `url(https://res.cloudinary.com/dmquwnaeb/image/upload/v1701773006/itspa/zoaek4wqriddfohnq20c.png)`,}}></div>
                <div className="col-span-1 p-2 md:p-0 md:pl-4 flex flex-col gap-y-2 md:gap-y-6 justify-center bg-[#fffbf1]">
                    <h1 className="text-[5vw] md:text-[5vh] font-bold">THE PRESTIGE <br /> <p className="text-[2vh]">by itSPA</p></h1>
                    <p className="text-[2vw] md:text-[2vh]">Location lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe facere officia rerum totam eaque id nihil corrupti</p>
                    <button className="bg-[#616847] p-1 md:px-4 md:py-2 text-white hover:bg-[#616847]/70 hover:text-black rounded-lg w-fit text-[2vw] md:text-sm">Book Session</button>
                </div>
            </div>

        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-4 lg:px-12 h-[80vh]">
      
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 bg-blue-300">
                <div className="col-span-1 bg-red-300 bg-cover"></div>
                <div className="col-span-1 flex flex-col pl-4 gap-y-6 justify-center bg-[#fffbf1]">
                    
                </div>
            </div>

            <div className="col-span-1 md:col-span-2 grid grid-cols-2 bg-blue-300">
                <div className="col-span-1 bg-red-300 bg-cover"></div>
                <div className="col-span-1 flex flex-col pl-4 gap-y-6 justify-center bg-[#fffbf1]">
                </div>
            </div>

            <div className="col-span-1 md:col-span-2 grid grid-cols-2 bg-red-300">
                <div className="col-span-1 order-2 bg-red-300 bg-cover"></div>
                <div className="col-span-1 flex flex-col pl-4 gap-y-6 justify-center bg-[#fffbf1]">
                </div>
            </div>
            <div className="col-span-1 md:col-span-2 grid grid-cols-2 bg-red-300">
                <div className="col-span-1 order-2 bg-red-300 bg-cover"></div>
                <div className="col-span-1 flex flex-col pl-4 gap-y-6 justify-center bg-[#fffbf1]">
                </div>
            </div>

        </div> */}
    </>
     );
}
 
export default OurCenters;