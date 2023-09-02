"use client";

import Link from "next/link";
import Currency from "@/components/ui/currency";
import { MouseEventHandler } from "react";
import useCart from "@/hooks/use-cart";
import { data } from "autoprefixer";
import { Product } from "@/types";

interface AddToCartButtonProps {
    productPrice: string,
    product: Product
}

const AddToCartButton: React.FC<AddToCartButtonProps> = ({
    productPrice,
    product
}) => {
    const cart = useCart();
    const onAddToCart: MouseEventHandler<HTMLButtonElement> = (event) => {
        event.stopPropagation();
        cart.addItem(product)
    }

    return (
        <button 
        className="bg-primary text-secondary transition py-2 px-2 md:py-4 md:px-4 hover:bg-hov text-sm group lg:text-md cursor-pointer"
        onClick={onAddToCart}
        >
            <Link href="/" className="flex md:gap-x-4 gap-x-2 items-center">
                <p className="cursor-pointer">
                    <Currency value={productPrice} />
                </p>
                <p className="w-full border-l border-secondary pl-2 md:pl-4">
                    Add to cart
                </p>
            </Link>
        </button>
    );
};

export default AddToCartButton;