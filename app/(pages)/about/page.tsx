"use client"

import { ParallaxProvider } from "react-scroll-parallax";
import AboutParaCompo from "./component";

const AboutUs = () => {

    

    return ( 
            <ParallaxProvider>
                <AboutParaCompo/>
            </ParallaxProvider>
     );
}
 
export default AboutUs;