"use client";

import useCart from "@/hooks/use-cart";
import { useState, useEffect } from "react";
import CartItem from "@/components/cart-item";
import CartSummary from "@/components/cart-summary";

const CartPage = () => {
    const cart = useCart();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;


    return (
        <div className="pt-24 w-[85%] min-[1920px]:w-full max-w-[1920px] mx-auto flex flex-col flex-wrap gap-y-4 text-primary font-primaryb">
            <div className="flex flex-col lg:flex-row lg:mt-20 justify-between gap-x-32 gap-y-8">
                <div className="basis-3/5 w-full flex flex-col gap-y-16 break-all">
                    <h1 className="font-secondary text-5xl max-lg:text-center xl:text-left md:text-6xl lg:text-7xl xl:text-8xl font-bold">My basket<span className="ml-2 text-base xl:text-3xl">({cart.items.length})</span></h1>
                    <div className="flex flex-col gap-y-4">
                        {cart.items.length === 0 && 
                        <p>No items added to cart.</p>}
                        {cart.items.map(item => (
                            <CartItem key={item.id} data={item} />
                        ))}
                    </div>
                </div>
                <div className="basis-2/5 w-full">
                    <CartSummary />
                </div>
            </div>
        </div>
    );
};

export default CartPage;