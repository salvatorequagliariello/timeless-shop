"use client";

import { Sliders } from "lucide-react";
import Container from "./ui/container";
import { useState } from "react";

const slides = [
    "./assets/videos/clock-close-up.webm",
    
];

const banners = [
    <div className="w-32 absolute bottom-32 left-0 font-secondary text-primary font-semibold text-7xl animate-fadeInRight">
        Prestige Collection
        <button className="font-primaryb text-xl text-secondary bg-primary py-2 px-8 hover:bg-hov">
            Discover
        </button>
    </div>,
];

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0; 
        const newIndex = isFirstSlide ? Sliders.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1; 
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }


    return (
            <div className="flex items-center justify-center mx-auto animate-fadeInDown">
                <div className="relative">
                    <video 
                        muted 
                        autoPlay 
                        loop 
                        className="w-full h-[450px] rounded-b-[15%] min-[500px]:h-[500px] min-[500px]:rounded-b-[300px] md:rounded-b-[400px]
                        lg:rounded-b-[400px] lg:w-[1024px] xl:h-[600px] xl:rounded-b-full xl:w-full min-[1470px]:h-[620px] min-[1600px]:h-[700px] min-[1900px]:h-[850px] object-cover">
                            <source src={slides[currentIndex]} type="video/webm" aria-label="Watch ticking video" />
                    </video>
                    {banners[0]}            
                </div>
            </div>
    );
};

export default Hero;