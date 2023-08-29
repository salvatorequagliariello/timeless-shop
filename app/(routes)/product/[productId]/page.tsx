"use client";

import ProductsList from "@/components/products-list";

interface ProductPageProps {
    params: {
        productId: string;
    },
};

const ProductPage: React.FC<ProductPageProps> = ({
    params
}) => {
    const product = await getPro


    return (
        <div className="pt-24 w-[85%] min-[1950px]:w-full mx-auto flex flex-col flex-wrap text-primary font-primaryb">
            csw
            <ProductsList />
        </div>
    );
};

export default ProductPage;