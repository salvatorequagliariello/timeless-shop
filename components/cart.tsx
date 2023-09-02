"use client";

import { ShoppingBag } from "lucide-react"
import { cn } from "@/lib/utils"
import { useState, useEffect } from "react";
import useCart from "@/hooks/use-cart";
import Link from "next/link";
interface CartProps {
    className?: string
}

const Cart: React.FC<CartProps> = ({
    className,
}) => {
    const [isMounted, setIsMounted] = useState(false);
    const cart = useCart();

    useEffect(() => {
        setIsMounted(true);
    }, []);

     if (!isMounted) return null;

    return (
        <Link href="/cart" className="relative flex items-end gap-x-1">
                <ShoppingBag size={20} className={cn(className ? className : "stroke-primary hover:stroke-hov cursor-pointer")} />
                <span 
                className={cn("-top-2 -right-[7px] text-[12px] text-slate-50 bg-blue-800 font-primary px-1 py-[0.5px]", 
                cart.items.length >= 1 ? "absolute" : "hidden")}>
                    {cart.items.length}
                </span>
        </Link>
    );
};

export default Cart;