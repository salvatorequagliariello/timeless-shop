"use client";

import { Product } from "@/types";

interface FeaturedProductCard {
    data: Product;
}

const FeaturedProductCard: React.FC<FeaturedProductCard> = ({
    data
}) => {
    return (    
        <div className="text-primary font-primaryb">
            featured
        </div>
    );
};

export default FeaturedProductCard;