"use client";

import { Dot } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const slides = [
    {
        image: "./assets/videos/clock-close-up.webm",
        bannertext: "All Watches",
        link: "/watches"
    },
    {
        image: "./assets/videos/hand-watch.webm",
        bannertext: "Seawatcher Collection",
        link: "/category/5dc667f0-dff3-4b23-9a71-3d0b27c1c0b0"
    },
    {
        image: "./assets/videos/woman-wristwatch-close-up.webm",
        bannertext: "For Her",
        link: "/category/0eec49da-7a59-4082-8ae7-81efcef3b07b"
    }
];

const Hero: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length -1; 
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }


    useEffect(() => {
        setTimeout(
          () => nextSlide(), 15000);
    
        return () => {};
      }, [currentIndex]);

    return (
            <div className="flex items-center justify-center mx-auto animate-fadeInDown">
                <div className="relative">
                    <div className="relative">
                        {<video
                            key={slides[currentIndex].image}
                            muted 
                            autoPlay 
                            loop 
                            className="w-full h-[450px] rounded-b-[15%] min-[500px]:h-[500px] min-[500px]:rounded-b-[300px] md:rounded-b-[400px]
                            lg:rounded-b-[400px] lg:w-[1024px] xl:h-[600px] xl:rounded-b-full xl:w-full min-[1470px]:h-[620px] min-[1600px]:h-[700px] min-[1900px]:h-[850px] object-cover animate-fadeIn animate-slower">
                                <source src={slides[currentIndex].image} type="video/webm" aria-label="Watch ticking video" />
                        </video>}
                        <div className="w-min absolute m-auto bottom-8 left-0 right-0 flex gap-x-1">
                            {slides.map((slide, slideIndex) => (
                                <Dot key={slideIndex} 
                                    onClick={() => goToSlide(slideIndex)} 
                                    size={10} strokeWidth={20} 
                                    className="stroke-primary hover:stroke-hov cursor-pointer" />
                            ))}
                        </div>
                    </div>
                    <div 
                        key={currentIndex} 
                        className="flex flex-col gap-y-2 my-4 mx-auto items-center place-content-center lg:w-32 lg:absolute lg:bottom-4  lg:left-4 text-primary animate-fadeInLeft">
                        <h1 className="font-semibold min text-4xl lg:text-6xl xl:text-7xl font-secondary mx-auto text-center lg:text-start">
                            {slides[currentIndex].bannertext}
                        </h1>
                        <Link  href={slides[currentIndex].link}>
                            <button className="font-primaryb lg:text-md xl:text-xl text-secondary bg-primary py-2 px-8 hover:bg-hov transition text-center place-self-center">
                                Discover
                            </button>
                        </Link>
                    </div>      
                </div>
            </div>
    );
};

export default Hero;