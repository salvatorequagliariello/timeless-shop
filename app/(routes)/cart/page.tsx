"use client";

import useCart from "@/hooks/use-cart";
import { useState, useEffect } from "react";
import CartItem from "@/components/cart-item";

const CartPage = () => {
    const cart = useCart();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);
    if (!isMounted) return null;


    return (
        <div className="pt-24 w-[85%] min-[1920px]:w-full max-w-[1920px] mx-auto flex flex-col flex-wrap gap-y-4 text-primary font-primaryb">
            <div className="flex mt-20">
                <div className="flex flex-col gap-y-16">
                    <h1 className="font-secondary text-8xl font-bold">My basket<span className="ml-2 text-3xl">({cart.items.length})</span></h1>
                    <div className="flex flex-col gap-y-4">
                        {cart.items.length === 0 && 
                        <p>No items added to cart.</p>}
                        {cart.items.map(item => (
                            <CartItem key={item.id} data={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartPage;