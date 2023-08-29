"use client";

import { Product } from "@/types";

interface FeaturedProductCard {
    data: Product;
}

const FeaturedProductCard: React.FC<FeaturedProductCard> = ({
    data
}) => {
    return (    
        <article className="text-primary font-primaryb flex flex-col m-auto gap-y-2 cursor-pointer">
            <div className="h-72 w-30">
                <img   
                    src={data?.images?.[0]?.url}
                    alt={`${data?.name} wristwatch image.`}
                    className="h-full w-full object-contain"
                    />
            </div>
            <div className="text-center">
                <h5 className="text-xl font-secondary">
                    {data?.name}
                </h5>
                <div>
                    {data?.category?.name} Collection
                </div>
                <div className="flex justify-center gap-x-6 m-auto">
                    <p className="opacity-70">
                    {data?.movement?.name}
                    </p>
                    <p className="font-primary opacity-80">
                        $ {data?.price}.00
                    </p>
                </div>
            </div>
                <button className="mt-4 w-max m-auto bg-primary text-secondary py-2 px-4 hover:bg-hov">
                    SHOP NOW
                </button>
        </article>
    );
};

export default FeaturedProductCard;