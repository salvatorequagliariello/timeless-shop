"use client"

import { Image as ImageType } from "@/types";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryProps {
    images: ImageType[];
    productName: string;
}

const ProductGallery: React.FC<GalleryProps> = ({
    images,
    productName
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoSlide = true;
    const autoSlideInterval = 10000;

    const prevSlide = () =>
      setCurrentIndex((current: number) => (current === 0 ? images.length - 1 : current - 1))
    const nextSlide = () =>
      setCurrentIndex((current: number) => (current === images.length - 1 ? 0 : current + 1))
  
    useEffect(() => {
      if (!autoSlide) return
      const slideInterval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }, [])

    return (
        <div className="h-[600px] max-w-[1500px] relative mx-auto">
                <h1 className="absolute font-secondary text-9xl left-[50%] translate-x-[-50%] bottom-8">
                    {productName}
                </h1>
                <div
                    key={currentIndex}
                    className='w-auto mx-auto flex place-content-center rotate-[30deg] animate-fadeIn'
                    >
                    <img key={images[currentIndex].id} src={images[currentIndex].url}  className="h-[600px]" />
                </div>
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-primary cursor-pointer z-20 hover:text-hov'>
                    <ChevronLeft onClick={prevSlide} size={30} />
                </div>
                <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-primary cursor-pointer z-20 hover:text-hov'>
                    <ChevronRight onClick={nextSlide} size={30} />
                </div>
        </div>
    );
};

export default ProductGallery;