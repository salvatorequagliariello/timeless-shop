"use client";

import { Product } from "@/types";
import { useState, useEffect } from "react";
import NoResults from "@/components/no-results";
import FeaturedProductCard from "@/components/featured-product-card";
import { ChevronRight, ChevronLeft } from "lucide-react";

interface FeaturedProductsProps {
    items: Product[];
}

const FeaturedProducts: React.FC<FeaturedProductsProps> = ({
    items
}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const autoSlide = true;
    const autoSlideInterval = 10000;

    const prevSlide = () =>
      setCurrentIndex((current) => (current === 0 ? items.length - 1 : current - 1))
    const nextSlide = () =>
      setCurrentIndex((current) => (current === items.length - 1 ? 0 : current + 1))
  
    useEffect(() => {
      if (!autoSlide) return
      const slideInterval = setInterval(nextSlide, autoSlideInterval);
      return () => clearInterval(slideInterval);
    }, [])

    return (
        <div>

            <div className="hidden md:block">
                <h3 className="text-primary font-secondary text-3xl text-center">Featured Products</h3>
                {items.length === 0 && <NoResults />}
                <div className="flex justify-center xl:w-[70%] m-auto mt-4">
                    {items.map((item) => (
                        <FeaturedProductCard key={item.id} data={item} />
                        ))}
                </div>
            </div>


            <div className="block md:hidden">
                <h3 className="text-primary font-secondary text-2xl sm:text-3xl">Featured Products</h3>
                <div className="relative w-full min-[500px]:w-[70%] mx-auto">
                    <div
                        key={currentIndex}
                        className='animate-fadeIn'
                        >
                        <FeaturedProductCard key={items[currentIndex].id} data={items[currentIndex]}/>
                    </div>
                    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-primary cursor-pointer z-20'>
                        <ChevronLeft onClick={prevSlide} size={30} />
                    </div>
                    <div className='absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-primary cursor-pointer z-20'>
                        <ChevronRight onClick={nextSlide} size={30} />
                    </div>
                </div>
            </div>


        </div>
    );
};

export default FeaturedProducts;