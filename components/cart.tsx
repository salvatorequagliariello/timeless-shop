"use client";

import { ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react";

const Cart = () => {
    const cartItems = 0;
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

     if (!isMounted) return null;

    return (
        <button className="relative flex items-end gap-x-1">
                <ShoppingBag size={20} className={cn("stroke-primary hover:stroke-hov cursor-pointer")} />
                <span 
                className={cn("-top-2 -right-[7px] text-[12px] text-slate-50 bg-blue-800 font-primary px-1 py-[0.5px]", 
                cartItems >= 1 ? "absolute" : "hidden")}>
                    {cartItems}
                </span>
        </button>
    );
};

export default Cart;