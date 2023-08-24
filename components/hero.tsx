import Container from "./ui/container";
import { useState } from "react";

const Hero = () => {

    return (
            <div className="flex items-center justify-center mx-auto animate-fadeInDown">
                <div>
                    <video 
                        muted 
                        autoPlay 
                        loop 
                        className="w-full h-[450px] rounded-b-[15%] min-[500px]:h-[500px] min-[500px]:rounded-b-[300px] md:rounded-b-[400px]
                        lg:rounded-b-[400px] lg:w-[1024px] xl:h-[600px] xl:rounded-b-full xl:w-full min-[1470px]:h-[620px] min-[1600px]:h-[700px] min-[1900px]:h-[850px] object-cover">
                            <source src="./assets/videos/clock-close-up.webm" type="video/webm" aria-label="Watch ticking video" />
                    </video>            
                </div>
            </div>
    );
};

export default Hero;