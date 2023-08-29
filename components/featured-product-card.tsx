"use client";

import { cn } from "@/lib/utils";
import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import { useRouter } from "next/navigation";

interface FeaturedProductCardProps {
    data: Product;
    className?: string;
}

const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({
    data,
    className,
}) => {
    const router = useRouter();

    const handleClick = () => {
        router.push(`/product/${data?.id}`);
    }

    return (    
        <article className={cn(className ? className : "text-primary font-primaryb items-center flex flex-col m-auto gap-y-2 cursor-pointer")} onClick={handleClick}>
            <div className="md:h-72 w-30">
                <img   
                    src={data?.images?.[0]?.url}
                    alt={`${data?.name} wristwatch image.`}
                    className= "h-56 md:h-full md:w-full object-contain"
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
                        <Currency value={data?.price} />
                    </p>
                </div>
            </div>
                <button className="mt-4 w-max m-auto bg-primary text-secondary transition py-2 px-4 hover:bg-hov text-sm lg:text-md" onClick={handleClick}>
                    SHOP NOW
                </button>
        </article>
    );
};

export default FeaturedProductCard;